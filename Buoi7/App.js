import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Task from "./Task";

function screen_01({navigation, route}){
  const [name, setName] = useState('');

  return(
    <View style={styles.container1}>
        {/* Image Section */}
        <Image
          source={require('./image/Image_95.png')}
          style={styles.image}
        />
        
        {/* Title Section */}
        <Text style={styles.title}>MANAGE YOUR TASK</Text>
        
        {/* Input Section */}
        <View style={styles.inputContainer}>
          <Image
            source={require('./image/fxemoji_note.png')}
            style={styles.icon}
          />
          <TextInput
            placeholder="Enter your name"
            style={styles.input}
            onChangeText={(text) => setName(text)} 
            value={name}
          />
        </View>
        
        {/* Button Section */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('screen_02', { name })}
        >
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
  )
}

function screen_02({navigation, route}){
  const { name } = route.params;

  
  // State to manage tasks and user input
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [task, setTask] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //First load
  useEffect(() => {
    
    // Gọi API
    fetch('https://66fa5546afc569e13a9b45e8.mockapi.io/listTask')
      .then(response => response.json())
      .then(json => {
        setTasks(json);
        setFilteredTasks(json);
      })
      .catch(error => {
        console.error(error);
      });
    if (route.params?.newTask) {
      renderItem();
    }
  }, [route.params]);

  //API
  const renderItem = () =>{
    fetch('https://66fa5546afc569e13a9b45e8.mockapi.io/listTask')
      .then(response => response.json())
      .then(json => {
        setTasks(json);
        setFilteredTasks(json);
      })
      .catch(error => {
        console.error(error);
      });
  }

  //Search task
  const searchTask = () => {
     if (task.trim() !== "") {
       const filtered = tasks.filter(item =>
        item.content.toLowerCase().includes(task.toLowerCase()) // Chuyển về chữ thường để so sánh
      );
      setFilteredTasks(filtered);
     }else
      setFilteredTasks(tasks)
  };

  // Delete task into API
  const deleteTaskAPI = async (id) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://66fa5546afc569e13a9b45e8.mockapi.io/listTask/${id}`,
        {
          method: 'DELETE',
        }
      );
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Delete by index
  const deleteTask = (id) =>{
    const newTasks = [...tasks].filter(item => item.id !== id);
    //Delete ben API
    deleteTaskAPI(id)

    setFilteredTasks(newTasks);
  }

  const editTask = (id) =>{
    navigation.navigate('screen_03', { name , action : false,lengthTasks: tasks.length ,id , content : tasks.find((note) => note.id == id).content})
  }
  return(
    <View style={styles.container2}>

    {/* Ảnh đại diện và thông tin người dùng */}
      <View style={styles.userInfo}>
        <Image source={require('./image/Avatar_31.png')} style={styles.avatar} />
        <View>
          <Text style={styles.greeting}>Hi {name}</Text>
          <Text style={styles.subText}>Have a great day ahead</Text>
        </View>
      </View>

        {/* Task Input */}
        <View style={styles.inputContainer}>
           <TextInput
              style={styles.input}
              placeholder="Search"
              value={task}
              onChangeText={(text) => setTask(text)}
           />
           <FontAwesome5
              name="plus"
              size={24}
              color="green"
              onPress={searchTask}
           />
        </View>

        {/* Task List */}
        <FlatList
          data={filteredTasks}
          renderItem={({item}) => <Task
                 key={item.id}
                 text={item.content}
                 onDelete={() => deleteTask(item.id)}
                 onEdit = {() => editTask(item.id)}
              />}
          keyExtractor={item => item.id}
        />
        <View>
          <FontAwesome5
              name="plus"
              size={24}
              color="green"
              onPress={() => navigation.navigate('screen_03', { name , action : true, lengthTasks: tasks.length})}
           />
        </View>
     </View>
  )
}

function screen_03({navigation, route}){
  const { name , action , lengthTasks, id, content} = route.params;
  const [task, setTask] = useState(""); 

  var newObject = {id: 9999, content: ""}
    const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFinish = () => {
    if(action){
      addTask()
      navigation.navigate('screen_02');
    }else{
      editTaskAPI(id, task)
      navigation.navigate('screen_02', { newTask: task });
    }
    
  };

  // Add task into API
  const postTaskAPI = () =>{
    fetch("https://66fa5546afc569e13a9b45e8.mockapi.io/listTask", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newObject),
            })
  }

  // UI
  const addTask = () => {
     if (task.trim() !== "") {
        newObject.id = lengthTasks
        newObject.content = task

        //Add on API
        postTaskAPI();
        
        setTask(""); // Clear the input
     }
  };

  const editTaskAPI = (id, updatedContent) =>{
    fetch(`https://66fa5546afc569e13a9b45e8.mockapi.io/listTask/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content: updatedContent }),
            }).then(response => response.json())
  }

  return(
    <View>
      {/* Ảnh đại diện và thông tin người dùng */}
      <View style={styles.userInfo}>
        <Image source={require('./image/Avatar_31.png')} style={styles.avatar} />
        <View>
          <Text style={styles.greeting}>Hi {name}</Text>
          <Text style={styles.subText}>Have a great day ahead</Text>
        </View>
      </View>
      {/* Header */}
        <View style={styles.header}>
           <Text style={styles.headerText}>{action ? "ADD YOUR JOB" : "EDIT YOUR JOB" }</Text>
        </View>
        {/* TextInput để nhập công việc */}
      <TextInput
        placeholder= "input put your job"
        style={styles.input}
        value={task}
        onChangeText={setTask}
      />

      {/* Nút FINISH */}
      <TouchableOpacity style={styles.button} onPress={handleFinish}>
        <Text style={styles.buttonText}>FINISH ➔</Text>
      </TouchableOpacity>
    </View>
  )
}
const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal" initialRouteName="screen_01">
        <Stack.Screen name="screen_01" component={screen_01} />
        <Stack.Screen name="screen_02" component={screen_02} />
        <Stack.Screen name="screen_03" component={screen_03} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container1: {
     flex: 1,
     padding: 20,
     marginTop: 20,
     alignItems: "center"
  },
  container2: {
     flex: 1,
     padding: 20,
     marginTop: 20,
  },
  header: {
     marginTop: 20,
     marginBottom: 20,
     alignItems: "center",
  },
  headerText: {
     fontSize: 36,
     fontWeight: "bold",
  },
  inputContainer: {
     flexDirection: "row",
     alignItems: "center",
     borderWidth: 1,
     borderRadius: 10,
     padding: 5,
     marginBottom: 40
  },
  input: {
     flex: 1,
     borderWidth: 0,
     borderColor: "#777",
     padding: 10,
  },
  tasks: {
     marginTop: 30,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6a1b9a', // Adjust color
    marginBottom: 40,
    marginTop: 40
  },
  button: {
    backgroundColor: '#00c6ff',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 30,
    width: 200,
    marginBottom: 40
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 300, // Adjust size
    height: 300,
    marginBottom: 20,
  },
  icon: {
    width: 20,
    height: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 14,
    color: '#888',
  },
});

export default App;