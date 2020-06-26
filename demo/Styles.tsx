import React from 'react';
import {PlatformTouch, StyleView, StyleText, StyleTextInput} from '../src';

function StyleDemo() {
  return (
    <StyleView flex={1} padding={16}>
      <StyleText fontSize={20}>Typography</StyleText>
      <StyleView flexDirection="row" height={200} backgroundColor="primary">
        <PlatformTouch
          // width={100}
          // height={100}
          borderRadius={20}
          outerDirection="row"
          // disabled
          // flex={1}
          alignItems="center"
          justifyContent="center"
          backgroundColor="secondary"
          onPress={() => console.log('Press')}>
          <StyleText>StyleText</StyleText>
        </PlatformTouch>
      </StyleView>
      <StyleTextInput backgroundColor="#e3e3e3" borderRadius={4} />
    </StyleView>
  );
}

StyleDemo.routeName = 'Style Demo';

export default StyleDemo;
