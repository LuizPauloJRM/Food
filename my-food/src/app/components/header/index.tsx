import { View, Pressable, Text } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function Header() {
    return (
        <View className="bg-red-50 w-full items-center justify-between flex flex-row">
            <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                <Ionicons name="menu" size={20} color="#121212" />
            </Pressable>

            <View />
            <Text className="text-center text-sm text-slate-800">Localização</Text>
            <View />
            <View className="flex-row items-center gap-1 justify-center">
                <Feather name="map-pin" size={14} color="#FF0000" />
                <Text className="text-lg font-bold">Sobradinho-DF</Text>
            </View>

            <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                <Feather name="bell" size={20} color="#121212" />
            </Pressable>
        </View>
    );
}