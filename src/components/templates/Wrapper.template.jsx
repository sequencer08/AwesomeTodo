/**
 * @flow
 */

import React from 'react';

import {StatusBar} from 'react-native';

import styled from 'styled-components/native';

type WrapperPropTypes = {children: React$Node};

const StyledView = styled.View`
  display: flex;
  flex: 1;
  padding: 0 10px;
`;

const StyledSafeAreaView = styled.SafeAreaView`
  background-color: #eaeff2;
  display: flex;
  flex: 1;
`;

const StyledHeader = styled.View`
  padding: 15px 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledAppName = styled.Text`
  font-size: 26px;
  font-weight: 600;
  color: #000;
`;

const Wrapper = ({children}: WrapperPropTypes): React$Node => {
  return (
    <StyledSafeAreaView>
      <StatusBar />
      <StyledHeader>
        <StyledAppName>TodoIt</StyledAppName>
      </StyledHeader>
      <StyledView>{children}</StyledView>
    </StyledSafeAreaView>
  );
};

export default Wrapper;
