
// by degree
function plotEmployedSEByDegree_2013(data) {

  // plotting function
      Highcharts.chart('byDegree', {

          chart: {
              type: 'column'
          },
          title: {
              text: 'Employed S&E by Degree in 2013'
          },
          xAxis: {

            // columns based on degrees
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
          series: data
      });
}

// by race
function plotEmployedSEByRace_2013( data , race_category) {  
      Highcharts.chart('byRace', {
          chart: {
              type: 'column'
          },
          title: {
              text: 'Employed S&E by Race in 2013'
          },
          xAxis: {
              categories: race_category,
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
          series: data
      });
}


// get input value
function getValue() {

    var input_value = $('#input').val();
    console.log('loading data...');
    
    var degree_data = [];
    var race_data = [];
    var race_category = [];

    // based on the request groups to show corresponding bar graphs
    if ( input_value === "all") {
        console.log('case "all"');
        degree_data = [{         
                      name: 'White Male',
                      data: [73,74, 71, 68]
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
                  } ];
        race_data = [{         
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
                  } ];
        race_category = [
                  'White Male',
                  'White Female',
                  'Hispanic Male',
                  'Hispancic Femlae',
                  'African Male',
                  'African Femlae',
                  'Native Male',
                  'African Female'
              ]
    }

    if ( input_value === "White Male, White Female") {
        degree_data = [{         
                      name: 'White Male',
                      data: [73,74, 71, 68]
                    }, {
                      name: 'White Female',
                      data: [71,70,73,68]
                    }];
        race_data = [{         
                      name: 'All Degrees',
                      data: [ 73, 71 ]
                  }, {
                      name: 'Bachelor',
                      data: [ 74, 70 ]
                  }, {
                      name: 'Master',
                      data: [ 71, 73 ]
                  }, {
                      name: 'Doctoral',
                      data: [ 68, 68 ]
                  } ];
        race_category = [
                  'White Male',
                  'White Female'
              ]
    }
    
    if ( input_value === "White Male, Hispanic Male") {
        degree_data = [{         
                      name: 'White Male',
                      data: [73,74, 71, 68]
                    }, {
                      name: 'Hispanic Male',
                      data: [7,7,6,4]
                    }];
        race_data = [{         
                      name: 'All Degrees',
                      data: [ 73, 7 ]
                  }, {
                      name: 'Bachelor',
                      data: [ 74, 7 ]
                  }, {
                      name: 'Master',
                      data: [ 71, 6 ]
                  }, {
                      name: 'Doctoral',
                      data: [ 68, 4 ]
                  } ];
        race_category = [
                  'White Male',
                  'Hispanic Male'
              ]
    }

    if ( input_value === "White Male, Hispanic Male") {
        degree_data = [{         
                      name: 'White Male',
                      data: [73,74, 71, 68]
                    }, {
                      name: 'Hispanic Male',
                      data: [7,7,6,4]
                    }];
        race_data = [{         
                      name: 'All Degrees',
                      data: [ 73, 7 ]
                  }, {
                      name: 'Bachelor',
                      data: [ 74, 7 ]
                  }, {
                      name: 'Master',
                      data: [ 71, 6 ]
                  }, {
                      name: 'Doctoral',
                      data: [ 68, 4 ]
                  } ];
        race_category = [
                  'White Male',
                  'Hispanic Male'
              ]
    }


    // call plotting function
    plotEmployedSEByDegree_2013(degree_data);
    plotEmployedSEByRace_2013(race_data, race_category);
}