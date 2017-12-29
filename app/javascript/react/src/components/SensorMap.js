// import React from 'react';
// import { compose, withProps } from 'recompose';
// import {
// 	withScriptjs,
// 	withGoogleMap,
// 	GoogleMap,
// 	Marker
// } from 'react-google-maps';
//
// export const MyMapComponent = compose(
// 	withProps({
// 		googleMapURL:
// 			'https://maps.googleapis.com/maps/api/js?key=AIzaSyDdBRM60gNDSvQZnVj57MSi1n9hKI6Piqo&v=3.exp&libraries=geometry,drawing,places',
// 		loadingElement: <div style={{ height: `100%` }} />,
// 		containerElement: <div style={{ height: `400px` }} />,
// 		mapElement: <div style={{ height: `100%` }} />
// 	}),
// 	withScriptjs,
// 	withGoogleMap
// )(props => (
// 	<GoogleMap
// 		defaultZoom={12}
// 		center={{ lat: 42.381511, lng: -71.105099 }}
// 		defaultCenter={{ lat: -34.397, lng: 150.644 }}
// 	>
// 		<Marker onClick={props.onMarkerClick} position={props.position} />
// 	</GoogleMap>
// ));

// export default class DashboardMap extends React.PureComponent {
// 	state = {
// 		// isMarkerShown: false
// 	};
//
// 	// componentDidMount() {}
// 	handleMarkerClick(event) {
// 		console.log('marker clicked');
// 	}
//
// 	render() {
// 		return (
// 			<MyMapComponent
// 				onMarkerClick={this.handleMarkerClick}
// 				position={{ lat: -34.397, lng: 150.644 }}
// 			/>
// 		);
// 	}
// }
