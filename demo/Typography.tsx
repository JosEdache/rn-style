import React from 'react';
import {} from 'react-native';
import {PlatformTouch, LayoutBox, Text} from '../src';

function Typography() {
  return (
    <LayoutBox flex={1} padding={16}>
      <Text>Typography</Text>
      <LayoutBox flexDirection="row" height={200} backgroundColor="primary">
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
          <Text>Typography</Text>
        </PlatformTouch>
      </LayoutBox>
    </LayoutBox>
  );
}

Typography.routeName = 'Typograph Demo';

export default Typography;
