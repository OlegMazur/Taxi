import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon, Image } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'

const EatsDescription = ({data}) => {
    const navigation=useNavigation();
  return (
    <FlatList
    data={data}
    horizontal
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
        <TouchableOpacity 
        onPress={()=>navigation.navigate("ItemScreen")}
        
        >

            <Text style={tw`text-center text-lg mb-0`}>{item.title}</Text>
            <Image
                style={{ width: 140, height: 100, resizeMode: "contain", borderRadius: 8, marginLeft: 8, marginTop: 0, }}
                source={{ uri: item.image }} />
            <Text style={tw`text-center`}>{item.seller}</Text>
            <View style={tw`flex-row justify-between px-2`}>
                <Text style={tw`text-lg`}>$ {item.price}</Text>
                <View style={tw`flex-row  `}>
                    <Icon
                        style={tw`  rounded-full w-10 `}
                        name="star"
                        color="black"
                        type="antdesign"
                    />
                    <Text style={tw`text-lg`}>{item.rate}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )} />
  )
}

export default EatsDescription

const styles = StyleSheet.create({})