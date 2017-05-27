var chartFunc = function (json_result,title) {
    // var value_list ={{context.value_list}}
    // var title = "{{context.titlechart}}"
    // var attr_list = document.getElementById("attr").innerHTML
    // attr_list = attr_list.replace(/'/g, '"');
    // attr_list = JSON.parse(attr_list);
	var attr_list=[]
	var value_list=[]
	JSON.parse(json_result,function (k,v) {
		attr_list.push(k)
		value_list.push(v)
    })
    var data = {
    labels: attr_list,
    datasets: [
			{
				label: title,
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1,
				data: value_list,
			}
		]
	};
	var myBarChart = new Chart(myChart, {
		type: 'horizontalBar',
		data: data,
		options: {
			scales: {
				xAxes: [{
					stacked: true
				}],
				yAxes: [{
					stacked: true
				}]
			}}
	});
}