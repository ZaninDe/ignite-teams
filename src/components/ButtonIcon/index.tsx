import { TouchableHighlightProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import * as S from './styles'
import { ButtonIconTypeStyleProps } from './styles';

type Props = TouchableHighlightProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps
}

export function ButtonIcon({icon, type = 'PRIMARY', ...rest} : Props) {
  return(
    <S.Container {...rest}>
      <S.Icon name={icon} type={type}/>
    </S.Container>
  )
}