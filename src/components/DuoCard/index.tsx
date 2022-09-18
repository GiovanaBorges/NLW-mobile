import { View } from 'react-native';
import { THEME } from '../../theme';
import { DuoInfo } from '../DuoInfo';
import { styles } from './styles';

export function DuoCard() {
  return (
    <View style={styles.container}>
      <DuoInfo
        label="Nome"
        value="Bananao"
      />

      <DuoInfo
        label="Tempo de jogo"
        value="21 horas"
      />
       <DuoInfo
        label="Disponibilidade"
        value="3 dias"
      />
      <DuoInfo
        label="Chama de de aúdio"
        value="Sim"
        colorValue={THEME.COLORS.SUCCESS}
      />
      <DuoInfo
        label="Nome"
        value="Bananao"
      />
      <DuoInfo
        label="Nome"
        value="Bananaoa"
        colorValue="green"
      />

    </View>
  );
}