using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Stimulsoft.Report.Mvc;
using System.Data;
using Stimulsoft.Report;
using System.IO;
using System.Collections;
using System.Text;
using System.Reflection;
using Microsoft.AspNetCore.Hosting;
using Stimulsoft.Base.Json.Linq;
using Stimulsoft.Form.Web;
using Stimulsoft.Form.Items;

namespace ReportEFormStimulSoft.Controllers
{
    public class ViewController : Controller
    {
        private readonly IWebHostEnvironment _env;
        public ViewController(IWebHostEnvironment env)
        {
            _env = env;
        }

        // GET: View
        public IActionResult Reports()
        {
            return View();
        }

        public IActionResult GetReport(string id = "SimpleList")
        {
            var report = new StiReport();
            report.Load(StiNetCoreHelper.MapPath(this, "/Reports/" + id + ".mrt"));
            return StiNetCoreViewer.GetReportResult(this, report);
        }

        public IActionResult ViewerEvent()
        {
            return StiNetCoreViewer.ViewerEventResult(this);
        }

        public IActionResult Design(string id)
        {
            return RedirectToAction("Reports", "Design", new { id });
        }

        public IActionResult Forms()
        {
            var formsDir = Path.Combine(_env.ContentRootPath, "Forms");
            var forms = Directory.GetFiles(formsDir, "*.mrt")
                .Select(f => Path.GetFileName(f))
                .ToList();
            ViewBag.Forms = forms;
            return View();
        }

        [HttpPost]
        public IActionResult Action()
        {
            try
            {
                var data = JObject.Parse(this.HttpContext.Request.Form["data"]);
                var action = data["action"].ToString();
                switch (action)
                {
                    case "Initialize":
                        var initData = StiWebForm.Initialize(data, Initialize(data));
                        return Json(initData.Content);

                    case "GetFonts":
                        return Json("{}");

                    case "FormSave":
                        var form = new StiForm();
                        form.Load(Convert.FromBase64String(data["form"].ToString()));
                        var formName = data["formName"].ToString();
                        var filePath = GetFilePath("Forms", formName);
                        form.Save(filePath);
                        return Json("{result: \"ok\"}");

                    default:
                        var result = StiWebForm.ProcessRequest(data);
                        return result.ContentType switch
                        {
                            "application/pdf" => new FileContentResult(result.Content as byte[], result.ContentType),
                            _ => Json(result.Content),
                        };
                }
            }
            catch (Exception e)
            {
                return new ContentResult()
                {
                    Content = e.Message,
                    ContentType = "text/plain"
                };
            }
        }

        private Hashtable Initialize(JObject data)
        {
            var options = new Hashtable();
            var properties = data["properties"] as JObject;

            if (properties != null)
            {
                if (properties["localization"] != null)
                {
                    var localizationName = properties["localization"];
                    options["localization"] = GetFileString("Localization", $"{localizationName}.xml");
                }

                if (properties["formName"] != null)
                {
                    var formName = properties["formName"].ToString();
                    var formContent = GetFileString("Forms", formName);
                    options["form"] = Convert.ToBase64String(Encoding.UTF8.GetBytes(formContent));
                }
            }

            options["fontFamilies"] = StiWebFormHelper.GetSystemFontFamilies();

            return options;
        }

        private string GetFilePath(string folder, string fileName)
        {
            var assemblyDirectory = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
            return Path.Combine(assemblyDirectory, folder, fileName);
        }

        private string GetFileString(string folder, string fileName)
        {
            var filePath = GetFilePath(folder, fileName);
            using (var reader = new StreamReader(filePath))
            {
                return reader.ReadToEnd();
            }
        }

        [Route("View/FormViewer/{formName}")]
        public IActionResult FormViewer(string formName)
        {
            return View("FormViewer", model: formName);
        }

        [Route("View/FormDesigner/{formName}")]
        public IActionResult FormDesigner(string formName)
        {
            return View("FormDesigner", model: formName);
        }
    }
}