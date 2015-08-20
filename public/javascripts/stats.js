/**
 * @author Trevor Austin
 */
/**
 * Function that creates the graph on page load;
 */
$(function () {
    createGraph();
});

/**
 *
 */
$(window).resize(function () {
    $(".graph").empty();
    createGraph();
});

function createGraph() {
    var data = [{date: '10-Jun-11', close: 4}, {date: '11-Jun-11', close: 5}, {date: '12-Jun-11', close: 6}];
    var width = $(".graph").width() * 7 / 10;
    var height = $(".graph").height();

    var margin = {top: 20, right: 20, bottom: 30, left: 50},
        width = width - margin.left - margin.right,
        height = height - margin.top - margin.bottom;

    var parseDate = d3.time.format("%d-%b-%y").parse;

    var x = d3.time.scale()
        .range([0, width]);

    var y = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

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
        .text("Pdsfsadfasdce ($)");

    svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line);
}