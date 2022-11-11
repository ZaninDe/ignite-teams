import { TouchableOpacityProps } from "react-native";

import * as S from './styles'
import { ButtonTypeStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
}

export function Button({ title, type='PRIMARY', ...rest }: Props) {
  return(
    <S.Container
      {...rest}
      type={type}
    >
      <S.Title>
        {title}
      </S.Title>
    </S.Container>
  )
}