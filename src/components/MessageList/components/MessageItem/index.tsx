import React from 'react';
import {View} from 'react-native';
import {IMessageItem} from '../..';

import {
  Container,
  ProfileImage,
  ProfileName,
  MessageText,
  DateText,
  ContainerBadge,
  BadgeLabel,
} from './styles';

interface IMessageObject {
  item: IMessageItem;
}

const MessageItem = ({item}: IMessageObject) => {
  return (
    <Container>
      <ProfileImage
        isActiveBorder={item.hasUnreadStories}
        source={item.avatar}
      />
      <View style={{flex: 1, marginLeft: 15}}>
        <ProfileName>{item.name}</ProfileName>
        <MessageText isUnread={item.countUnReadMessages > 0}>
          {item.lastMessage}
        </MessageText>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <DateText>{item.sendDate}</DateText>
        {item?.countUnReadMessages > 0 && (
          <ContainerBadge>
            <BadgeLabel>{item.countUnReadMessages}</BadgeLabel>
          </ContainerBadge>
        )}
      </View>
    </Container>
  );
};

export default MessageItem;
