import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon, Image } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import EatsDescription from './EatsDescription'

const data = [
    {
        id: "123",
        title: "BigMac",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4O0oD-LQYPGn4F7rwi0m4BK6MTlWstFQCkA&usqp=CAU",
        screen: "EatDescriptionScreen",
        rate: "4",
        price: "3",
        seller: " Achan"
    },
    {
        id: "124",
        title: "Cheasburger",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4O0oD-LQYPGn4F7rwi0m4BK6MTlWstFQCkA&usqp=CAU",
        screen: "EatDescriptionScreen",
        rate: "4",
        price: "1",
        seller: " Achan"
    },
    {
        id: "125",
        title: "Chefburger",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4O0oD-LQYPGn4F7rwi0m4BK6MTlWstFQCkA&usqp=CAU",
        screen: "EatDescriptionScreen",
        rate: "4",
        price: "5",
        seller: " Achan"
    },
    {
        id: "126",
        title: "Gamburger",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4O0oD-LQYPGn4F7rwi0m4BK6MTlWstFQCkA&usqp=CAU",
        screen: "EatDescriptionScreen",
        rate: "4",
        price: "1",
        seller: " Achan"
    },
    {
        id: "127",
        title: "Big Tasty",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4O0oD-LQYPGn4F7rwi0m4BK6MTlWstFQCkA&usqp=CAU",
        screen: "EatDescriptionScreen",
        rate: "4",
        price: "4",
        seller: " Achan"
    }
]
const EatsPage = () => {
    return (
        <View>
            <FlatList
                data={data}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <TouchableOpacity >

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

                    </View>
                )} />
            <EatsDescription data={data}/>
            <EatsDescription data={data}/>
            <EatsDescription data={data}/>
        </View>
    )
}

export default EatsPage

const styles = StyleSheet.create({})