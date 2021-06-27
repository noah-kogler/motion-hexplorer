// noinspection JSUnusedGlobalSymbols

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import useContentAreaSize from "../hooks/content-area-size";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useRef } from "react";
import { withTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

L.Icon.Default.imagePath='icons/leaflet/';

const useStyles = makeStyles({
  category: {
    fontWeight: 'bold',
  },
});

const OpenMarker = props => {
  const leafletRef = useRef();

  useEffect(() => {
    leafletRef.current.openPopup();
  },[])

  return <Marker ref={leafletRef} {...props} />
}

function LocationMap({theme, lessons}) {
  const classes = useStyles();
  const router = useRouter();
  const {width, height} = useContentAreaSize(theme);
  if (width === 0 && height === 0) {
    return <div>loading...</div>
  }

  const salzburg = [47.8095, 13.0550];

  const markers = [];
  const lessonsWithAppointments = lessons.filter(lesson => 'appointments' in lesson);
  lessonsWithAppointments.forEach((lesson) => {
    const appointmentsWithLocations = lesson.appointments.filter(appointment => 'location' in appointment);
    appointmentsWithLocations.forEach((appointment) => {
      markers.push({location: appointment.location, appointment, lesson});
    });
  });

  return (
    <div style={{width, height}}>
      <MapContainer
        center={salzburg}
        zoom={13}
        scrollWheelZoom={true}
        style={{height: '100%'}}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        {
          markers.map(marker => {
            const ChosenMarker = marker.lesson.id === router.query.markLessonId ? OpenMarker : Marker;
            return <ChosenMarker
              position={marker.location.coords}
              key={marker.lesson.id}>
                <Popup>
                  <p className={classes.category}>{marker.lesson.category}</p>
                  <p>
                    <Link href={`/lesson/${marker.lesson.id}`}><a>{marker.lesson.title}</a></Link><br/>
                    {marker.appointment.date} @ {marker.location.name}
                  </p>
                  <Image
                    width={150}
                    height={100}
                    src={'image' in marker.lesson ? marker.lesson.image : '/placeholder.svg'} />
                </Popup>
            </ChosenMarker>;
          })
        }
      </MapContainer>
    </div>
  )
}

export default withTheme(LocationMap);
