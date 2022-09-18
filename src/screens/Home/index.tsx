import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, View,FlatList } from 'react-native';
import {useNavigation} from "@react-navigation/native"

import { styles } from './styles';

import logoImg from "../../assets/logo-nlw-esports.png"
import { Heading } from '../../components/Heading/Heading';
import {GAMES} from "../../utils/games"

import { GameCard } from '../../components/GameCard';
import { Background } from '../../components/Background';


export function Home() {
  const navigation = useNavigation()
  
  interface gameProps{
    id:string,
    title:string,
    bannerUrl:string
  }

  function handleOpenGame({id,title,bannerUrl}:gameProps){
    navigation.navigate("gameAds",{id,title,bannerUrl})
  }

  
  return (
    <Background>
    <SafeAreaView style={styles.container}>
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
          onPress={() => handleOpenGame(item)}
        />
        )}
        horizontal
        contentContainerStyle={styles.contentList}
      />
    
    </SafeAreaView>
    </Background>
  );
}