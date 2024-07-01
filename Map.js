import React, { useEffect, useRef } from 'react';
import { Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import locs from './locs.json'; // Coleta da API locs.json 

//Código base do Mapa e seu funcionamento
const Map = () => {
    const mapRef = useRef(null);

    // Permissão para coletar posição do usuário
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permissão de localização não concedida');
                return;
            }
            // coleta a geolocalização atual do usuário
            let { coords } = await Location.getCurrentPositionAsync({});
            if (mapRef.current) {
                mapRef.current.animateToRegion({
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                });
            }
        })();
    }, []);

    // renderiza as marcações do arquivo locs.json no mapa
    const renderMarkers = () => {
        if (!locs || locs.length === 0) return;

        return locs.map((loc, index) => (
            <Marker key={index} coordinate={loc.coords} title={loc.nome} description={loc.desc} />
        ));
    };

    return (
        <MapView
            ref={mapRef}
            style={{ flex: 1 }}
            // Callback caso a geolocalização dê errado, o mapa redireciona ao Marco 0 do Recife
            initialRegion={{
                latitude: -8.06298, 
                longitude: -34.87116,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            showsUserLocation={true}
        >
            {renderMarkers()}
        </MapView>
    );
};

export default Map;


// Uso da Api Google Maps - Places -> Disponível em https://developers.google.com/maps
// const APIKEY = "AIzaSyABVl5sRodgk3jyO5_2mZWxRsrUEaWvDZM";
// let map;
// let service;
// let infowindow;

// o Código comentado abaixo é um exemplo gerado automaticamente pela documentação do Google Maps Api (em sua documentação);
// Este código foi tomado como base para modificações para a realidade do app, porém o mesmo será mantido em forma de comentário para eventuais consultas.
// function initMap() {
//   const sydney = new google.maps.LatLng(-33.867, 151.195);

//   infowindow = new google.maps.InfoWindow();
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: sydney,
//     zoom: 15,
//   });

//   const request = {
//     query: "Coworking",
//     fields: ["name", "geometry"],
//   };

//   service = new google.maps.places.PlacesService(map);
//   service.findPlaceFromQuery(request, (results, status) => {
//     if (status === google.maps.places.PlacesServiceStatus.OK && results) {
//       for (let i = 0; i < results.length; i++) {
//         createMarker(results[i]);
//       }

//       map.setCenter(results[0].geometry.location);
//     }
//   });
// }

//////

// function createMarker(place) {
//   if (!place.geometry || !place.geometry.location) return;

//   const marker = new google.maps.Marker({
//     map,
//     position: place.geometry.location,
//   });

//   google.maps.event.addListener(marker, "click", () => {
//     infowindow.setContent(place.name || "");
//     infowindow.open(map);
//   });
// }

