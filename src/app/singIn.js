import { View, Text, Pressable, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useOAuth } from "@clerk/clerk-expo";

const image = { uri: "https://docs.expo.dev/static/images/tutorial/splash.png" };

const Options = ({ strategies, img }) => {

    const { startOAuthFlow } = useOAuth({ strategy: strategies });

    const onPress = React.useCallback(async () => {
        try {
            const { createdSessionId, setActive } =
                await startOAuthFlow();
            // router.navigate(`index`)


            if (createdSessionId) {
                setActive({ session: createdSessionId });
            } else {
                // Use signIn or signUp for next steps such as MFA
            }
        } catch (err) {
            console.error("OAuth error", err);
        }
    }, []);
    return (
        <Pressable onPress={onPress}>
            <Image
                source={{ uri: img }}
                className='w-12 h-12 ' />
        </Pressable>
    )

}

const SignIn = () => {
    return (
        <ImageBackground source={image} blurRadius={9} className='flex-1 bg-no-repeat justify-center items-center'>
            <View>
                <Text className='text-2xl text-center font-bold text-white leading-relaxed'>SignIn With</Text>
                <View className='flex flex-row gap-[20%] justify-around mt-12'>
                    <Options strategies="oauth_google" img={`https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png`} />
                    <Options strategies="oauth_facebook" img={`https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png`} />
                    <Options strategies="oauth_linkedin" img={`https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png`} />
                </View>
            </View>
        </ImageBackground>
    )
}
export default SignIn
