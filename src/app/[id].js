import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter, useLocalSearchParams } from 'expo-router'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import YoutubeIframe from 'react-native-youtube-iframe';
import { StatusBar } from 'expo-status-bar';
import { fetchFood } from './../../api/fetchFromAPI';
import { AntDesign } from '@expo/vector-icons';

const Page = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams(); // Get the id parameter from the URL
  const [details, setDetails] = useState(null); // Initialize state for meal details
  const [ingredients, setIngredients] = useState([]); // Initialize state for ingredients

  useEffect(() => {
    const fetchMealDetails = async () => {   
      try {
        const res = await fetchFood(`lookup.php?i=${id}`); // Fetch meal details based on id
        const mealDetails = res.meals[0];
        setDetails(mealDetails);

        // Extract and format ingredients
        const ingredientsList = [];
        for (let i = 1; i <= 20; i++) {
          const ingredient = mealDetails[`strIngredient${i}`];
          const measure = mealDetails[`strMeasure${i}`];
          if (ingredient) {
            ingredientsList.push({ ingredient, measure });
          }
        }
        setIngredients(ingredientsList);
      } catch (error) {
        console.error(error);
      }
    };
    if (id) {
      fetchMealDetails();
    }
  }, [id]); // Fetch meal details when id changes

  if (!details) {
    return null; // Render nothing if details are not yet fetched
  }

  return (
    <ScrollView className='bg-[#192648] h-full'>
      <View className='absolute top-9  z-50 flex flex-row  '>
        <TouchableOpacity onPress={router.back} >
          <AntDesign name="left" size={27} color="white" />
        </TouchableOpacity>
        <Text className='text-green-300 bg-white rounded-xl px-3 -right-[90vw] absolute font-bold text-2xl'>Details</Text>
      </View>
      <View>
        <StatusBar style='light' />
        <Image
          source={{ uri: details.strMealThumb }}
          className='w-full rounded-3xl h-[46vh]'
        />


        <Text className='text-center font-extrabold text-green-400 mt-3' style={{ fontSize: hp(3.5) }}>{details.strMeal}</Text>

        <View className='flex flex-row justify-around mt-10 '>
          <View className='flex gap-2 flex-row bg-blue-400 rounded-2xl py-1 items-center justify-center px-1 '>
            <Ionicons name="fast-food" size={24} color="white" />
            <Text className='text-white  text-xl'>{details.strCategory}</Text>
          </View>
          <View className='flex gap-2 flex-row bg-green-400 rounded-2xl py-1 items-center justify-center px-1 '>
            <Ionicons name="location" size={24} color="white" />
            <Text className='text-white text-xl'>{details.strArea}</Text>
          </View>
        </View>
        <Text className='text-2xl text-white/90 ml-1 font-bold mt-5'>Ingredients</Text>
        {/* map the ingredients here */}
        <View className='mt-3 ml-5'>
          {ingredients.map((ingredient, index) => (
            <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
              <View className='text-yellow-500 bg-green-300 mr-5 w-3 h-3 rounded-full font-bold ' />
              <Text className='text-yellow-500 font-bold text-lg mr-3'>{ingredient.measure}</Text>
              <Text className='text-white/40 font-medium text-base mr-3' style={{ color: 'white' }}>{ingredient.ingredient}</Text>
            </View>
          ))}
        </View>
        <Text className='text-2xl text-white/90 ml-1 font-bold mt-5'>Instructions</Text>
        <Text className='text-emerald-300 text-base font-medium ml-3'>{details.strInstructions}</Text>
        {/* Watch */}
        <Text className='text-2xl text-white/90 ml-1 mb-2 font-bold mt-5'>Watch the Video 🧾</Text>
        <View className='w-full rounded-xl'>
          <YoutubeIframe
            videoId={details.strYoutube.split('=')[1]} // Extract video ID from URL
            height={hp(30)}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default Page;
