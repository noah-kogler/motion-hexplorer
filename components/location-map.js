import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import useWindowSize from "../hooks/window-size";
import { withTheme } from "@material-ui/core";
import useDocumentFontSize from "../hooks/document-font-size";

L.Icon.Default.imagePath='icons/leaflet/';

function LocationMap({theme}) {
  const windowSize = useWindowSize();

  const matches = theme.headerHeight.match(/(\d+)\s*rem/);
  if (!matches) {
    throw new Error(`Unsupported value for headerHeight in theme config: ${theme.headerHeight}`);
  }
  const headerHeightRem = parseInt(matches[1], 10);
  const documentFontSize = useDocumentFontSize();

  const width = windowSize.width;
  const height = windowSize.height - (headerHeightRem * documentFontSize);

  const salzburg = [47.8095, 13.0550];

  if (width === 0 && height === 0) {
    return <div>loading...</div>
  }

  return (
    <div style={{height, width}}>
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
