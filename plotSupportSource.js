function plotSupportSource() {
	
	title_str1 = 'Source of Support for '
	title_str2 = ' Doctor in 2010-14'

	var Data = [ {name: 'White Man',
				  color: '#00FFFF',
					Personal: 10.4, 
					Teaching: 17.5,
					Research: 34.2,
					Fellowship: 30.1,
					Other: 7.8},
				 {name: 'Hispanic Women',
				  color: '#FF7F50',
				    Personal: 17.2,
				    Teaching: 12.4,
				    Research: 19,
				    Fellowship: 42.4,
				    Other: 9},
				 {name: 'African Women',
				  color: '#7FFF00',
				    Personal: 23,
				    Teaching: 10.1,
				    Research: 15.8,
				    Fellowship: 43.2,
				    Other: 7.9},
				 {name: 'Native Women',
				  color: '#FF1493',
				    Personal: 21.2,
				    Teaching: 12.2,
				    Research: 10.9,
				    Fellowship: 42.3,
				    Other: 13.5}
				]

	for (idx in Data) {
		// Container to adjust ////////////////////////////////////////
		container = 'container'.concat(idx.toString())
		Highcharts.chart(container, {

        chart: {
            polar: true,
            type: 'line'
        },

        title: {
            text: title_str1.concat(Data[idx].name).concat(title_str2),
            x: -50
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
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}%</b><br/>'
        },

        legend: {
        	enabled: false,
            align: 'right',
            verticalAlign: 'top',
            y: 70,
            layout: 'vertical'
        },

        series: [{
            name: Data[idx].name,
            data: [Data[idx].Personal,
            	   Data[idx].Teaching,
            	   Data[idx].Research,
            	   Data[idx].Fellowship,
            	   Data[idx].Other],
            pointPlacement: 'on',
            color: Data[idx].color
        }]

    	});

	}
	
}