function plotEmployedSEByDegree_2013() {

  $(function () {
      Highcharts.chart('byDegree', {
          chart: {
              type: 'column'
          },
          title: {
              text: 'Employed S&E by Degree in 2013'
          },
          xAxis: {
            // columns based on these criteria
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
                  text: 'Percent'
              }
          },
          tooltip: {
              headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                  '<td style="padding:0"><b>{point.y:.1f} % </b></td></tr>',
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
              name: 'White Male',
              data: [73,74,	71,	68]
          }, {
              name: 'White Female',
              data: [71,70,73,68]
          }, {
              name: 'Hispanic Male',
              data: [7,7,6,4]
          }, {
              name: 'Hispanic Female',
              data: [8,9,7,5]

          }, {
              name: 'African Male',
              data: [4,5,5,3]

          },{
              name: 'African Female',
              data: [8,8,8,6]
          }, {
              name: 'Native Male',
              data: [0.2,0.2,0.2,0.1]
          }, {
              name: 'Native Female',
              data: [0.3,0.4,0.2,0.4]
          }]
      });
  });
}

function plotEmployedSEByRace_2013() {  
  $(function () {
      Highcharts.chart('byRace', {
          chart: {
              type: 'column'
          },
          title: {
              text: 'Employed S&E by Race in 2013'
          },
          xAxis: {
              categories: [
                  'White Male',
                  'White Female',
                  'Hispanic Male',
                  'Hispancic Femlae',
                  'African Male',
                  'African Femlae',
                  'Native Male',
                  'African Female'
              ],
              crosshair: true
          },
          yAxis: {
              min: 0,
              title: {
                  text: 'Percent'
              }
          },
          tooltip: {
              headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                  '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
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
              data: [ 73, 71, 7, 8, 4 ,8 , 0.2, 0.3 ]
          }, {
              name: 'Bachelor',
              data: [ 74, 70, 7, 9, 5, 8, 0.2, 0.4 ]
          }, {
              name: 'Master',
              data: [ 71, 73, 6, 7, 5, 8, 0.2, 0.2 ]
          }, {
              name: 'Doctoral',
              data: [ 68, 68, 4, 5, 3, 6, 0.1, 0.4 ]

          }]
      });
  });
}

plotEmployedSEByDegree_2013();
plotEmployedSEByRace_2013();