import React from 'react';
import {View, FlatList} from 'react-native';
import StoryItem from './components/StoryItem';

import {Container, Title} from './styles';

export interface IStoryItem {
  name: string;
  avatarUrl: string;
  type?: 'add';
  hasUnreadStories: boolean;
}

const StoryPreviewList: React.FC = () => {
  const stories: IStoryItem[] = [
    {
      name: 'Add yours',
      avatarUrl:
        'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg',
      type: 'add',
      hasUnreadStories: false,
    },
    {
      name: 'Ana',
      avatarUrl: 'http://www.venmond.com/demo/vendroid/img/avatar/big.jpg',
      hasUnreadStories: true,
    },
    {
      name: 'Toinho',
      avatarUrl: 'https://data.whicdn.com/images/331377446/original.jpg',
      hasUnreadStories: true,
    },
    {
      name: 'Scarlett',
      avatarUrl: 'https://jpimg.com.br/uploads/2018/01/viuva-negra.jpg',
      hasUnreadStories: false,
    },
    {
      name: 'Lara',
      avatarUrl: 'https://avatarfiles.alphacoders.com/144/144071.jpg',
      hasUnreadStories: false,
    },
    {
      name: 'Dean',
      avatarUrl:
        'https://i.pinimg.com/originals/32/d1/46/32d14656e874f0ca4a6adc32de32e139.png',
      hasUnreadStories: false,
    },
  ];

  return (
    <Container>
      <Title>Stories</Title>
      <FlatList
        data={stories}
        renderItem={StoryItem}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        contentContainerStyle={{paddingHorizontal: 20}}
        ItemSeparatorComponent={() => <View style={{width: 15}} />}
        showsHorizontalScrollIndicator={false}
      />
      <View />
    </Container>
  );
};

export default StoryPreviewList;
