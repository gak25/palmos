import React from 'react';

import DashboardStatus from './DashboardSensorStatus/DashboardStatus';
const { compose, withProps, withHandlers } = require('recompose');
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker
} from 'react-google-maps';

const {
	MarkerClusterer
} = require('react-google-maps/lib/components/addons/MarkerClusterer');

const MapComponent = compose(
	withProps({
		googleMapURL:
			'https://maps.googleapis.com/maps/api/js?key=AIzaSyDdBRM60gNDSvQZnVj57MSi1n9hKI6Piqo&v=3.exp&libraries=geometry,drawing,places',
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div style={{ height: `100%` }} />,
		mapElement: <div style={{ height: `100%` }} />
	}),
	withHandlers({
		onMarkerClustererClick: () => markerClusterer => {},
		onMarkerClick: props => marker => {
			props.onMarkerClick(marker);
		},
		setBoundsToAllSensors: props => mapRef => {
			if (Object.keys(props.bounds).length > 0) {
				mapRef.setCenter(props.bounds.getCenter());
				mapRef.fitBounds(props.bounds);
			}
		}
	}),
	withScriptjs,
	withGoogleMap
)(props => (
	<GoogleMap
		defaultZoom={10}
		defaultCenter={{ lat: 42.381511, lng: -71.105099 }}
		ref={ref => {
			this.map = ref;
		}}
		// center={props.position}
		options={MapStyles}
	>
		{/* {props.bounds && props.setBoundsToAllSensors(this.map)} */}
		{/* {props.markers ? props.setBoundsToAllSensors(this.map) : null} */}
		{props.markers ? (
			<MarkerClusterer
				// onClick={props.onMarkerClustererClick}
				averageCenter
				enableRetinaIcons
				zoomOnClick
				gridSize={20}
			>
				{props.markers.map(marker => {
					return (
						<Marker
							onClick={props.onMarkerClick.bind(this, marker)}
							icon={MarkerStyles(google)}
							key={marker.id}
							position={{
								lat: marker.sensor_latitude,
								lng: marker.sensor_longitude
							}}
						/>
					);
				})}
			</MarkerClusterer>
		) : null}
	</GoogleMap>
));

import { connect } from 'react-redux';

function mapStateToProps(state) {
	return {
		dashboard: state.dashboard,
		markers: state.sensors.sensors
	};
}

@connect(mapStateToProps)
export default class DashboardMap extends React.PureComponent {
	render() {
		return (
			<div className="dashboard-main-sub-view">
				<div className="map">
					<MapComponent
						onMarkerClick={this.props.onMarkerClick}
						// position={this.props.position}
						markers={this.props.markers}
						// bounds={this.props.bounds}
					/>
				</div>
				{this.props.dashboard.dashboardStatusVisibility ? (
					<DashboardStatus />
				) : null}
			</div>
		);
	}
}
