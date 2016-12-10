function plotEmployedSEByDegree_2013(data, id) {

  // plotting function
      Highcharts.chart(id, {
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
              tickInterval: 5,
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


// get input value
function getValue(array, id) {
    
    // the input get from the interface
    var degree_data = [];

    // for loop to concatenate the inputs
    // Men - Hispanic, Women - White

    for ( string in array ) {

        console.log("Into the for loop");
        if ( string == "Men - White" ) {
            
            console.log("Found you!!");
            degree_data.append(
                    [{
                      color: "#388CE8",          
                      name: 'Men - White',
                      data: [73,74, 71, 68]
                    }]
            );    
        }

        if ( string == "Women - White" ) {
            
            console.log("Found you!!");
            degree_data.append(
                    [{
                      color: "#388CE8",         
                      name: 'Women - White',
                      data: [71,70,73,68]
                    }]
            );    
        }

        if ( string == "Men - Hispanic" ) {
            
            console.log("Found you!!");
            degree_data.append(
                    [{        
                      color: "#F6A623",   
                      name: 'Men - Hispanic',
                      data: [7,7,6,4]
                    }]
            );    
        }

        if ( string == "Women - Hispanic" ) {
            
            console.log("Found you!!");
            degree_data.append(
                    [{        
                      color: "#F6A623",   
                      name: 'Women - Hispanic',
                      data: [8,9,7,5]
                    }]
            );    
        }

        if ( string == "Men - African" ) {
            
            console.log("Found you!!");
            degree_data.append(
                    [{         
                      color: "#7ED321",
                      name: 'Men - African',
                      data: [4,5,5,3]
                    }]
            );    
        }

        if ( string == "Women - African" ) {
            
            console.log("Found you!!");
            degree_data.append(
                    [{
                      color: "#7ED321",       
                      name: 'Women - African',
                      data: [8,8,8,6]
                    }]
            );    
        }

        if ( string == "Men - Native" ) {
            
            console.log("Found you!!");
            degree_data.append(
                    [{
                      color:"#ED2A7B",         
                      name: 'Men - Native',
                      data: [0.2,0.2,0.2,0.1]
                    }]
            );    
        }

        if ( string == "Women - Native" ) {
            
            console.log("Found you!!");
            degree_data.append(
                    [{         
                      color:"#ED2A7B",
                      name: 'Women - Native',
                      data: [0.3,0.4,0.2,0.4]
                    }]
            );    
        }
    }
    // call plotting function
    plotEmployedSEByDegree_2013(degree_data, id);
}