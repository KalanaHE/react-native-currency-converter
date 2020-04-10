import React, {Component} from 'react';
import {ScrollView, StatusBar, Linking} from 'react-native';
import PropTypes from 'prop-types';
import {ListItem, Separator} from '../components/List';

// import {Ionicons} from '@expo/vector-icons';

// const ICON_COLOR = '#868686';
// const ICON_SIZE = 23;

class Options extends Component {

  static propTypes = {
    navigation: PropTypes.object,
  }

  handleThemePress = () => {
    console.log('Theme press');
    this.props.navigation.navigate('Themes');
  };

  handleSitePress = () => {
    console.log('Site Press');
    Linking.openURL('https://www.linkedin.com/in/kalanahe/').catch(()=>alert('An error occured!'));
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handleThemePress}
          //   customIcon={
          //     <Ionicons name="md-checkmark-circle" size={32} color="green" />
          //   }
        />
        <Separator />
        <ListItem
          text="About me"
          onPress={this.handleSitePress}
          //   customIcon={
          //     <Ionicons name="md-checkmark-circle" size={32} color="green" />
          //   }
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default Options;
