$(function () {
    Highcharts.chart('container1', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Employed S&E by Degree in 2013'
        },
        xAxis: {
            categories: [
                'All Degrees',
                'Bachelor',
                'Master',
                'Doctoral'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of People'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} people</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{         
            name: 'White Man',
            data: [2860000, 1819000, 706000, 316000]
        }, {
            name: 'Hispanic Women',
            data: [114000, 60000, 36000, 11000]
        }, {
            name: 'Native Women',
            data: [38000, 25000,9000,2000]
        }, {
            name: 'African Women',
            data: [108000, 61000, 38000, 9000]

        }]
    });
});

$(function () {
    Highcharts.chart('container2', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Employed S&E by Races and Degrees'
        },
        xAxis: {
            categories: [
                'White Man',
                'Hispancic Women',
                'Native Women',
                'African Women'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of People'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} people</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{         
            name: 'All Degrees',
            data: [2860000, 114000, 38000, 108000]
        }, {
            name: 'Bachelor',
            data: [1819000, 60000, 25000, 61000]
        }, {
            name: 'Master',
            data: [706000, 36000,9000,38000]
        }, {
            name: 'Doctoral',
            data: [316000, 11000, 2000, 9000]

        }]
    });
});

$(function () {
    Highcharts.chart('container3', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Employed S&E by Races and Degrees'
        },
        xAxis: {
            categories: [
                'White Man',
                'Hispancic Women',
                'Native Women',
                'African Women'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of People'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} people</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{         
            name: 'Masters',
            data: [706000, 36000, 9000, 38000]
        }, {
            name: 'Doctoral',
            data: [316000, 11000, 2000, 9000]
        }]
    });
});