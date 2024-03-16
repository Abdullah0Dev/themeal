import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import TopSells from './TopSelling';
import { fetchFood } from './../../api/fetchFromAPI';
const Catagories = () => {
  const [categories, setCategories] = useState([]);
  const [byCategories, setByCategories] = useState([]);
  const [clicked, setClicked] = useState('Chicken'); // Default to the first category
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = async (category) => {
    setClicked(category);
    setIsLoading(true);
    try {
      const res = await fetchFood(`filter.php?c=${category}`);
      setByCategories(res.meals.map((Meal) => Meal));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchCat = async () => {
      setIsLoading(true);
      try {
        const data = await fetchFood(`categories.php`);
        setCategories(data.categories.map((Category) => Category));
        const res = await fetchFood(`filter.php?c=${clicked}`);
        setByCategories(res.meals.map((Meal) => Meal));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCat();
  }, [clicked]);


  return (
    <View>
    <Text className='text-white font-bold mb-5 text-2xl ml-3 mt-2'>Categories</Text>
    {isLoading ? (
      <ActivityIndicator size="large" color="#FE9B01" />
    ) : (
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item.strCategory)} className='flex flex-row'>
            <View className={`flex-row pl-2 items-center pr-5 ${clicked === item.strCategory ? 'bg-[#FE9B01]' : 'bg-[#293863]'} py-2 rounded-full`}>
              <Image
                className={`w-12 h-12 mr-3 justify-center bg-white items-center rounded-full border`}
                source={{ uri: item.strCategoryThumb }}
              />
              <Text className={`text-xl font-extrabold ${clicked === item.strCategory ? 'text-white' : 'text-white/20'}`}>
                {item.strCategory}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.idCategory}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 20 }}
      />
    )}
 
    <TopSells category={byCategories} selectedCategory={clicked} />
 
  </View>
  )
}

export default Catagories
