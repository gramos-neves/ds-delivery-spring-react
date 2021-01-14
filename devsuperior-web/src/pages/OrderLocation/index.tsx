import './styles.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import AsyncSelect from 'react-select/async';
import { useState } from 'react';
import axios from 'axios';
import { OrderLocationData } from '../../models/Product-Types';


type Place = {
  label?: string;
  value?: string;
  position: {
    lat: number;
    lng: number;
  }
}

type Props = {
  onChangeLocation: (location: OrderLocationData) => void;
}

const OrderLocation = ({ onChangeLocation }: Props) => {

  const initialPosition = {
    lat: 51.505,
    lng: -0.09
  }
  const [address, setAddress] = useState<Place>({
    position: initialPosition
  })

  const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

  const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => {
    const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${inputValue}.json?access_token=${mapboxToken}`);

    const places = response.data.features.map((item: any) => {
      return ({
        label: item.place_name,
        value: item.place_name,
        position: {
          lat: item.center[1],
          lng: item.center[0]
        }
      });
    });

    callback(places);
  };

  const handleChangeSelect = (place: Place) => {
    setAddress(place);
    onChangeLocation({
      latitude: place.position.lat,
      longitude: place.position.lng,
      address: place.label!
    });
  };



  return (
    <div className="order-location-container">
      <div className="order-location-content">
        <h3 className="order-location-title">
          Selecione onde o pedido deve ser entregue:
              </h3>
        <div className="filter-container">
          <AsyncSelect
            placeholder="Digite um endereço para entregar o pedido"
            className="filter"
            loadOptions={loadOptions}
            onChange={value => handleChangeSelect(value as Place)}
          />
        </div>
        <Map center={address.position}
          zoom={19}
          scrollWheelZoom={false}
          key={address.position.lat}  >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={address.position}>
            <Popup>
              {address.label}
            </Popup>
          </Marker>
        </Map>
      </div>
    </div>
  )
}


export default OrderLocation