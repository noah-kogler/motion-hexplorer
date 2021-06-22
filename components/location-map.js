import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import useContentAreaSize from "../hooks/content-area-size";
import { useRouter } from "next/router";
import Image from "next/image";
import { withTheme } from "@material-ui/core";
import { useEffect, useRef } from "react";

L.Icon.Default.imagePath='icons/leaflet/';

const OpenMarker = props => {
  const leafletRef = useRef();

  useEffect(() => {
    leafletRef.current.openPopup();
  },[])

  return <Marker ref={leafletRef} {...props} />
}

function LocationMap({theme, lessons}) {
  const router = useRouter();
  const {width, height} = useContentAreaSize(theme);
  if (width === 0 && height === 0) {
    return <div>loading...</div>
  }

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
          lessonsWithLocations.map(lesson => {
            const ChosenMarker = lesson.id === router.query.markLessonId ? OpenMarker : Marker;
            return <ChosenMarker
              position={lesson.location.coords}
              key={lesson.id}>
                <Popup>
                  {lesson.title} @ {lesson.location.name}<br/>
                  {lesson.category}
                  <Image
                    width={150}
                    height={100}
                    src={'image' in lesson ? lesson.image : '/placeholder.svg'} />
                </Popup>
            </ChosenMarker>;
          })
        }
      </MapContainer>
    </div>
  )
}

export default withTheme(LocationMap);
