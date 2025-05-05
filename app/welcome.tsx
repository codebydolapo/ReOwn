import { View, Text, SafeAreaView, TouchableOpacity, Image, Animated, Alert } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
// import google from "@/assets/icons/google.png"
// import * as Animatable from 'react-native-animatable'
import LottieView from 'lottie-react-native';
import { Redirect, useRouter } from 'expo-router';
import _welcome from "@/assets/lottie/welcome.json"
import { login } from '@/lib/appWrite';
import { useGlobalContext } from '@/lib/global-provider';
import { loginAsGuest } from '@/lib/appWrite';


const welcome = () => {

    const { refetch, loading, isLogged } = useGlobalContext();


    const router = useRouter()

    const animationRef = useRef<LottieView>(null);

    useEffect(() => {
        animationRef.current?.play();
    }, []);

    const handleLogin = async () => {
        const result = await login();
        if (result) {
            refetch();
        } else {
            Alert.alert("Error", "Failed to login");
        }
    };


    const handleLoginAsGuest = async ()=>{
        const result = await loginAsGuest();
        if (result) {
            refetch();
        } else {
            Alert.alert("Error", "Failed to login");
        }
    }


    if (!loading && isLogged) return <Redirect href="./" />;


    return (
        <SafeAreaView className='flex flex-1 items-center justify-around bg-white px-4 font-poppins'>
            <View className={`w-full h-[20rem] `}>
                <LottieView
                    ref={animationRef}
                    source={require("@/assets/lottie/welcome.json")}
                    style={{ flex: 1 }}
                    autoPlay loop
                />
            </View>
            <View className='w-[70%] mr-auto gap-y-2'>
                <Text className='font-poppins-bold text-4xl leading-[120%]'>Own more, spend less.</Text>
                <Text className='font-poppins-bold text-4xl leading-[120%]'>That's the <Text className='text-primary'>ReOwn</Text> Way</Text>
            </View>
            <View className='w-full mr-auto mb-2 '>
                <Text className='font-poppins-light text-base'>Buy, sell, and swap everything you love. Reown connects students to the best campus deals fast, safe, and stress-free.</Text>
            </View>
            <View className='w-full items-center justify-around pb-5 py-6'>
                <TouchableOpacity
                    onPress={() => router.push("./signin")}
                    className="bg-primary w-[90vw] shadow-md shadow-zinc-300 rounded-full py-4 "
                >
                    <View className="flex flex-row items-center justify-center">
                        <Text className="text-lg font-poppins-bold text-white ml-2">
                            Sign-In
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => router.push("./login")}
                    className="border-black border-[1px] w-[90vw] shadow-md shadow-zinc-300 rounded-full py-4 mt-4"
                >
                    <View className="flex flex-row items-center justify-center">
                        <Text className="text-lg font-poppins-bold text-black ml-2">
                            Sign-up
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLoginAsGuest}>
                    <Text className='text-sm mt-5 font-poppins-bold'>Sign in as <Text className='text-primary'>guest</Text></Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default welcome