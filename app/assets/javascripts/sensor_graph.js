// function drawContributionHistory(array) {
// 	var current_date = new Date();
// 	var month = current_date.getMonth();
// 	var day = current_date.getDate();
// 	var ctx = document.getElementById('canvas').getContext('2d');
// 	var gradientStroke = ctx.createLinearGradient(0, 0, 300, 0);
// 	gradientStroke.addColorStop(0.1, 'rgba(204,241,243,0)');
// 	gradientStroke.addColorStop(0.3, '#CCF1F3');
// 	gradientStroke.addColorStop(1, '#CCF1F3');
// 	var myChart = new Chart(ctx, {
// 		type: 'line',
// 		pointRadius: 0,
// 		data: {
// 			labels: new Array(array.length),
// 			datasets: [
// 				{
// 					data: array,
// 					backgroundColor: 'rgba(0,0,0,0)',
// 					borderColor: gradientStroke,
// 					borderWidth: 3
// 				}
// 			]
// 		},
// 		options: {
// 			scales: {
// 				yAxes: [
// 					{
// 						gridLines: {
// 							display: false,
// 							drawBorder: false
// 						},
// 						display: false
// 					}
// 				],
// 				xAxes: [
// 					{
// 						gridLines: {
// 							display: false,
// 							drawBorder: false
// 						}
// 					}
// 				]
// 			},
// 			elements: { point: { radius: 0 } },
// 			legend: { display: false },
// 			layout: {
// 				padding: {
// 					left: 0,
// 					right: 0,
// 					top: 25,
// 					bottom: 20
// 				}
// 			}
// 		}
// 	});
// }
//
// var array = document.currentScript.getAttribute('array');
// console.log('here... array = ' + array);
// drawContributionHistory(array);
