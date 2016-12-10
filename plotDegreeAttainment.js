function plotDegreeAttainment(params_array) {
  var years = ["2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014"];
  if (params_array[0] == "Master Degree Trend"){
    var json_to_plot = [];
    var mdeg_json = get_topic_json ("MasterDegree.json");
    var mdeg_plot_info = [params_array[2], "Master's Degree Attainment Trend", "Percent of attained degrees", "% of all degrees" ]
    var mdeg_totals_array = getMetricTotals(mdeg_json); //Gets totals which are used to calculate % of each race
    var mdeg_percent = convertValsToPercent(mdeg_totals_array, mdeg_json);  //Converts all race data to percent
    json_to_plot = get_json_to_plot(params_array[1], mdeg_percent);
    plotAnyLineTrend(json_to_plot, years, mdeg_plot_info); //Plots the degrees percent first before calculating strict increase
  }
  if (params_array[0] == "Doctoral Degree Trend"){
    var json_to_plot = [];
    var ddeg_json = get_topic_json ("MasterDegree.json");
    var ddeg_plot_info = [params_array[2], "Doctoral Degree Attainment Trend", "Percent of attained degrees", "% of all degrees" ]
    var ddeg_totals_array = getMetricTotals(ddeg_json);
    var ddeg_percent = convertValsToPercent(ddeg_totals_array, ddeg_json);
    json_to_plot = get_json_to_plot(params_array[1], ddeg_percent);
    plotAnyLineTrend(json_to_plot, years, ddeg_plot_info);
  }

  /*var mdeg_plot_info = ["mdeg-container", "Master's Degree Attainment Trend", "Percent of attained degrees", "% of all degrees" ]
  var ddeg_plot_info = ["ddeg-container", "Doctoral Degree Attainment Trend", "Percent of attained degrees", "% of all degrees" ]
  var mdeg_strict_plot_info = ["mdeg-strict-container", "Master's Degree Percent Increase Trend", "Percent of attained degrees", "% change since " + years[0] ]
  var ddeg_strict_plot_info = ["ddeg-strict-container", "Doctoral Degree Percent Increase Trend", "Percent of attained degrees", "% change since " + years[0] ]
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
  plotAnyLineTrend(ddeg_aligned_array, years, ddeg_strict_plot_info);*/  	
}

