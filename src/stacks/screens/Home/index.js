import React, { useState } from "react";
import { Platform } from "react-native";
import { useNavigation } from '@react-navigation/native';
import  Permissions from 'expo-permissions'; // Importe o módulo correto para permissões do Expo

import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  LocationArea,
  LocationInput,
  LocationFinder,
} from './styles';

import SearchIcon from '../../../assets/search.svg';
import MyLocationIcon from '../../../assets/my_location.svg';

export default () => {
  const navigation = useNavigation();
  const [locationText, setLocationText] = useState('');
  const [coords, setCoords] = useState(null);

  const handleLocationFinder = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      console.log('Permissão de localização negada!');
      return;
    }

    // A partir daqui, você tem permissão de localização concedida
    // Faça o que for necessário com a localização
  };

  return (
    <Container>
      <Scroller>
        <HeaderArea>
          <HeaderTitle numberOfLines={2}>Encontre a sua diarista favorita</HeaderTitle>
          <SearchButton onPress={() => navigation.navigate('Search')}>
            <SearchIcon width="26" height="26" fill="#FFFFFF" />
          </SearchButton>
        </HeaderArea>

        <LocationArea>
          <LocationInput
            placeholder="Onde você está?"
            placeholderTextColor="#FFFFFF"
            value={locationText}
            onChangeText={t => setLocationText(t)}
          />
          <LocationFinder onPress={handleLocationFinder}>
            <MyLocationIcon width="24" height="24" fill="#FFFFFF" />
          </LocationFinder>
        </LocationArea>
      </Scroller>
    </Container>
  );
};