import React, {Component} from 'react';
import {ScrollView, StatusBar} from 'react-native';

import {ListItem, Separator} from '../components/List';

class Options extends Component {
  handleThemePress = () => {
    console.log('Theme press');
  };

  handleSitePress = () => {
    console.log('Site Press');
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem text="Themes" onPress={this.handleThemePress} />
        <Separator />
        <ListItem text="Fixer.io" onPress={this.handleSitePress} />
      </ScrollView>
    );
  }
}

export default Options;
