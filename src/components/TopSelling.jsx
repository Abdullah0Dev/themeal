import { View, Text, ScrollView, Pressable, TextInput, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { fetchFood } from '../../api/fetchFromAPI';
import MasonryList from '@react-native-seoul/masonry-list';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { Link, useRouter, useSegments } from 'expo-router';

const ListCard = ({ item, index, onSelect }) => {
    let isEven = index % 2 === 0;

    return (
        <Pressable
            onPress={() => onSelect(item.idMeal)} // Call onSelect with the meal's id when pressed
            style={{ paddingLeft: isEven ? 0 : 8, paddingRight: isEven ? 8 : 0 }}
            className='w-[100%] mb-5 rounded-b-2xl space-y-2 flex justify-center ' >

            <Image
                className='w-[100%] rounded-3xl bg-blue-300'
                style={{ width: `100%`, height: index % 5 === 0 ? hp(26) : hp(35) }}
                source={{ uri: item.strMealThumb }}
            />
            <Text className=' absolute bottom-0  bg-black/20 py-3 w-full left-0 text-xl font-bold text-white text-center'>
                {item.strMeal.length > 22 ? item.strMeal.slice(0, 20) + '...' : item.strMeal}
            </Text>
        </Pressable>
    )
}

const TopSells = ({ category, selectedCategory }) => {
    const router = useRouter();

    // Function to navigate to the Page component with the selected meal's ID
    const handleSelect = (id) => {
        router.push(`/${id}`);
    };

    return (
        <View className='mb-3 '>
            <Text className='text-white font-bold mb-5 text-2xl ml-3 mt-2'>Best Dishes for `{selectedCategory}`</Text>
            <MasonryList
                data={category}
                keyExtractor={(item) => item.idMeal}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => <ListCard item={item} index={index} onSelect={handleSelect} />}
                onEndReachedThreshold={0.1}
                onEndReached={() => console.warn(`reached to the end`)}
            />
        </View>
    );
};

export default TopSells;
