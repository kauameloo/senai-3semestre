import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

import MapViewDirections from "react-native-maps-directions";

import { useEffect, useState } from "react";
import { mapskey } from "./utils/mapsKey";

export default function App() {
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
        <Text>Carregando...</Text>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const origin = {
    latitude: initialPosition.coords.latitude,
    longitude: initialPosition.coords.longitude,
  };
  const destination = {
    latitude: -23.564381,
    longitude: -46.652458,
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
          strokeColor="blue"
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
            latitude: -23.562951,
            longitude: -46.654699,
          }}
          title="Metro - Trianon Masp"
          description="Localização aproximada"
        />
        <Marker
          coordinate={origin}
          title="Você"
          description="Localização aproximada"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    flex: 1,
    width: "100%",
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  },
});
