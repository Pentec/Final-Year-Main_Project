/*
 FusionCharts JavaScript Library
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>
*/

function CollectDataFromClient(data)
{
	globalData = data;
	console.log(globalData);

 FusionCharts.ready(function() {
	

    // Global / General Config
    var app,
        dom,
        chartDataSource,
        dashboards,
        viewHelpers,
        startYear = '2014',
        currentYear = '2014',
        chartsInModal = {},
        eventStates,
        dataHelpers,
        eventListeners,
        eventHandlers,
        activeModalChart,
        chartConfig,
        employeeDetails,
        ieVersion = getIEVersion(),
        ie6 = isIE6(),
        DOCUMENT = document;


    /**
     * Properties of all charts
     */
	 
    chartConfig = {

        // Properties for yearly sales chart
        yearlySalesSummary: {
            type: 'mscolumn3dlinedy',
            id: 'yearlySalesSummary',
            width: '473',
            height: '340',
            dataFormat: 'json',
            renderAt: 'yearly-sales-chart',
            dataSource: {
                chart: {
                    xAxisName: 'Name of Complications',
                    theme: 'management-3d',
                    numberPrefix: '',
                    pYAxisName: 'Number of Surgical Complications',
                    sYAxisName: ''
                },
                categories: [{
                    category: []
                }],
                dataset: [{
                    seriesName: 'Complications',
                    renderAs: 'column3d',
                    showValues: '0',
                    data: []
                }, {
                    seriesName: 'Complications',
                    parentYAxis: 'S',
                    renderAs: 'line',
                    showValues: '0',
                    data: []
                }]
            }
        },

        // Properties for top sales performers chart
        topSalesPerformersSummary: {
            type: 'mscolumn3dlinedy',
            id: 'topSalesPerformersSummary',
            width: '473',
            height: '340',
            dataFormat: 'json',
            renderAt: 'top-sales-performers-chart',
            dataSource: {
                chart: {
                    numberPrefix: '',
                    xAxisName: 'Firms',
                    pYAxisName: 'Number of Patients',
                    sYAxisName: '',
                    theme: 'management-3d'
                },
                categories: [{
                    category: []
                }],
                dataset: [{
                    seriesName: 'G1',
                    renderAs: 'line',
                    showValues: '0',
                    data: []
                }, {
                    seriesName: 'G2',
                    renderAs: 'line',
                    showValues: '0',
                    data: []
                }]
            }

        },

        // Properties for top categories chart
        topSalesCategoriesSummary: {
            type: 'bar3d',
            id: 'topSalesCategoriesSummary',
            width: '473',
            height: '340',
            dataFormat: 'json',
            renderAt: 'top-sales-categories-chart',
            dataSource: {
                chart: {
                    yAxisName: 'Number',
					xAxisName: 'Injuries',
                    numberPrefix: '',
                    theme: 'management-3d',
                    showValues: 0
                },
                data: []
            }

        },

        // Properties for top countries by revenue chart
        topRevenuesCountriesSummary: {
            type: 'mscolumn3dlinedy',
            id: 'topRevenuesCountriesSummary',
            width: '473',
            height: '340',
            dataFormat: 'json',
            renderAt: 'top-revenues-countries-chart',
            dataSource: {
                chart: {
                    numberPrefix: '',
                    xAxisName: 'Firms',
                    pYAxisName: 'Number of Patients',
                    sYAxisName: '',
                    theme: 'management-3d'
                },
                categories: [{
                    category: []
                }],
                dataset: [{
                    seriesName: 'G3',
                    renderAs: 'line',
                    showValues: '0',
                    data: []
                }, {
                    seriesName: 'Oncology',
                    renderAs: 'line',
                    showValues: '0',
                    parentYAxis: 'S',
                    data: []
                }]
            }
        },

        // Properties for top categories by sales chart
        topCategoriesSalesTab: {
            type: 'bar3d',
            id: 'topCategoriesSalesTab',
            width: '473',
            height: '340',
            dataFormat: 'json',
            renderAt: 'top-categories-sales-tab-chart',
            dataSource: {
                chart: {
                    numberPrefix: '',
                    yAxisName: 'Number of Patients Diagnosed Per Cancer',
                    theme: 'management-3d'
                },
                data: []
            }

        },

        // Properties for top performers by sales chart
        topPerformersSalesTab: {
            type: 'column3d',
            id: 'topPerformersSalesTab',
            width: '473',
            height: '340',
            dataFormat: 'json',
            renderAt: 'top-performers-sales-tab-chart',
            dataSource: {
                chart: {
                    numberPrefix: '',
                    xAxisName: 'Diagnosis',
                    yAxisName: 'Number of Patients Diagnosed',
                    theme: 'management-3d'
                },
                data: []
            }
        },

        // Properties for top monthly sales chart
        topMonthlySalesTab: {
            type: 'mscolumn3dlinedy',
            id: 'topMonthlySalesTab',
            width: '968',
            height: '340',
            dataFormat: 'json',
            renderAt: 'top-monthly-sales-tab-chart',
            dataSource: {
                chart: {
                    numberPrefix: '',
                    xAxisName: 'Month',
                    pYAxisName: 'Number of patients',
                    sYAxisName: '',
                    theme: 'management-3d'
                },
                categories: [{
                    category: []
                }],
                dataset: [{
                    seriesName: 'Fallopian Tube Cancer',
                    renderAs: 'line',
                    data: []
                }, {
                    seriesName: 'Vulva Cancer',
                    renderAs: 'line',
                    data: []
                }, {
                    seriesName: 'Endometrial Cancer',
                    renderAs: 'line',
                    data: []
                }, {
                    seriesName: 'Cervical Cancer',
                    renderAs: 'line',
                    data: []
                },  {
                    seriesName: 'Ovarian Cancer',
                    renderAs: 'line',
                    data: []
                }, {
                    seriesName: 'Gestational Throphoblastic Disease',
                    renderAs: 'line',
                    data: []
                }, {
                    seriesName: 'Vaginal Cancer',
                    renderAs: 'line',
                    data: []
                }, {
                    seriesName: 'Tot # of Patients',
                    renderAs: 'line',
                    dashed: '1',
                    parentYAxis: 'S',
                    data: []
                }]
            }
        },

        // Properties for top performers by sales drill-down chart
        singleSalePerformerSalesTab: {
            type: 'mscolumn3dlinedy',
            id: 'singleSalePerformerSalesTab',
            width: '473',
            height: '340',
            dataFormat: 'json',
            dataSource: {
                chart: {
                    numberPrefix: '',
                    xAxisName: 'Firm',
                    pYAxisName: 'Number of Patients',
                    sYAxisName: '',
                    theme: 'management-3d'
                },
                categories: [{
                    category: []
                }],
                dataset: [{
                    seriesName: 'Bar View',
                    renderAs: 'column3d',
                    data: []
                }, {
                    seriesName: 'Line View',
                    renderAs: 'line',
                    showValues: '0',
                    parentYAxis: 'S',
                    data: []
                }]
            }

        },

        // Properties for top categories by sales in drill-down chart
        productWiseSales: {
            type: 'mscolumn3dlinedy',
            dataFormat: 'json',
            dataSource: {
                chart: {
                    numberPrefix: '$',
                    xAxisName: 'Products',
                    pYAxisName: 'Revenue (US $ in thousands)',
                    sYAxisName: 'Units Sold',
                    theme: 'management-3d'
                },
                categories: [{
                    category: []
                }],
                dataset: [{
                    seriesName: 'Revenue',
                    renderAs: 'column3d',
                    showValues: '0',
                    data: []
                }, {
                    seriesName: 'Units Sold',
                    renderAs: 'line',
                    parentYAxis: 'S',
                    data: []
                }]
            }
        },

     

        // Properties for category wise sales chart
        categoryWiseSales: {
            type: 'mscolumn3dlinedy',
            dataFormat: 'json',
            dataSource: {
                chart: {
                    numberPrefix: '',
                    xAxisName: 'Last Known Vital Status',
                    pYAxisName: 'Number of Patients',
                    sYAxisName: '',
                    theme: 'management-3d'
                },
                categories: [{
                    category: []
                }],
                dataset: [{
                    seriesName: 'Bar View',
                    renderAs: 'column3d',
                    showValues: '0',
                    data: []
                }, {
                    seriesName: 'Line View',
                    renderAs: 'line',
                    showValues: '0',
                    parentYAxis: 'S',
                    data: []
                }]
            }
        }
    };

    
    // Employee IDs & Names
    employeeDetails = managementData.employeeDetails;

    // Application specific methods. 
    app = {

        // Handles application initialization. Any code that you need to execute before the all the dashboards are executed can be specified here.
        init: function(callback) {
            callback();
        }
    };

    // Setters that are used to set chart specific datasource attributes.
    chartDataSource = {

        // Sets the data object for a given chart datasource
        setData: function(datasource, data, _options) {
            var options = typeof _options === 'undefined' ? false : _options,
                formatted,
                parentValue,
                parentTitle,
                dataLength = data.length,
                i;

            datasource.data = [];

            for (i = 0; i < dataLength; i++) {
                formatted = data[i].data;
                if (typeof formatted.tooltip !== 'undefined') {

                    parentTitle = formatted['label'];

                    if (options.tooltipFormatter) {
                        parentValue = options.tooltipFormatter(formatted['value']);
                    } else {
                        parentValue = formatted['value'];
                    }

                    formatted['tooltext'] = dataHelpers.formatToolText({
                        title: parentTitle,
                        value: parentValue
                    }, formatted.tooltip);

                    delete formatted.tooltip;
                }

                datasource.data.push(formatted);
            }
        },

        // Sets the caption of a chart
        setCaption: function(datasource, caption) {
            datasource.chart.caption = caption;
        },

        // Set categories for a chart
        setCategories: function(datasource, categories) {
            datasource.categories[0].category = categories;
        },

        // Set an entire dataset for a chart particularly for a multi-series chart
        setDataSet: function(datasource, dataset) {
            datasource.dataset = dataset;
        },

        // Set the data object for a given dataset
        setDataSetData: function(datasource, data) {
            var datasetLength = datasource.dataset.length,
                i;

            for (i = 0; i < datasetLength; i++) {
                datasource.dataset[i].data = data[i].data;
            }
        }

    };

    // Handles dom querying.
    dom = {

        // Get the value of a specific dom element by id.
        getElementValue: function(id) {
            return DOCUMENT.getElementById(id).value;
        },

        // Get dom element by id.
        getById: function(id) {
            return DOCUMENT.getElementById(id);
        },

        // Get value of current dom element in scope.
        queryCurrentValue: function(id, obj) {
            // IE fix, because IE doesn't recognize `this` well enough.
            if (obj === window) {
                return dom.getElementValue(id);
            }

            return obj.value;
        }
    };

    // Set of helper methods that handles presentation.
    viewHelpers = {

        // Adds active class for the sidebar list element to specify the active dashboard.
        addActiveLink: function(id) {
            var $link = dom.getById(id);
            $link.className = 'active';
        },

        // Remove the active class name for a tab.
        removeActiveLink: function(id) {
            var $link = dom.getById(id);
            $link.className = '';
        },

        // Present the modal on the screen.
        showModal: function(id, title, _props, callback) {
            var props = _props,
                chart,
                $modalWrapper = dom.getById('modalWrapper'),
                $modal = dom.getById('modal'),
                $title = dom.getById('modal-title');

            $modal.style.width = '968px';
            $modal.style.height = '560px';

            $title.innerHTML = title;
            props.id = 'modal-inner';
            props.renderAt = 'modal';
            props.width = '968';
            props.height = '500';

            chartsInModal[id] = {
                props: props,
                chart: new FusionCharts(props)
            };

            activeModalChart = chartsInModal[id]['chart'];

            if (ie6) {
                var select = DOCUMENT.getElementsByTagName('select'),
                    topLevelFilter = dom.getById('top-level-select-filter'),
                    selectLength = select.length,
                    i;

                for (i = 0; i < selectLength; i++) {
                    select[i].style.visibility = 'hidden';
                }
                topLevelFilter.style.visibility = 'hidden';
            }

            // Delay in ie since it was not calculating the width/height of the container correctly.
            if (isLessThan8()) {
                setTimeout(function() {
                    callback(chartsInModal[id]['chart']);
                }, 50);
            } else {
                callback(chartsInModal[id]['chart']);
            }

            var charts = getElementsByClassName('div', 'fusioncharts-container');
            var chartsLength = charts.length;

            for (i = 0; i < chartsLength; i++) {
                charts[i].style.position = '';
                charts[i].children[0].style.position = '';
            }
            $modalWrapper.style.visibility = 'visible';
            $modalWrapper.style.zIndex = '2';

            eventStates.modalShown = true;
        }
    };

    /**
     * Helper Methods for filtering data etc.
     */
    dataHelpers = {

        // Convert a string to a slug. 
        // For eg.: Meat / Poultry becomes meat_poultry
        slugize: function(_name) {
            var name = _name.toLowerCase().split(' ').join('/').split('/'),
                label = [],
                nameLength = name.length,
                i;

            for (i = 0; i < nameLength; i++) {
                if (name[i].trim()) {
                    label.push(name[i]);
                }
            }

            return label.join('_').trim();
        },

        // Filter / Limit the number of category objects
        // i.e., if you pass 10 categories and limit it to a certain number like 5, it will return 5 categories
        numberFilterCategories: function(total, config, _options) {
            var data = [],
                i;

            if (total === 'all') {
                data = config['all'];
            } else {
                for (i = 0; i < parseInt(total); i++) {
                    data.push(config['all'][i]);
                }
            }

            return data;
        },

        // Filter / Limit the dataset.
        numberFilterDataSet: function(total, _dataset) {
            var dataset = _dataset['all'],
                series1_data = {
                    data: []
                },
                series2_data = {
                    data: []
                },
                i;

            if (total === 'all') {
                series1_data = dataset[0];
                series2_data = dataset[1];
            } else {
                for (i = 0; i < parseInt(total); i++) {
                    series1_data.data.push(dataset[0].data[i]);
                    series2_data.data.push(dataset[1].data[i]);
                }
            }

            return [series1_data, series2_data];
        },

        // Filter / Limit the data object for a chart
        numberFilterData: function(total, _data, _options) {
            var data = _data['all'],
                result = [],
                options = typeof _options === 'undefined' ? null : _options,
                resultLength,
                i;

            if (total === 'all') {
                result = data;
            } else {
                for (i = 0; i < parseInt(total); i++) {
                    result.push(data[i]);
                }
            }

            resultLength = result.length;

            if (options && options.removeLink) {
                for (i = 0; i < resultLength; i++) {
                    delete result[i].data.link;
                }
            }

            return result;
        },

        // Custom ToolText format for all the charts.
        formatToolText: function(parent, obj) {
            var html = [],
                result,
                key;

            for (key in obj) {
                html.push(key + ' - ' + obj[key]);
            }

            result = parent.title + ' - ' + parent.value + '<div class="tooltip-border"></div><div class="tooltip-content">' + html.join('<br>') + '</div>';

            return result;
        },

        // ToolTip formatting for a particluar chart.
        tooltipFormatters: {
            averageShippingTimeChart: function(data) {
                return data + ' days';
            }
        }
    };

    /**
     * Table Component that displays table for a given chart.
     */
    function TableComponent(config, options) {

        var self = this;

        self.options = options;

        self.config = config;

        self.dataset = config.dataSource.dataset;

        self.datasource = config.dataSource;

        // Render the table.
        self.render = function() {
            var html = '',
                rows = {},
                formattingOptions = self.datasource.chart,
                renderAt = self.config.renderAt + '-table',
                categories = self.datasource.categories[0].category,
                format,
                $table,
                datasetLength = self.dataset.length,
                i, j, dataLength;

            html += '<table><thead><tr>';

            if (self.datasource.chart.xAxisName) {
                html += '<th>' + self.datasource.chart.xAxisName + '</th>';
            }

            // Set Headings
            for (i = 0; i < datasetLength; i++) {
                html += '<th class="text-right">' + self.dataset[i].seriesName + '</th>';
            }

            html += '</tr></thead>';

            // Set Rows
            for (i = 0; i < datasetLength; i++) {
                dataLength = self.dataset[i].data.length;
                for (j = 0; j < dataLength; j++) {
                    if (!rows[j]) {
                        rows[j] = {};
                    }

                    rows[j][i] = self.dataset[i].data[j].value;
                }
            }

            html += '<tbody>';

            var count = 0,
                columnCount;

            for (var row in rows) {
                if (count % 2 === 0) {
                    html += '<tr>';
                } else {
                    html += '<tr class="odd-row">';
                }
                html += '<td>' + categories[count].label + '</td>';
                columnCount = 0;
                for (key in rows[row]) {
                    if (self.options.format) {
                        format = self.options.format[columnCount];
                    } else {
                        format = {};
                    }
                    format['formatNumberScale'] = '0';
                    html += '<td class="text-right">' + FusionCharts.formatNumber(rows[row][key], format) + '</td>';
                    columnCount++;
                }
                html += '</tr>';
                count++;
            }


            html += '</tbody></table>';

            $table = dom.getById(renderAt);
            dom.getById(self.config.renderAt).style.display = 'none';

            $table.innerHTML = html;
            $table.style.display = '';
            dom.getById(self.config.renderAt + '-table').style.display = 'block';
        };

        // Hide the table
        self.hide = function() {
            dom.getById(self.config.renderAt + '-table').style.display = 'none';
        };
    }
     /**
     * Consists of all the dashboards.
     */
    dashboards = {

        // An item is a single dashboard.

        items: {},

        // Current active / shown dashboard.
        active: null,

        // Current year in focus.
        currentYear: null,

        // Add a single dashboard to the items object.
        add: function(id, callback) {
            this.items[id] = {
                rendered: false,
                callback: callback,
                currentYear: currentYear
            };
        },

        // Run / Execute the callback of a particular dashboard. 
        run: function(id) {
            var self = this,
                tab;

            FusionCharts.ready(function() {
                tab = dom.getById(id + '-tab');
                tab.className = '';
                self.items[id].rendered = true;
                self.items[id].callback();
                viewHelpers.addActiveLink(id + '-' + 'link');
                self.active = id;
                self.items[id].currentYear = currentYear;

                dom.getById('loader').className = 'hidden';
            });
        },

        // Show a dashboard. This also toggles the active dashboard.
        show: function(id) {
            var self = this,
                $element,
                $activeElement,
                $link,
                redraw = false;

            if (this.items[this.active].rendered) {
                if (currentYear != this.items[id].currentYear) {
                    redraw = true;
                    this.items[id].currentYear = currentYear;
                }
            }

            for (key in this.items) {
                $element = dom.getById(key + '-tab');
                viewHelpers.addActiveLink(key + '-' + 'link');
                $link = dom.getById(key + '-' + 'link');

                if (key !== id) {
                    $element.style.display = 'none';
                    $link.className = '';
                } else {
                    this.active = key;
                    $activeElement = $element;
                }
            }

            $activeElement.style.display = 'block';
            if (!this.items[this.active].rendered) {
                this.run(this.active);
            }
            if (redraw) {
                this.redraw(id);
            }
        },

        // Redraw all the charts of a particular dashboard.
        redraw: function(id) {
            FusionCharts.ready(function() {
                var ids = getEventIds(id);
                eventListeners.trigger('change', function(e) {
                    eventHandlers.trigger.topLevelYearFilter(ids, {
                        trigger: e,
                        year: currentYear,
                        eventName: 'change'
                    });
                });
            });
        }
    };

    /**
     * Certain event states for the application
     */
    eventStates = {

        // Flag that represents whether a modal is shown.
        modalShown: false,

        // Check if a modal is opened.
        isModalOpened: function() {
            return this.modalShown;
        },

        // Check if a modal is closed.
        isModalClosed: function() {
            return !this.isModalOpened();
        }
    };

    /**
     * Handles adding of events and triggering.
     */
    eventListeners = {

        // Add an event for a specific dom id / object.
        add: function(id, eventName, callback, _isObject) {
            var isObject = typeof _isObject === 'undefined' ? false : _isObject,
                $element;

            if (isObject) {
                $element = id;
            } else {
                $element = DOCUMENT.getElementById(id);
            }

            if ($element.addEventListener) {
                $element.addEventListener(eventName, callback);
            } else if ($element.attachEvent) {
                $element.attachEvent('on' + eventName, callback);
            }
        },

        // Trigger / Fire an event.
        trigger: function(eventType, callback) {
            var mouseEvent;

            if (DOCUMENT.createEvent) {
                mouseEvent = DOCUMENT.createEvent('MouseEvent');

                mouseEvent.initEvent(eventType, true, true);
                callback(mouseEvent);
            } else if (DOCUMENT.createEventObject) {
                mouseEvent = DOCUMENT.createEventObject();
                callback(mouseEvent);
            }
        }
    };

    /**
     * Callbacks for a particluar event.
     */
    eventHandlers = {

        // Trigger callback.
        trigger: {

            // Trigger all filters for the current active dashboard.
            topLevelYearFilter: function(ids, options) {
                var i,
                    idsLength = ids.length;

                for (i = 0; i < idsLength; i++) {
                    var $element = dom.getById(ids[i]);
                    $element.value = options.year;

                    if ($element.dispatchEvent) {
                        $element.dispatchEvent(options.trigger);
                    } else if ($element.fireEvent) {
                        $element.fireEvent('on' + options.eventName, options.trigger);
                    }
                }
            }
        },

        // Stop propogation
        stopPropagation: function(e) {
            if (e.stopPropagation) {
                e.stopPropagation();
            } else if (e.returnValue) {
                e.returnValue = false;
            }

            if (window.event) {
                if (window.event.cancelBubble !== 'undefined') {
                    window.event.cancelBubble = true
                }
            }
        }
    };

    /**
     * Global Event Listeners that are specific tthe entire application.
     */

    // Event listener for closing the modal.
    eventListeners.add('close-modal', 'click', function(e) {
        var i;

        if (e.preventDefault) {
            e.preventDefault();
        }

        var modalWrapper = dom.getById('modalWrapper');

        if (activeModalChart) {
            activeModalChart.dispose();
        }

        modalWrapper.style.visibility = 'hidden';
        modalWrapper.style.zIndex = 0;
        modalWrapper.className = '';

        if (ie6) {
            var topLevelFilter = dom.getById('top-level-select-filter'),
                select = DOCUMENT.getElementsByTagName('select'),
                selectLength = select.length;

            for (i = 0; i < selectLength; i++) {
                select[i].style.visibility = '';
            }
            topLevelFilter.style.visibility = '';
        }

        eventStates.modalShown = false;
    });

    // Event listener for the top level year filter.
    eventListeners.add('global_year_filter', 'change', function() {
        var year = dom.queryCurrentValue('global_year_filter', this);
        currentYear = year;

        dashboards.items[dashboards.active].currentYear = currentYear;
        eventListeners.trigger('change', function(e) {
            eventHandlers.trigger.topLevelYearFilter(getEventIds(dashboards.active), {
                trigger: e,
                year: currentYear,
                eventName: 'change'
            });
        });
    });

    // Event listener that closes the modal on click anywhere outside the modal.
    eventListeners.add('modalWrapper', 'click', function(e) {
        var $closeModal = dom.getById('close-modal');

        eventHandlers.stopPropagation(e);

        if (eventStates.isModalOpened()) {
            eventListeners.trigger('click', function(e) {
                if ($closeModal.dispatchEvent) {
                    $closeModal.dispatchEvent(e);
                } else if ($closeModal.fireEvent) {
                    $closeModal.fireEvent('onclick', e);
                }
            });
        }

    });

    // Event listener to override the modal wrapper's event click.
    eventListeners.add('modal', 'click', eventHandlers.stopPropagation);

    // Event listener to override the modal wrapper's event click.
    eventListeners.add('modal-title', 'click', eventHandlers.stopPropagation);

    // Summary Dashboard / Dashboard Tab 1
    dashboards.add('summary', function() {

        // Config for Yearly Sales Comparison Chart.
        var yearlySalesChart,
            yearlySalesChartConfig = chartConfig.yearlySalesSummary,
            yearlySalesSummaryCategories = managementData.yearlySalesSummaryCategories,
            yearlySalesSummaryData = [{"data": [{
            "value": globalData[0][0]
        }, {
            "value": globalData[0][1]
        }, {
            "value": globalData[0][2]
        }, {
            "value": globalData[0][3]
        }, {
            "value": globalData[0][4]
        }, {
            "value": globalData[0][5]
        }]
    }, {
        "data": [{
            "value": globalData[0][0]
        }, {
            "value": globalData[0][1]
        }, {
            "value": globalData[0][2]
        }, {
            "value": globalData[0][3]
        }, {
            "value": globalData[0][4]
        }, {
            "value": globalData[0][5]
        }]
    }];

        // Config for Top Sales Performers Chart.
        var topSalesPerformers,
            topSalesPerformersChartConfig = chartConfig.topSalesPerformersSummary,
            topSalesPerformersSummaryCategories = managementData.topSalesPerformersSummaryCategories,
            topSalesPerformersSummaryData = managementData.topSalesPerformersSummaryData;

        // Config for Top Categories Chart. //postoperative
        var topSalesCategoriesChart,
            topSalesCategoriesSummaryChartConfig = chartConfig.topSalesCategoriesSummary,
            topSalesCategoriesSummaryData = {
        "2014": {
            "all": [{
                "data": {
                    "label": "None",
                    "value":  globalData[1][0],
                    "link": "#"

                }
            }, {
                "data": {
                    "label": "Bladder Injury",
                    "value": globalData[1][1],
                    "link": "#"

                }
            }, {
                "data": {
                    "label": "Bowel Injury",
                    "value": globalData[1][2],
                    "link": "#"

                }
            }, {
                "data": {
                    "label": "Ureteric Injury",
                    "value": globalData[1][3],
                    "link": "#"

                }
            }, {
                "data": {
                    "label": "Anaesthetic Complication",
                    "value": globalData[1][4],
                    "link": "#"

                }
            }, {
                "data": {
                    "label": "ProcedureNotCompleted",
                    "value": globalData[1][5],
                    "link": "#"

                }
            }, {
                "data": {
                    "label": "BRUBT",
                    "value": globalData[1][6],
                    "link": "#"

                }
            }, {
                "data": {
                    "label": "Vascular Injury",
                    "value": globalData[1][7],
                    "link": "#"

                }
            }]
        }
    };


        // Config for Top Countries by Revenue Chart.
        var topRevenuesCountriesSummaryChart,
            topRevenuesCountriesSummaryChartConfig = chartConfig.topRevenuesCountriesSummary,
            topRevenuesCountriesSummaryCategories = managementData.topRevenuesCountriesSummaryCategories,
            topRevenuesCountriesSummaryData = managementData.topRevenuesCountriesSummaryData;

        // Yearly Sales Chart
        chartDataSource.setCategories(yearlySalesChartConfig.dataSource, yearlySalesSummaryCategories);
        chartDataSource.setDataSetData(yearlySalesChartConfig.dataSource, yearlySalesSummaryData);
        yearlySalesChart = new FusionCharts(yearlySalesChartConfig);
        yearlySalesChart.render();


        // Top Sales Performers Chart
        chartDataSource.setCategories(topSalesPerformersChartConfig.dataSource, dataHelpers.numberFilterCategories(3, topSalesPerformersSummaryCategories[currentYear]));
        chartDataSource.setDataSetData(topSalesPerformersChartConfig.dataSource, dataHelpers.numberFilterDataSet(3, topSalesPerformersSummaryData[currentYear]));
        topSalesPerformersChart = new FusionCharts(topSalesPerformersChartConfig);
        topSalesPerformersChart.render();


        // Top Sales Categories Chart
        chartDataSource.setData(topSalesCategoriesSummaryChartConfig.dataSource, dataHelpers.numberFilterData(5, topSalesCategoriesSummaryData[currentYear], {
            removeLink: true
        }));
        topSalesCategoriesChart = new FusionCharts(topSalesCategoriesSummaryChartConfig);
        topSalesCategoriesChart.render();

        // Top Revenues Countries Chart
        chartDataSource.setCategories(topRevenuesCountriesSummaryChartConfig.dataSource, dataHelpers.numberFilterCategories(5, topRevenuesCountriesSummaryCategories['2014']));
        chartDataSource.setDataSetData(topRevenuesCountriesSummaryChartConfig.dataSource, dataHelpers.numberFilterDataSet(5, topRevenuesCountriesSummaryData[currentYear]));
        topRevenuesCountriesSummaryChart = new FusionCharts(topRevenuesCountriesSummaryChartConfig);
        topRevenuesCountriesSummaryChart.render();


	


         /**
           * Event Listeners for top sales performers chart.
          */

        // Year filter.
        eventListeners.add('top_sales_performers_summary_year_filter', 'change', function() {
            var year = dom.queryCurrentValue('top_sales_performers_summary_year_filter', this);
            var numberOfEmployees = dom.getElementValue('top_sales_performers_summary_number_filter');

            chartDataSource.setCategories(topSalesPerformersChartConfig.dataSource, dataHelpers.numberFilterCategories(numberOfEmployees, topSalesPerformersSummaryCategories[year]));
            chartDataSource.setDataSetData(topSalesPerformersChartConfig.dataSource, dataHelpers.numberFilterDataSet(numberOfEmployees, topSalesPerformersSummaryData[year]));
            topSalesPerformersChart.setJSONData(topSalesPerformersChartConfig.dataSource);
        });

        // Number filter.
        eventListeners.add('top_sales_performers_summary_number_filter', 'change', function() {
            var numberOfEmployees = dom.queryCurrentValue('top_sales_performers_summary_number_filter', this);
            var year = dom.getElementValue('top_sales_performers_summary_year_filter');

            chartDataSource.setCategories(topSalesPerformersChartConfig.dataSource, dataHelpers.numberFilterCategories(numberOfEmployees, topSalesPerformersSummaryCategories[year]));
            chartDataSource.setDataSetData(topSalesPerformersChartConfig.dataSource, dataHelpers.numberFilterDataSet(numberOfEmployees, topSalesPerformersSummaryData[year]));
            topSalesPerformersChart.setJSONData(topSalesPerformersChartConfig.dataSource);
        });

       
		
        /**
          * Event Listeners for top categories chart.
          */

        // Year filter.
        eventListeners.add('top_categories_summary_year_filter', 'change', function() {
            var year = dom.queryCurrentValue('top_products_summary_year_filter', this);
            var numberOfProducts = dom.getElementValue('top_categories_summary_number_filter');

            chartDataSource.setData(topSalesCategoriesSummaryChartConfig.dataSource, dataHelpers.numberFilterData(numberOfProducts, topSalesCategoriesSummaryData[year], {
                removeLink: true
            }));
            topSalesCategoriesChart.setJSONData(topSalesCategoriesSummaryChartConfig.dataSource);
        });

        // Number filter.
        eventListeners.add('top_categories_summary_number_filter', 'change', function() {
            var numberOfProducts = dom.queryCurrentValue('top_categories_summary_number_filter', this);
            var year = dom.getElementValue('top_categories_summary_year_filter');

            chartDataSource.setData(topSalesCategoriesSummaryChartConfig.dataSource, dataHelpers.numberFilterData(numberOfProducts, topSalesCategoriesSummaryData[year], {
                removeLink: true
            }));
            topSalesCategoriesChart.setJSONData(topSalesCategoriesSummaryChartConfig.dataSource);
        });

         /**
           * Event Listeners for top countries by revenue chart.
          */

        // Year filter.
        eventListeners.add('top_revenues_country_year_filter', 'change', function() {
            var year = dom.queryCurrentValue('top_revenues_country_year_filter', this);
            var numberOfCountires = parseInt(dom.getElementValue('top_revenues_country_number_filter'));

            chartDataSource.setCategories(topRevenuesCountriesSummaryChartConfig.dataSource, dataHelpers.numberFilterCategories(numberOfCountires, topRevenuesCountriesSummaryCategories['2014']));
            chartDataSource.setDataSetData(topRevenuesCountriesSummaryChartConfig.dataSource, dataHelpers.numberFilterDataSet(numberOfCountires, topRevenuesCountriesSummaryData[year]));

            topRevenuesCountriesSummaryChart.setJSONData(topRevenuesCountriesSummaryChartConfig.dataSource);
        });

        // Number filter.
        eventListeners.add('top_revenues_country_number_filter', 'change', function() {
            var numberOfCountires = dom.queryCurrentValue('top_revenues_country_number_filter', this);
            var year = parseInt(dom.getElementValue('top_revenues_country_year_filter'));

            chartDataSource.setCategories(topRevenuesCountriesSummaryChartConfig.dataSource, dataHelpers.numberFilterCategories(numberOfCountires, topRevenuesCountriesSummaryCategories['2014']));
            chartDataSource.setDataSetData(topRevenuesCountriesSummaryChartConfig.dataSource, dataHelpers.numberFilterDataSet(numberOfCountires, topRevenuesCountriesSummaryData[year]));

            topRevenuesCountriesSummaryChart.setJSONData(topRevenuesCountriesSummaryChartConfig.dataSource);
        });

    });

    // Sales Dashboard / Dashboard Tab 2
    dashboards.add('sales', function() {

        // Config for Top Categories by Sales Chart.
        var topCategoriesSalesTabChart,
            topCategoriesSalesTabChartConfig = chartConfig.topCategoriesSalesTab,
            topCategoriesSalesTabCategories = managementData.topCategoriesSalesTabCategories,
            topCategoriesSalesTabData = {
        "2014": [{
            "data": [{
                "label": "Fallopian Tube Cancer",
                "value":  globalData[2][0],
                "link": "#sales"
            }, {
                "label": "Endometrial Cancer",
                "value": globalData[2][1],
                "link": "#sales"
            }, {
                "label": "Ovarian Cancer",
                "value": globalData[2][2],
                "link": "#sales"
            }, {
                "label": "Cervical Cancer",
                "value": globalData[2][3],
                "link": "#sales"
            }, {
                "label": "Vulva Cancer",
                "value": globalData[2][4],
                "link": "#sales"
            }, {

                "label": "Vaginal Cancer",
                "value": globalData[2][5],
                "link": "#sales"
            }, {

                "label": "Gestational Throphoblastic Disease",
                "value": globalData[2][6],
                "link": "#sales"
            }]
        }]
    };

        // Config for Top Performers by Sales Chart.
        var topPerformersSalesTabChart,
            topPerformersSalesTabChartConfig = chartConfig.topPerformersSalesTab,
            topPerformersSalesTabData = {
				//Mexican (just a key word to find this line)
        "2014": [{
            "data": {
                "label": "Threatening",
                "value": globalData[10][0],
                "link": "#sales"
            }
        }, {
            "data": {
                "label": "Complete",
                "value": globalData[10][1],
                "link": "#sales"
            }
        }, {
            "data": {
                "label": "Incomplete",
                "value": globalData[10][2],
                "link": "#sales"
            }
        }, {
            "data": {
                "label": "Septic",
                "value": globalData[10][3],
                "link": "#sales"
            }
        }],
        "2013": [{
            "data": {
                "label": "ASO I",
                "value": globalData[11][0],
                "link": "#sales"
            }
        }, {
            "data": {
                "label": "ASO II",
                "value": globalData[11][1],
                "link": "#sales"
            }
        }, {
            "data": {
                "label": "ASO III",
                "value": globalData[11][2],
                "link": "#sales"
            }
        }, {
            "data": {
                "label": "ASO IV",
                "value":globalData[11][3],
                "link": "#sales"
            }
        }],
		"2012": [{
            "data": {
                "label": "Ruptured",
                "value": globalData[12][0],
                "link": "#sales"
            }
        }, {
            "data": {
                "label": "Unruptured",
                "value": globalData[12][1],
                "link": "#sales"
            }
        }],

        "2011": [{
            "data": {
                "label": "Cervix",
                "value": globalData[13][0],
                "link": "#sales"
            }
        }, {
            "data": {
                "label": "Endometrium",
                "value":  globalData[13][1],
                "link": "#sales"
            }
        }, {
            "data": {
                "label": "Ovarian",
                "value":  globalData[13][2],
                "link": "#sales"
            }
        }, {
            "data": {
                "label": "Vulva",
                "value":  globalData[13][3],
                "link": "#sales"
            }
        }, {
            "data": {
                "label": "Vagina",
                "value": globalData[13][4],
                "link": "#sales"
            }
        },
            {
                "data": {
                    "label": "Chorio / GTD",
                    "value":  globalData[13][5],
                    "link": "#sales"
                }
            }]
    };

        // Config for drilldown on top performers by sales chart.
        var singleSalePerformerSalesTabChart,
            singleSalePerformerSalesTabConfig = chartConfig.singleSalePerformerSalesTab,
            singleSalePerformerSalesTabCategories = managementData.singleSalePerformerSalesTabCategories,
            singleSalePerformerSalesTabData =  { //Peppers

        "incomplete": [{
            "data": [{
                "value": globalData[16][0]
            }, {
                "value": globalData[16][1]
            }, {
                "value": globalData[16][2]
            }, {
                "value": globalData[16][3]
            }]
        }, {
            "data": [{
                "value": globalData[16][0]
            }, {
                "value": globalData[16][1]
            }, {
                "value": globalData[16][2]
            }, {
                "value": globalData[16][3]
            }]
        }],


        "complete": [{
            "data": [{
                "value": globalData[15][0]
            }, {
                "value": globalData[15][1]
            }, {
                "value": globalData[15][2]
            }, {
                "value": globalData[15][3]
            }]
        }, {
            "data": [{
                "value": globalData[15][0]
            }, {
                "value": globalData[15][1]
            }, {
                "value": globalData[15][2]
            }, {
                "value": globalData[15][3]
            }]
        }],


        "threatening": [{
            "data": [{
                "value": globalData[14][0]
            }, {
                "value": globalData[14][1]
            }, {
                "value": globalData[14][2]
            }, {
                "value": globalData[14][3]
            }]
        }, {
            "data": [{
                "value": globalData[14][0]
            }, {
                "value": globalData[14][1]
            }, {
                "value": globalData[14][2]
            }, {
                "value": globalData[14][3]
            }]
        }],

        "septic": [{
            "data": [{
                "value": globalData[17][0]
            }, {
                "value": globalData[17][1]
            }, {
                "value": globalData[17][2]
            }, {
                "value": globalData[17][3]
            }]
        }, {
            "data": [{
                "value": globalData[17][0]
            }, {
                "value": globalData[17][1]
            }, {
                "value": globalData[17][2]
            }, {
                "value": globalData[17][3]
            }]
        }],

        /////////Sal
        "aso_i": [{
            "data": [{
                "value":  globalData[18][0]
            }, {
                "value":  globalData[18][1]
            }, {
                "value":  globalData[18][2]
            }, {
                "value":  globalData[18][3]
            }]
        }, {
            "data": [{
                "value":  globalData[18][0]
            }, {
                "value":  globalData[18][1]
            }, {
                "value":  globalData[18][2]
            }, {
                "value":  globalData[18][3]
            }]
        }],

        "aso_ii": [{
            "data": [{
                "value":  globalData[19][0]
            }, {
                "value":  globalData[19][1]
            }, {
                "value":  globalData[19][2]
            }, {
                "value":  globalData[19][3]
            }]
        }, {
            "data": [{
                "value":  globalData[19][0]
            }, {
                "value":  globalData[19][1]
            }, {
                "value":  globalData[19][2]
            }, {
                "value":  globalData[19][3]
            }]
        }],

        "aso_iii": [{
            "data": [{
                "value":  globalData[20][0]
            }, {
                "value":  globalData[20][1]
            }, {
                "value":  globalData[20][2]
            }, {
                "value":  globalData[20][3]
            }]
        }, {
            "data": [{
                "value":  globalData[20][0]
            }, {
                "value":  globalData[20][1]
            }, {
                "value":  globalData[20][2]
            }, {
                "value":  globalData[20][3]
            }]
        }],
        "aso_iv": [{
            "data": [{
                "value":  globalData[21][0]
            }, {
                "value":  globalData[21][1]
            }, {
                "value":  globalData[21][2]
            }, {
                "value":  globalData[21][3]
            }]
        }, {
            "data": [{
                "value":  globalData[21][0]
            }, {
                "value":  globalData[21][1]
            }, {
                "value":  globalData[21][2]
            }, {
                "value":  globalData[21][3]
            }]
        }],

        ////Oncology
        "cervix": [{
            "data": [{
                "value":  globalData[24][0]
            }, {
                "value":  globalData[24][1]
            }, {
                "value":  globalData[24][2]
            }, {
                "value":  globalData[24][3]
            }]
        }, {
            "data": [{
                "value":  globalData[24][0]
            }, {
                "value":  globalData[24][1]
            }, {
                "value":  globalData[24][2]
            }, {
                "value":  globalData[24][3]
            }]
        }],

        "endometrium": [{
            "data": [{
                "value":  globalData[25][0]
            }, {
                "value":  globalData[25][1]
            }, {
                "value":  globalData[25][2]
            }, {
                "value":  globalData[25][3]
            }]
        }, {
            "data": [{
                "value":  globalData[25][0]
            }, {
                "value":  globalData[25][1]
            }, {
                "value":  globalData[25][2]
            }, {
                "value":  globalData[25][3]
            }]
        }],

        "ovarian": [{
            "data": [{
                "value":  globalData[26][0]
            }, {
                "value":  globalData[26][1]
            }, {
                "value":  globalData[26][2]
            }, {
                "value":  globalData[26][3]
            }]
        }, {
            "data": [{
                "value":  globalData[26][0]
            }, {
                "value":  globalData[26][1]
            }, {
                "value":  globalData[26][2]
            }, {
                "value":  globalData[26][3]
            }]
        }],
        "vulva": [{
            "data": [{
                "value":  globalData[27][0]
            }, {
                "value":  globalData[27][1]
            }, {
                "value":  globalData[27][2]
            }, {
                "value":  globalData[27][3]
            }]
        }, {
            "data": [{
                "value":  globalData[27][0]
            }, {
                "value":  globalData[27][1]
            }, {
                "value":  globalData[27][2]
            }, {
                "value":  globalData[27][3]
            }]
        }],
        "vagina": [{
            "data": [{
                "value":  globalData[28][0]
            }, {
                "value":  globalData[28][1]
            }, {
                "value":  globalData[28][2]
            }, {
                "value":  globalData[28][3]
            }]
        }, {
            "data": [{
                "value":  globalData[28][0]
            }, {
                "value":  globalData[28][1]
            }, {
                "value":  globalData[28][2]
            }, {
                "value":  globalData[28][3]
            }]
        }],
        "chorio_gtd": [{
            "data": [{
                "value":  globalData[29][0]
            }, {
                "value":  globalData[29][1]
            }, {
                "value":  globalData[29][2]
            }, {
                "value":  globalData[29][3]
            }]
        }, {
            "data": [{
                "value":  globalData[29][0]
            }, {
                "value":  globalData[29][1]
            }, {
                "value":  globalData[29][2]
            }, {
                "value":  globalData[29][3]
            }]
        }],
        "ruptured": [{
            "data": [{
                "value":  globalData[22][0]
            }, {
                "value":  globalData[22][1]
            }, {
                "value":  globalData[22][2]
            }, {
                "value":  globalData[22][3]
            }]
        }, {
            "data": [{
                "value":  globalData[22][0]
            }, {
                "value":  globalData[22][1]
            }, {
                "value":  globalData[22][2]
            }, {
                "value":  globalData[22][3]
            }]
        }],
        "unruptured":[{
            "data": [{
                "value":  globalData[23][0]
            }, {
                "value":  globalData[23][1]
            }, {
                "value":  globalData[23][2]
            }, {
                "value":  globalData[23][3]
            }]
        }, {
            "data": [{
                "value":  globalData[23][0]
            }, {
                "value":  globalData[23][1]
            }, {
                "value":  globalData[23][2]
            }, {
                "value":  globalData[23][3]
            }]
        }]

    };

        // Config for drilldown on top categories by sales chart.
        var categoryWiseSalesChart,
            categoryWiseSalesChartConfig = chartConfig.categoryWiseSales,
            categoryWiseSalesCategories = managementData.productWiseSalesCategories,
            categoryWiseSalesData =  {
        "2014": {
            "fallopian_tube_cancer": [{
                "data": [{
                    "value":  globalData[3][0] //Alive unknown disease
                }, {
                    "value": globalData[3][1] //Alive and no evidence of disease
                }, {
                    "value": globalData[3][2] // Alive with disease
                }, {
                    "value": globalData[3][3] //Dead
                }]
            }, {
                "data": [{
                    "tooltext": "Alive with unknown disease",
                    "value":  globalData[3][0]
                }, {
                    "tooltext": "Alive and no evidence of disease",
                    "value": globalData[3][1]
                }, {
                    "tooltext": "Alive with disease",
                    "value": globalData[3][2]
                }, {
                    "tooltext": "Dead",
                    "value": globalData[3][3]
                }]
            }],
            "endometrial_cancer": [{
                "data": [{
                    "value":  globalData[4][0]
                }, {
                    "value":  globalData[4][1]
                }, {
                    "value":  globalData[4][2]
                }, {
                    "value":  globalData[4][3]
                }]
            }, {
                "data": [{
                    "tooltext":  "Alive with unknown disease",
                    "value": globalData[4][0]
                }, {
                    "tooltext": "Alive and no evidence of disease",
                    "value": globalData[4][1]
                }, {
                    "tooltext": "Alive with disease",
                    "value":  globalData[4][2]
                }, {
                    "tooltext": "Dead",
                    "value":  globalData[4][3]
                }]
            }],
            "ovarian_cancer": [{
                "data": [{
                    "value":  globalData[5][0]
                }, {
                    "value": globalData[5][1]
                }, {
                    "value": globalData[5][2]
                }, {
                    "value": globalData[5][3]
                }]
            }, {
                "data": [{
                    "tooltext":  "Alive with unknown disease",
                    "value": globalData[5][0]
                }, {
                    "tooltext": "Alive and no evidence of disease",
                    "value": globalData[5][1]
                }, {
                    "tooltext": "Alive with disease",
                    "value": globalData[5][2]
                }, {
                    "tooltext": "Dead",
                    "value": globalData[5][3]
                }]
            }],
            "cervical_cancer": [{
                "data": [{
                    "value": globalData[6][0]
                }, {
                    "value": globalData[6][1]
                }, {
                    "value": globalData[6][2]
                }, {
                    "value": globalData[6][3]
                }]
            }, {
                "data": [{
                    "tooltext":  "Alive with unknown disease",
                    "value": globalData[6][0]
                }, {
                    "tooltext":  "Alive and no evidence of disease",
                    "value": globalData[6][1]
                }, {
                    "tooltext": "Alive with disease",
                    "value": globalData[6][2]
                }, {
                    "tooltext": "Dead",
                    "value": globalData[6][3]
                }]
            }],
            "vulva_cancer": [{
                "data": [{
                    "value": globalData[7][0]
                }, {
                    "value": globalData[7][1]
                }, {
                    "value": globalData[7][2]
                }, {
                    "value": globalData[7][3]
                }]
            }, {
                "data": [{
                    "tooltext":  "Alive with unknown disease",
                    "value": globalData[7][0]
                }, {
                    "tooltext":  "Alive and no evidence of disease",
                    "value": globalData[7][1]
                }, {
                    "tooltext": "Alive with disease",
                    "value": globalData[7][2]
                }, {
                    "tooltext": "Dead",
                    "value": globalData[7][3]
                }]
            }],
            "vaginal_cancer": [{
                "data": [{
                    "value": globalData[8][0]
                }, {
                    "value": globalData[8][1]
                }, {
                    "value": globalData[8][2]
                }, {
                    "value": globalData[8][3]
                }]
            }, {
                "data": [{
                    "tooltext":  "Alive with unknown disease",
                    "value": globalData[8][0]
                }, {
                    "tooltext":  "Alive and no evidence of disease",
                    "value": globalData[8][1]
                }, {
                    "tooltext": "Alive with disease",
                    "value": globalData[8][2]
                }, {
                    "tooltext": "Dead",
                    "value": globalData[8][3]
                }]
            }],
            "gestational_throphoblastic_disease": [{
                "data": [{
                    "value":  globalData[9][0]
                }, {
                    "value": globalData[9][1]
                }, {
                    "value": globalData[9][2]
                }, {
                    "value": globalData[9][3]
                }]
            }, {
                "data": [{
                    "tooltext":  "Alive with unknown disease",
                    "value": globalData[9][0]
                }, {
                    "tooltext":  "Alive and no evidence of disease",
                    "value": globalData[9][1]
                }, {
                    "tooltext": "Alive with disease",
                    "value": globalData[9][2]
                }, {
                    "tooltext": "Dead",
                    "value": globalData[9][3]
                }]
            }]
        }
    };

        // Config for Monthly Sales Chart
        var topMonthlySalesTabChart,
            topMonthlySalesTabChartConfig = chartConfig.topMonthlySalesTab,
            topMonthlySalesData = managementData.topMonthlySalesTabData,
            topMonthlySalesTabCategories = managementData.topMonthlySalesTabCategories;


        // Top Sales Categories Chart
        chartDataSource.setData(topCategoriesSalesTabChartConfig.dataSource, topCategoriesSalesTabData[currentYear]);
        topCategoriesSalesChart = new FusionCharts(topCategoriesSalesTabChartConfig);
        topCategoriesSalesChart.render();

        // Top Sales Performers Chart
        chartDataSource.setData(topPerformersSalesTabChartConfig.dataSource, topPerformersSalesTabData[currentYear]);
        topPerformersSalesTabChart = new FusionCharts(topPerformersSalesTabChartConfig);
        topPerformersSalesTabChart.render();

        // Sales Details of Individual Performer Chart
        chartDataSource.setCategories(singleSalePerformerSalesTabConfig.dataSource, singleSalePerformerSalesTabCategories);

        // Monthly Categories Chart
        chartDataSource.setCategories(topMonthlySalesTabChartConfig.dataSource, topMonthlySalesTabCategories);
        chartDataSource.setDataSetData(topMonthlySalesTabChartConfig.dataSource, topMonthlySalesData[currentYear]);
        topMonthlySalesTabChart = new FusionCharts(topMonthlySalesTabChartConfig);
        topMonthlySalesTabChart.render();

        /**
          * Event listeners for top performers chart.
          */

        // Drilldown that opens in a modal
        eventListeners.add(topPerformersSalesTabChart, 'dataplotClick', function(e) {
            var employeeSlug;

            if (e.preventDefault) { e.preventDefault(); }

            employeeSlug = dataHelpers.slugize(arguments[1]['categoryLabel']);
            chartDataSource.setDataSetData(singleSalePerformerSalesTabConfig.dataSource, singleSalePerformerSalesTabData[employeeSlug]);
            viewHelpers.showModal('singleSalePerformerSalesTabChart', 'Number of Patients Per Firm For ' + employeeDetails[employeeSlug]['name'], singleSalePerformerSalesTabConfig, function(chart) {
                chart.render();
            });
        }, true);

        /**
          * Event listeners for top monthly sales chart.
          */

        // Year filter.
        eventListeners.add('top_monthly_sales_year_filter', 'change', function() {
            var year = dom.queryCurrentValue('top_monthly_sales_year_filter', this);

            chartDataSource.setDataSetData(topMonthlySalesTabChartConfig.dataSource, topMonthlySalesData[year]);
            topMonthlySalesTabChart.setJSONData(topMonthlySalesTabChartConfig.dataSource);
        });

        // Number filter.
        eventListeners.add('top_categories_sales_tab_year_filter', 'change', function() {
            var year = dom.queryCurrentValue('top_categories_sales_tab_year_filter', this);

            chartDataSource.setData(topCategoriesSalesTabChartConfig.dataSource, topCategoriesSalesTabData[year]);
            topCategoriesSalesChart.setJSONData(topCategoriesSalesTabChartConfig.dataSource);
        });

        // Event listeners for top performers chart in sales dashboard.
        eventListeners.add('top_performers_sales_year_filter', 'change', function() {
            var year = dom.queryCurrentValue('top_performers_sales_year_filter', this);

            chartDataSource.setData(topPerformersSalesTabChartConfig.dataSource, topPerformersSalesTabData[year]);
            topPerformersSalesTabChart.setJSONData(topPerformersSalesTabChartConfig.dataSource);
        });

         /**
          * Event listeners for top categories by sales chart.
          */

        // Drilldown that shows in a modal
        eventListeners.add(topCategoriesSalesChart, 'dataplotClick', function(e) {
            var year = dom.getById('top_categories_sales_tab_year_filter').value;
            var label = dataHelpers.slugize(arguments[1].categoryLabel);

            if (e.preventDefault) { e.preventDefault(); }

            chartDataSource.setCategories(categoryWiseSalesChartConfig.dataSource, categoryWiseSalesCategories[year][label]);
            chartDataSource.setDataSetData(categoryWiseSalesChartConfig.dataSource, categoryWiseSalesData[year][label]);
            viewHelpers.showModal('categoryWiseSalesChart', arguments[1].categoryLabel + ' Vital Statuses', categoryWiseSalesChartConfig, function(chart) {
                chart.render();
            });
        }, true);
    });

     //KPI Dashboard / Dashboard Tab 3
    dashboards.add('kpi', function() {

       
    });


    /**
     * Private Methods
     */

    // Get all chart dom ids for a dashboard tab.
    // These ids are directly used by the global year filter to trigger appropriate chart updates / re-rendering
    var getEventIds = function(id) {
        var ids = {
            summary: ['top_sales_performers_summary_year_filter', 'top_categories_summary_year_filter', 'top_revenues_country_year_filter', 'top_products_summary_year_filter', 'top_revenues_cities_summary_year_filter', 'top_customers_summary_year_filter'],
            sales: ['top_categories_sales_tab_year_filter', 'top_performers_sales_year_filter', 'top_monthly_sales_year_filter'],
            kpi: ['inventory_by_categories_year_filter', 'cost_of_goods_sold_year_filter', 'average_shipping_time_year_filter', 'customer_satisfaction_year_filter']
        };


        return ids[id];
    };

    // Polyfill for string trim
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, '');
    };

    // Polyfill for array indexOf
    var indexOfArray = function(list, value) {
        if (Array.prototype.indexOf) {
            return list.indexOf(value);
        } else {
            var i,
                listLength = list.length;

            for (i = 0; i < listLength; i++) {
                if (list[i] === value) {
                    return i;
                }
            }
        }

        return -1;
    };

    // Polyfill for get elements by class name
    var getElementsByClassName = function(tag, className) {
        var result,
            elements,
            i,
            elementsLength;

        if (DOCUMENT.getElementsByClassName) {
            result = DOCUMENT.getElementsByClassName('fusioncharts-container');
        } else {
            result = [];
            elements = DOCUMENT.getElementsByTagName(tag);
            elementsLength = elements.length;

            for (i = 0; i < elementsLength; i++) {
                if (elements[i].className === className) {
                    result.push(elements[i]);
                }
            }
        }

        return result;
    };


    // Check if IE6
    function isIE6() {
      var isValid = (ieVersion > 0 && ieVersion < 7) ? true : false;

      return isValid;
    }

    // Check if IE is less than version 8
    function isLessThan8() {
      var isValid = ( ieVersion > 0 && ieVersion <= 8 ) ? true : false;

      return isValid;
    }

    // Get current version of IE
    function getIEVersion() {
        var pattern = /MSIE (\d+\.\d+);/;

        if (pattern.test(window.navigator.userAgent)) {
            var ieversion = Number(RegExp.$1);

            return ieversion;
        }
        
        return 0;
    }

    // Handle permalink of tabs switching.
    var urlHandler = function() {
        var tab,
            availableTabs,
            pattern = /#([^#]+)/;

        tab = DOCUMENT.URL ? DOCUMENT.URL.match(pattern) : window.location.match(pattern);
        availableTabs = ['summary', 'sales', 'kpi'];

        if (tab) {
            if (indexOfArray(availableTabs, tab[1].trim()) === -1) {
                dashboards.run('summary-tab');
            } else {
                dashboards.run(tab[1]);
            }
        } else {
            dashboards.run('summary');
        }
    };


    /**
     * Main App Initializtion
     */
    app.init(function() {

        // Event Listeners for summary link
        eventListeners.add('summary-link', 'click', function(e) {
            dashboards.show('summary');
        });

        // Event Listeners for sales link
        eventListeners.add('sales-link', 'click', function(e) {
			
            
			dashboards.show('sales');
        });

        // Event Listeners for kpi link
        eventListeners.add('kpi-link', 'click', function(e) {
            $.ajax({
                type: 'POST',
                url: '/getSurvivalStats',
                success: function (data, textStatus, jqXHR){
                    var res = JSON.parse(jqXHR.responseText);
                    console.log("This is what it looks like " + res[0][0].stages[0].patientNumber );
                    sendDataToGraph(res);
                },
                dataType: "json",
                contentType: "application/json"
            });
            dashboards.show('kpi');
        });

        urlHandler();

    });

});
}



/*****************************************************************************************************/


//may have to loop thru
/*function sendDataToGraph(data){
 alert ("Survival " + data);
 //call FusionCharts.ready()
 }*/
/**
 *
 * @param surviveData
 */
function sendDataToGraph(surviveData){

    console.log("Survival " + surviveData[0][0].stages[0].patientNumber);
    /*console.log("Survival 2 " + surviveData[1][0].stages[1].patientNumber);
    console.log("Survival 3 " + surviveData[2].stages[2].patientNumber);
    console.log("Survival 4 " + surviveData[3].stages[3].patientNumber);*/
    //alert ("Survival " + surviveData.arrSend[0] + " just did it");
    //alert ("Survival " + surviveData.stageOne[0] + " just did it");

    // Properties for survival chart
    /*
     //Redo like this
     var chartProperties = {
     "caption": "Survival Data for Cervical Cancer",
     "numberprefix": "",
     "xAxisName": "Number (Percentage)",
     "yAxisName": "Patient Status",
     theme: 'management-3d'
     };
     var survivalDataTab = new FusionCharts( {
     type: 'bar3d',
     id: 'survivalDataTab',
     width: '473',
     height: '340',
     dataFormat: 'json',
     renderAt: 'survival-categories-tab-chart',
     dataSource: {
     chart: chartProperties,
     data: []
     }

     });

     survivalDataTab.render();*/

    //call FusionCharts.ready()

    FusionCharts.ready(function() {


        // Global / General Config
        var app,
            dom,
            chartDataSource,
            dashboards,
            viewHelpers,
            startYear = '2014',
            currentYear = '2014',
            chartsInModal = {},
            eventStates,
            dataHelpers,
            eventListeners,
            eventHandlers,
            activeModalChart,
            chartConfig,
            employeeDetails,
            ieVersion = getIEVersion(),
            ie6 = isIE6(),
            DOCUMENT = document;

        var chartProperties = {
            "caption": "Survival Data for Cancer",
            "numberprefix": "",
            "xAxisName": "Number (Percentage)",
            "yAxisName": "Patient Status",
            theme: 'management-3d'
        };

        /**
         * Properties of all charts
         */
        chartConfig = {

            // Properties for yearly sales chart
            yearlySalesSummary: {
                type: 'mscolumn3dlinedy',
                id: 'yearlySalesSummary',
                width: '473',
                height: '340',
                dataFormat: 'json',
                renderAt: 'yearly-sales-chart',
                dataSource: {
                    chart: {
                        xAxisName: 'Name of Complications',
                        theme: 'management-3d',
                        numberPrefix: '',
                        pYAxisName: 'Number of Surgical Complications',
                        sYAxisName: ''
                    },
                    categories: [{
                        category: []
                    }],
                    dataset: [{
                        seriesName: 'Complications',
                        renderAs: 'column3d',
                        showValues: '0',
                        data: []
                    }, {
                        seriesName: 'Complications',
                        parentYAxis: 'S',
                        renderAs: 'line',
                        showValues: '0',
                        data: []
                    }]
                }
            },


            // Properties for survival chart
            survivalDataTab: {
                type: 'bar3d',
                id: 'survivalDataTab',
                width: '473',
                height: '340',
                dataFormat: 'json',
                renderAt: 'survival-categories-tab-chart',
                dataSource: {
                    chart: {
                        numberPrefix: '',
                        yAxisName: 'Patient Status (Percentage)',
                        theme: 'management-3d'
                    },
                    data: []
                }

            },


            endoCanDataTab: {
                type: 'bar3d',
                id: 'endoCanDataTab',
                width: '473',
                height: '340',
                dataFormat: 'json',
                renderAt: 'test-categories-tab-chart',//div to render at
                dataSource: {
                    chart: chartProperties,
                    data: []
                },
                showDataLoadingMessage : true,
                showChartLoadingMessage : true
            },

            fallTubeDataTab: {
                type: 'bar3d',
                id: 'fallTubeDataTab',
                width: '473',
                height: '340',
                dataFormat: 'json',
                renderAt: 'test2-categories-tab-chart',//div to render at
                dataSource: {
                    chart: chartProperties,
                    data: []
                },
                showDataLoadingMessage : true,
                showChartLoadingMessage : true
            },

            vulvCanDataTab: {
                type: 'bar3d',
                id: 'vulvCanDataTab',
                width: '473',
                height: '340',
                dataFormat: 'json',
                renderAt: 'test3-categories-tab-chart',//div to render at
                dataSource: {
                    chart: chartProperties,
                    data: []
                },
                showDataLoadingMessage : true,
                showChartLoadingMessage : true
            },

            ovarianDataTab: {
                type: 'bar3d',
                id: 'ovarianDataTab',
                width: '473',
                height: '340',
                dataFormat: 'json',
                renderAt: 'ovarian-categories-tab-chart',//div to render at
                dataSource: {
                    chart: chartProperties,
                    data: []
                },
                showDataLoadingMessage : true,
                showChartLoadingMessage : true
            },

            vaginalDataTab: {
                type: 'bar3d',
                id: 'vaginalDataTab',
                width: '473',
                height: '340',
                dataFormat: 'json',
                renderAt: 'vaginal-categories-tab-chart',//div to render at
                dataSource: {
                    chart: chartProperties,
                    data: []
                },
                showDataLoadingMessage : true,
                showChartLoadingMessage : true
            },

            gtnDataTab: {
                type: 'bar3d',
                id: 'gtnDataTab',
                width: '473',
                height: '340',
                dataFormat: 'json',
                renderAt: 'gtn-categories-tab-chart',//div to render at
                dataSource: {
                    chart: chartProperties,
                    data: []
                },
                showDataLoadingMessage : true,
                showChartLoadingMessage : true
            },

            // Properties for top sales performers chart
            topSalesPerformersSummary: {
                type: 'mscolumn3dlinedy',
                id: 'topSalesPerformersSummary',
                width: '473',
                height: '340',
                dataFormat: 'json',
                renderAt: 'top-sales-performers-chart',
                dataSource: {
                    chart: {
                        numberPrefix: '$',
                        xAxisName: 'Performers',
                        pYAxisName: 'Sales (US $ in thousands)',
                        sYAxisName: 'Units Sold (In thousands)',
                        theme: 'management-3d'
                    },
                    categories: [{
                        category: []
                    }],
                    dataset: [{
                        seriesName: 'Sales',
                        renderAs: 'column3d',
                        showValues: '0',
                        data: []
                    }, {
                        seriesName: 'Units Sold',
                        renderAs: 'line',
                        showValues: '0',
                        parentYAxis: 'S',
                        data: []
                    }]
                }

            },

            // Properties for top categories chart
            topSalesCategoriesSummary: {
                type: 'bar3d',
                id: 'topSalesCategoriesSummary',
                width: '473',
                height: '340',
                dataFormat: 'json',
                renderAt: 'top-sales-categories-chart',
                dataSource: {
                    chart: {
                        yAxisName: 'Amount (In US $)',
                        numberPrefix: '$',
                        theme: 'management-3d',
                        showValues: 0
                    },
                    data: []
                }

            },

            // Properties for top cities by sales chart
            topRevenuesCitiesSummary: {
                type: 'bar3d',
                id: 'topRevenuesCitiesSummary',
                width: '473',
                height: '340',
                dataFormat: 'json',
                renderAt: 'top-revenues-cities-chart',
                dataSource: {
                    chart: {
                        yAxisName: 'Total Sales (US $ in thousands)',
                        theme: 'management-3d'
                    },
                    data: []
                }
            },

            // Properties for top countries by revenue chart
            topRevenuesCountriesSummary: {
                type: 'mscolumn3dlinedy',
                id: 'topRevenuesCountriesSummary',
                width: '473',
                height: '340',
                dataFormat: 'json',
                renderAt: 'top-revenues-countries-chart',
                dataSource: {
                    chart: {
                        numberPrefix: '$',
                        xAxisName: 'Countries',
                        pYAxisName: 'Sales (US $ in thousands)',
                        sYAxisName: 'Units Sold (In thousands)',
                        theme: 'management-3d'
                    },
                    categories: [{
                        category: []
                    }],
                    dataset: [{
                        seriesName: 'Sales',
                        renderAs: 'column3d',
                        showValues: '0',
                        data: []
                    }, {
                        seriesName: 'Units Sold',
                        renderAs: 'line',
                        showValues: '0',
                        parentYAxis: 'S',
                        data: []
                    }]
                }
            },

            // Properties for top customers chart
            topCustomersSummary: {
                type: 'mscolumn3dlinedy',
                id: 'topCustomersSummary',
                width: '473',
                height: '340',
                dataFormat: 'json',
                renderAt: 'top-customers-chart',
                dataSource: {
                    chart: {
                        numberPrefix: '$',
                        xAxisName: 'Customers',
                        pYAxisName: 'Amount (US $ in thousands)',
                        sYAxisName: 'Units Sold (In thousands)',
                        theme: 'management-3d'
                    },
                    categories: [{
                        category: []
                    }],
                    dataset: [{
                        seriesName: 'Amount',
                        renderAs: 'column3d',
                        showValues: '0',
                        data: []
                    }, {
                        seriesName: 'Units Sold',
                        renderAs: 'line',
                        showValues: '0',
                        parentYAxis: 'S',
                        data: []
                    }]
                }
            },

            // Properties for top products chart
            topProductsSummary: {
                type: 'mscolumn3dlinedy',
                id: 'topProductsSummary',
                width: '968',
                height: '340',
                dataFormat: 'json',
                renderAt: 'top-products-chart',
                dataSource: {
                    chart: {
                        numberPrefix: '$',
                        xAxisName: 'Products',
                        pYAxisName: 'Amount (US $ in thousands)',
                        sYAxisName: 'Units Sold',
                        theme: 'management-3d'
                    },
                    categories: [{
                        category: []
                    }],
                    dataset: [{
                        seriesName: 'Amount',
                        renderAs: 'column3d',
                        showValues: '0',
                        data: []
                    }, {
                        seriesName: 'Units Sold',
                        renderAs: 'line',
                        showValues: '0',
                        parentYAxis: 'S',
                        data: []
                    }]
                }
            },

            // Properties for top categories by sales chart
            topCategoriesSalesTab: {
                type: 'bar3d',
                id: 'topCategoriesSalesTab',
                width: '473',
                height: '340',
                dataFormat: 'json',
                renderAt: 'top-categories-sales-tab-chart',
                dataSource: {
                    chart: {
                        numberPrefix: '$',
                        yAxisName: 'Revenue (US $ in thousands)',
                        theme: 'management-3d'
                    },
                    data: []
                }

            },

            // Properties for top performers by sales chart
            topPerformersSalesTab: {
                type: 'column3d',
                id: 'topPerformersSalesTab',
                width: '473',
                height: '340',
                dataFormat: 'json',
                renderAt: 'top-performers-sales-tab-chart',
                dataSource: {
                    chart: {
                        numberPrefix: '$',
                        xAxisName: 'Performers',
                        yAxisName: 'Revenue (US $ in thousands)',
                        theme: 'management-3d'
                    },
                    data: []
                }
            },

            // Properties for top monthly sales chart
            topMonthlySalesTab: {
                type: 'mscolumn3dlinedy',
                id: 'topMonthlySalesTab',
                width: '968',
                height: '340',
                dataFormat: 'json',
                renderAt: 'top-monthly-sales-tab-chart',
                dataSource: {
                    chart: {
                        numberPrefix: '$',
                        xAxisName: 'Month',
                        pYAxisName: 'Amount (US $ in thousands)',
                        sYAxisName: 'Total Units Sold (In thousands)',
                        theme: 'management-3d'
                    },
                    categories: [{
                        category: []
                    }],
                    dataset: [{
                        seriesName: 'Beverages',
                        renderAs: 'line',
                        data: []
                    }, {
                        seriesName: 'Condiments',
                        renderAs: 'line',
                        data: []
                    }, {
                        seriesName: 'Confections',
                        renderAs: 'line',
                        data: []
                    }, {
                        seriesName: 'Dairy Products',
                        renderAs: 'line',
                        data: []
                    }, {
                        seriesName: 'Grains / Cereals',
                        renderAs: 'line',
                        data: []
                    }, {
                        seriesName: 'Meat / Poultry',
                        renderAs: 'line',
                        data: []
                    }, {
                        seriesName: 'Produce',
                        renderAs: 'line',
                        data: []
                    }, {
                        seriesName: 'Seafood',
                        renderAs: 'line',
                        data: []
                    }, {
                        seriesName: 'Total Units Sold',
                        renderAs: 'line',
                        dashed: '1',
                        parentYAxis: 'S',
                        data: []
                    }]
                }
            },

            // Properties for top performers by sales drill-down chart
            singleSalePerformerSalesTab: {
                type: 'mscolumn3dlinedy',
                id: 'singleSalePerformerSalesTab',
                width: '473',
                height: '340',
                dataFormat: 'json',
                dataSource: {
                    chart: {
                        numberPrefix: '$',
                        xAxisName: 'Year',
                        pYAxisName: 'Amount (US $ in thousands)',
                        sYAxisName: 'No. of orders',
                        theme: 'management-3d'
                    },
                    categories: [{
                        category: []
                    }],
                    dataset: [{
                        seriesName: 'Amount',
                        renderAs: 'column3d',
                        data: []
                    }, {
                        seriesName: 'No. of Orders',
                        renderAs: 'line',
                        showValues: '0',
                        parentYAxis: 'S',
                        data: []
                    }]
                }

            },

            // Properties for top categories by sales in drill-down chart
            productWiseSales: {
                type: 'mscolumn3dlinedy',
                dataFormat: 'json',
                dataSource: {
                    chart: {
                        numberPrefix: '$',
                        xAxisName: 'Products',
                        pYAxisName: 'Revenue (US $ in thousands)',
                        sYAxisName: 'Units Sold',
                        theme: 'management-3d'
                    },
                    categories: [{
                        category: []
                    }],
                    dataset: [{
                        seriesName: 'Revenue',
                        renderAs: 'column3d',
                        showValues: '0',
                        data: []
                    }, {
                        seriesName: 'Units Sold',
                        renderAs: 'line',
                        parentYAxis: 'S',
                        data: []
                    }]
                }
            },

           

            // Properties for category wise sales chart
            categoryWiseSales: {
                type: 'mscolumn3dlinedy',
                dataFormat: 'json',
                dataSource: {
                    chart: {
                        numberPrefix: '$',
                        xAxisName: 'Products',
                        pYAxisName: 'Revenue (US $ in thousands)',
                        sYAxisName: 'Units Sold',
                        theme: 'management-3d'
                    },
                    categories: [{
                        category: []
                    }],
                    dataset: [{
                        seriesName: 'Revenue',
                        renderAs: 'column3d',
                        showValues: '0',
                        data: []
                    }, {
                        seriesName: 'Units Sold',
                        renderAs: 'line',
                        showValues: '0',
                        parentYAxis: 'S',
                        data: []
                    }]
                }
            }
        };


        // Employee IDs & Names
        employeeDetails = managementData.employeeDetails;

        // Application specific methods.
        app = {

            // Handles application initialization. Any code that you need to execute before the all the dashboards are executed can be specified here.
            init: function(callback) {
                callback();
            }
        };

        // Setters that are used to set chart specific datasource attributes.
        chartDataSource = {

            // Sets the data object for a given chart datasource
            setData: function(datasource, data, _options) {
                var options = typeof _options === 'undefined' ? false : _options,
                    formatted,
                    parentValue,
                    parentTitle,
                    dataLength = data.length,
                    i;

                datasource.data = [];

                for (i = 0; i < dataLength; i++) {
                    formatted = data[i].data;
                    if (typeof formatted.tooltip !== 'undefined') {

                        parentTitle = formatted['label'];

                        if (options.tooltipFormatter) {
                            parentValue = options.tooltipFormatter(formatted['value']);
                        } else {
                            parentValue = formatted['value'];
                        }

                        formatted['tooltext'] = dataHelpers.formatToolText({
                            title: parentTitle,
                            value: parentValue
                        }, formatted.tooltip);

                        delete formatted.tooltip;
                    }

                    datasource.data.push(formatted);
                }
            },

            // Sets the caption of a chart
            setCaption: function(datasource, caption) {
                datasource.chart.caption = caption;
            },

            // Set categories for a chart
            setCategories: function(datasource, categories) {
                datasource.categories[0].category = categories;
            },

            // Set an entire dataset for a chart particularly for a multi-series chart
            setDataSet: function(datasource, dataset) {
                datasource.dataset = dataset;
            },

            // Set the data object for a given dataset
            setDataSetData: function(datasource, data) {
                var datasetLength = datasource.dataset.length,
                    i;

                for (i = 0; i < datasetLength; i++) {
                    datasource.dataset[i].data = data[i].data;
                }
            }

        };

        // Handles dom querying.
        dom = {

            // Get the value of a specific dom element by id.
            getElementValue: function(id) {
                return DOCUMENT.getElementById(id).value;
            },

            // Get dom element by id.
            getById: function(id) {
                return DOCUMENT.getElementById(id);
            },

            // Get value of current dom element in scope.
            queryCurrentValue: function(id, obj) {
                // IE fix, because IE doesn't recognize `this` well enough.
                if (obj === window) {
                    return dom.getElementValue(id);
                }

                return obj.value;
            }
        };

        // Set of helper methods that handles presentation.
        viewHelpers = {

            // Adds active class for the sidebar list element to specify the active dashboard.
            addActiveLink: function(id) {
                var $link = dom.getById(id);
                $link.className = 'active';
            },

            // Remove the active class name for a tab.
            removeActiveLink: function(id) {
                var $link = dom.getById(id);
                $link.className = '';
            },

            // Present the modal on the screen.
            showModal: function(id, title, _props, callback) {
                var props = _props,
                    chart,
                    $modalWrapper = dom.getById('modalWrapper'),
                    $modal = dom.getById('modal'),
                    $title = dom.getById('modal-title');

                $modal.style.width = '968px';
                $modal.style.height = '560px';

                $title.innerHTML = title;
                props.id = 'modal-inner';
                props.renderAt = 'modal';
                props.width = '968';
                props.height = '500';

                chartsInModal[id] = {
                    props: props,
                    chart: new FusionCharts(props)
                };

                activeModalChart = chartsInModal[id]['chart'];

                if (ie6) {
                    var select = DOCUMENT.getElementsByTagName('select'),
                        topLevelFilter = dom.getById('top-level-select-filter'),
                        selectLength = select.length,
                        i;

                    for (i = 0; i < selectLength; i++) {
                        select[i].style.visibility = 'hidden';
                    }
                    topLevelFilter.style.visibility = 'hidden';
                }

                // Delay in ie since it was not calculating the width/height of the container correctly.
                if (isLessThan8()) {
                    setTimeout(function() {
                        callback(chartsInModal[id]['chart']);
                    }, 50);
                } else {
                    callback(chartsInModal[id]['chart']);
                }

                var charts = getElementsByClassName('div', 'fusioncharts-container');
                var chartsLength = charts.length

                for (i = 0; i < chartsLength; i++) {
                    charts[i].style.position = '';
                    charts[i].children[0].style.position = '';
                }
                $modalWrapper.style.visibility = 'visible';
                $modalWrapper.style.zIndex = '2';

                eventStates.modalShown = true;
            }
        };

        /**
         * Helper Methods for filtering data etc.
         */
        dataHelpers = {

            // Convert a string to a slug.
            // For eg.: Meat / Poultry becomes meat_poultry
            slugize: function(_name) {
                var name = _name.toLowerCase().split(' ').join('/').split('/'),
                    label = [],
                    nameLength = name.length,
                    i;

                for (i = 0; i < nameLength; i++) {
                    if (name[i].trim()) {
                        label.push(name[i]);
                    }
                }

                return label.join('_').trim();
            },

            // Filter / Limit the number of category objects
            // i.e., if you pass 10 categories and limit it to a certain number like 5, it will return 5 categories
            numberFilterCategories: function(total, config, _options) {
                var data = [],
                    i;

                if (total === 'all') {
                    data = config['all'];
                } else {
                    for (i = 0; i < parseInt(total); i++) {
                        data.push(config['all'][i]);
                    }
                }

                return data;
            },

            // Filter / Limit the dataset.
            numberFilterDataSet: function(total, _dataset) {
                var dataset = _dataset['all'],
                    series1_data = {
                        data: []
                    },
                    series2_data = {
                        data: []
                    },
                    i;

                if (total === 'all') {
                    series1_data = dataset[0];
                    series2_data = dataset[1];
                } else {
                    for (i = 0; i < parseInt(total); i++) {
                        series1_data.data.push(dataset[0].data[i]);
                        series2_data.data.push(dataset[1].data[i]);
                    }
                }

                return [series1_data, series2_data];
            },

            // Filter / Limit the data object for a chart
            numberFilterData: function(total, _data, _options) {
                var data = _data['all'],
                    result = [],
                    options = typeof _options === 'undefined' ? null : _options,
                    resultLength,
                    i;

                if (total === 'all') {
                    result = data;
                } else {
                    for (i = 0; i < parseInt(total); i++) {
                        result.push(data[i]);
                    }
                }

                resultLength = result.length;

                if (options && options.removeLink) {
                    for (i = 0; i < resultLength; i++) {
                        delete result[i].data.link;
                    }
                }

                return result;
            },

            // Custom ToolText format for all the charts.
            formatToolText: function(parent, obj) {
                var html = [],
                    result,
                    key;

                for (key in obj) {
                    html.push(key + ' - ' + obj[key]);
                }

                result = parent.title + ' - ' + parent.value + '<div class="tooltip-border"></div><div class="tooltip-content">' + html.join('<br>') + '</div>';

                return result;
            },

            // ToolTip formatting for a particluar chart.
            tooltipFormatters: {
                averageShippingTimeChart: function(data) {
                    return data + ' days';
                }
            }
        };

        /**
         * Table Component that displays table for a given chart.
         */
        function TableComponent(config, options) {

            var self = this;

            self.options = options;

            self.config = config;

            self.dataset = config.dataSource.dataset;

            self.datasource = config.dataSource;

            // Render the table.
            self.render = function() {
                var html = '',
                    rows = {},
                    formattingOptions = self.datasource.chart,
                    renderAt = self.config.renderAt + '-table',
                    categories = self.datasource.categories[0].category,
                    format,
                    $table,
                    datasetLength = self.dataset.length,
                    i, j, dataLength;

                html += '<table><thead><tr>';

                if (self.datasource.chart.xAxisName) {
                    html += '<th>' + self.datasource.chart.xAxisName + '</th>';
                }

                // Set Headings
                for (i = 0; i < datasetLength; i++) {
                    html += '<th class="text-right">' + self.dataset[i].seriesName + '</th>';
                }

                html += '</tr></thead>';

                // Set Rows
                for (i = 0; i < datasetLength; i++) {
                    dataLength = self.dataset[i].data.length;
                    for (j = 0; j < dataLength; j++) {
                        if (!rows[j]) {
                            rows[j] = {};
                        }

                        rows[j][i] = self.dataset[i].data[j].value;
                    }
                }

                html += '<tbody>';

                var count = 0,
                    columnCount;

                for (var row in rows) {
                    if (count % 2 === 0) {
                        html += '<tr>';
                    } else {
                        html += '<tr class="odd-row">';
                    }
                    html += '<td>' + categories[count].label + '</td>';
                    columnCount = 0;
                    for (key in rows[row]) {
                        if (self.options.format) {
                            format = self.options.format[columnCount];
                        } else {
                            format = {};
                        }
                        format['formatNumberScale'] = '0';
                        html += '<td class="text-right">' + FusionCharts.formatNumber(rows[row][key], format) + '</td>';
                        columnCount++;
                    }
                    html += '</tr>';
                    count++;
                }


                html += '</tbody></table>';

                $table = dom.getById(renderAt);
                dom.getById(self.config.renderAt).style.display = 'none';

                $table.innerHTML = html;
                $table.style.display = '';
                dom.getById(self.config.renderAt + '-table').style.display = 'block';
            };

            // Hide the table
            self.hide = function() {
                dom.getById(self.config.renderAt + '-table').style.display = 'none';
            };
        };

        /**
         * Consists of all the dashboards.
         */
        dashboards = {

            // An item is a single dashboard.

            items: {},

            // Current active / shown dashboard.
            active: null,

            // Current year in focus.
            currentYear: null,

            // Add a single dashboard to the items object.
            add: function(id, callback) {
                this.items[id] = {
                    rendered: false,
                    callback: callback,
                    currentYear: currentYear
                };
            },

            // Run / Execute the callback of a particular dashboard.
            run: function(id) {
                var self = this,
                    tab;

                FusionCharts.ready(function() {
                    tab = dom.getById(id + '-tab');
                    tab.className = '';
                    self.items[id].rendered = true;
                    self.items[id].callback();
                    viewHelpers.addActiveLink(id + '-' + 'link');
                    self.active = id;
                    self.items[id].currentYear = currentYear;

                    dom.getById('loader').className = 'hidden';
                });
            },

            // Show a dashboard. This also toggles the active dashboard.
            show: function(id) {
                var self = this,
                    $element,
                    $activeElement,
                    $link,
                    redraw = false;

                if (this.items[this.active].rendered) {
                    if (currentYear != this.items[id].currentYear) {
                        redraw = true;
                        this.items[id].currentYear = currentYear;
                    }
                }

                for (key in this.items) {
                    $element = dom.getById(key + '-tab');
                    viewHelpers.addActiveLink(key + '-' + 'link');
                    $link = dom.getById(key + '-' + 'link');

                    if (key !== id) {
                        $element.style.display = 'none';
                        $link.className = '';
                    } else {
                        this.active = key;
                        $activeElement = $element;
                    }
                }

                $activeElement.style.display = 'block';
                if (!this.items[this.active].rendered) {
                    this.run(this.active);
                }
                if (redraw) {
                    this.redraw(id);
                }
            },

            // Redraw all the charts of a particular dashboard.
            redraw: function(id) {
                FusionCharts.ready(function() {
                    var ids = getEventIds(id);
                    eventListeners.trigger('change', function(e) {
                        eventHandlers.trigger.topLevelYearFilter(ids, {
                            trigger: e,
                            year: currentYear,
                            eventName: 'change'
                        });
                    });
                });
            }
        };

        /**
         * Certain event states for the application
         */
        eventStates = {

            // Flag that represents whether a modal is shown.
            modalShown: false,

            // Check if a modal is opened.
            isModalOpened: function() {
                return this.modalShown;
            },

            // Check if a modal is closed.
            isModalClosed: function() {
                return !this.isModalOpened();
            }
        };

        /**
         * Handles adding of events and triggering.
         */
        eventListeners = {

            // Add an event for a specific dom id / object.
            add: function(id, eventName, callback, _isObject) {
                var isObject = typeof _isObject === 'undefined' ? false : _isObject,
                    $element;

                if (isObject) {
                    $element = id;
                } else {
                    $element = DOCUMENT.getElementById(id);
                }

                if ($element.addEventListener) {
                    $element.addEventListener(eventName, callback);
                } else if ($element.attachEvent) {
                    $element.attachEvent('on' + eventName, callback);
                }
            },

            // Trigger / Fire an event.
            trigger: function(eventType, callback) {
                var mouseEvent;

                if (DOCUMENT.createEvent) {
                    mouseEvent = DOCUMENT.createEvent('MouseEvent');

                    mouseEvent.initEvent(eventType, true, true);
                    callback(mouseEvent);
                } else if (DOCUMENT.createEventObject) {
                    mouseEvent = DOCUMENT.createEventObject();
                    callback(mouseEvent);
                }
            }
        };

        /**
         * Callbacks for a particluar event.
         */
        eventHandlers = {

            // Trigger callback.
            trigger: {

                // Trigger all filters for the current active dashboard.
                topLevelYearFilter: function(ids, options) {
                    var i,
                        idsLength = ids.length;

                    for (i = 0; i < idsLength; i++) {
                        var $element = dom.getById(ids[i]);
                        $element.value = options.year;

                        if ($element.dispatchEvent) {
                            $element.dispatchEvent(options.trigger);
                        } else if ($element.fireEvent) {
                            $element.fireEvent('on' + options.eventName, options.trigger);
                        }
                    }
                }
            },

            // Stop propogation
            stopPropagation: function(e) {
                if (e.stopPropagation) {
                    e.stopPropagation();
                } else if (e.returnValue) {
                    e.returnValue = false;
                }

                if (window.event) {
                    if (window.event.cancelBubble !== 'undefined') {
                        window.event.cancelBubble = true
                    }
                }
            }
        };

        /**
         * Global Event Listeners that are specific tthe entire application.
         */

            // Event listener for closing the modal.
        eventListeners.add('close-modal', 'click', function(e) {
            var i;

            if (e.preventDefault) {
                e.preventDefault();
            }

            var modalWrapper = dom.getById('modalWrapper');

            if (activeModalChart) {
                activeModalChart.dispose();
            }

            modalWrapper.style.visibility = 'hidden';
            modalWrapper.style.zIndex = 0;
            modalWrapper.className = '';

            if (ie6) {
                var topLevelFilter = dom.getById('top-level-select-filter'),
                    select = DOCUMENT.getElementsByTagName('select'),
                    selectLength = select.length;

                for (i = 0; i < selectLength; i++) {
                    select[i].style.visibility = '';
                }
                topLevelFilter.style.visibility = '';
            }

            eventStates.modalShown = false;
        });

        // Event listener for the top level year filter.
        eventListeners.add('global_year_filter', 'change', function() {
            var year = dom.queryCurrentValue('global_year_filter', this);
            currentYear = year;

            dashboards.items[dashboards.active].currentYear = currentYear;
            eventListeners.trigger('change', function(e) {
                eventHandlers.trigger.topLevelYearFilter(getEventIds(dashboards.active), {
                    trigger: e,
                    year: currentYear,
                    eventName: 'change'
                });
            });
        });

        // Event listener that closes the modal on click anywhere outside the modal.
        eventListeners.add('modalWrapper', 'click', function(e) {
            var $closeModal = dom.getById('close-modal');

            eventHandlers.stopPropagation(e);

            if (eventStates.isModalOpened()) {
                eventListeners.trigger('click', function(e) {
                    if ($closeModal.dispatchEvent) {
                        $closeModal.dispatchEvent(e);
                    } else if ($closeModal.fireEvent) {
                        $closeModal.fireEvent('onclick', e);
                    }
                });
            }

        });

        // Event listener to override the modal wrapper's event click.
        eventListeners.add('modal', 'click', eventHandlers.stopPropagation);

        // Event listener to override the modal wrapper's event click.
        eventListeners.add('modal-title', 'click', eventHandlers.stopPropagation);

        // Summary Dashboard / Dashboard Tab 1
        dashboards.add('summary', function() {

            // Config for Yearly Sales Comparison Chart.
            var yearlySalesChart,
                yearlySalesChartConfig = chartConfig.yearlySalesSummary,
                yearlySalesSummaryCategories = managementData.yearlySalesSummaryCategories,
                yearlySalesSummaryData = [{"data": [{
                    "value": globalData[0][0]
                }, {
                    "value": globalData[0][1]
                }, {
                    "value": globalData[0][2]
                }, {
                    "value": globalData[0][3]
                }, {
                    "value": globalData[0][4]
                }, {
                    "value": globalData[0][5]
                }]
                }, {
                    "data": [{
                        "value": globalData[0][0]
                    }, {
                        "value": globalData[0][1]
                    }, {
                        "value": globalData[0][2]
                    }, {
                        "value": globalData[0][3]
                    }, {
                        "value": globalData[0][4]
                    }, {
                        "value": globalData[0][5]
                    }]
                }];

            // Config for Top Sales Performers Chart.
            var topSalesPerformers,
                topSalesPerformersChartConfig = chartConfig.topSalesPerformersSummary,
                topSalesPerformersSummaryCategories = managementData.topSalesPerformersSummaryCategories,
                topSalesPerformersSummaryData = managementData.topSalesPerformersSummaryData;

            // Config for Top Categories Chart.
            var topSalesCategoriesChart,
                topSalesCategoriesSummaryChartConfig = chartConfig.topSalesCategoriesSummary,
                topSalesCategoriesSummaryData = managementData.topSalesCategoriesSummaryData;

            // Config for Top Products Chart.
            var topProductsSummaryChart,
                topProductsSummaryChartConfig = chartConfig.topProductsSummary,
                topProductsSummaryCategories = managementData.topProductsSummaryCategories,
                topProductsSummaryData = managementData.topProductsSummaryData;

            // Config for Top Countries by Revenue Chart.
            var topRevenuesCountriesSummaryChart,
                topRevenuesCountriesSummaryChartConfig = chartConfig.topRevenuesCountriesSummary,
                topRevenuesCountriesSummaryCategories = managementData.topRevenuesCountriesSummaryCategories,
                topRevenuesCountriesSummaryData = managementData.topRevenuesCountriesSummaryData;

            // Config for Top Cities by Sales Chart.
            var topRevenuesCitiesSummaryChart,
                topRevenuesCitiesSummaryChartConfig = chartConfig.topRevenuesCitiesSummary,
                topRevenuesCitiesSummaryData = managementData.topRevenuesCitiesSummaryData;

            // Config for Top Customers Chart.
            var topCustomersSummaryChart,
                topCustomersSummaryChartConfig = chartConfig.topCustomersSummary,
                topCustomersSummaryCategories = managementData.topCustomersSummaryCategories,
                topCustomersSummaryData = managementData.topCustomersSummaryData,
                topCustomersTable;

            // Yearly Sales Chart
            chartDataSource.setCategories(yearlySalesChartConfig.dataSource, yearlySalesSummaryCategories);
            chartDataSource.setDataSetData(yearlySalesChartConfig.dataSource, yearlySalesSummaryData);
            yearlySalesChart = new FusionCharts(yearlySalesChartConfig);
            yearlySalesChart.render();


            // Top Sales Performers Chart
            chartDataSource.setCategories(topSalesPerformersChartConfig.dataSource, dataHelpers.numberFilterCategories(3, topSalesPerformersSummaryCategories[currentYear]));
            chartDataSource.setDataSetData(topSalesPerformersChartConfig.dataSource, dataHelpers.numberFilterDataSet(3, topSalesPerformersSummaryData[currentYear]));
            topSalesPerformersChart = new FusionCharts(topSalesPerformersChartConfig);
            topSalesPerformersChart.render();


            // Top Sales Categories Chart
            chartDataSource.setData(topSalesCategoriesSummaryChartConfig.dataSource, dataHelpers.numberFilterData(5, topSalesCategoriesSummaryData[currentYear], {
                removeLink: true
            }));
            topSalesCategoriesChart = new FusionCharts(topSalesCategoriesSummaryChartConfig);
            topSalesCategoriesChart.render();

            // Top Revenues Countries Chart
            chartDataSource.setCategories(topRevenuesCountriesSummaryChartConfig.dataSource, dataHelpers.numberFilterCategories(5, topRevenuesCountriesSummaryCategories['2014']));
            chartDataSource.setDataSetData(topRevenuesCountriesSummaryChartConfig.dataSource, dataHelpers.numberFilterDataSet(5, topRevenuesCountriesSummaryData[currentYear]));
            topRevenuesCountriesSummaryChart = new FusionCharts(topRevenuesCountriesSummaryChartConfig);
            topRevenuesCountriesSummaryChart.render();

            // Top Products Chart
            chartDataSource.setCategories(topProductsSummaryChartConfig.dataSource, dataHelpers.numberFilterCategories(5, topProductsSummaryCategories[currentYear]));
            chartDataSource.setDataSetData(topProductsSummaryChartConfig.dataSource, dataHelpers.numberFilterDataSet(5, topProductsSummaryData[currentYear]));
            topProductsSummaryChart = new FusionCharts(topProductsSummaryChartConfig);
            topProductsSummaryChart.render();

            // Top Revenues Cities Categories Chart
            chartDataSource.setData(topRevenuesCitiesSummaryChartConfig.dataSource, dataHelpers.numberFilterData(5, topRevenuesCitiesSummaryData[currentYear]));
            topRevenuesCitiesSummaryChart = new FusionCharts(topRevenuesCitiesSummaryChartConfig);
            topRevenuesCitiesSummaryChart.render();

            // Top Customers Summary
            chartDataSource.setCategories(topCustomersSummaryChartConfig.dataSource, dataHelpers.numberFilterCategories(5, topCustomersSummaryCategories[currentYear]));
            chartDataSource.setDataSetData(topCustomersSummaryChartConfig.dataSource, dataHelpers.numberFilterDataSet(5, topCustomersSummaryData[currentYear]));
            topCustomersTable = new TableComponent(topCustomersSummaryChartConfig, {
                format: [{}, {
                    numberPrefix: '$'
                }]
            });
            topCustomersSummaryChart = new FusionCharts(topCustomersSummaryChartConfig);
            topCustomersSummaryChart.render();


            /**
             * Event Listeners for top sales performers chart.
             */

                // Year filter.
            eventListeners.add('top_sales_performers_summary_year_filter', 'change', function() {
                var year = dom.queryCurrentValue('top_sales_performers_summary_year_filter', this);
                var numberOfEmployees = dom.getElementValue('top_sales_performers_summary_number_filter');

                chartDataSource.setCategories(topSalesPerformersChartConfig.dataSource, dataHelpers.numberFilterCategories(numberOfEmployees, topSalesPerformersSummaryCategories[year]));
                chartDataSource.setDataSetData(topSalesPerformersChartConfig.dataSource, dataHelpers.numberFilterDataSet(numberOfEmployees, topSalesPerformersSummaryData[year]));
                topSalesPerformersChart.setJSONData(topSalesPerformersChartConfig.dataSource);
            });

            // Number filter.
            eventListeners.add('top_sales_performers_summary_number_filter', 'change', function() {
                var numberOfEmployees = dom.queryCurrentValue('top_sales_performers_summary_number_filter', this);
                var year = dom.getElementValue('top_sales_performers_summary_year_filter');

                chartDataSource.setCategories(topSalesPerformersChartConfig.dataSource, dataHelpers.numberFilterCategories(numberOfEmployees, topSalesPerformersSummaryCategories[year]));
                chartDataSource.setDataSetData(topSalesPerformersChartConfig.dataSource, dataHelpers.numberFilterDataSet(numberOfEmployees, topSalesPerformersSummaryData[year]));
                topSalesPerformersChart.setJSONData(topSalesPerformersChartConfig.dataSource);
            });

            /**
             * Event Listeners for top products chart.
             */

                // Year filter.
            eventListeners.add('top_products_summary_year_filter', 'change', function() {
                var year = dom.queryCurrentValue('top_products_summary_year_filter', this);
                var numberOfProducts = dom.getElementValue('top_products_summary_number_filter');

                chartDataSource.setCategories(topProductsSummaryChartConfig.dataSource, dataHelpers.numberFilterCategories(numberOfProducts, topProductsSummaryCategories[year]));
                chartDataSource.setDataSetData(topProductsSummaryChartConfig.dataSource, dataHelpers.numberFilterDataSet(numberOfProducts, topProductsSummaryData[year]));
                topProductsSummaryChart.setJSONData(topProductsSummaryChartConfig.dataSource);
            });

            // Number filter.
            eventListeners.add('top_products_summary_number_filter', 'change', function() {
                var numberOfProducts = dom.queryCurrentValue('top_products_summary_number_filter', this);
                var year = dom.getElementValue('top_products_summary_year_filter');

                chartDataSource.setCategories(topProductsSummaryChartConfig.dataSource, dataHelpers.numberFilterCategories(numberOfProducts, topProductsSummaryCategories[year]));
                chartDataSource.setDataSetData(topProductsSummaryChartConfig.dataSource, dataHelpers.numberFilterDataSet(numberOfProducts, topProductsSummaryData[year]));
                topProductsSummaryChart.setJSONData(topProductsSummaryChartConfig.dataSource);
            });

            /**
             * Event Listeners for top categories chart.
             */

                // Year filter.
            eventListeners.add('top_categories_summary_year_filter', 'change', function() {
                var year = dom.queryCurrentValue('top_products_summary_year_filter', this);
                var numberOfProducts = dom.getElementValue('top_categories_summary_number_filter');

                chartDataSource.setData(topSalesCategoriesSummaryChartConfig.dataSource, dataHelpers.numberFilterData(numberOfProducts, topSalesCategoriesSummaryData[year], {
                    removeLink: true
                }));
                topSalesCategoriesChart.setJSONData(topSalesCategoriesSummaryChartConfig.dataSource);
            });

            // Number filter.
            eventListeners.add('top_categories_summary_number_filter', 'change', function() {
                var numberOfProducts = dom.queryCurrentValue('top_categories_summary_number_filter', this);
                var year = dom.getElementValue('top_categories_summary_year_filter');

                chartDataSource.setData(topSalesCategoriesSummaryChartConfig.dataSource, dataHelpers.numberFilterData(numberOfProducts, topSalesCategoriesSummaryData[year], {
                    removeLink: true
                }));
                topSalesCategoriesChart.setJSONData(topSalesCategoriesSummaryChartConfig.dataSource);
            });

            /**
             * Event Listeners for top countries by revenue chart.
             */

                // Year filter.
            eventListeners.add('top_revenues_country_year_filter', 'change', function() {
                var year = dom.queryCurrentValue('top_revenues_country_year_filter', this);
                var numberOfCountires = parseInt(dom.getElementValue('top_revenues_country_number_filter'));

                chartDataSource.setCategories(topRevenuesCountriesSummaryChartConfig.dataSource, dataHelpers.numberFilterCategories(numberOfCountires, topRevenuesCountriesSummaryCategories['2014']));
                chartDataSource.setDataSetData(topRevenuesCountriesSummaryChartConfig.dataSource, dataHelpers.numberFilterDataSet(numberOfCountires, topRevenuesCountriesSummaryData[year]));

                topRevenuesCountriesSummaryChart.setJSONData(topRevenuesCountriesSummaryChartConfig.dataSource);
            });

            // Number filter.
            eventListeners.add('top_revenues_country_number_filter', 'change', function() {
                var numberOfCountires = dom.queryCurrentValue('top_revenues_country_number_filter', this);
                var year = parseInt(dom.getElementValue('top_revenues_country_year_filter'));

                chartDataSource.setCategories(topRevenuesCountriesSummaryChartConfig.dataSource, dataHelpers.numberFilterCategories(numberOfCountires, topRevenuesCountriesSummaryCategories['2014']));
                chartDataSource.setDataSetData(topRevenuesCountriesSummaryChartConfig.dataSource, dataHelpers.numberFilterDataSet(numberOfCountires, topRevenuesCountriesSummaryData[year]));

                topRevenuesCountriesSummaryChart.setJSONData(topRevenuesCountriesSummaryChartConfig.dataSource);
            });

            /**
             * Event Listeners for top cities by revenue chart.
             */

                // Year filter.
            eventListeners.add('top_revenues_cities_summary_year_filter', 'change', function() {
                var year = dom.queryCurrentValue('top_revenues_cities_summary_year_filter', this);
                var numberOfCities = dom.getElementValue('top_revenues_cities_summary_number_filter');

                chartDataSource.setData(topRevenuesCitiesSummaryChartConfig.dataSource, dataHelpers.numberFilterData(numberOfCities, topRevenuesCitiesSummaryData[year]));
                topRevenuesCitiesSummaryChart.setJSONData(topRevenuesCitiesSummaryChartConfig.dataSource);
            });

            // Number filter.
            eventListeners.add('top_revenues_cities_summary_number_filter', 'change', function() {
                var numberOfCities = dom.queryCurrentValue('top_revenues_cities_summary_number_filter', this);
                var year = dom.getElementValue('top_revenues_cities_summary_year_filter');

                chartDataSource.setData(topRevenuesCitiesSummaryChartConfig.dataSource, dataHelpers.numberFilterData(numberOfCities, topRevenuesCitiesSummaryData[year]));
                topRevenuesCitiesSummaryChart.setJSONData(topRevenuesCitiesSummaryChartConfig.dataSource);
            });

            /**
             * Event Listeners for top customers chart.
             */

                // Year filter.
            eventListeners.add('top_customers_summary_year_filter', 'change', function() {
                var year = dom.queryCurrentValue('top_customers_summary_year_filter', this);
                var numberOfCustomers = dom.getElementValue('top_customers_summary_number_filter');

                chartDataSource.setCategories(topCustomersSummaryChartConfig.dataSource, dataHelpers.numberFilterCategories(numberOfCustomers, topCustomersSummaryCategories[year]));
                chartDataSource.setDataSetData(topCustomersSummaryChartConfig.dataSource, dataHelpers.numberFilterDataSet(numberOfCustomers, topCustomersSummaryData[year]));

                if (numberOfCustomers === '10') {
                    topCustomersTable.render();
                } else {
                    topCustomersTable.hide();
                    dom.getById(topCustomersSummaryChartConfig.renderAt).style.display = '';
                    topCustomersSummaryChart.setJSONData(topCustomersSummaryChartConfig.dataSource);
                }
            });

            // Number filter.
            eventListeners.add('top_customers_summary_number_filter', 'change', function() {
                var numberOfCustomers = dom.queryCurrentValue('top_customers_summary_number_filter', this);
                var year = dom.getElementValue('top_customers_summary_year_filter');

                chartDataSource.setCategories(topCustomersSummaryChartConfig.dataSource, dataHelpers.numberFilterCategories(numberOfCustomers, topCustomersSummaryCategories[year]));
                chartDataSource.setDataSetData(topCustomersSummaryChartConfig.dataSource, dataHelpers.numberFilterDataSet(numberOfCustomers, topCustomersSummaryData[year]));

                if (numberOfCustomers === '10') {
                    topCustomersTable.render();
                } else {
                    topCustomersTable.hide();
                    dom.getById(topCustomersSummaryChartConfig.renderAt).style.display = 'block';
                    topCustomersSummaryChart.setJSONData(topCustomersSummaryChartConfig.dataSource);
                }
            });

        });

        // Sales Dashboard / Dashboard Tab 2
        dashboards.add('sales', function() {
            // Config for Survival Chart.


            /*var survivalDataTabChart,
             survivalDataTabChartConfig = chartConfig.survivalDataTab,
             survivalDataTabCategories = managementData.survivalDataTabCategories,
             survivalDataTabData = managementData.survivalDataTabData;*/



            // Config for Top Categories by Sales Chart.
            var topCategoriesSalesTabChart,
                topCategoriesSalesTabChartConfig = chartConfig.topCategoriesSalesTab,
                topCategoriesSalesTabCategories = managementData.topCategoriesSalesTabCategories,
                topCategoriesSalesTabData = managementData.topCategoriesSalesTabData;

            // Config for Top Performers by Sales Chart.
            var topPerformersSalesTabChart,
                topPerformersSalesTabChartConfig = chartConfig.topPerformersSalesTab,
                topPerformersSalesTabData = managementData.topPerformersSalesTabData;

            // Config for drilldown on top performers by sales chart.
            var singleSalePerformerSalesTabChart,
                singleSalePerformerSalesTabConfig = chartConfig.singleSalePerformerSalesTab,
                singleSalePerformerSalesTabCategories = managementData.singleSalePerformerSalesTabCategories,
                singleSalePerformerSalesTabData = managementData.singleSalePerformerSalesTabData;

            // Config for drilldown on top categories by sales chart.
            var categoryWiseSalesChart,
                categoryWiseSalesChartConfig = chartConfig.categoryWiseSales,
                categoryWiseSalesCategories = managementData.productWiseSalesCategories,
                categoryWiseSalesData = managementData.productWiseSalesData;

            // Config for Monthly Sales Chart
            var topMonthlySalesTabChart,
                topMonthlySalesTabChartConfig = chartConfig.topMonthlySalesTab,
                topMonthlySalesData = managementData.topMonthlySalesTabData,
                topMonthlySalesTabCategories = managementData.topMonthlySalesTabCategories;





            // Top Sales Categories Chart
            chartDataSource.setData(topCategoriesSalesTabChartConfig.dataSource, topCategoriesSalesTabData[currentYear]);
            topCategoriesSalesChart = new FusionCharts(topCategoriesSalesTabChartConfig);
            topCategoriesSalesChart.render();

            // Top Sales Performers Chart
            chartDataSource.setData(topPerformersSalesTabChartConfig.dataSource, topPerformersSalesTabData[currentYear]);
            topPerformersSalesTabChart = new FusionCharts(topPerformersSalesTabChartConfig);
            topPerformersSalesTabChart.render();

            // Sales Details of Individual Performer Chart
            chartDataSource.setCategories(singleSalePerformerSalesTabConfig.dataSource, singleSalePerformerSalesTabCategories);

            // Monthly Categories Chart
            chartDataSource.setCategories(topMonthlySalesTabChartConfig.dataSource, topMonthlySalesTabCategories);
            chartDataSource.setDataSetData(topMonthlySalesTabChartConfig.dataSource, topMonthlySalesData[currentYear]);
            topMonthlySalesTabChart = new FusionCharts(topMonthlySalesTabChartConfig);
            topMonthlySalesTabChart.render();

            /**
             * Event listeners for top performers chart.
             */

                // Drilldown that opens in a modal
            eventListeners.add(topPerformersSalesTabChart, 'dataplotClick', function(e) {
                var employeeSlug;

                if (e.preventDefault) { e.preventDefault(); }

                employeeSlug = dataHelpers.slugize(arguments[1]['categoryLabel']);
                chartDataSource.setDataSetData(singleSalePerformerSalesTabConfig.dataSource, singleSalePerformerSalesTabData[employeeSlug]);
                viewHelpers.showModal('singleSalePerformerSalesTabChart', 'Sales Details of ' + employeeDetails[employeeSlug]['name'], singleSalePerformerSalesTabConfig, function(chart) {
                    chart.render();
                });
            }, true);

            /**
             * Event listeners for top monthly sales chart.
             */

            // Year filter.
            eventListeners.add('top_monthly_sales_year_filter', 'change', function() {
                var year = dom.queryCurrentValue('top_monthly_sales_year_filter', this);

                chartDataSource.setDataSetData(topMonthlySalesTabChartConfig.dataSource, topMonthlySalesData[year]);
                topMonthlySalesTabChart.setJSONData(topMonthlySalesTabChartConfig.dataSource);
            });

            // Number filter.
            eventListeners.add('top_categories_sales_tab_year_filter', 'change', function() {
                var year = dom.queryCurrentValue('top_categories_sales_tab_year_filter', this);

                chartDataSource.setData(topCategoriesSalesTabChartConfig.dataSource, topCategoriesSalesTabData[year]);
                topCategoriesSalesChart.setJSONData(topCategoriesSalesTabChartConfig.dataSource);
            });

            // Event listeners for top performers chart in sales dashboard.
            eventListeners.add('top_performers_sales_year_filter', 'change', function() {
                var year = dom.queryCurrentValue('top_performers_sales_year_filter', this);

                chartDataSource.setData(topPerformersSalesTabChartConfig.dataSource, topPerformersSalesTabData[year]);
                topPerformersSalesTabChart.setJSONData(topPerformersSalesTabChartConfig.dataSource);
            });

            /**
             * Event listeners for top categories by sales chart.
             */

                // Drilldown that shows in a modal
            eventListeners.add(topCategoriesSalesChart, 'dataplotClick', function(e) {
                var year = dom.getById('top_categories_sales_tab_year_filter').value;
                var label = dataHelpers.slugize(arguments[1].categoryLabel);

                if (e.preventDefault) { e.preventDefault(); }

                chartDataSource.setCategories(categoryWiseSalesChartConfig.dataSource, categoryWiseSalesCategories[year][label]);
                chartDataSource.setDataSetData(categoryWiseSalesChartConfig.dataSource, categoryWiseSalesData[year][label]);
                viewHelpers.showModal('categoryWiseSalesChart', arguments[1].categoryLabel + ' Sales', categoryWiseSalesChartConfig, function(chart) {
                    chart.render();
                });
            }, true);
        });

        // KPI Dashboard / Dashboard Tab 3
        dashboards.add('kpi', function() {

            //                survivalDataTabCategories = managementData.survivalDataTabCategories,
            var survivalDataTabChart,
                survivalDataTabChartConfig = chartConfig.survivalDataTab,
                survivalDataTabData = {
                    //wil; feed data and years from DB(maybe)   surviveData[0].stages[0].patientNumber
                    "2014": [{
                        "data": [{
                            "label": "Stage One Cancer",
                            "value": surviveData[0][0].stages[0].patientNumber.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Alive With Disease",
                            "value": surviveData[0][0].stages[0].aliveDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Alive With No Disease",
                            "value": surviveData[0][0].stages[0].aliveNoDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Dead",
                            "value": surviveData[0][0].stages[0].dead.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Chemotherapy",
                            "value": surviveData[0][0].stages[0].chemoTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Radiotherapy",
                            "value": surviveData[0][0].stages[0].radioTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Surgery",
                            "value":  surviveData[0][0].stages[0].surgery.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Relapse",
                            "value":  surviveData[0][0].stages[0].relapse.toString(),
                            "link": "#sales"
                        }]
                    }],
                    "2013": [{
                        "data": [{
                            "label": "Stage Two Cancer",
                            "value": surviveData[0][1].stages[1].patientNumber.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Alive With Disease",
                            "value": surviveData[0][1].stages[1].aliveDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Alive With No Disease",
                            "value": surviveData[0][1].stages[1].aliveNoDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Dead",
                            "value": surviveData[0][1].stages[1].dead.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Chemotherapy",
                            "value": surviveData[0][1].stages[1].chemoTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Radiotherapy",
                            "value": surviveData[0][1].stages[1].radioTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Surgery",
                            "value":  surviveData[0][1].stages[1].surgery.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Relapse",
                            "value":  surviveData[0][1].stages[1].relapse.toString(),
                            "link": "#sales"
                        }]
                    }],
                    "2012": [{
                        "data": [{
                            "label": "Stage Three Cancer",
                            "value": surviveData[0][2].stages[2].patientNumber.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Alive With Disease",
                            "value": surviveData[0][2].stages[2].aliveDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Alive With No Disease",
                            "value": surviveData[0][2].stages[2].aliveNoDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Dead",
                            "value": surviveData[0][2].stages[2].dead.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Chemotherapy",
                            "value": surviveData[0][2].stages[2].chemoTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Radiotherapy",
                            "value": surviveData[0][2].stages[2].radioTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Surgery",
                            "value":  surviveData[0][2].stages[2].surgery.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Relapse",
                            "value":  surviveData[0][2].stages[2].relapse.toString(),
                            "link": "#sales"
                        }]
                    }],
                    "2011": [{
                        "data": [{
                            "label": "Stage Four Cancer",
                            "value": surviveData[0][3].stages[3].patientNumber.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Alive With Disease",
                            "value": surviveData[0][3].stages[3].aliveDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Alive With No Disease",
                            "value": surviveData[0][3].stages[3].aliveNoDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Dead",
                            "value": surviveData[0][3].stages[3].dead.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Chemotherapy",
                            "value": surviveData[0][3].stages[3].chemoTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Radiotherapy",
                            "value": surviveData[0][3].stages[3].radioTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Surgery",
                            "value":  surviveData[0][3].stages[3].surgery.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Relapse",
                            "value":  surviveData[0][3].stages[3].relapse.toString(),
                            "link": "#sales"
                        }]
                    }]
                };

            // Config for Cost of Inventory By Product Categories Chart

            //endoCanCategoriesCategories = managementData.inventoryByProductCategoriesCategories,
            var endoCanCategoriesChart,
                endoCanCategoriesChartConfig = chartConfig.endoCanDataTab,
                endoCanCategoriesData = {
                    //wil; feed data and years from DB
                    "2014": [{
                        "data": [{
                            "label": "Stage One Cancer",
                            "value": surviveData[1][0].stages[0].patientNumber.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Alive With Disease",
                            "value": surviveData[1][0].stages[0].aliveDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Alive With No Disease",
                            "value": surviveData[1][0].stages[0].aliveNoDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Dead",
                            "value": surviveData[1][0].stages[0].dead.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Chemotherapy",
                            "value": surviveData[1][0].stages[0].chemoTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Radiotherapy",
                            "value": surviveData[1][0].stages[0].radioTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Surgery",
                            "value":  surviveData[1][0].stages[0].surgery.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Hormone Therapy",
                            "value":  surviveData[1][0].stages[0].hormonalTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Relapse",
                            "value":  surviveData[1][0].stages[0].relapse.toString(),
                            "link": "#sales"
                        }]
                    }],
                    "2013": [{
                        "data": [{
                            "label": "Stage Two Cancer",
                            "value": surviveData[1][1].stages[1].patientNumber.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Alive With Disease",
                            "value": surviveData[1][1].stages[1].aliveDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Alive With No Disease",
                            "value": surviveData[1][1].stages[1].aliveNoDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Dead",
                            "value": surviveData[1][1].stages[1].dead.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Chemotherapy",
                            "value": surviveData[1][1].stages[1].chemoTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Radiotherapy",
                            "value": surviveData[1][1].stages[1].radioTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Surgery",
                            "value":  surviveData[1][1].stages[1].surgery.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Hormone Therapy",
                            "value":  surviveData[1][1].stages[1].hormonalTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Relapse",
                            "value":  surviveData[1][1].stages[1].relapse.toString(),
                            "link": "#sales"
                        }]
                    }],
                    "2012": [{
                        "data": [{
                            "label": "Stage Three Cancer",
                            "value": surviveData[1][2].stages[2].patientNumber.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Alive With Disease",
                            "value": surviveData[1][2].stages[2].aliveDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Alive With No Disease",
                            "value": surviveData[1][2].stages[2].aliveNoDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Dead",
                            "value": surviveData[1][2].stages[2].dead.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Chemotherapy",
                            "value": surviveData[1][2].stages[2].chemoTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Radiotherapy",
                            "value": surviveData[1][2].stages[2].radioTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Surgery",
                            "value":  surviveData[1][2].stages[2].surgery.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Hormone Therapy",
                            "value":  surviveData[1][2].stages[2].hormonalTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Relapse",
                            "value":  surviveData[1][2].stages[2].relapse.toString(),
                            "link": "#sales"
                        }]
                    }],
                    "2011": [{
                        "data": [{
                            "label": "Stage Four Cancer",
                            "value": surviveData[1][3].stages[3].patientNumber.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Alive With Disease",
                            "value": surviveData[1][3].stages[3].aliveDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Alive With No Disease",
                            "value": surviveData[1][3].stages[3].aliveNoDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Dead",
                            "value": surviveData[1][3].stages[3].dead.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Chemotherapy",
                            "value": surviveData[1][3].stages[3].chemoTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Radiotherapy",
                            "value": surviveData[1][3].stages[3].radioTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Surgery",
                            "value":  surviveData[1][3].stages[3].surgery.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Hormone Therapy",
                            "value":  surviveData[1][3].stages[3].hormonalTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Relapse",
                            "value":  surviveData[1][3].stages[3].relapse.toString(),
                            "link": "#sales"
                        }]
                    }]
                };



            // Config for Average Shipping Time Chart
            var fallTubeDataChart,
                fallTubeDataChartConfig = chartConfig.fallTubeDataTab,
                fallTubeData = {
                    //wil; feed data and years from DB
                    "2014": [{
                        "data": [{
                            "label": "Stage One Cancer",
                            "value": surviveData[5][0].stages[0].patientNumber.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Alive With Disease",
                            "value": surviveData[5][0].stages[0].aliveDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Alive With No Disease",
                            "value": surviveData[5][0].stages[0].aliveNoDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Dead",
                            "value": surviveData[5][0].stages[0].dead.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Chemotherapy",
                            "value": surviveData[5][0].stages[0].chemoTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Radiotherapy",
                            "value": surviveData[5][0].stages[0].radioTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Surgery",
                            "value":  surviveData[5][0].stages[0].surgery.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Relapse",
                            "value":  surviveData[5][0].stages[0].relapse.toString(),
                            "link": "#sales"
                        }]
                    }],
                    "2013": [{
                        "data": [{
                            "label": "Stage Two Cancer",
                            "value": surviveData[5][1].stages[1].patientNumber.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Alive With Disease",
                            "value": surviveData[5][1].stages[1].aliveDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Alive With No Disease",
                            "value": surviveData[5][1].stages[1].aliveNoDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Dead",
                            "value": surviveData[5][1].stages[1].dead.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Chemotherapy",
                            "value": surviveData[5][1].stages[1].chemoTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Radiotherapy",
                            "value": surviveData[5][1].stages[1].radioTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Surgery",
                            "value":  surviveData[5][1].stages[1].surgery.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Relapse",
                            "value":  surviveData[5][1].stages[1].relapse.toString(),
                            "link": "#sales"
                        }]
                    }],
                    "2012": [{
                        "data": [{
                            "label": "Stage Three Cancer",
                            "value": surviveData[5][2].stages[2].patientNumber.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Alive With Disease",
                            "value": surviveData[5][2].stages[2].aliveDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Alive With No Disease",
                            "value": surviveData[5][2].stages[2].aliveNoDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Dead",
                            "value": surviveData[5][2].stages[2].dead.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Chemotherapy",
                            "value": surviveData[5][2].stages[2].chemoTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Radiotherapy",
                            "value": surviveData[5][2].stages[2].radioTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Surgery",
                            "value":  surviveData[5][2].stages[2].surgery.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Relapse",
                            "value":  surviveData[5][2].stages[2].relapse.toString(),
                            "link": "#sales"
                        }]
                    }],
                    "2011": [{
                        "data": [{
                            "label": "Stage Four Cancer",
                            "value": surviveData[5][3].stages[3].patientNumber.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Alive With Disease",
                            "value": surviveData[5][3].stages[3].aliveDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Alive With No Disease",
                            "value": surviveData[5][3].stages[3].aliveNoDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Dead",
                            "value": surviveData[5][3].stages[3].dead.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Chemotherapy",
                            "value": surviveData[5][3].stages[3].chemoTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Radiotherapy",
                            "value": surviveData[5][3].stages[3].radioTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Surgery",
                            "value":  surviveData[5][3].stages[3].surgery.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Relapse",
                            "value":  surviveData[5][3].stages[3].relapse.toString(),
                            "link": "#sales"
                        }]
                    }]
                };



            // Config for Customer Satisfaction Chart
            var vulvCanDataChart,
                vulvCanDataChartConfig = chartConfig.vulvCanDataTab,
                vulvCanData = {
                    //wil; feed data and years from DB
                    "2014": [{
                        "data": [{
                            "label": "Stage One Cancer",
                            "value": surviveData[6][0].stages[0].patientNumber.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Alive With Disease",
                            "value": surviveData[6][0].stages[0].aliveDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Alive With No Disease",
                            "value": surviveData[6][0].stages[0].aliveNoDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Dead",
                            "value": surviveData[6][0].stages[0].dead.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Chemotherapy",
                            "value": surviveData[6][0].stages[0].chemoTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Radiotherapy",
                            "value": surviveData[6][0].stages[0].radioTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Surgery",
                            "value":  surviveData[6][0].stages[0].surgery.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Relapse",
                            "value":  surviveData[6][0].stages[0].relapse.toString(),
                            "link": "#sales"
                        }]
                    }],
                    "2013": [{
                        "data": [{
                            "label": "Stage Two Cancer",
                            "value": surviveData[6][1].stages[1].patientNumber.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Alive With Disease",
                            "value": surviveData[6][1].stages[1].aliveDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Alive With No Disease",
                            "value": surviveData[6][1].stages[1].aliveNoDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Dead",
                            "value": surviveData[6][1].stages[1].dead.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Chemotherapy",
                            "value": surviveData[6][1].stages[1].chemoTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Radiotherapy",
                            "value": surviveData[6][1].stages[1].radioTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Surgery",
                            "value":  surviveData[6][1].stages[1].surgery.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Relapse",
                            "value":  surviveData[6][1].stages[1].relapse.toString(),
                            "link": "#sales"
                        }]
                    }],
                    "2012": [{
                        "data": [{
                            "label": "Stage Three Cancer",
                            "value": surviveData[6][2].stages[2].patientNumber.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Alive With Disease",
                            "value": surviveData[6][2].stages[2].aliveDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Alive With No Disease",
                            "value": surviveData[6][2].stages[2].aliveNoDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Dead",
                            "value": surviveData[6][2].stages[2].dead.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Chemotherapy",
                            "value": surviveData[6][2].stages[2].chemoTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Radiotherapy",
                            "value": surviveData[6][2].stages[2].radioTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Surgery",
                            "value":  surviveData[5][2].stages[2].surgery.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Relapse",
                            "value":  surviveData[6][2].stages[2].relapse.toString(),
                            "link": "#sales"
                        }]
                    }],
                    "2011": [{
                        "data": [{
                            "label": "Stage Four Cancer",
                            "value": surviveData[6][3].stages[3].patientNumber.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Alive With Disease",
                            "value": surviveData[6][3].stages[3].aliveDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Alive With No Disease",
                            "value": surviveData[6][3].stages[3].aliveNoDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Dead",
                            "value": surviveData[6][3].stages[3].dead.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Chemotherapy",
                            "value": surviveData[6][3].stages[3].chemoTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Radiotherapy",
                            "value": surviveData[6][3].stages[3].radioTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Surgery",
                            "value":  surviveData[6][3].stages[3].surgery.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Relapse",
                            "value":  surviveData[6][3].stages[3].relapse.toString(),
                            "link": "#sales"
                        }]
                    }]
                };



            var ovarianDataTabChart,
                ovarianDataTabChartConfig = chartConfig.ovarianDataTab,
                ovarianDataTabData = {
                    //wil; feed data and years from DB(maybe)
                    "2014": [{
                        "data": [{
                            "label": "Stage One Cancer",
                            "value": surviveData[4][0].stages[0].patientNumber.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Alive With Disease",
                            "value": surviveData[4][0].stages[0].aliveDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Alive With No Disease",
                            "value": surviveData[4][0].stages[0].aliveNoDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Dead",
                            "value": surviveData[4][0].stages[0].dead.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Chemotherapy",
                            "value": surviveData[4][0].stages[0].chemoTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Radiotherapy",
                            "value": surviveData[4][0].stages[0].radioTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Surgery",
                            "value":  surviveData[4][0].stages[0].surgery.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Relapse",
                            "value":  surviveData[4][0].stages[0].relapse.toString(),
                            "link": "#sales"
                        }]
                    }],
                    "2013": [{
                        "data": [{
                            "label": "Stage Two Cancer",
                            "value": surviveData[4][1].stages[1].patientNumber.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Alive With Disease",
                            "value": surviveData[4][1].stages[1].aliveDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Alive With No Disease",
                            "value": surviveData[4][1].stages[1].aliveNoDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Dead",
                            "value": surviveData[4][1].stages[1].dead.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Chemotherapy",
                            "value": surviveData[4][1].stages[1].chemoTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Radiotherapy",
                            "value": surviveData[4][1].stages[1].radioTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Surgery",
                            "value":  surviveData[4][1].stages[1].surgery.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Relapse",
                            "value":  surviveData[4][1].stages[1].relapse.toString(),
                            "link": "#sales"
                        }]
                    }],
                    "2012": [{
                        "data": [{
                            "label": "Stage Three Cancer",
                            "value": surviveData[4][2].stages[2].patientNumber.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Alive With Disease",
                            "value": surviveData[4][2].stages[2].aliveDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Alive With No Disease",
                            "value": surviveData[4][2].stages[2].aliveNoDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Dead",
                            "value": surviveData[4][2].stages[2].dead.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Chemotherapy",
                            "value": surviveData[4][2].stages[2].chemoTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Radiotherapy",
                            "value": surviveData[4][2].stages[2].radioTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Surgery",
                            "value":  surviveData[4][2].stages[2].surgery.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Relapse",
                            "value":  surviveData[4][2].stages[2].relapse.toString(),
                            "link": "#sales"
                        }]
                    }],
                    "2011": [{
                        "data": [{
                            "label": "Stage Four Cancer",
                            "value": surviveData[4][3].stages[3].patientNumber.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Alive With Disease",
                            "value": surviveData[4][3].stages[3].aliveDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Alive With No Disease",
                            "value": surviveData[4][3].stages[3].aliveNoDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Dead",
                            "value": surviveData[4][3].stages[3].dead.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Chemotherapy",
                            "value": surviveData[4][3].stages[3].chemoTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Radiotherapy",
                            "value": surviveData[4][3].stages[3].radioTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Surgery",
                            "value":  surviveData[4][3].stages[3].surgery.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Relapse",
                            "value":  surviveData[4][3].stages[3].relapse.toString(),
                            "link": "#sales"
                        }]
                    }]
                };


            var vaginalDataTabChart,
                vaginalDataTabChartConfig = chartConfig.vaginalDataTab,
                vaginalDataTabData = {
                    //wil; feed data and years from DB(maybe)
                    "2014": [{
                        "data": [{
                            "label": "Stage One Cancer",
                            "value": surviveData[3][0].stages[0].patientNumber.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Alive With Disease",
                            "value": surviveData[3][0].stages[0].aliveDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Alive With No Disease",
                            "value": surviveData[3][0].stages[0].aliveNoDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Dead",
                            "value": surviveData[3][0].stages[0].dead.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Chemotherapy",
                            "value": surviveData[3][0].stages[0].chemoTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Radiotherapy",
                            "value": surviveData[3][0].stages[0].radioTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Surgery",
                            "value":  surviveData[3][0].stages[0].surgery.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Relapse",
                            "value":  surviveData[3][0].stages[0].relapse.toString(),
                            "link": "#sales"
                        }]
                    }],
                    "2013": [{
                        "data": [{
                            "label": "Stage Two Cancer",
                            "value": surviveData[3][1].stages[1].patientNumber.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Alive With Disease",
                            "value": surviveData[3][1].stages[1].aliveDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Alive With No Disease",
                            "value": surviveData[3][1].stages[1].aliveNoDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Dead",
                            "value": surviveData[3][1].stages[1].dead.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Chemotherapy",
                            "value": surviveData[3][1].stages[1].chemoTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Radiotherapy",
                            "value": surviveData[3][1].stages[1].radioTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Surgery",
                            "value":  surviveData[3][1].stages[1].surgery.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Relapse",
                            "value":  surviveData[3][1].stages[1].relapse.toString(),
                            "link": "#sales"
                        }]
                    }],
                    "2012": [{
                        "data": [{
                            "label": "Stage Three Cancer",
                            "value": surviveData[3][2].stages[2].patientNumber.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Alive With Disease",
                            "value": surviveData[3][2].stages[2].aliveDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Alive With No Disease",
                            "value": surviveData[3][2].stages[2].aliveNoDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Dead",
                            "value": surviveData[3][2].stages[2].dead.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Chemotherapy",
                            "value": surviveData[3][2].stages[2].chemoTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Radiotherapy",
                            "value": surviveData[3][2].stages[2].radioTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Surgery",
                            "value":  surviveData[3][2].stages[2].surgery.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Relapse",
                            "value":  surviveData[3][2].stages[2].relapse.toString(),
                            "link": "#sales"
                        }]
                    }],
                    "2011": [{
                        "data": [{
                            "label": "Stage Four Cancer",
                            "value": surviveData[3][3].stages[3].patientNumber.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Alive With Disease",
                            "value": surviveData[3][3].stages[3].aliveDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Alive With No Disease",
                            "value": surviveData[3][3].stages[3].aliveNoDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Dead",
                            "value": surviveData[3][3].stages[3].dead.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Chemotherapy",
                            "value": surviveData[3][3].stages[3].chemoTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Radiotherapy",
                            "value": surviveData[3][3].stages[3].radioTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Surgery",
                            "value":  surviveData[3][3].stages[3].surgery.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Relapse",
                            "value":  surviveData[3][3].stages[3].relapse.toString(),
                            "link": "#sales"
                        }]
                    }]
                };




            var gtnDataTabChart,
                gtnDataTabChartConfig = chartConfig.gtnDataTab,
                gtnDataTabData = {
                    //wil; feed data and years from DB(maybe)
                    "2014": [{
                        "data": [{
                            "label": "Stage One Cancer",
                            "value": surviveData[2][0].stages[0].patientNumber.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Alive With Disease",
                            "value": surviveData[2][0].stages[0].aliveDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Alive With No Disease",
                            "value": surviveData[2][0].stages[0].aliveNoDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Dead",
                            "value": surviveData[2][0].stages[0].dead.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Chemotherapy",
                            "value": surviveData[2][0].stages[0].chemoTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Radiotherapy",
                            "value": surviveData[2][0].stages[0].radioTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Surgery",
                            "value":  surviveData[2][0].stages[0].surgery.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Relapse",
                            "value":  surviveData[2][0].stages[0].relapse.toString(),
                            "link": "#sales"
                        }]
                    }],
                    "2013": [{
                        "data": [{
                            "label": "Stage Two Cancer",
                            "value": surviveData[2][1].stages[1].patientNumber.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Alive With Disease",
                            "value": surviveData[2][1].stages[1].aliveDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Alive With No Disease",
                            "value": surviveData[2][1].stages[1].aliveNoDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Dead",
                            "value": surviveData[2][1].stages[1].dead.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Chemotherapy",
                            "value": surviveData[2][1].stages[1].chemoTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Radiotherapy",
                            "value": surviveData[2][1].stages[1].radioTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Surgery",
                            "value":  surviveData[2][1].stages[1].surgery.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Relapse",
                            "value":  surviveData[2][1].stages[1].relapse.toString(),
                            "link": "#sales"
                        }]
                    }],
                    "2012": [{
                        "data": [{
                            "label": "Stage Three Cancer",
                            "value": surviveData[2][2].stages[2].patientNumber.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Alive With Disease",
                            "value": surviveData[2][2].stages[2].aliveDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Alive With No Disease",
                            "value": surviveData[2][2].stages[2].aliveNoDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Dead",
                            "value": surviveData[2][2].stages[2].dead.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Chemotherapy",
                            "value": surviveData[2][2].stages[2].chemoTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Radiotherapy",
                            "value": surviveData[2][2].stages[2].radioTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Surgery",
                            "value":  surviveData[2][2].stages[2].surgery.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Relapse",
                            "value":  surviveData[2][2].stages[2].relapse.toString(),
                            "link": "#sales"
                        }]
                    }],
                    "2011": [{
                        "data": [{
                            "label": "Stage Four Cancer",
                            "value": surviveData[2][3].stages[3].patientNumber.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Alive With Disease",
                            "value": surviveData[2][3].stages[3].aliveDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Alive With No Disease",
                            "value": surviveData[2][3].stages[3].aliveNoDisease.toString(),
                            "link": "#sales"
                        },{
                            "label": "Dead",
                            "value": surviveData[2][3].stages[3].dead.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Chemotherapy",
                            "value": surviveData[2][3].stages[3].chemoTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Radiotherapy",
                            "value": surviveData[2][3].stages[3].radioTherapy.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Surgery",
                            "value":  surviveData[2][3].stages[3].surgery.toString(),
                            "link": "#sales"
                        }, {
                            "label": "Relapse",
                            "value":  surviveData[2][3].stages[3].relapse.toString(),
                            "link": "#sales"
                        }]
                    }]
                };




            // Cervical Survival Chart
            chartDataSource.setData(survivalDataTabChartConfig.dataSource, survivalDataTabData[currentYear]);
            survivalDataTabChart = new FusionCharts(survivalDataTabChartConfig);
            survivalDataTabChart.render();

            // Endometrial Survival Chart
            chartDataSource.setData(endoCanCategoriesChartConfig.dataSource, endoCanCategoriesData[currentYear]);//can select for drop down list here
            endoCanCategoriesChart = new FusionCharts(endoCanCategoriesChartConfig);
            endoCanCategoriesChart.render();

            // Fallopian Survival Chart
            chartDataSource.setData(fallTubeDataChartConfig.dataSource, fallTubeData[currentYear]);
            fallTubeDataChart = new FusionCharts(fallTubeDataChartConfig);
            fallTubeDataChart.render();




            // Vulva Chart
            chartDataSource.setData(vulvCanDataChartConfig.dataSource, vulvCanData[currentYear]);
            vulvCanDataChart = new FusionCharts(vulvCanDataChartConfig);
            vulvCanDataChart.render();


            // Ovarian Cancer Chart
            chartDataSource.setData(ovarianDataTabChartConfig.dataSource, ovarianDataTabData[currentYear]);
            ovarianDataTabChart = new FusionCharts(ovarianDataTabChartConfig);
            ovarianDataTabChart.render();


            chartDataSource.setData(vaginalDataTabChartConfig.dataSource, vaginalDataTabData[currentYear]);
            vaginalDataTabChart = new FusionCharts(vaginalDataTabChartConfig);
            vaginalDataTabChart.render();

            chartDataSource.setData(gtnDataTabChartConfig.dataSource, gtnDataTabData[currentYear]);
            gtnDataTabChart = new FusionCharts(gtnDataTabChartConfig);
            gtnDataTabChart.render();





            eventListeners.add('survival_data_tab_year_filter', 'change', function() {
                var year = dom.queryCurrentValue('survival_data_tab_year_filter', this);

                chartDataSource.setData(survivalDataTabChartConfig.dataSource, survivalDataTabData[year]);
                survivalDataTabChart.setJSONData(survivalDataTabChartConfig.dataSource);
            });

            eventListeners.add('test_data_tab_year_filter', 'change', function() {//endometrial
                var year = dom.queryCurrentValue('test_data_tab_year_filter', this);

                chartDataSource.setData(endoCanCategoriesChartConfig.dataSource, endoCanCategoriesData[year]);
                endoCanCategoriesChart.setJSONData(endoCanCategoriesChartConfig.dataSource);
            });

            eventListeners.add('test2_data_tab_year_filter', 'change', function() {//fallopian
                var year = dom.queryCurrentValue('test2_data_tab_year_filter', this);

                chartDataSource.setData(fallTubeDataChartConfig.dataSource, fallTubeData[year]);
                fallTubeDataChart.setJSONData(fallTubeDataChartConfig.dataSource);
            });


            eventListeners.add('test3_data_tab_year_filter', 'change', function() { //vulva
                var year = dom.queryCurrentValue('test3_data_tab_year_filter', this);

                chartDataSource.setData(vulvCanDataChartConfig.dataSource, vulvCanData[year]);
                vulvCanDataChart.setJSONData(vulvCanDataChartConfig.dataSource);
            });


            eventListeners.add('ovarian_data_tab_year_filter', 'change', function() {
                var year = dom.queryCurrentValue('ovarian_data_tab_year_filter', this);

                chartDataSource.setData(ovarianDataTabChartConfig.dataSource, ovarianDataTabData[year]);
                ovarianDataTabChart.setJSONData(ovarianDataTabChartConfig.dataSource);
            });



            eventListeners.add('vaginal_data_tab_year_filter', 'change', function() {
                var year = dom.queryCurrentValue('vaginal_data_tab_year_filter', this);

                chartDataSource.setData(survivalDataTabChartConfig.dataSource, vaginalDataTabData[year]);
                vaginalDataTabChart.setJSONData(vaginalDataTabChartConfig.dataSource);
            });

            eventListeners.add('gtn_data_tab_year_filter', 'change', function() {
                var year = dom.queryCurrentValue('gtn_data_tab_year_filter', this);

                chartDataSource.setData(gtnDataTabChartConfig.dataSource, gtnDataTabData[year]);
                gtnDataTabChart.setJSONData(gtnDataTabChartConfig.dataSource);
            });


        });


        /**
         * Private Methods
         */

        // Get all chart dom ids for a dashboard tab.
        // These ids are directly used by the global year filter to trigger appropriate chart updates / re-rendering
        var getEventIds = function(id) {
            var ids = {
                summary: ['top_sales_performers_summary_year_filter', 'top_categories_summary_year_filter', 'top_revenues_country_year_filter', 'top_products_summary_year_filter', 'top_revenues_cities_summary_year_filter', 'top_customers_summary_year_filter'],
                sales: ['top_categories_sales_tab_year_filter', 'top_performers_sales_year_filter', 'top_monthly_sales_year_filter'],
                kpi: ['survival_data_tab_year_filter', 'test_data_tab_year_filter', 'test2_data_tab_year_filter', 'gtn_data_tab_year_filter', 'ovarian_data_tab_year_filter', 'vaginal_data_tab_year_filter', 'test3_data_tab_year_filter']
            };


            return ids[id];
        };

        // Polyfill for string trim
        String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, '');
        };

        // Polyfill for array indexOf
        var indexOfArray = function(list, value) {
            if (Array.prototype.indexOf) {
                return list.indexOf(value);
            } else {
                var i,
                    listLength = list.length;

                for (i = 0; i < listLength; i++) {
                    if (list[i] === value) {
                        return i;
                    }
                }
            }

            return -1;
        };

        // Polyfill for get elements by class name
        var getElementsByClassName = function(tag, className) {
            var result,
                elements,
                i,
                elementsLength;

            if (DOCUMENT.getElementsByClassName) {
                result = DOCUMENT.getElementsByClassName('fusioncharts-container');
            } else {
                result = [];
                elements = DOCUMENT.getElementsByTagName(tag);
                elementsLength = elements.length;

                for (i = 0; i < elementsLength; i++) {
                    if (elements[i].className === className) {
                        result.push(elements[i]);
                    }
                }
            }

            return result;
        };


        // Check if IE6
        function isIE6() {
            var isValid = (ieVersion > 0 && ieVersion < 7) ? true : false;

            return isValid;
        }

        // Check if IE is less than version 8
        function isLessThan8() {
            var isValid = ( ieVersion > 0 && ieVersion <= 8 ) ? true : false;

            return isValid;
        }

        // Get current version of IE
        function getIEVersion() {
            var pattern = /MSIE (\d+\.\d+);/;

            if (pattern.test(window.navigator.userAgent)) {
                var ieversion = new Number(RegExp.$1)

                return ieversion;
            }

            return 0;
        }

        // Handle permalink of tabs switching.
        var urlHandler = function() {
            var tab,
                availableTabs,
                pattern = /#([^#]+)/;

            tab = DOCUMENT.URL ? DOCUMENT.URL.match(pattern) : window.location.match(pattern);
            availableTabs = ['summary', 'sales', 'kpi'];

            if (tab) {
                if (indexOfArray(availableTabs, tab[1].trim()) === -1) {
                    dashboards.run('summary-tab');
                } else {
                    dashboards.run(tab[1]);
                }
            } else {
                dashboards.run('summary');
            }
        };


        /**
         * Main App Initializtion
         */
        app.init(function() {

            // Event Listeners for summary link
            eventListeners.add('summary-link', 'click', function(e) {
                dashboards.show('summary');
            });

            // Event Listeners for sales link
            eventListeners.add('sales-link', 'click', function(e) {
                dashboards.show('sales');
            });

            // Event Listeners for kpi link
            eventListeners.add('kpi-link', 'click', function(e) {
                //e.preventDefault();
                $.ajax({
                    type: 'POST',
                    url: '/getSurvivalStats',
                    success: function (data, textStatus, jqXHR){
                        var res = JSON.parse(jqXHR.responseText);
                        console.log("This is what it looks like " + res[0][0].stages[0].patientNumber );
                        sendDataToGraph(res);
                    },
                    dataType: "json",
                    contentType: "application/json"
                });
                //sendDataToGraph("hello");
                dashboards.show('kpi');//shows the kpi div that contains the multiple graphs


            });

            /*Event Listeners for survivalStats link
             eventListeners.add('getSurvivalStats', 'click', function(e) {
             dashboards.show('survivalStats');
             });*/

            //<!--<li><a href="/getSurvivalStats" id="survivalStats">Survival Data</a>-->

            urlHandler();

        });

    });
}

