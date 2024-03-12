import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

import MapViewDirections from "react-native-maps-directions";

import { useEffect, useState } from "react";
import { mapskey } from "../../services/mapsKey";

export const Maps = () => {
  const [initialPosition, setInitialPosition] = useState(null);

  async function captureLocation() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();

      setInitialPosition(currentPosition);
    }
  }

  useEffect(() => {
    captureLocation();
  }, []);

  if (!initialPosition) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Carregando localização...</Text>
        <ActivityIndicator size="small" color="gray" />
      </View>
    );
  }

  const origin = {
    latitude: initialPosition.coords.latitude,
    longitude: initialPosition.coords.longitude,
  };
  const destination = {
    latitude: -23.696697606124815,
    longitude: -46.52100908995458,
  };

  const midpoint = {
    latitude: (origin.latitude + destination.latitude) / 2,
    longitude: (origin.longitude + destination.longitude) / 2,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        // customMapStyle={grayMapStyle}
        initialRegion={{
          latitude: midpoint.latitude,
          longitude: midpoint.longitude,
          latitudeDelta: Math.abs(origin.latitude - destination.latitude) * 2,
          longitudeDelta:
            Math.abs(origin.longitude - destination.longitude) * 2,
        }}
      >
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={mapskey}
          strokeColor="black"
          strokeWidth={3}
          timePrecision="now"
          optimizeWaypoints={true}
        />
        {/* Criando um marcador no mapa */}
        <Marker
          coordinate={{
            latitude: -23.564381,
            longitude: -46.652458,
          }}
          title="FIAP - Paulista"
          description="Localização aproximada"
        />
        <Marker
          coordinate={{
            latitude: -23.696697606124815,
            longitude: -46.52100908995458,
          }}
          title="Casa"
          description="Localização aproximada"
        />
        {/* <Marker
          coordinate={{
            latitude: -23.562951,
            longitude: -46.654699,
          }}
          title="Metro - Trianon Masp"
          description="Localização aproximada"
        /> */}
        <Marker
          coordinate={origin}
          title="Você"
          description="Localização aproximada"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  map: {
    flex: 1,
    width: "100%",
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    // height: 300,
  },
});

const grayMapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#E1E0E7",
      },
    ],
  },
  {
    elementType: "geometry.fill",
    stylers: [
      {
        saturation: -5,
      },
      {
        lightness: -5,
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#FBFBFB",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#33303E",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi.business",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#66DA9F",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1B1B1B",
      },
    ],
  },
  {
    featureType: "road",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#C6C5CE",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#FBFBFB",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#ACABB7",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#8C8A97",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#8C8A97",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#8EA5D9",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#fbfbfb",
      },
    ],
  },
];
