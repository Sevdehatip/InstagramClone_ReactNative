import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class Header extends Component {
  

  render() {
    return (

        <View style={styles.head}>
            <View style={{flexDirection: 'row',alignItems:'center'}}>
                <Image
                    style={styles.imageStyle}
                    source={{uri: this.props.profileImageurl}}
                />
                <Text style={{marginLeft:10}}>{this.props.userName}</Text>
            </View>
            <Text>2d</Text>
        </View>
    );
  }
}

const styles = {
    head: {
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 5
        
    },

    imageStyle: {
        width: 60, 
        height: 60, 
        borderRadius: 30
    },
    

}