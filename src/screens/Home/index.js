import React, { useState } from 'react'
//import { Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
//import { request, PERMISSIONS } from 'react-native-permissions'
//import Geolocation from '@react-native-community/geolocation'

import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  LocationArea,
  LocationInput,
  LocationFinder
  //LoadingIcon
} from './styles'

import SearchIcon from '../../assets/search.svg'
import MyLocationIcon from '../../assets/location.svg'

export default () => {
  const navigation = useNavigation()

  const [locationText, setLocationText] = useState('')
  //const [coords, setCoords] = useState(null)
  //const [loading, setLoading] = useState(false)
  //const [list, setList] = useState([])
  /*const handleLocationFinder = async () => {
    setCoords(null)
    let result = await request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
    )

    if (result == 'granted') {
      setLoading(true)
      setLocationText('')
      setList([])

      Geolocation.getCurrentPosition(info => {
        setCoords(info.coords)
        getBarbers()
      })
    }

    const getBarbers = () => {}
  }*/

  return (
    <Container>
      <Scroller>
        <HeaderArea>
          <HeaderTitle numberOfLines={2}>Encontre seu Barbeiro.</HeaderTitle>
          <SearchButton onPress={() => navigation.navigate('Search')}>
            <SearchIcon width="26" height="26" fill="#ffff" />
          </SearchButton>
        </HeaderArea>

        <LocationArea>
          <LocationInput
            placeholder="Onde você está?"
            placeholderTextColor="#FCF9F2"
            value={locationText}
            onChangeText={t => setLocationText(t)}
          />
          <LocationFinder>
            <MyLocationIcon width="24" height="24" fill="#ffff" />
          </LocationFinder>
        </LocationArea>
      </Scroller>
    </Container>
  )
}
