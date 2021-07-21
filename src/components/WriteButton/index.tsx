import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import {Button} from './styles';

const WriteButton: React.FC = () => {
  return (
    <TouchableWithoutFeedback>
      <Button>
        <Feather name="edit-2" size={18} color="#fff" />
      </Button>
    </TouchableWithoutFeedback>
  );
};

export default WriteButton;
