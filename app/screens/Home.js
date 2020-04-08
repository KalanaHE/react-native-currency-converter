import React, {Component} from 'react';
import {StatusBar, KeyboardAvoidingView} from 'react-native';

import {Container} from '../components/Container';
import {Logo} from '../components/Logo';
import {InputWithButton} from '../components/TextInput';
import {ClearButton} from '../components/Buttons';
import {LastConverted} from '../components/Text';
import {Header} from '../components/Header';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = '0.7974';
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {
  handlePressBaseCurrency = () => {
    console.log('Press base');
  };

  handlePressQuoteCurrency = () => {
    console.log('Press quote');
  };

  handleTextChange = text => {
    console.log(text);
  };

  handleSwapCurrency = () => {
    console.log('Swap Currencies');
  };

  handleOptionsPress = () => {
    console.log('Pressed Options');
  };

  render() {
    return (
      <Container>
        <StatusBar
          backgroundColor="#420612"
          translucent={false}
          barStyle="light-content"
        />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="heignt">
          <Logo />
          <InputWithButton
            buttonText={TEMP_BASE_CURRENCY}
            onPress={this.handlePressBaseCurrency}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
          />
          <InputWithButton
            buttonText={TEMP_QUOTE_CURRENCY}
            editable={false}
            onPress={this.handlePressQuoteCurrency}
            defaultValue={TEMP_QUOTE_PRICE}
          />

          <LastConverted
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
            date={TEMP_CONVERSION_DATE}
            conversionRate={TEMP_CONVERSION_RATE}
          />

          <ClearButton
            text="Reverse Currencies"
            onPress={this.handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;
