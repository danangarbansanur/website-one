import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// Wrap all `react-google-maps` components with `withGoogleMap` HOC
// and name it MapWrapper
const MapWrapper = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    onClick={props.onMapClick}
  >
    {props.markers.map((marker, index) => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(index)}
      />
    ))}
  </GoogleMap>
));

export default MapWrapper;