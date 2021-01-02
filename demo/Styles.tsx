import React from 'react';
import {StyleView, StyleText, StyleTextInput} from '../src';

function StyleDemo() {
  return (
    <StyleView flex={1}>
      <StyleText fontSize={20}>Typography</StyleText>
      <StyleView flexDirection="row" height={200} backgroundColor="primary">
        <StyleText>Hello</StyleText>
      </StyleView>
      <StyleTextInput backgroundColor="#e3e3e3" borderRadius={4} />
    </StyleView>
  );
}

StyleDemo.routeName = 'Style Demo';

export default StyleDemo;
