import styled, {css} from 'styled-components/native';

interface IProfileImage {
  isActiveBorder?: boolean;
}

export const Container = styled.View`
  align-items: center;
`;

export const ProfileImage = styled.Image<IProfileImage>`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border-width: 1.8px;
  border-color: #f6fafd;

  ${props =>
    props.isActiveBorder &&
    css`
      border-color: #486ef8;
    `}
`;

export const ProfileName = styled.Text`
  font-size: 10px;

  margin-top: 8px;

  color: #2c3347;
`;

export const ContainerIcon = styled.View`
  height: 14px;
  width: 14px;
  border-radius: 7px;
  background-color: #486ef8;

  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 0px;
  right: 2px;

  z-index: 2;
`;
