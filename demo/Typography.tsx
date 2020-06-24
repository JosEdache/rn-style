import React from 'react';
import {PlatformTouch, LayoutBox, Typography} from '../src';

function TypographyDemo() {
  return (
    <LayoutBox flex={1} padding={16}>
      <Typography fontSize={20}>Typography</Typography>
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
          <Typography>Typography</Typography>
        </PlatformTouch>
      </LayoutBox>
    </LayoutBox>
  );
}

TypographyDemo.routeName = 'Typograph Demo';

export default TypographyDemo;
