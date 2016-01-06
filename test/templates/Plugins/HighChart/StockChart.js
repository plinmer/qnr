var StockChart;StockChart||(StockChart={});
(function(){StockChart={lineStruct:{selector:"",title:"",subTitle:"",categories:[],yAxisTitle:"",valueSuffix:"",series:[],timeSpan:""},exportToExcel:function(a){0<a.series.length?Service.post({url:"/SensorReportService.svc/DownloadAsExcel",params:JSON.stringify({Title:a.title,SubTitle:a.subTitle,TimeSpan:a.timeSpan,Units:a.valueSuffix,Categories:a.categories,Series:a.series}),success:function(a){a&&a.ReportFile&&(a=String.format('<iframe src="{0}" class="hide"></iframe>',a.ReportFile),$("body").append(a))}}):
Messages.slideResult("\u5bf9\u4e0d\u8d77,\u6ca1\u6709\u6570\u636e\u53ef\u4ee5\u4e0b\u8f7d.")},formatter:{minute:"%H:%M",hour:"%H:%M",day:"%b%e\u65e5",week:"%b-%e",month:"%Y-%b",year:"%Y",xDate:"%A,%Y\u5e74%b%e\u65e5 %H:%M"},line:function(a){$(a.selector).data("hasSetOption")||(Highcharts.setOptions({lang:{contextButtonTitle:"\u5bfc\u51fa\u53ca\u6253\u5370",downloadExcel:"\u5bfc\u51faExcel\u6587\u4ef6",downloadJPEG:"\u5bfc\u51faJPEG\u56fe\u7247",downloadPNG:"\u5bfc\u51faPNG\u56fe\u7247",downloadPDF:"\u5bfc\u51faPDF\u6587\u4ef6",
downloadSVG:"\u5bfc\u51fa\u56fe\u7247",printChart:"\u6253\u5370\u56fe\u8868",months:"1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),shortMonths:"1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),weekdays:"\u661f\u671f\u5929 \u661f\u671f\u4e00 \u661f\u671f\u4e8c \u661f\u671f\u4e09 \u661f\u671f\u56db \u661f\u671f\u4e94 \u661f\u671f\u516d".split(" ")}}),$(a.selector).data("hasSetOption",
!0));var b=a.subTitle,b=50<b.length?b.substring(0,50)+"...":b,b=String.format("<span title='{0}'>{1}</span>",a.subTitle,b),b={dateTimeLabelFormats:StockChart.formatter};$(a.selector).highcharts("StockChart",{navigator:{enabled:!0,xAxis:{dateTimeLabelFormats:StockChart.formatter}},rangeSelector:{enabled:!1},title:{text:"",x:-20,useHTML:!0},xAxis:b,yAxis:{title:{text:a.yAxisTitle},plotLines:a.thresholds},tooltip:{valueSuffix:a.valueSuffix,dateTimeLabelFormats:StockChart.formatter,xDateFormat:StockChart.formatter.xDate,
valueDecimals:a.decimalLong||0},plotOptions:{series:{dataGrouping:{dateTimeLabelFormats:{millisecond:["%A, %b %e, %H:%M:%S.%L","%A, %b %e, %H:%M:%S.%L","-%H:%M:%S.%L"],second:["%A, %b %e, %H:%M:%S","%A, %b %e, %H:%M:%S","-%H:%M:%S"],minute:["%A, %b %e\u65e5, %H:%M","%A, %b %e\u65e5, %H:%M","-%H:%M"],hour:["%A, %b %e\u65e5, %H:%M","%A, %b %e\u65e5, %H:%M","-%H:%M"],day:["%A, %b %e, %Y","%A, %b %e","-%A, %b %e, %Y"],week:["Week from %A, %b %e, %Y","%A, %b %e","-%A, %b %e, %Y"],month:["%B %Y","%B","-%B %Y"],
year:["%Y","%Y","-%Y"]}}}},legend:{enabled:!0,layout:"vertical",align:"center",verticalAlign:"bottom",borderWidth:0,maxHeight:60},series:a.series,exporting:{enabled:!a.denyExport,buttons:{contextButton:{menuItems:[{textKey:"downloadExcel",onclick:function(){StockChart.exportToExcel(a)}},{separator:!0},{textKey:"downloadSVG",onclick:function(){this.exportChart({type:"image/svg+xml"})}},{separator:!0},{textKey:"printChart",onclick:function(){this.print()}}]}}}})},MonthDayFormatter:{minute:"%H:%M",hour:"%H:%M",
day:"%b%e\u65e5",week:"%b-%e",month:"%b",xDate:"%b%e\u65e5"},MonthDayLine:function(a){$(a.selector).data("hasSetOption")||(Highcharts.setOptions({lang:{contextButtonTitle:"\u5bfc\u51fa\u53ca\u6253\u5370",downloadExcel:"\u5bfc\u51faExcel\u6587\u4ef6",downloadJPEG:"\u5bfc\u51faJPEG\u56fe\u7247",downloadPNG:"\u5bfc\u51faPNG\u56fe\u7247",downloadPDF:"\u5bfc\u51faPDF\u6587\u4ef6",downloadSVG:"\u5bfc\u51fa\u56fe\u7247",printChart:"\u6253\u5370\u56fe\u8868",months:"1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),
shortMonths:"1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),weekdays:"\u661f\u671f\u5929 \u661f\u671f\u4e00 \u661f\u671f\u4e8c \u661f\u671f\u4e09 \u661f\u671f\u56db \u661f\u671f\u4e94 \u661f\u671f\u516d".split(" ")}}),$(a.selector).data("hasSetOption",!0));var b=a.subTitle,b=50<b.length?b.substring(0,50)+"...":b,b=String.format("<span title='{0}'>{1}</span>",a.subTitle,b),b={dateTimeLabelFormats:StockChart.MonthDayFormatter};$(a.selector).highcharts("StockChart",
{navigator:{enabled:!0,xAxis:{dateTimeLabelFormats:StockChart.MonthDayFormatter}},rangeSelector:{enabled:!1},title:{text:"",x:-20,useHTML:!0},xAxis:b,yAxis:{title:{text:a.yAxisTitle},plotLines:a.thresholds},tooltip:{valueSuffix:a.valueSuffix,dateTimeLabelFormats:StockChart.MonthDayFormatter,xDateFormat:StockChart.MonthDayFormatter.xDate,valueDecimals:a.decimalLong||0},plotOptions:{series:{dataGrouping:{dateTimeLabelFormats:{millisecond:["%A, %b %e, %H:%M:%S.%L","%A, %b %e, %H:%M:%S.%L","-%H:%M:%S.%L"],
second:["%A, %b %e, %H:%M:%S","%A, %b %e, %H:%M:%S","-%H:%M:%S"],minute:["%A, %b %e\u65e5, %H:%M","%A, %b %e\u65e5, %H:%M","-%H:%M"],hour:["%A, %b %e\u65e5, %H:%M","%A, %b %e\u65e5, %H:%M","-%H:%M"],day:["%b %e","%b %e","%b %e"],week:["Week from %A, %b %e, %Y","%A, %b %e","-%A, %b %e, %Y"],month:["%B ","%B","-%B"],year:["%Y","%Y","-%Y"]}}}},legend:{enabled:!0,layout:"vertical",align:"center",verticalAlign:"bottom",borderWidth:0,maxHeight:60},series:a.series,exporting:{enabled:!a.denyExport,buttons:{contextButton:{menuItems:[{textKey:"downloadExcel",
onclick:function(){StockChart.exportToExcel(a)}},{separator:!0},{textKey:"downloadSVG",onclick:function(){this.exportChart({type:"image/svg+xml"})}},{separator:!0},{textKey:"printChart",onclick:function(){this.print()}}]}}}})}}})();