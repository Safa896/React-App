import CanvasJSReact from './canvasjs.react';
var React = require('react');
var Component = React.Component;
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Statistique extends Component {
	render() {
		const options = {
			title: {
				text: "Statistique des dépôts des livrables"
			},
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: [
					{ label: "January",  y: 10  },
					{ label: "February", y: 15  },
					{ label: "March", y: 25  },
					{ label: "April",  y: 30  },
					{ label: "May",  y: 28  }
				]
			}
			]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default Statistique;     