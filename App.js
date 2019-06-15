import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import MapView, { Marker } from 'react-native-maps';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: []
    }
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress(e) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
        }
      ]
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          loadingEnabled={true}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          onPress={this.handlePress}
        >
          {this.state.markers.map((marker) => {
            return (
              <Marker {...marker}
                image={require('./arvore.jpg')}
              >
                <View style={styles.marker}>
                  <Text style={styles.text}>Arvre</Text>
                </View>
              </Marker>
            )
          })}
        </MapView>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  marker: {
    backgroundColor: "#550bbc",
    padding: 5,
    borderRadius: 5,
  },
  text: {
    color: "#FFF",
    fontWeight: "bold"
  }
});
