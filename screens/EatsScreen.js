import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlice'
import tw from 'tailwind-react-native-classnames'
import EatsPage from '../components/EatsPage'

const EatsScreen = () => {
    const origin=useSelector(selectOrigin)
  return (
    <SafeAreaView>
        <View style={tw`bg-black text-white `}>
            <Text style={tw`bg-black text-white ml-10`}>{origin.description}</Text>
            {console.log(origin)}
        </View>
        <EatsPage/>
      
    </SafeAreaView>
  )
}

export default EatsScreen

const styles = StyleSheet.create({})