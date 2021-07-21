import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #fff;
  flex: 1;
`;

export const Container = styled.View``;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 15px;

  height: 80px;
`;

export const HeaderTitle = styled.Text`
  font-size: 22px;
  font-family: 'Rubik-Regular';
  font-weight: 400;

  color: #030303;
`;
