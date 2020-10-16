import React, { useState } from 'react';
import ReactMapGl, { Marker, Popup } from 'react-map-gl';
import * as Data from './data.json';
import './mapbox.styles.scss';

const MapBox = () => {

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '80vh',
        latitude: 55.856485,
        longitude: 37.502631,
        zoom: 12
    })

    const [selectShop, setSelectedPark] = useState(null)

    let token = 'pk.eyJ1IjoiZXZnZW55cXdlIiwiYSI6ImNrZzByOXN3ZTB5aTIycnFmeHFxMHplMHgifQ.uO59eh5EzNq3QgdSggQ3YA'

    return (
        <div className='mapContainer'>
            <ReactMapGl
                {...viewport}
                mapboxApiAccessToken={token}
                mapStyle='mapbox://styles/evgenyqwe/ckg0sbl952cri1alpf9g9hq54'
                onViewportChange={viewport => {
                    setViewport(viewport)
                }}>
                {
                    Data.features.map((park) => (
                        <Marker
                            key={park.properties.id}
                            latitude={park.geometry.coordinates[1]}
                            longitude={park.geometry.coordinates[0]}
                        >
                            <div
                                className='marker-btn'
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedPark(park)
                                }} >
                                <img style={{ width: '30px', height: '30px' }} src='https://i.imgur.com/y0G5YTX.png' alt="GeoIcon" />
                            </div>
                        </Marker>
                    ))
                }
                {selectShop ? (
                    <Popup
                        latitude={selectShop.geometry.coordinates[1]}
                        longitude={selectShop.geometry.coordinates[0]}
                        onClose={() => {
                            setSelectedPark(null)
                        }}
                    >
                        <div style={{ width: '180px', height: '150px', textAlign: 'center', fontFamily: 'Arial' }}>
                            <h3 style={{ textAlign: 'center' }}>{selectShop.properties.title}</h3>
                            <p>{selectShop.properties.description}</p>
                            <p>{selectShop.properties.mail}</p>
                            <p>{selectShop.properties.contacts}</p>
                        </div>
                    </Popup>
                ) : null}
            </ReactMapGl>
        </div >
    )
}



export default MapBox;

