/**
 * @author Trevor Austin
 */
/**
 * Function that creates the graph on page load;
 */
var ratio = 0.54;
var dummyData = [{date: '01-06-2011', close: 0}, {date: '03-06-2011', close: 0}, {
    date: '03-06-2011',
    close: 0
}, {date: '12-26-2011', close: 0}];
var x, y, xAxis, yAxis, parseDate, path, data, svg;

x = function(x){
    return x;
};

$(document).ready(function () {
    [].slice.call(document.querySelectorAll('select.cs-select')).forEach(function (el) {
        new SelectFx(el);
    });
    createGraph(dummyData, 'Admissions');
    dummyData = [{date: '01-06-2011', close: 5}, {date: '03-06-2011', close: 11}, {
        date: '03-06-2011',
        close: 12
    }, {date: '12-26-2011', close: 14}];
    updateGraph(dummyData, 'Test');
});

/**
 *
 */
$(window).resize(function () {
    /*set data here*/
    dummyData = [{date: '01-06-2011', close: 5}, {date: '03-06-2011', close: 11}, {
        date: '03-06-2011',
        close: 12
    }, {date: '12-26-2011', close: 14}];
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
        .orient("bottom").ticks(3);

    yAxis = d3.svg.axis()
        .scale(y)
        .orient("left").ticks(10);

    line = d3.svg.line()
        .x(function (d) {
            return x(d.date);
        })
        .y(function (d) {
            return y(d.close);
        }).interpolate("linear");

    svg = d3.select(".graph").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    data.forEach(function (d) {
        d.date = parseDate(d.date);
        d.close = +d.close;
    });
    this.data = data;
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

    path = svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line);
}

function updateGraph(data, yAxisName) {
    data.forEach(function (d) {
        d.date = parseDate(d.date);
        d.close = +d.close;
    });
    this.data = data;
    x.domain(d3.extent(data, function (d) {
        return d.date;
    }));
    y.domain(d3.extent(data, function (d) {
        return d.close;
    }));

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
}

function submit(){
    $("#mainQuery").submit();
}

function anim(){
    alert("running");
    var json = [
        {
            "date": "07-12-2012",
            "close": 14
        },
        {
            "date": "05-20-2012",
            "close": 11
        },
        {
            "date": "07-27-2012",
            "close": 11
        },
        {
            "date": "06-20-2012",
            "close": 12
        },
        {
            "date": "06-25-2012",
            "close": 12
        },
        {
            "date": "07-05-2012",
            "close": 14
        },
        {
            "date": "01-06-2012",
            "close": 13
        },
        {
            "date": "05-06-2012",
            "close": 12
        },
        {
            "date": "03-10-2012",
            "close": 14
        },
        {
            "date": "03-26-2012",
            "close": 11
        },
        {
            "date": "03-22-2012",
            "close": 14
        },
        {
            "date": "02-15-2012",
            "close": 13
        },
        {
            "date": "03-08-2012",
            "close": 12
        },
        {
            "date": "05-03-2012",
            "close": 12
        },
        {
            "date": "03-02-2012",
            "close": 11
        },
        {
            "date": "05-16-2012",
            "close": 14
        },
        {
            "date": "05-24-2012",
            "close": 14
        },
        {
            "date": "01-03-2012",
            "close": 14
        },
        {
            "date": "02-09-2012",
            "close": 13
        },
        {
            "date": "07-02-2012",
            "close": 12
        }
    ];

    json.sort(function(a, b){
        return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    alert(JSON.stringify(json));
    json.forEach(function (d) {
        d.date = parseDate(d.date);
        d.close = +d.close;
        data.push(data.shift);
        alert("running");
        svg.selectAll("path")
            .data([data])
            .attr("transform", "translate(" + x(1) + ")")
            .attr("d", line)
            .interrupt()
            .transition()
            .ease("linear")
            .duration(1000)
            .attr("transform", "translate(" + x(0) + ")");
    });
}