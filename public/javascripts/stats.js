/**
 * @author Trevor Austin
 */
var ratio = 0.54;
var x, y, xAxis, yAxis, parseDate, path, data, svg, yAxisName;

var beg = true;

var bar = false;

/*x = function (x) {
 return x;
 };*/

/**
 * Initializes all functions on page load.
 */
$(document).ready(function () {
    init();
});

/**
 * Resizes the graph in case a user modifies the page size.
 */
$(window).resize(function () {
    var tempData = $.extend(true, [], data);
    createLineGraph(tempData, yAxisName);
});

/**
 * Sets up the graph wrapper to correct aspect ratio
 */
function pageSetup() {
    $(".graphbox").height($(".graphbox").width() * ratio);
    if ($(".graph-interaction").height() > $(".graphbox").height()) {
        $('.graphbox').height($(".graph-interaction").height());
    }
    $(".graph-wrapper").height($(".graphbox").width() * ratio);
}

/**
 * This function creates a line graph using the d3 library.
 * @param data This is the data for the graph.
 * @param yAxisName This is the actual axis name of the graph.
 */
function createLineGraph(data, yAxisName) {
    bar = false;
    pageSetup();
    if (data == null)
        data = $.extend(true, [], this.data);
    else
        this.data = $.extend(true, [], data);
    if (yAxisName == null)
        yAxisName = this.yAxisName;
    else
        this.yAxisName = yAxisName;
    this.data = $.extend(true, [], data);
    $(".graph").empty();
    //Margins
    var width = $(".graph-wrapper").width() - 10;
    var height = $(".graphbox").height();
    //alert(height);
    var margin = {top: 20, right: 30, bottom: 40, left: 50},
        width = width - margin.left - margin.right,
        height = height - margin.top - margin.bottom;

    parseDate = d3.time.format("%d-%m-%Y").parse;

    x = d3.time.scale()
        .range([0, width]);

    y = d3.scale.linear()
        .range([height, 0]);

    xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom").ticks(10);

    yAxis = d3.svg.axis()
        .scale(y).innerTickSize(-width)
        .outerTickSize(0)
        .tickPadding(10)
        .orient("left").ticks(10);
    line = d3.svg.line()
        .x(function (d) {
            return x(d.date);
        })
        .y(function (d) {
            return y(d.close);
        });

    svg = d3.select(".graph").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr("class", "graphimage")
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    data.forEach(function (d) {
        d.date = parseDate(d.date);
        d.close = +0;
    });

    x.domain(d3.extent(data, function (d) {
        return d.date;
    }));
    var minMax = d3.extent(data, function (d) {
        return d.close;
    });
    minMax[0] -= minMax[1] * 0.2;
    if (minMax[0] < 0)
        minMax[0] = 0;
    minMax[1] += minMax[1] * 0.2;
    y.domain(minMax);
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("class", 'ylabel')
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text(yAxisName);

    path = svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line);

    svg.append("text")
        .attr("x", (width / 2))
        .attr("y", 20 - (margin.top / 2))
        .attr("class", "title")
        .attr("text-anchor", "middle")
        .style("font-size", "32px")
        .style("text-decoration", "underline")
        .text(yAxisName);
    updateLineGraph(this.data, this.yAxisName);
}

/**
 * This function creates a bar graph using the d3 library.
 * @param data This is the data for the graph.
 * @param yAxisName This is the actual axis name of the graph.
 */
function createBarGraph(data, yAxisName) {
    bar = true;
    pageSetup();
    if (data == null)
        data = $.extend(true, [], this.data);
    else
        this.data = $.extend(true, [], data);
    if (yAxisName == null)
        yAxisName = this.yAxisName;
    else
        this.yAxisName = yAxisName;
    $(".graph").empty();
    //Margins
    var width = $(".graph-wrapper").width() - 10;
    var height = $(".graphbox").height();
    //alert(height);
    var margin = {top: 20, right: 30, bottom: 65, left: 50},
        width = width - margin.left - margin.right,
        height = height - margin.top - margin.bottom;

    parseDate = d3.time.format("%d-%m-%Y").parse;

    x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .05);

    y = d3.scale.linear()
        .range([height, 0]);

    xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom").tickFormat(d3.time.format("%m-%d-%Y"));

    yAxis = d3.svg.axis()
        .scale(y)
        .orient("left").ticks(10).innerTickSize(-width)
        .outerTickSize(0)
        .tickPadding(10);

    svg = d3.select(".graph").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .attr("class", "graphimage")
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    data.forEach(function (d) {
        d.date = parseDate(d.date);
        d.close = +0;
    });

    x.domain(data.map(function (d) {
        return d.date;
    }));
    var minMax = d3.extent(data, function (d) {
        return d.close;
    });
    minMax[0] = 0;
    minMax[1] += minMax[1] * 0.2;
    y.domain(minMax);
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.55em")
        .attr("transform", "rotate(-45)");

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("class", 'ylabel')
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text(yAxisName);

    svg.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
            return x(d.date);
        })
        .attr("width", x.rangeBand())
        .attr("y", function (d) {
            return y(d.close);
        })
        .attr("height", function (d) {
            return height - y(d.close);
        });
    svg.append("text")
        .attr("x", (width / 2))
        .attr("y", 20 - (margin.top / 2))
        .attr("class", "title")
        .attr("text-anchor", "middle")
        .style("font-size", "32px")
        .style("text-decoration", "underline")
        .text(yAxisName);
    updateBarGraph(this.data, this.yAxisName);
}

/**
 * This function updates the current line graph with an animation
 * @param data The new data to placed into the graph.
 * @param yAxisName The new axis name for the graph.
 */
function updateLineGraph(data, yAxisName) {
    this.data = $.extend(true, [], data);
    this.yAxisName = yAxisName;
    data.forEach(function (d) {
        d.date = parseDate(d.date);
        d.close = +d.close;
    });
    x.domain(d3.extent(data, function (d) {
        return d.date;
    }));
    var minMax = d3.extent(data, function (d) {
        return d.close;
    });
    minMax[0] -= minMax[1] * 0.2;
    if (minMax[0] < 0)
        minMax[0] = 0;
    minMax[1] += minMax[1] * 0.2;
    y.domain(minMax);

    var svg = d3.select(".graph").transition();

    svg.select(".line")
        .duration(750)
        .attr("d", line(data));

    svg.select(".x.axis")
        .duration(750)
        .call(xAxis);
    svg.select(".y.axis")
        .duration(750)
        .call(yAxis);
    svg.select(".ylabel").text(yAxisName);
    svg.select(".title").text(yAxisName);
}

/**
 * This function updates the current bar graph with an animation
 * @param data The new data to placed into the graph.
 * @param yAxisName The new axis name for the graph.
 */
function updateBarGraph(data, yAxisName) {
    this.data = $.extend(true, [], data);
    this.yAxisName = yAxisName;
    var height = $(".graphbox").height();
    var margin = {top: 20, right: 30, bottom: 65, left: 50},
        width = width - margin.left - margin.right,
        height = height - margin.top - margin.bottom;
    data.forEach(function (d) {
        d.date = parseDate(d.date);
        d.close = +d.close;
    });
    x.domain(data.map(function (d) {
        return d.date;
    }));
    var minMax = d3.extent(data, function (d) {
        return d.close;
    });
    minMax[0] -= minMax[1] * 0.2;
    minMax[0] = 0;
    minMax[1] += minMax[1] * 0.2;
    y.domain(minMax);

    var svg = d3.select(".graph");

    svg.select(".x.axis").transition()
        .duration(750)
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.55em");
    svg.select(".y.axis")
        .transition()
        .duration(750)
        .call(yAxis);

    svg.selectAll("rect")
        .data(data)
        .transition()
        .duration(750)  // <-- This makes it a smooth transition!
        .attr("x", function (d) {
            return x(d.date);
        })
        .attr("width", x.rangeBand())
        .attr("y", function (d) {
            return y(d.close);
        })
        .attr("height", function (d) {
            return height - y(d.close);
        });
    svg.select(".ylabel").text(yAxisName);
    svg.select(".title").text(yAxisName);
}

/**
 * Submits all the current queries for the graphs.
 */
function submit() {
    $("#mainQuery").submit();
}

/**
 * Predicts the direction in which the graph will go.
 */
function predict() {
    alert("Not implemented");
    //TODO Implement
}

/**
 * Initializes the page
 */
function init() {
    $('.area').perfectScrollbar();
    [].slice.call(document.querySelectorAll('select.cs-select')).forEach(function (el) {
        new SelectFx(el);
    });
    $('#StartDate').daterangepicker(
        {
            locale: {
                format: 'YYYY-MM-DD'
            },
            startDate: '2014-01-01',
            endDate: '2014-12-31',
            opens: 'left',
            "applyClass": "btn-block btn-custom btn-top",
            "cancelClass": "btn-block btn-bottom"
        },
        function (start, end, label) {
            startDate = start.format('YYYY-MM-DD');
            endDate = end.format('YYYY-MM-DD');
        });
    $("#mainQuery").on("submit", function (e) {
        e.preventDefault();
        var period = $('#TypeOfSearch :selected').text();
        var stats = $('#TypeOfQuery :selected').text();
        query(startDate, endDate, period, stats);
    });
    query("2014-01-01", "2014-02-28", "Daily", "Number of Admissions");
    //var one = #{elCount};
    //var two =
    //#{emCount}
    //var data = [{value: one, color: "#dbba34"}, {value: two, color: "#c62f29"}];
    //var canvas = document.getElementById("hours");
    //var ctx = canvas.getContext("2d");
    //new Chart(ctx).Doughnut(data);

}

/**
 * Performs all the AJAX queries for the graph.
 * @param startDate Start date for the graph
 * @param endDate End date for the graph
 * @param period The interval period
 * @param stats The type of statistics being retrieved
 */
function query(startDate, endDate, period, stats) {
    $.ajax({
        type: 'POST',
        url: '/findSelectedQuery',
        beforeSend: function (xhr) {
            if (beg) {
                pageSetup();
                $(".graph").height($(".graph-wrapper").height());
            } else
                $("#search").html("<img src='/images/loader.gif' height = '30px' />");
        },
        data: JSON.stringify({
            forQuering: {
                start: startDate,
                end: endDate,
                periodQuery: period,
                statsQuery: stats
            }
        }),
        success: function (data, textStatus, jqXHR) {
            $("#search").html("Query");
            var res = JSON.parse(jqXHR.responseText);
            var resBus = JSON.stringify(res.myStatsArry);
            if (beg) {
                beg = false;
                createLineGraph(res.myStatsArry, stats);
            } else {
                if (bar)
                    createBarGraph(res.myStatsArry, stats);
                else
                    updateLineGraph(res.myStatsArry, stats);
            }
            //window.location = '/statistics.html?myObject=' + resBus;
        },
        dataType: "json",
        contentType: "application/json"
    });
}

/**
 * Makes use of a library to save the graph as a PNG image
 */
function saveAsPNG() {
    saveSvgAsPng(document.getElementsByClassName("graphimage")[0], "Graph.png");
}