import React from 'react';
import {View, Text, Image, ScrollView, Button} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <View style={{width: 335, height:200, justifyContent: 'center', alignItems: 'center', backgroundColor: "#00ccf9"}}>
        <Image
          source={require('./Image/Ellipse_8.png')}
          style={{width: 100, height: 100}}
        />
      </View>

      <View style={{width: 335, height: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: "#00ccf9"}}>
        <Text style={{fontFamily: 'Roboto',fontSize: 25, fontWeight: 700}}>GROW</Text>
        <Text style={{fontFamily: 'Roboto',fontSize: 25, fontWeight: 700}}>YOUR BUSINESS</Text>
      </View>

      <View style={{width: 335, height: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: "#00ccf9"}}>
        <Text style={{fontFamily: 'Roboto',fontSize: 15, fontWeight: 700, maxWidth: 290, textAlign: 'center'}}>We will help you to grow your business using online server</Text>
      </View>
      
      <View style={{width: 335, height: 195,flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: "#00ccf9"}}>
        <Button title="LOGIN" color= "#e3c100" />
        <Button title="SIGN UP" color= "#e3c100"/>
      </View>
    </ScrollView>
  );
};

export default App;