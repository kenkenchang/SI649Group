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
                text: 'Ratio'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.3f} </b></td></tr>',
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
            data: [0.23,	0.15,	0.05,	0.026]
        }, {
            name: 'Hispanic Women',
            data: [0.009,	0.005,	0.003,	0.0009]
        }, {
            name: 'Native Women',
            data: [0.003,	0.002,	0.0007,	0.0001]
        }, {
            name: 'African Women',
            data: [0.009,	0.005,	0.003,	0.0007]

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
                text: 'Ratio'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.3f} </b></td></tr>',
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
            data: [0.23, 0.009, 0.003,0.009]
        }, {
            name: 'Bachelor',
            data: [0.15, 0.005, 0.002,0.005]
        }, {
            name: 'Master',
            data: [0.05,0.003,0.0007,0.003]
        }, {
            name: 'Doctoral',
            data: [0.026,0.0009,0.0001
,0.0007]

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
                text: 'Ratio'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.3f} </b></td></tr>',
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
            data: [0.05, 0.003, 0.0007, 0.003]
        }, {
            name: 'Doctoral',
            data: [0.026, 0.0009, 0.0001, 0.0007]
        }]
    });
});