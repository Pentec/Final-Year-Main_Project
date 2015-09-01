/**
 * @author Trevor Austin
 */
/**
 * Function that creates the graph on page load;
 */
var ratio = 0.54;
var dummyData = [{date: '01-06-2011', close: 5},{date: '03-06-2011', close: 11}, {date: '03-06-2011', close: 12}, {date: '12-26-2011', close: 14}];

$(function () {
    dummyData = [{date: '01-06-2011', close: 5},{date: '03-06-2011', close: 11}, {date: '03-06-2011', close: 12}, {date: '12-26-2011', close: 14}];
    createGraph(dummyData, 'Admissions');
});

/**
 *
 */
$(window).resize(function () {
    /*set data here*/
    dummyData = [{date: '01-06-2011', close: 5},{date: '03-06-2011', close: 11}, {date: '03-06-2011', close: 12}, {date: '12-26-2011', close: 14}];
    createGraph(dummyData, 'Admissions');
});

function pageSetup() {
    $(".graphbox").height($(".graphbox").width() * ratio);
    if ($(".graph-interaction").height() > $(".graphbox").height()) {
        $('.graphbox').height($(".graph-interaction").height());
    }
    $(".graph-wrapper").height($(".graphbox").width() * ratio);
}

function createGraph(data, yAxisName) {
    pageSetup();
    $(".graph").empty();
    var width = $(".graph-wrapper").width() - 10;
    var height = $(".graph-wrapper").height();
    var margin = {top: 20, right: 30, bottom: 40, left: 50},
        width = width - margin.left - margin.right,
        height = height - margin.top - margin.bottom;

    var parseDate = d3.time.format("%m-%d-%Y").parse;

    var x = d3.time.scale()
        .range([0, width]);

    var y = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom").ticks(3);

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left").ticks(10);

    var line = d3.svg.line()
        .x(function (d) {
            return x(d.date);
        })
        .y(function (d) {
            return y(d.close);
        });

    var svg = d3.select(".graph").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    data.forEach(function (d) {
        d.date = parseDate(d.date);
        d.close = +d.close;
    });

    x.domain(d3.extent(data, function (d) {
        return d.date;
    }));
    y.domain(d3.extent(data, function (d) {
        return d.close;
    }));
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
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text(yAxisName);

    svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line);
}
