import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { useRouter } from 'expo-router'
import InputField from '@/components/InputField'


const login = () => {


    const router = useRouter()

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <SafeAreaView className='flex flex-1 p-4 bg-white '>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View className='w-full items-start justify-center '>
                    <TouchableOpacity className='p-1 border-[1px] border-[#00000048] items-center justify-center rounded-lg' onPress={() => router.back()}>
                        <MaterialCommunityIcons name={"chevron-left"} size={30} color="#000" />
                    </TouchableOpacity>
                </View>
                <View className='w-full py-2 mt-4 items-center justify-center'>
                    {/* <View className='w-[8rem] h-[8rem]'> */}
                    <Image
                        source={require("@/assets/icons/avatar.jpg")}
                        resizeMode="cover"
                        className={`w-[8rem] h-[8rem] rounded-full`}
                    />
                    {/* </View> */}
                </View>
                <View className='gap-y-2'>
                    <Text className='font-poppins-semibold text-2xl'>Sign In</Text>
                    <Text className='font-poppins-light text-sm'>Log in to continue using the app</Text>
                </View>
                <View className='w-full mt-6 gap-y-6'>
                    <InputField
                        placeholder={"Enter your name"}
                        value={email}
                        handleChange={setUsername}
                        secure={false}
                        title={"Username"}
                    />
                    <InputField
                        placeholder={"Enter your email"}
                        value={email}
                        handleChange={setEmail}
                        secure={false}
                        title={"Email"}
                    />
                    <InputField
                        placeholder={"Enter your password"}
                        value={email}
                        handleChange={setPassword}
                        secure={true}
                        title={"Password"}
                    />
                    <InputField
                        placeholder={"Re-enter your password"}
                        value={email}
                        handleChange={setPassword}
                        secure={true}
                        title={"Confirm Password"}
                    />
                </View>
                <View className='w-full mt-4 items-end'>
                    <Text className='font-poppins-light text-sm'>Forgot password?</Text>
                </View>
                <View className='mt-10'>
                    <TouchableOpacity
                        // onPress={() => router.push("./signin")}
                        className="bg-primary w-[90vw] shadow-md shadow-zinc-300 rounded-full py-4 "
                    >
                        <View className="flex flex-row items-center justify-center">
                            <Text className="text-base font-poppins-bold text-white ml-2">
                                Sign-In
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View className='w-full flex-row items-center justify-between my-6'>
                        <View className='w-[30%] border-[1px] border-[#00000056]'></View>
                        <View className='w-[30%]'>
                            <Text className='font-poppins-light text-base'>Or Sign In With</Text>
                        </View>
                        <View className='w-[30%] border-[1px] border-[#00000056]'></View>
                    </View>
                    <TouchableOpacity
                        // onPress={() => router.push("./login")}
                        className="border-black border-[1px] w-[90vw] shadow-md shadow-zinc-300 rounded-full py-4"
                    >
                        <View className="flex flex-row items-center justify-center">
                            <View className='w-[2rem] h-[2rem] rounded-full mx-2'>
                                <Image
                                    source={require("@/assets/icons/google.png")}
                                    resizeMode="contain"
                                    className={`w-full h-full `}
                                />
                            </View>
                            <Text className="text-base font-poppins-semibold text-black ml-2">
                                Google
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View className='w-full mt-6 items-center justify-center mb-8'>
                    <Text className='font-poppins-medium text-sm'>Don't have an account? <Text className='text-primary'>Sign up</Text></Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default login