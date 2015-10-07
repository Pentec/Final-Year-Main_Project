/**
 * @author Trevor Austin
 */
/**
 * Function that creates the graph on page load;
 */
var ratio = 0.54;
var x, y, xAxis, yAxis, parseDate, path, data, svg, yAxisName;

/*x = function (x) {
    return x;
};*/

$(document).ready(function () {
    init();
});

$(window).resize(function () {
    var tempData = $.extend(true, [], data);
    createGraph(tempData, yAxisName);
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
        .scale(y)
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
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

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
    if(minMax[0]<0)
        minMax[0]=0;
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
    this.yAxisName = yAxisName;
}

function updateGraph(data, yAxisName) {
    this.data = $.extend(true, [], data);
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
    if(minMax[0]<0)
        minMax[0]=0;
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


    this.yAxisName = yAxisName;
}

function submit() {
    $("#mainQuery").submit();
}

function anim() {
    var tempData = $.extend(true, [], data);
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

    json.sort(function (a, b) {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    updateGraph(json, "prediction");
}

function init() {
    $('.area').perfectScrollbar();
    [].slice.call(document.querySelectorAll('select.cs-select')).forEach(function (el) {
        new SelectFx(el);
    });
    var dummyData = [{date: '01-06-2011', close: 0}, {date: '03-06-2011', close: 0}];
    createGraph(dummyData, 'Number of Admissions');
    var dummyData = [{date: '01-06-2011', close: 5}, {date: '03-06-2011', close: 11}, {
        date: '03-06-2011',
        close: 12
    }, {date: '12-26-2011', close: 14}];

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
            updateGraph(res.myStatsArry, stats);
            //window.location = '/statistics.html?myObject=' + resBus;
        },
        dataType: "json",
        contentType: "application/json"
    });
}