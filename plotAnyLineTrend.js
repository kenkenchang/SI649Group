function plotAnyLineTrend(deg, years, deg_plot_info) { 
    Highcharts.chart( deg_plot_info[0], {
        chart: {
            type: 'line'
        },
        title: {
            text:  deg_plot_info[1]
        },
        xAxis: {
            categories: years
        },
        yAxis: {
            title: {
                text: deg_plot_info[2]
            }
        },tooltip: {
            valueSuffix: deg_plot_info[3]
        },
        series: deg
    });
};

function getMetricTotals (vals_json){
  var sum_total_array = [];
  for (var i = 0; i < vals_json.length; i++) {
    if (i == 0){//gets all male totals
      for (var j = 0; j < vals_json[i].data.length; j++) {
        sum_total_array.push(vals_json[i].data[j])
      }
    }
    else if ( i == 5){ //gets all female totals
      for (var j = 0; j < vals_json[i].data.length; j++) {
        sum_total_array[j]+=vals_json[i].data[j]
      }
    }
  }
  return sum_total_array;
};

function convertValsToPercent (totals_array, vals_json){
  for (var i = 0; i < vals_json.length; i++) { //for each json object in array
    for (var j = 0; j < vals_json[i].data.length; j++) { //convert each of its data element (value of feature) to a percentage 
        vals_json[i].data[j]= ((vals_json[i].data[j]/totals_array[j]))*100
        vals_json[i].data[j]=Math.round(vals_json[i].data[j]*100) / 100 //round it to 2 d.p
    }
  }
  return vals_json;
}

function calcPercentChangeByYear(percent_json){
  var prev_old_value;
  var curr_old_value;
  var data = []
  for (var i = 0; i < percent_json.length; i++) { //for each json object in array
    var data = []
    for (var j = 0; j < percent_json[i].data.length; j++) { 
      var percent_yearly_change;
      if (j == 0){
        percent_yearly_change = Math.round(((percent_json[i].data[j]-percent_json[i].data[0])/percent_json[i].data[0])*100*100)/100
        data.push(percent_yearly_change)
      }
      else {
        percent_yearly_change = Math.round(((percent_json[i].data[j]-percent_json[i].data[j-1])/percent_json[i].data[j-1])*100*100)/100
        data.push(percent_yearly_change)
      }
    }
    percent_json[i].data = data;
  }
  return percent_json;
}