import React, {Component} from 'react';


import {Router, Scene, Tabs} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './components/Home/Home';
import Explore from './components/Explore';
import Likes from './components/Likes';
import Profile from './components/Profile';


const iconn=(name,data)=>{console.log(data.focused);
return<Icon color={data.focused? 'blue':'black'} name={name} size={25}/>}
export default class componentName extends Component{
    render(){
        return(
            <Router
            sceneStyle={styles.container}
            navigationBarStyle={styles.navBar}
            titleStyle={styles.titleStyle}>
            <Tabs key="main" tabBarStyle={styles.tabBar} showLabel={false}>

            <Scene key="home"
            title="Home"
            icon={(data)=>iconn('home', data)}
            component={Home}
            initial
            />
            <Scene key="explore"
            title="Keşfet"
            icon={(data)=>iconn('search', data)}
            component={Explore}
            />
            <Scene  key="plus"
            title={'Beğeniler'}
            icon={(data) => iconn('plus', data)}
            component={() => {
                              console.log('Olalala');
                              return null
                            }
                            } 
                            tabBarOnPress={() => console.log('asasd')}
                            />    

            <Scene  key="likes"
            icon={(data) =>iconn('heart', data)}
            title={'Beğeniler'}
            component={Likes} />

            <Scene key="profile"
            icon={(data) => iconn('user', data)}
            title={'Profil'}
            component={Profile} />

            
            </Tabs>
            
            
            </Router>
        );
    }
}
const styles = {
    container: {
      flex: 1,
      backgroundColor:'#e6e6fa'
    },
    tabBar: {
      borderTopColor: 'darkgrey',
      borderTopWidth: 0.3,
      backgroundColor: 'ghostwhite',
    },
    navBar: {
      backgroundColor: 'red',
    },
    titleStyle: {
      color:'white',
    },
  };