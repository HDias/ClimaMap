/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  Text
} from 'react-native';

import OpenWeather from './src/open-weather-api';

//https://github.com/lelandrichardson/react-native-maps
import MapView from 'react-native-maps';

//https://github.com/teamrota/react-native-gmaps
//let RNGMap = require('react-native-gmaps'); // Outro package de map para android

class ClimaMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
        region: {
          latitude: -10.182734234623691,
          longitude: -48.33317745476961,
          latitudeDelta: 0.0561,
          longitudeDelta: 0.0359
        },
        marker: {
          latitude: 0,
          longitude: 0
        },
        city: '',
        temperature: '',
        description: ''

    }
  }
 // Aula 40
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete.bind(this)}
          >
          { this.getMarker() }
        </MapView>
        <View style={styles.dataContainer}>
          <View style={[styles.bubble, styles.latlng, styles.marginText]}>
            <Text style={styles.textLat}>
              {`${this.state.marker.latitude.toPrecision(7)}, ${this.state.marker.longitude.toPrecision(7)}`}
            </Text>
          </View>
          <View style={[styles.bubble, styles.wheaterCity]}>
            <Text style={styles.textLat}>
              { this.state.temperature + ' em ' + this.state.city }
            </Text>
          </View>
          <View style={[styles.bubble, styles.latlng]}>
            <Text style={styles.textLat}>
              { this.state.description }
            </Text>
          </View>
        </View>

      </View>
    );
  }

  getMarker() {
    return <MapView.Marker coordinate={this.state.marker} />;
  }

  onRegionChangeComplete(region) {
    this.setState({
      marker: {
        latitude: region.latitude,
        longitude: region.longitude
      }
    });

    console.log(this.state.region);

    OpenWeather(region.latitude, region.longitude)
      .then((data) => { // Para setar os valores para o ambinete global
        this.setState(data);
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  dataContainer: {
    alignItems: 'center'
  },
  bubble: {
   backgroundColor: 'rgba(255,255,255,0.7)',
   paddingHorizontal: 18,
   paddingVertical: 12,
   borderRadius: 10
 },
 latlng: {
   width: 200,
   alignItems: 'stretch',
 },
 wheaterCity: {
   width: 250,
   alignItems: 'stretch',
 },
 marginText: {
   marginVertical: 10
 },
 textLat: {
   textAlign: 'center'
 }
});

AppRegistry.registerComponent('ClimaMap', () => ClimaMap);
