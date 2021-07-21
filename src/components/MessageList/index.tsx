import React from 'react';
import {View, FlatList} from 'react-native';

import MessageItem from './components/MessageItem';
import {Container} from './styles';

export interface IMessageItem {
  lastMessage: string;
  name: string;
  avatarUrl: string;
  hasUnreadStories?: boolean;
  sendDate: string;
  countUnReadMessages: number;
}

const MessageList: React.FC = () => {
  const messages: IMessageItem[] = [
    {
      name: 'Toinho',
      lastMessage: 'Escondi o escudo do capitão de novo 😂😂',
      avatarUrl: 'https://data.whicdn.com/images/331377446/original.jpg',
      hasUnreadStories: true,
      sendDate: '09:12AM',
      countUnReadMessages: 5,
    },
    {
      name: 'Miranha',
      lastMessage: 'Levei gaia da Mary Jane 😭',
      avatarUrl:
        'http://static4.businessinsider.com/image/4fabed756bb3f7330200000c-960/tobey-maguire-spider-man-3.jpg',
      hasUnreadStories: false,
      sendDate: '07:12AM',
      countUnReadMessages: 0,
    },
    {
      name: 'Scarlett',
      lastMessage: 'Vamos sair hoje? ',
      avatarUrl: 'https://jpimg.com.br/uploads/2018/01/viuva-negra.jpg',
      hasUnreadStories: false,
      sendDate: '6:58AM',
      countUnReadMessages: 2,
    },
    {
      name: 'Dean',
      lastMessage: 'O sam voltou a beber sangue de demônio de novo🤦‍♂️',
      avatarUrl:
        'https://i.pinimg.com/originals/32/d1/46/32d14656e874f0ca4a6adc32de32e139.png',
      hasUnreadStories: false,
      sendDate: '4:58AM',
      countUnReadMessages: 1,
    },
    {
      name: 'Chris Pratt',
      lastMessage: 'Fiz besteira!!',
      avatarUrl: 'https://cdn1.clickthecity.com/profiles/400/662.jpg',
      hasUnreadStories: false,
      sendDate: '1:30AM',
      countUnReadMessages: 0,
    },
  ];

  return (
    <Container>
      <FlatList
        data={messages}
        renderItem={MessageItem}
        keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={{height: 15}} />}
      />
    </Container>
  );
};

export default MessageList;
