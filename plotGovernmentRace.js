function plotGovernmentRace(gemp) {
	var years = ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015"];
  var gemp_plot_info = ["gemp-container", "S&E Employed by Government Trend", '% employed by govt.',  '% of total S&E employed']
  var gemp_strict_plot_info = ["gemp-strict-container", "S&E Employed by Government Percent Increase Trend", '% employed by govt.',  '% change from previous year' ]
  var gemp_totals_array = getMetricTotals(gemp);
  var gemp_percent = convertValsToPercent(gemp_totals_array, gemp);
  plotAnyLineTrend(gemp_percent, years, gemp_plot_info);
  var gemp_aligned_array = gemp_percent
  gemp_aligned_array = calcPercentChangeByYear(gemp_aligned_array);
  plotAnyLineTrend(gemp_aligned_array, years, gemp_strict_plot_info);
}