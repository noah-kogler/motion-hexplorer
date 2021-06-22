import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { withTheme } from "@material-ui/core";
import useContentAreaSize from "../hooks/content-area-size";
import { useRouter } from "next/router";

L.Icon.Default.imagePath='icons/leaflet/';

function LocationMap({theme, lessons}) {
  const router = useRouter();
  const {width, height} = useContentAreaSize(theme);
  if (width === 0 && height === 0) {
    return <div>loading...</div>
  }

  console.log('TODO MARK: ' + router.query.markLessonId);

  const salzburg = [47.8095, 13.0550];

  const lessonsWithLocations = lessons.filter(lesson => 'location' in lesson);
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
        {
          lessonsWithLocations.map(lesson =>
            <Marker position={lesson.location.coords} key={lesson.id}>
              <Popup>
                {lesson.title}<br/>
                {lesson.category}
              </Popup>
            </Marker>
          )
        }
      </MapContainer>
    </div>
  )
}

export default withTheme(LocationMap);
