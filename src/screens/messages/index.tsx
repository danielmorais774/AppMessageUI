import React from 'react';
// import {View} from 'react-native';

import FeatherIcons from 'react-native-vector-icons/Feather';
import MessageList from '../../components/MessageList';
import StoryPreviewList from '../../components/StoryPreviewList';

import {Wrapper, Container, Header, HeaderTitle} from './styles';

const messages: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <HeaderTitle>Mensagens</HeaderTitle>
          <FeatherIcons name="search" size={25} color={'#8A919E'} />
        </Header>
        <StoryPreviewList />
        <MessageList />
      </Container>
    </Wrapper>
  );
};

export default messages;
