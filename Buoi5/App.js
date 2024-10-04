import * as React from 'react';
import { Text, TextInput, View, Button, FlatList, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation, route }) {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <View>

      <View style={{height: 500, backgroundColor: 'white'}}>
        <Text style={{ margin: 10 }}>Color's Image: {route.params?.post}</Text>
      </View>

      <View style={{display: "flex", flexDirection: "row",justifyContent: "center",alignItems:"center",height: 150, backgroundColor: '#faebd7'}}>
        <Text>Infomation of items</Text>
      </View>

      <View style={{display: "flex",justifyContent:"space-between",height: 150, backgroundColor: '#faebd7'}}>
        <Button
          title="4 MAU CHON MAU"
          onPress={() => navigation.navigate('ColorScreen', 
            {colorList: [
              {id: '1', name: 'white', hex: '#0000'},
              {id: '2', name: 'red', hex: '#FF0000'},
              {id: '3', name: 'black', hex: '#FFFFF'},
              {id: '4', name: 'blue', hex: '#0000FF'},
              ]
            })
          }
        />
        <Button
          title="CHON MUA"
          onPress={() => navigation.navigate('CreateBill')}
        />
      </View>
    </View>
    
  );
}

function ColorScreen({ navigation, route }) {
  const [selectedColor, setSelectedColor] = React.useState('');
  const { colorList, otherParams } = route.params;

  const renderProductItem = ({item}) => {
    const isSelected = item.id === selectedColor?.id;
    return (
      <TouchableOpacity 
        onPress = {() => setSelectedColor(item)} 
        style={{width: 50, height: 50, backgroundColor: item.hex}}
      />
    )
  }

  return (
    <>
      <View style={{display: "flex", flexDirection: "row",justifyContent: "center",alignItems:"center",height: 150, backgroundColor: '#faebd7'}}>
        <Text>Infomation of items</Text>
      </View>
      <View style={{display: "flex", flexDirection: "column",justifyContent: "space-between",alignItems:"center",height: 650, backgroundColor: '#fffafa'}}>
        <Text>Chon mot mau ben duoi:</Text>
        <FlatList
          data = {colorList}
          renderItem = "renderProductItem"
          keyExtractor={(item) => item.id}
        />
      {selectedColor && (
        <View>
          <Text>Da chon mau : {selectedColor.name}</Text>
        </View>
      )}
      <Button
        title="XONG"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Home',
            params: { color: selectedColor.name},
            merge: true,
          });
        }}
      />
      </View>
    </>
  );
}
function createBill({navigation}){
  return(
    <View>
      <Text>Mua thanh cong dien thoat mau: </Text>
    </View>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal" initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ColorScreen" component={ColorScreen} />
        <Stack.Screen name="CreateBill" component={createBill} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}