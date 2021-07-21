import React from 'react';
import {IStoryItem} from '../..';
import {View} from 'react-native';

import {Container, ProfileImage, ProfileName, ContainerIcon} from './styles';

import FeatherIcons from 'react-native-vector-icons/Feather';

interface IStoryObject {
  item: IStoryItem;
}

const StoryItem = ({item}: IStoryObject) => {
  return (
    <Container>
      <View>
        <ProfileImage
          isActiveBorder={item.type === 'add' || item.hasUnreadStories}
          source={{
            uri: item.avatarUrl,
          }}
        />
        {item.type === 'add' && (
          <ContainerIcon>
            <FeatherIcons name="plus" size={10} color="#fff" />
          </ContainerIcon>
        )}
      </View>
      <ProfileName>{item.name}</ProfileName>
    </Container>
  );
};

export default StoryItem;
