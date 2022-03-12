import { StyleSheet, Text, View , SafeAreaView,Image} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5 pt-10`}>
        <Image
        style={{
            width:80,
            height:80,
            resizeMode:"contain"
        }}
           source={{
               uri:"https://links.papareact.com/gzs"
           }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where from"
          styles={{
            container:{
              flex:0,
              
            },
            textInput:{
              fontSize: 18,
            }
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en"
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400} 
        
        />
        <NavOptions/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text:{
        color:"blue",
    }

})