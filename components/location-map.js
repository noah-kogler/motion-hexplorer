import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { withTheme } from "@material-ui/core";
import useContentAreaSize from "../hooks/content-area-size";

L.Icon.Default.imagePath='icons/leaflet/';

function LocationMap({theme}) {
  const {width, height} = useContentAreaSize(theme);
  const salzburg = [47.8095, 13.0550];

  if (width === 0 && height === 0) {
    return <div>loading...</div>
  }

  return (
    <div style={{width, height}}>
      <MapContainer
        center={salzburg}
        zoom={13}
        scrollWheelZoom={true}
        style={{height: '100%'}}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={salzburg}>
          <Popup>
            Beispiel-Training<br/>
            mit Jakob
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default withTheme(LocationMap);
