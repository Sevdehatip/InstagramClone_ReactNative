import React, { Component } from 'react';
import { Text,View, FlatList,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import {getPost} from '../../actions';

import Header from './Header'
import Image from './Image'
import Comment from './Comment'


export default class Home extends Component {
    state = {
        end: 10
      }
    
      renderMore=() => {
        end = this.state.end
        return( 
          <View style={{alignItems:'center', justifyContent:'center'}}>
            <TouchableOpacity onPress = {() => this.props.getPosts(0, end+10) }>
              <Text>Daha Fazla</Text>
            </TouchableOpacity>
          </View>
        )    
      } 
    
      componentDidMount() {
        this.props.getPosts(0,this.state.end)
      }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
         <FlatList data = {this.props.posts}
                  keyExtractor = {(item, index) => index.toString()} 
                  renderItem = {({item}) => 
                    <View style={{flex:1}}>

                      <Header userName = "Aaaa Bbbb" profileImageurl ='http://i.hurimg.com/i/hurriyet/75/770x0/58ee30b218c7732f2c820658' />
                     
                      <Image imageurl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeFDcxUKZlwApDUjuud2P0p6kOjwAqTQ_0PM1vce_plTNoG8OZ'/>

                      <Comment comment = {item.title} />

                    </View>
                    
                  }
                  ListFooterComponent = {this.renderFooter()}
        />
      </View>
    );
  }
}

const mapStateToProps=({postsResponse})=>{
    return {posts:postsResponse.posts,loading:postsResponse.loading}
  }
  
  export default connect(mapStateToProps,{getPost})(Home);