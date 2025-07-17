var reportButtonsId = [];

function createReportsButtons() {
    var reportsContainer = document.getElementById("stiReportsContainer");

    var allItems = [
        {
            category: "Get Started Reports",
            items: [
                { name: "BillingStatement", label: "Billing Statement", type: "report" },
                { name: "Order", label: "Order", type: "report" },
                { name: "InsuranceWithSelectingCountry", label: "Insurance By Country", type: "report" },
                { name: "ServiceInvoice", label: "Service Invoice", type: "report" },
                { name: "Quotation", label: "Quotation", type: "report" },
                { name: "BusinessInvoice", label: "Business Invoice", type: "report" },
                { name: "SwitzerlandInvoice", label: "Switzerland Invoice", type: "report" }
            ]
        },
        {
            category: "Basic Reports",
            items: [
                { name: "SimpleList", label: "Simple List", type: "report" },
                { name: "TwoSimpleLists", label: "Two Simple Lists", type: "report" },
                { name: "HighlightCondition", label: "Highlight Condition", type: "report" },
                { name: "Shapes", label: "Shapes", type: "report" },
                { name: "Images", label: "Images", type: "report" },
                { name: "Watermark", label: "Watermark", type: "report" },
                { name: "BarCodes", label: "Bar-Codes", type: "report" },
                { name: "HtmlTags", label: "Html-Tags", type: "report" },
                { name: "Indicators", label: "Indicators", type: "report" }
            ]
        },
        {
            category: "Reports with Columns",
            items: [
                { name: "MultiColumnList", label: "Multi-Column List", type: "report" },
                { name: "MultiColumnBandsAcrossThenDown", label: "Multi-Column Bands - Across then Down", type: "report" },
                { name: "MultiColumnBandsDownThenAcross", label: "Multi-Column Bands - Down then Across", type: "report" },
                { name: "VehicleProductionLabels", label: "Vehicle Production Labels", type: "report" }
            ]
        },
        {
            category: "Master-Detail Reports",
            items: [
                { name: "MasterDetail", label: "Master-Detail", type: "report" },
                { name: "MasterDetailSubdetail", label: "Master-Detail-Subdetail", type: "report" },
                { name: "MasterDetailWithColumns", label: "Master-Detail with Columns", type: "report" },
                { name: "TwoMastersOnOneDetail", label: "Two Masters on One Detail", type: "report" },
                { name: "MasterDetailOnDataBand", label: "Master-Detail on DataBand", type: "report" }
            ]
        },
        {
            category: "Reports with Groups",
            items: [
                { name: "SimpleGroup", label: "Simple Group", type: "report" },
                { name: "NestedGroups", label: "Nested Groups", type: "report" },
                { name: "MasterDetailWithGroups", label: "Master-Detail with Groups", type: "report" },
                { name: "MultiColumnGroup", label: "Multi-Column Group", type: "report" },
                { name: "AllGroupFootersAtEnd", label: "All Group Footers at End", type: "report" }
            ]
        },
        {
            category: "Hierarchical Reports",
            items: [
                { name: "Tree", label: "Tree", type: "report" },
                { name: "TreeWithTotals", label: "Tree with Totals", type: "report" },
                { name: "TreeWithTotalsAllLevels", label: "Tree with Totals - All Levels", type: "report" },
                { name: "TreeWithLockedComponents", label: "Tree with Locked Components", type: "report" }
            ]
        },
        {
            category: "Parameters",
            items: [
                { name: "ParametersDetailedCategories", label: "Detailed Categories", type: "report" },
                { name: "ParametersSelectingCountry", label: "Selecting Country", type: "report" },
                { name: "ParametersInvoice", label: "Invoice", type: "report" },
                { name: "ParametersDependentParameter", label: "Dependent Parameter", type: "report" }
            ]
        },
        {
            category: "Interactive Reports",
            items: [
                { name: "ListOfProducts", label: "List of Products", type: "report" },
                { name: "CrossTabWithDetailing", label: "Cross-Tab with Detailing", type: "report" },
                { name: "Sorting", label: "Sorting", type: "report" },
                { name: "GroupWithCollapsing", label: "Group with Collapsing", type: "report" },
                { name: "EditableReport", label: "Editable", type: "report" },
                { name: "BookmarksAndHyperlinks", label: "Bookmarks and Hyperlinks", type: "report" }
            ]
        },
        {
            category: "Table",
            items: [
                { name: "TableSimpleTable", label: "Simple Table", type: "report" },
                { name: "TableSimpleGroup", label: "Simple Group", type: "report" },
                { name: "TableFixedWidthOfColumns", label: "Fixed Width of Columns", type: "report" }
            ]
        },
        {
            category: "Real-life Charts",
            items: [
                { name: "GlobalGrowth", label: "Global Growth", type: "report" },
                { name: "MigrationByDecadeInUSA", label: "Migration By Decade In USA", type: "report" },
                { name: "NaturalGasProduction", label: "Natural Gas Production", type: "report" },
                { name: "TopAutoSalesInUSA16", label: "Top Auto Sales In USA 16", type: "report" }
            ]
        },
        {
            category: "Charts",
            items: [
                { name: "3DPie", label: "3D Pie", type: "report" },
                { name: "Area", label: "Area", type: "report" },
                { name: "Bubble", label: "Bubble", type: "report" },
                { name: "ClusteredBar", label: "Clustered Bar", type: "report" },
                { name: "ClusteredColumn", label: "Clustered Column", type: "report" },
                { name: "Doughnut", label: "Doughnut", type: "report" },
                { name: "Financial", label: "Financial", type: "report" },
                { name: "Funnel", label: "Funnel", type: "report" },
                { name: "Gantt", label: "Gantt", type: "report" },
                { name: "Histogram", label: "Histogram", type: "report" },
                { name: "Line", label: "Line", type: "report" },
                { name: "Pareto", label: "Pareto", type: "report" },
                { name: "Pictorial", label: "Pictorial", type: "report" },
                { name: "Pie", label: "Pie", type: "report" },
                { name: "Radar", label: "Radar", type: "report" },
                { name: "Range", label: "Range", type: "report" },
                { name: "Scatter", label: "Scatter", type: "report" },
                { name: "Stepped", label: "Stepped", type: "report" },
                { name: "Sunburst", label: "Sunburst", type: "report" },
                { name: "Treemap", label: "Treemap", type: "report" },
                { name: "Waterfall", label: "Waterfall", type: "report" }
            ]
        },
        {
            category: "Cross-Tabs",
            items: [
                { name: "StandardCrossTab", label: "Standard Cross-Tab", type: "report" },
                { name: "CrossTabWithoutColumns", label: "Cross-Tab without Columns", type: "report" },
                { name: "CrossTabWithoutRows", label: "Cross-Tab without Rows", type: "report" },
                { name: "CrossTabWithHighlightCondition1", label: "Cross-Tab with Highlight Condition", type: "report" },
                { name: "CrossTabAndCrossBands", label: "Cross-Tab and Cross Bands", type: "report" },
                { name: "CrossTabOnPage", label: "Cross-Tab on Page", type: "report" }
            ]
        },
        {
            category: "Empty Rows",
            items: [
                { name: "EmptyRowsMasterDetail", label: "Master-Detail", type: "report" },
                { name: "EmptyRowsInvoice", label: "Invoice", type: "report" }
            ]
        },
        {
            category: "Panels",
            items: [
                { name: "PanelsSideBySideLists", label: "Side-by-Side Lists", type: "report" },
                { name: "PanelsSideBySideGroups", label: "Side-by-Side Groups", type: "report" }
            ]
        },
        {
            category: "Sub-Reports",
            items: [
                { name: "SubReportsSideBySideListsOnDataBand", label: "Side-by-Side Lists on DataBand", type: "report" },
                { name: "SubReportsMasterDetail", label: "Master-Detail", type: "report" }
            ]
        },
        {
            category: "Table Of Contents",
            items: [
                { name: "MasterDetailReportWithTOC", label: "Master-Detail Report With TOC", type: "report" },
                { name: "MultiColumnListWithTOC", label: "Multi-Column List With TOC", type: "report" },
                { name: "PanelsWithTOC", label: "Panels With TOC", type: "report" },
                { name: "TableWithTOC", label: "Table With TOC", type: "report" }
            ]
        },
        {
            category: "Real-life Reports",
            items: [
                { name: "AlibabaRevenueStats", label: "Alibaba Revenue Stats", type: "report" },
                { name: "BRICGDPStats", label: "BRIC GDP Stats", type: "report" },
                { name: "ChinaConstructionBank", label: "China Construction Bank", type: "report" },
                { name: "ManufactureInChina", label: "Manufacture in China", type: "report" },
                { name: "TopCountriesByGDPIn2019", label: "Top Countries by GDP in 2019", type: "report" },
                { name: "Payroll", label: "Payroll", type: "report" },
                { name: "VehicleSalesWorldwide", label: "Vehicle Sales Worldwide", type: "report" }
            ]
        },
        {
            category: "Forms",
            items: [
                { name: "Order", label: "Order Form", type: "form" }
            ]
        }
    ];

    for (var i = 0; i < allItems.length; i++) {
        reportsContainer.appendChild(stiCategoryHeader(allItems[i].category));

        for (var j = 0; j < allItems[i].items.length; j++) {
            var item = allItems[i].items[j];
            var icon = item.type === "form" ? "/../images/Form_x2.png" : "/../images/Report_x2.png";
            var button = stiReportButton(item.label, icon, item.type === "form");
            reportsContainer.appendChild(button);
            button.reportName = item.name;
            button.id = (item.type === "form" ? "form_" : "") + item.name;
            button.isForm = item.type === "form";
            reportButtonsId.push(button.id);
        }
    }
}

function stiReportButton(text, imageName, isForm) {
    var button = document.createElement("div");
    button.className = "stiReportButton";
    button.style.display = "block";
    button.style.cursor = "pointer";

    var table = document.createElement("table");
    table.cellPadding = 0;
    table.cellSpacing = 0;
    button.appendChild(table);

    var tr = document.createElement("tr");
    table.appendChild(tr);

    if (imageName) {
        var img = document.createElement("img");
        img.style.width = img.style.height = "18px";
        img.style.margin = "5px 5px 5px 8px";
        img.src = imageName;

        var imageCell = document.createElement("td");
        tr.appendChild(imageCell);
        imageCell.appendChild(img);
    }

    if (text) {
        var textCell = document.createElement("td");
        textCell.style.whiteSpace = "nowrap";
        textCell.innerHTML = text;
        tr.appendChild(textCell);
    }

    button.onmouseover = function () {
        this.className = "stiReportButtonOver";
    }

    button.onmouseout = function () {
        this.className = button.isSelected ? "stiReportButtonSelected" : "stiReportButton";
    };

    button.onclick = function () {
        if (this.isForm) {
            loadFormToViewer(this.reportName);
        } else {
            loadReportToViewer(this.reportName);
        }
    }

    if (isForm) {
        var editCell = document.createElement("td");
        var editBtn = document.createElement("button");
        editBtn.innerHTML = "Editar";
        editBtn.className = "btn btn-sm btn-primary";
        editBtn.style.marginLeft = "8px";
        editBtn.onclick = function (e) {
            e.stopPropagation();
            loadFormToDesigner(text);
        };
        editCell.appendChild(editBtn);
        tr.appendChild(editCell);
    }

    return button;
}

function mainFrameLoadComplete() {
    hideProgress();
}

function setSelectedReportButton(reportName) {
    for (i = 0; i < reportButtonsId.length; i++) {
        var reportButton = document.getElementById(reportButtonsId[i]);
        if (reportButton) {
            reportButton.isSelected = reportButtonsId[i] == reportName;
            reportButton.className = reportButton.isSelected ? "stiReportButtonSelected" : "stiReportButton";
        }
    }
}

function loadReportToViewer(reportName) {
    setSelectedReportButton(reportName);

    var mainFrame = document.getElementById("stiMainFrame");
    mainFrame.src = "/View/Reports/" + reportName;
    showProgress();
}

function loadFormToViewer(formName) {
    setSelectedReportButton("form_" + formName);

    var mainFrame = document.getElementById("stiMainFrame");
    mainFrame.src = "/View/FormViewer/" + formName;
    showProgress();
}

function loadFormToDesigner(formName) {
    setSelectedReportButton("form_" + formName);

    var mainFrame = document.getElementById("stiMainFrame");
    mainFrame.src = "/View/FormDesigner/" + formName;
    showProgress();
}

function stiCategoryHeader(text) {
    var header = document.createElement("div");
    header.className = "stiCategoryHeader";
    header.innerHTML = text;

    return header;
}

function stiProgress() {
    var progressContainer = document.createElement("div");
    progressContainer.className = "stiProgressContainer";

    var progress = document.createElement("div");
    progressContainer.appendChild(progress);
    progress.className = "mobile_designer_loader";

    return progressContainer;
}

function showProgress() {
    hideProgress();
    var rightPanel = document.getElementById("RightPanel");
    var progress = stiProgress();
    rightPanel.appendChild(progress);
    rightPanel.progress = progress;
}

function hideProgress() {
    var rightPanel = document.getElementById("RightPanel");
    if (rightPanel.progress) {
        rightPanel.removeChild(rightPanel.progress);
        rightPanel.progress = null;
    }
}