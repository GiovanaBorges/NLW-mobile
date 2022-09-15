import React from 'react';
import { Image, View,FlatList } from 'react-native';
import { styles } from './styles';
import logoImg from "../../assets/logo-nlw-esports.png"
import { Heading } from '../../components/Heading/Heading';
import {GAMES} from "../../utils/games"
import { GameCard } from '../../components/GameCard';

export function Home() {
  return (
    <View style={styles.container}>
      <Image 
        source={logoImg}
        style={styles.logo}
      />

      <Heading
        title="Encontre seu Duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={GAMES}
        keyExtractor={item => item.id}
        renderItem={({item}) =>(
          <GameCard
          data={item}
        />
        )}
        horizontal
        contentContainerStyle={styles.contentList}
      />
    
    </View>
  );
}