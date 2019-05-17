import React, { Component } from 'react';
import { View,  Image, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window')

export default class Image extends Component {

  render() {
    return (
        <View style = {{flex:8}}>
            <Image
                style={styles.imageStyle}
                source={{uri: this.props.imageurl}}
            />
        </View>

    );
  }
}

const styles = {
    imageStyle: {
        width:400,
        height: 450, 
        resizeMode:'cover'
    }
}