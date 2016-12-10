function plotDegreeAttainment() {
  var mdeg_json = (function () {
    var json;
    $.ajax({
        'async': false,
        'global': false,
        'url': "MasterDegree.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
  })();
  var ddeg_json = (function () {
    var json;
    $.ajax({
        'async': false,
        'global': false,
        'url': "DoctoralDegree.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
  })();
  var years = ["2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014"];
  var mdeg_plot_info = ["mdeg-container", "Master's Degree Attainment Trend", "Percent of attained degrees", "% of total degrees attained" ]
  var ddeg_plot_info = ["ddeg-container", "Doctoral Degree Attainment Trend", "Percent of attained degrees", "% of total degrees attained" ]
  var mdeg_strict_plot_info = ["mdeg-strict-container", "Master's Degree Percent Increase Trend", "Percent of attained degrees", "% change from previous year"  ]
  var ddeg_strict_plot_info = ["ddeg-strict-container", "Doctoral Degree Percent Increase Trend", "Percent of attained degrees", "% change from previous year" ]
  var mdeg_totals_array = getMetricTotals(mdeg_json); //Gets totals which are used to calculate % of each race
  var ddeg_totals_array = getMetricTotals(ddeg_json);
  var mdeg_percent = convertValsToPercent(mdeg_totals_array, mdeg_json);  //Converts all race data to percent
  var ddeg_percent = convertValsToPercent(ddeg_totals_array, ddeg_json);
  plotAnyLineTrend(mdeg_percent, years, mdeg_plot_info); //Plots the degrees percent first before calculating strict increase
  plotAnyLineTrend(ddeg_percent, years, ddeg_plot_info);
  var mdeg_aligned_array = mdeg_percent
  var ddeg_aligned_array = ddeg_percent
  mdeg_aligned_array = calcPercentChangeByYear(mdeg_aligned_array);
  ddeg_aligned_array = calcPercentChangeByYear(ddeg_aligned_array);
  plotAnyLineTrend(mdeg_aligned_array, years, mdeg_strict_plot_info); //Plots the degrees percent increase
  plotAnyLineTrend(ddeg_aligned_array, years, ddeg_strict_plot_info);  	
}

