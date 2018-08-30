// knob
var pie_data1 = {
  trackColor: '#ccc',
  barColor: '#c2ce1a',
  lineWidth: 10,
  lineCap: 'butt',
  size: 140	
}
var pie_data2 = {
	trackColor: '#ccc',
	barColor: '#149ca8',
	lineWidth: 10,
	lineCap: 'square',
	size: 140
}
var pie_data3 = {
	trackColor: '#ccc',
	barColor: '#7e9d73',
	lineWidth: 10,
	lineCap: 'butt' ,
	size: 140
	}
var pie_data4 = {
	trackColor: '#ccc',
	barColor: '#ccb361',
	lineWidth: 10,
	lineCap: 'butt' ,
	size: 140
	}
                
$(function() {
    // 파이차트 세팅
	$('.chart1').easyPieChart(pie_data1);
	$('.chart2').easyPieChart(pie_data2); 
	$('.chart3').easyPieChart(pie_data3);     
	$('.chart4').easyPieChart(pie_data4);     
	
	// 파이차트내 정보 표시(data-percent)
	$('[class^=chart]').each(function(i){
		var attr = $(this).attr('data-percent');
		$(this).find('span').text(attr);
	})
	
	$('.btn').click(function(){
		$('.chart1').data('easyPieChart').update(0).update(50);
	});	
});