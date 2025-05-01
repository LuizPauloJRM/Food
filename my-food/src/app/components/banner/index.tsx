import { View, Pressable, Text, Image } from "react-native";
import PagerView from "react-native-pager-view";

export default function Banner() {
    return (
        <View className="w-full h-40 rounded-2xl   mt-5 mb-4" >
            <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14} >
                <Pressable className="w-full h-40 rounded-2xl " key="1"
                    onPress={() => console.log("Banner 1")}>
                    <Image
                        source={require("")} className="w-full h-40 rounded-2xl"
                    />

                </Pressable>

                <Pressable className="w-full h-40 rounded-2xl " key="1"
                    onPress={() => console.log("Banner 2")}>
                    <Image
                        source={require("")} className="w-full h-40 rounded-2xl"
                    />

                </Pressable>
            </PagerView>
        </View >

    );
}