import React from 'react';
import { Link } from 'react-router-dom';
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

const MyMapComponent = compose(
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
				mapRef.fitBounds(props.bounds);
			}
		}
	}),
	withScriptjs,
	withGoogleMap
)(props => (
	<GoogleMap
		defaultZoom={12}
		defaultCenter={{ lat: 42.381511, lng: -71.105099 }}
		ref={ref => {
			this.map = ref;
		}}
		center={props.position}
		options={{
			disableDefaultUI: true,
			styles: [
				{
					featureType: 'all',
					elementType: 'geometry.fill',
					stylers: [
						{
							weight: '2.00'
						}
					]
				},
				{
					featureType: 'all',
					elementType: 'geometry.stroke',
					stylers: [
						{
							color: '#c2c2c2'
						}
					]
				},
				{
					featureType: 'all',
					elementType: 'labels.text',
					stylers: [
						{
							visibility: 'simplified'
						},
						{
							saturation: '-5'
						},
						{
							color: '#7f8594'
						}
					]
				},
				{
					featureType: 'landscape',
					elementType: 'all',
					stylers: [
						{
							color: '#f2f2f2'
						}
					]
				},
				{
					featureType: 'landscape',
					elementType: 'geometry.fill',
					stylers: [
						{
							color: '#a3dec4'
						},
						{
							visibility: 'on'
						}
					]
				},
				{
					featureType: 'landscape.man_made',
					elementType: 'geometry.fill',
					stylers: [
						{
							color: '#eceff7'
						},
						{
							visibility: 'on'
						}
					]
				},
				{
					featureType: 'landscape.natural',
					elementType: 'geometry.fill',
					stylers: [
						{
							color: '#dbe5de'
						},
						{
							visibility: 'on'
						}
					]
				},
				{
					featureType: 'poi',
					elementType: 'all',
					stylers: [
						{
							visibility: 'off'
						}
					]
				},
				{
					featureType: 'poi.park',
					elementType: 'geometry.fill',
					stylers: [
						{
							visibility: 'on'
						},
						{
							color: '#e2ede7'
						}
					]
				},
				{
					featureType: 'road',
					elementType: 'all',
					stylers: [
						{
							saturation: -100
						},
						{
							lightness: 45
						}
					]
				},
				{
					featureType: 'road',
					elementType: 'geometry.fill',
					stylers: [
						{
							color: '#f7fafc'
						}
					]
				},
				{
					featureType: 'road',
					elementType: 'labels.text.fill',
					stylers: [
						{
							color: '#8f95a5'
						}
					]
				},
				{
					featureType: 'road',
					elementType: 'labels.text.stroke',
					stylers: [
						{
							color: '#ffffff'
						}
					]
				},
				{
					featureType: 'road.highway',
					elementType: 'all',
					stylers: [
						{
							visibility: 'simplified'
						},
						{
							saturation: '46'
						}
					]
				},
				{
					featureType: 'road.highway',
					elementType: 'labels.icon',
					stylers: [
						{
							visibility: 'off'
						}
					]
				},
				{
					featureType: 'road.highway.controlled_access',
					elementType: 'labels.icon',
					stylers: [
						{
							visibility: 'off'
						}
					]
				},
				{
					featureType: 'road.arterial',
					elementType: 'labels.icon',
					stylers: [
						{
							visibility: 'simplified'
						}
					]
				},
				{
					featureType: 'road.local',
					elementType: 'labels.icon',
					stylers: [
						{
							visibility: 'off'
						}
					]
				},
				{
					featureType: 'transit',
					elementType: 'all',
					stylers: [
						{
							visibility: 'off'
						},
						{
							saturation: '1'
						}
					]
				},
				{
					featureType: 'water',
					elementType: 'all',
					stylers: [
						{
							color: '#A6C7DA'
						},
						{
							visibility: 'on'
						}
					]
				},
				{
					featureType: 'water',
					elementType: 'geometry.fill',
					stylers: [
						{
							color: '#A6C7DA'
						},
						{
							visibility: 'on'
						}
					]
				},
				{
					featureType: 'water',
					elementType: 'labels.text.fill',
					stylers: [
						{
							color: '#4b4f59'
						}
					]
				},
				{
					featureType: 'water',
					elementType: 'labels.text.stroke',
					stylers: [
						{
							color: '#ffffff'
						}
					]
				}
			]
		}}
	>
		{props.bounds && props.setBoundsToAllSensors(this.map)}
		<MarkerClusterer
			onClick={props.onMarkerClustererClick}
			averageCenter
			enableRetinaIcons
			zoomOnClick
			gridSize={20}
		>
			{props.markers.map(marker => (
				<Marker
					onClick={props.onMarkerClick.bind(this, marker)}
					icon={{
						path: google.maps.SymbolPath.CIRCLE,
						scale: 8,
						fillColor: '#67d5c6',
						fillOpacity: 1,
						strokeColor: '#203657',
						strokeWeight: 3,
						strokeOpacity: 1
					}}
					key={marker.id}
					position={{
						lat: marker.sensor_latitude,
						lng: marker.sensor_longitude
					}}
				/>
			))}
		</MarkerClusterer>
	</GoogleMap>
));

export default class DashboardMap extends React.PureComponent {
	// handleMarkerClick(marker) {
	// 	console.log('marker_child: ' + marker);
	// }

	// componentDidMount() {
	// this.map.fitBounds(this.props.bounds);
	// }

	// componentWillReceiveProps(nextProps.position) {
	// 	if (nextProps.position != this.props.position) {
	// 		this.fetchUserRegions(nextProps.position);
	// 		this.setState({ position: nextProps.position });
	// 	}
	// }

	render() {
		// var bounds = new google.maps.LatLngBounds();
		// for (i = 0; i < this.props.sensors.length; i++) {
		// 	bounds.extend({
		// 		lat: sensors[i].sensor_latitude,
		// 		lng: sensors[i].sensor_longitude
		// 	});
		// }

		return (
			<MyMapComponent
				onMarkerClick={this.props.onMarkerClick}
				position={this.props.position}
				markers={this.props.sensors}
				bounds={this.props.bounds}
			/>
		);
	}
}