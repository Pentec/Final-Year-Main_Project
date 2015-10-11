/**
 * @author Trevor Austin
 */
/**
 * Function that creates the graph on page load;
 */
var ratio = 0.54;
var x, y, xAxis, yAxis, parseDate, path, data, svg, yAxisName;

var beg = true;

var bar = false;

/*x = function (x) {
 return x;
 };*/

$(document).ready(function () {
    init();
});

$(window).resize(function () {
    var tempData = $.extend(true, [], data);
    createLineGraph(tempData, yAxisName);
});

function pageSetup() {
    $(".graphbox").height($(".graphbox").width() * ratio);
    if ($(".graph-interaction").height() > $(".graphbox").height()) {
        $('.graphbox').height($(".graph-interaction").height());
    }
    $(".graph-wrapper").height($(".graphbox").width() * ratio);
}

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

    parseDate = d3.time.format("%m-%d-%Y").parse;

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
    })
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

    parseDate = d3.time.format("%m-%d-%Y").parse;

    x = d3.scale.ordinal()
        .rangeRoundBands([0, width],.05);

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
    })
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

function updateBarGraph(data, yAxisName){
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
    })
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

function submit() {
    $("#mainQuery").submit();
}

function predict() {
    alert("Not implemented");
    //TODO Implement
}

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
    query("2014-01-01", "2014-02-28", "Monthly", "Number of Admissions");
    //var one = #{elCount};
    //var two =
    //#{emCount}
    //var data = [{value: one, color: "#dbba34"}, {value: two, color: "#c62f29"}];
    //var canvas = document.getElementById("hours");
    //var ctx = canvas.getContext("2d");
    //new Chart(ctx).Doughnut(data);

}

function query(startDate, endDate, period, stats) {
    $.ajax({
        type: 'POST',
        url: '/findSelectedQuery',
        beforeSend: function (xhr) {
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
            if(beg){
                beg = false;
                createLineGraph(res.myStatsArry, stats);
            }else{
                if(bar)
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

function saveAsPNG() {
    saveSvgAsPng(document.getElementsByClassName("graphimage")[0], "Graph.png");
}