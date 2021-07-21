import styled, {css} from 'styled-components/native';

interface IProfileImage {
  isActiveBorder?: boolean;
}

interface IMensageProps {
  isUnread?: boolean;
}

export const Container = styled.View`
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: row;
  justify-content: space-between;
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
  font-size: 14px;
  font-family: 'VarelaRound-Regular';
  color: #21273d;
`;

export const MessageText = styled.Text<IMensageProps>`
  font-size: 12px;
  font-family: 'VarelaRound-Regular';
  color: ${props => (props.isUnread ? '#486ef8' : '#ABADBA')};
`;

export const DateText = styled.Text`
  font-size: 10px;
  color: #abadba;
`;

export const ContainerBadge = styled.View`
  width: 18px;
  height: 18px;
  border-radius: 9px;

  background-color: #486ef8;

  justify-content: center;
  align-items: center;

  margin-top: 5px;
`;

export const BadgeLabel = styled.Text`
  font-size: 10px;
  font-weight: bold;
  color: #fff;
`;
