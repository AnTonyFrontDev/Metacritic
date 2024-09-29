import {StatusBar} from 'expo-status-bar';
import {
    StyleSheet, Text, View, Image
    ,
    TouchableOpacity, Pressable
} from 'react-native';


export default function TransformersView() {
    return (
        <View style={styles.container}>
            <StatusBar style="light"/>
            <Image
                borderRadius={50}
                source={{uri: "https://uruloki.org/felipeblog/images2014-1/20140520-transformers.jpg"}}
                style={{width: 300, height: 600}}
            />
            <Pressable
                onPress={() => {

                }}
                style={({pressed}) => [
                    {
                        backgroundColor:
                            pressed ? 'rgb(210, 230, 255)' : 'white',
                    },
                ]}>
                {({pressed}) => (
                    <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
                )}
            </Pressable>
            <TouchableOpacity
                onPress={() => {
                    alert("Transformers 4")
                }}
                style={{
                    backgroundColor: "#FF0000",
                    borderRadius: 10, marginTop: 10
                }}
            >
                <Text
                    style={{color: "white", padding: 20}}>
                    Transformers 4
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222222',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
