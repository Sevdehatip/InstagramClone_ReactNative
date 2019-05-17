import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

export default class Comment extends Component {

  render() {
    return (
        <View style={styles.comment}>
            <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems:'center'}}>
                <View style={{flexDirection:'row'}}>
                    <Icon style={{ marginLeft: 5 }} size={28} name="ios-heart"/>
                    <Icon style={{ marginLeft: 5 }} size={28} name="ios-text"/>
                    <Icon style={{ marginLeft: 5 }} size={28} name="ios-share-alt"/>
                </View>
                <View>
                    <Icon size={28} name = "ios-more"/>
                </View>

            </View>

            <View>
                <Text>{this.props.comment}</Text>
            </View>
        </View>
    );
  }
}
const styles = {
    comment: {
        flex:1,
        margin:5
    }
}