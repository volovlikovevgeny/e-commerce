import React from 'react';
import './mapbox.styles.scss';

import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZXZnZW55cXdlIiwiYSI6ImNrZ3F6b3p4MTBxajEzMGw4bHk1dHllZTkifQ.c2fxVlwO2Lw6OyxVi9UMgg'

class MapBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lng: 5,
            lat: 34,
            zoom: 2
        };
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/evgenyqwe/ckg0sbl952cri1alpf9g9hq54',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom

        });

        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });
    }

    render() {
        return (
            <div className='contacts'>
                <div className='contacts-container'>
                    <div className='row'>
                        <div className='head'>Name</div>
                        <div className='head-contact'>Evgeny</div>
                    </div>
                    <div className='row'>
                        <div className='head'>Address</div>
                        <div className='head-contact'>Lyapidevskogo,4</div>
                    </div>
                    <div className='row'>
                        <div className='head'>Email</div>
                        <div className='head-contact'>Volovlikov97@gmail.com</div>
                    </div>
                    <div className='row'>
                        <div className='head'>Phone</div>
                        <div className='head-contact' > 8(977)-285-04-61</div>
                    </div>

                </div>

                <div className='mapContainer' >
                    <div style={{ height: '300px', width: '100%' }} ref={el => this.mapContainer = el} className='mapContainer' />
                </div>
            </div>




        )
    }
}


export default MapBox;


