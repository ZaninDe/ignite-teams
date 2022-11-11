import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { ButtonIcon } from '@components/ButtonIcon'
import { Filter } from '@components/Filter'
import * as S from './styles'
import { Input } from '@components/Input'

export function Players() {
  return (
    <S.Container>
      <Header showBackButton />

      <Highlight
        title='Nome da turma'
        subtitle='adicione a galera e separe os times'
      />

      <S.Form>
        <Input
          placeholder='Nome da pessoa'
          autoCorrect={false}
        />

        <ButtonIcon
          icon='add'
        />
      </S.Form>

      <Filter 
        title='Time A'
        isActive
      />

      <Filter 
        title='Time B'
        isActive
      />
            <Filter 
        title='Time C'
        isActive
      />
            <Filter 
        title='Time D'
        isActive
      />
    </S.Container>
  )
}