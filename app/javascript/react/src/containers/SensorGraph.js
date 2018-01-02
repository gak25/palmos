import React, { Component } from 'react';

class SensorGraph extends Component {
	constructor(props) {
		super(props);
		this.state = { array: [], canvasId: '' };
		this.drawGraph = this.drawGraph.bind(this);
	}

	drawGraph(array) {
		// var current_date = new Date();
		// var month = current_date.getMonth();
		// var day = current_date.getDate();
		var ctx = document.getElementById(this.state.canvasId).getContext('2d');

		// var gradientStroke = ctx.createLinearGradient(0, 0, 300, 0);
		// gradientStroke.addColorStop(0.1, 'rgba(33,55,86,0)');
		// gradientStroke.addColorStop(0.3, '#213756');
		// gradientStroke.addColorStop(1, '#213756');

		var gradientStroke = ctx.createLinearGradient(150.0, 0.0, 150.0, 300.0);
		gradientStroke.addColorStop(0.0, 'rgba(225, 0, 25, 1.000)');
		gradientStroke.addColorStop(0.2, 'rgba(33, 55, 86, 1.000)');

		var myChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: new Array(90),
				datasets: [
					{
						data: array,
						backgroundColor: 'rgba(0,0,0,0)',
						borderColor: gradientStroke,
						borderWidth: 1
					}
				]
			},
			options: {
				scales: {
					yAxes: [
						{
							gridLines: {
								drawTicks: false,
								display: false,
								drawBorder: false
							},
							display: true
						}
					],
					xAxes: [
						{
							gridLines: {
								display: false,
								drawBorder: false
							},
							display: true
						}
					]
				},
				elements: { point: { radius: 1 } },
				legend: { display: false },
				layout: {
					padding: {
						left: 10,
						right: 0,
						top: 20,
						bottom: 0
					}
				}
			}
		});
	}

	componentWillMount() {
		this.setState({
			canvasId: Object.keys(this.props)[0],
			array: Object.values(this.props)[0]
		});
	}

	componentDidMount() {
		this.drawGraph(this.state.array);
	}

	render() {
		return (
			<div>
				<canvas className="data-graph" id={this.state.canvasId} />
				<script src="/javascripts/Chart.bundle.min.js" />
			</div>
		);
	}
}

export default SensorGraph;
