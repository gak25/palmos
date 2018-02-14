function getHealthColor(sensor_status) {
	var healthColor;
	switch (sensor_status.toUpperCase()) {
		case 'HEALTHY':
			healthColor = '#2C9F30';
			break;
		case 'WARNING':
			healthColor = '#FD7723';
			break;
		case 'CRITICAL':
			healthColor = '#FC2D2A';
			break;
		case 'OFF':
			healthColor = '#000';
			break;
		case 'OTHER':
			healthColor = '#1C7BA1';
			break;
		default:
			healthColor = '#000';
			break;
	}
	return { color: healthColor };
}

function getRiskColor(x) {
	var riskColor;
	switch (true) {
		case x < 20:
			riskColor = '#FC2D2A';
			break;
		case x < 40:
			riskColor = '#FD7723';
			break;
		case x < 60:
			riskColor = '#FDBE2D';
			break;
		case x < 80:
			riskColor = '#1C7BA1';
			break;
		case x < 100:
			riskColor = '#2C9F30';
			break;
		default:
			riskColor = '#000';
			break;
	}
	return { color: riskColor };
}
