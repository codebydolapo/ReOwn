import { View, Text, TextInput } from 'react-native'
import React, { forwardRef } from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { IconProps } from '@expo/vector-icons/build/createIconSet';

interface Props {
    placeholder: string;
    handleChange: (text: string) => void;
    secure: boolean;
    value: string;
    title: string;
}

const Input = ({ placeholder, value, handleChange, secure, title }: Props) => {
    return (
        <View className={`items-start justify-center gap-y-3 `}>
            <Text className='font-poppins-semibold text-lg'>{title}</Text>
            <TextInput className='w-full h-[3.5rem] rounded-full text-poppins-light bg-[#E8E8E8] px-4'
                placeholderTextColor={"#0007"}
                placeholder={placeholder}
                value={value}
                onChangeText={handleChange}
                secureTextEntry={secure}
            />
        </View>
    );
};

export default Input