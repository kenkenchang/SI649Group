function plotSupportSource(topic, race_list, container) {
	
	title_str1 = 'Source of Support for '
	title_str2 = ' Doctor in 2010-14'

    men_dashStyle = 'Solid'
    men_symbol = 'triangle'
    women_dashStyle = 'Solid'
    women_symbol = 'circle'
    //////////////////////////////////////////////
    // DATA START ////////////////////////////////
	var Data = [ 
                 // {name: 'All',
                 //    number: 106317,
                 //    Personal: 12.8,
                 //    Teaching: 16.3,
                 //    Research: 29.7,
                 //    Fellowship: 32.8,
                 //    Other: 8.3},
                 // {name: 'Hispanic or Latino',
                 //    number: 6646,
                 //    Personal: 14.3,
                 //    Teaching: 13.3,
                 //    Research: 22,
                 //    Fellowship: 40.9,
                 //    Other: 9.5},
                 // {name: 'American Indian or Alaska Native',
                 //    number: 325,
                 //    Personal: 21.5,
                 //    Teaching: 12.6,
                 //    Research: 15.7,
                 //    Fellowship: 38.8,
                 //    Other: 11.4},
                 // {name: 'Asian',
                 //    number: 10826,
                 //    Personal: 7.7,
                 //    Teaching: 14.4,
                 //    Research: 34.9,
                 //    Fellowship: 35.3,
                 //    Other: 7.8},
                 // {name: 'Black or African American',
                 //    number: 5014,
                 //    Personal: 21.9,
                 //    Teaching: 11.3,
                 //    Research: 17.6,
                 //    Fellowship: 40.7,
                 //    Other: 8.5},
                 // {name: 'White',
                 //    number: 77580,
                 //    Personal: 13,
                 //    Teaching: 17.5,
                 //    Research: 31,
                 //    Fellowship: 31.6,
                 //    Other: 6.8},
                 // {name: 'Two or more races',
                 //    number: 2675,
                 //    Personal: 13.3,
                 //    Teaching: 14.4,
                 //    Research: 29.9,
                 //    Fellowship: 37.6,
                 //    Other: 4.8},
                 // {name: 'Other race or not reported',
                 //    number: 862,
                 //    Personal: 11.3,
                 //    Teaching: 15.3,
                 //    Research: 28.2,
                 //    Fellowship: 31.2,
                 //    Other: 14},
                 // {name: 'Ethnicity not reported',
                 //    number: 2389,
                 //    Personal: 6.7,
                 //    Teaching: 8,
                 //    Research: 13.8,
                 //    Fellowship: 14.3,
                 //    Other: 57.3},
                 {name: 'Women (all)',
                  color: '#A408C4',
                  dashStyle: women_dashStyle,
                  symbol: women_symbol,
                    number: 48887,
                    Personal: 15.7,
                    Teaching: 16.2,
                    Research: 25.8,
                    Fellowship: 35,
                    Other: 7.3},
                 {name: 'Women - Hispanic',
                  color: '#F6A623',
                  dashStyle: women_dashStyle,
                  symbol: women_symbol,
                    number: 3445,
                    Personal: 17.2,
                    Teaching: 12.4,
                    Research: 19,
                    Fellowship: 42.4,
                    Other: 9},
                 {name: 'Women - Native',
                  color: '#ED2A7B',
                  dashStyle: women_dashStyle,
                  symbol: women_symbol,
                    number: 156,
                    Personal: 21.2,
                    Teaching: 12.2,
                    Research: 10.9,
                    Fellowship: 42.3,
                    Other: 13.5},
                 // {name: 'Asian Female',
                 //    number: 5592,
                 //    Personal: 8.3,
                 //    Teaching: 15.8,
                 //    Research: 31.7,
                 //    Fellowship: 37.7,
                 //    Other: 6.4},
                 {name: 'Women - African',
                  color: '#7ED321',
                  dashStyle: women_dashStyle,
                  symbol: women_symbol,
                    number: 2911,
                    Personal: 23,
                    Teaching: 10.1,
                    Research: 15.8,
                    Fellowship: 43.2,
                    Other: 7.9},
                 {name: 'Women - White',
                  color: '#388CE8',
                  dashStyle: women_dashStyle,
                  symbol: women_symbol,
                    number: 34108,
                    Personal: 16.3,
                    Teaching: 17.5,
                    Research: 27,
                    Fellowship: 33.6,
                    Other: 5.6},
                 // {name: 'Two or more races Female',
                 //    number: 1362,
                 //    Personal: 17.3,
                 //    Teaching: 14,
                 //    Research: 25.7,
                 //    Fellowship: 39,
                 //    Other: 4},
                 // {name: 'Other race or race not reported Female',
                 //    number: 349,
                 //    Personal: 14.6,
                 //    Teaching: 15.2,
                 //    Research: 24.1,
                 //    Fellowship: 32.7,
                 //    Other: 13.5},
                 // {name: 'Ethnicity not reported  Female',
                 //    number: 964,
                 //    Personal: 6.8,
                 //    Teaching: 7.7,
                 //    Research: 9.9,
                 //    Fellowship: 12.4,
                 //    Other: 63.2},
                 {name: 'Women - Minority',
                  color: '#B3A606',
                  dashStyle: women_dashStyle,
                  symbol: women_symbol,
                    number: 6512,
                    Personal: 19.9,
                    Teaching: 11.4,
                    Research: 17.4,
                    Fellowship: 42.8,
                    Other: 8.6},
                 {name: 'Men (all)',
                  color: '#C397CC',
                  dashStyle: men_dashStyle,
                  symbol: men_symbol,
                    number: 57430,
                    Personal: 10.4,
                    Teaching: 16.4,
                    Research: 33.1,
                    Fellowship: 30.9,
                    Other: 9.3},
                 {name: 'Men - Hispanic',
                  color: '#FFCA72',
                  dashStyle: men_dashStyle,
                  symbol: men_symbol,
                    number: 3201,
                    Personal: 11.2,
                    Teaching: 14.2,
                    Research: 25.2,
                    Fellowship: 39.4,
                    Other: 10},
                 {name: 'Men - Native',
                  color: '#F386B3',
                  dashStyle: men_dashStyle,
                  symbol: men_symbol,
                    number: 169,
                    Personal: 21.9,
                    Teaching: 13,
                    Research: 20.1,
                    Fellowship: 35.5,
                    Other: 9.5},
                 // {name: 'Asian Male',
                 //    number: 5234,
                 //    Personal: 7.1,
                 //    Teaching: 12.9,
                 //    Research: 38.2,
                 //    Fellowship: 32.7,
                 //    Other: 9.2},
                 {name: 'Men - African',
                  color: '#A8EE5C',
                  dashStyle: men_dashStyle,
                  symbol: men_symbol,
                    number: 2103,
                    Personal: 20.4,
                    Teaching: 12.9,
                    Research: 20,
                    Fellowship: 37.2,
                    Other: 9.5},
                 {name: 'Men - White',
                  color: '#A4BBD5',
                  dashStyle: men_dashStyle,
                  symbol: men_symbol,
                    number: 43472,
                    Personal: 10.4,
                    Teaching: 17.5,
                    Research: 34.2,
                    Fellowship: 30.1,
                    Other: 7.8},
                 // {name: 'Two or more races Male',
                 //    number: 1313,
                 //    Personal: 9.1,
                 //    Teaching: 14.9,
                 //    Research: 34.3,
                 //    Fellowship: 36.1,
                 //    Other: 5.6},
                 // {name: 'Other race or race not reported Male',
                 //    number: 513,
                 //    Personal: 9,
                 //    Teaching: 15.4,
                 //    Research: 31,
                 //    Fellowship: 30.2,
                 //    Other: 14.4},
                 // {name: 'Ethnicity not reported Male',
                 //    number: 1425,
                 //    Personal: 6.6,
                 //    Teaching: 8.1,
                 //    Research: 16.5,
                 //    Fellowship: 15.5,
                 //    Other: 53.3},
                 {name: 'Men - Minority',
                  color: '#E3D73F',
                  dashStyle: men_dashStyle,
                  symbol: men_symbol,
                    number: 5473,
                    Personal: 15.1,
                    Teaching: 13.7,
                    Research: 23,
                    Fellowship: 38.4,
                    Other: 9.8}
                ]

    // DATA END //////////////////////////////////
    //////////////////////////////////////////////

    race_idx = Array.apply(null, Array(race_list.length)).map(function (_, i) {return i;});
    seriesData = []
    for (d in Data) {
        for (i of race_idx) {
            if (Data[d].name == race_list[i]) {
                seriesData.push({
                    name: Data[d].name,
                    data: [Data[d].Personal,
                           Data[d].Teaching,
                           Data[d].Research,
                           Data[d].Fellowship,
                           Data[d].Other],
                    pointPlacement: 'on',
                    color: Data[d].color,
                    dashStyle: Data[d].dashStyle,
                    marker: {symbol: Data[d].symbol}}
                    )
                race_idx.splice(race_idx.indexOf(i),1)
            }
        }
    }

	// Container to adjust ////////////////////////////////////////
	Highcharts.chart(container, {

    chart: {
        polar: true,
        type: 'line'
    },

    title: {
        text: 'Source of Support for Doctor in 2010-14',
        x: 0
    },

    pane: {
        size: '80%'
    },

    xAxis: {
        categories: ['Personal or family funds',
                     'Teaching assistantship',
                     'Research assistantship, traineeship, or internship',
                     'Fellowship, scholarship, or grant',
                     'Other'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        max: 50
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.1f}%</b><br/>'
    },

    legend: {
    	enabled: false,
        align: 'right',
        verticalAlign: 'top',
        y: 70,
        layout: 'vertical'
    },

    series: seriesData

	});
	
}