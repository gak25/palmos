const MapStyles = {
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
};
