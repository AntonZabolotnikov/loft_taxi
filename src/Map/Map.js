import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import keys from '../keys';
import './style/map.css';
import './style/mapboxGl_v1.7.0.css';

const Map = ({ name }) => {
    let mapContainer;

    useEffect(() => {
        mapboxgl.accessToken = keys['mapboxglKey'];

        const map = new mapboxgl.Map({
            container: mapContainer,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [30.315693, 59.938896],
            zoom: 16
        })

        return () => {
            map.remove();
        }

    }, [mapContainer]);

    const style = {
        position: 'absolute',
        top: 180,
        bottom: 0,
        left: 15,
        right: 15,
    };

    return (
        <>
            <h1>{ name }</h1>
            <div className="container-map" style={style} ref={el => mapContainer = el}></div>
        </>
    )
}

Map.propTypes = {
    name: PropTypes.string
}

export default Map;