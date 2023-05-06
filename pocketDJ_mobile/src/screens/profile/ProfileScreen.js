import { View, Text,Image,TextInput,TouchableOpacity, ScrollView} from "react-native";
import styles from './styles';
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector , useDispatch } from "react-redux";
import Button from "../../components/Button/Button";
import constants from "../../constants/styles"
import { Feather } from '@expo/vector-icons'; 
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import axios from "axios";
import {useState,useEffect} from 'react';
import colors from '../../constants/colors';
import { getToken } from "../../auth/auth";
import { setUser } from '../../redux/slices/userSlice'

const ProfileScreen = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const [profile,setProfile] = useState(user.profile)
  const [original_first_name, setOriginalFirstName] = useState(user.first_name);
  const [original_last_name, setOriginalLastName] = useState(user.last_name);
  const [original_username, setOriginalUsername] = useState(user.username);
  const [original_profile, setOriginalProfile] = useState(user.profile);
  const [first_name, setFirstName] = useState(user.first_name);
  const [last_name, setLastName] = useState(user.last_name);
  const [username, setUsername] = useState(user.username)
  const [message,setMessage] = useState("");

  const token = getToken();

  const updateFirstName = (text) =>{
    setFirstName(text)
  }
  const updateUsername = (text) =>{
    setUsername(text)
  }
  const updateLastName = (text) =>{
    setLastName(text)
  }

  const handleLogout = () =>{
    
  }

  const handleSubmit = () => {
    const data = new FormData();
    if (first_name !== original_first_name) {
      data.append("first_name", first_name);
    }
    if (last_name !== original_last_name) {
      data.append("last_name", last_name);
    }
    if (profile !== original_profile) {
      data.append("profile", profile);
    }
    if (username!== original_username) {
      data.append("username", username);
    }

    if (data.first_name !== "" || data.last_name !== "" || data.profile !== "" || data.username !== ""){
      axios.put("http://192.168.1.127:8000/update/profile",data,{
            headers: {
            Authorization: 'Token ' + token._j,
            "Content-Type": "multipart/form-data"
      }
    })
    .then((res)=>{
      setTimeout(() => {
        setMessage("Successfully Updated")
      }, 2000);
      
      dispatch(setUser(res.data));
      setSelectedImage(null);
    })
    .catch((err=>{
      console.log(err.request.response);
    }))}else{
      setMessage("No Changes are made!")
    }}



  const handleChoosePhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, Camera roll permissions neededto make this work!');
      return;
    }
    
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
  
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      const cacheDirectory = FileSystem.cacheDirectory;
      const fileName = result.assets[0].uri.split('/').pop();
      const filePath = `${cacheDirectory}${fileName}`;
      try {
        await FileSystem.copyAsync({
          from: result.assets[0].uri,
          to: filePath,
        });
    
        setProfile({
          uri: filePath,
          type: 'image/jpeg, image/png',
          name: fileName,
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      setSelectedImage(null);
      setProfile(user.profile);
    }
    
  }


  console.log(user)
  return (
  <View style = {styles.profileContainer} >
  <View style={styles.header}>
  <View style={constants.h1_view}>
    <Text style={constants.h1_text}>Hello {user.first_name} {user.last_name}</Text>
  </View>
  </View>
  <View style={styles.cover_container}>
  {selectedImage ? (
    <View style={styles.uploadContainer}>
      <Image source={{ uri: selectedImage }} style={styles.imageStyle} />
      <Button style={styles.cancelButton} title ={"Cancel"} onPress={() => setSelectedImage(null)} />
    </View>
  ) : (
    <View style={styles.uploadContainer}>
    <Image source={{ uri: user.profile }} style={styles.imageStyle} />
    </View>
  )}
  </View>
  <TouchableOpacity onPress={handleChoosePhoto}>
    <View style={styles.imageUpload}>
      <View>
        <Feather name="image" size={30} color={colors.primaryColor} />
        </View>
        <View>
        <Text style={constants.links}>Update Photo</Text>
        </View>
    </View>
  </TouchableOpacity>
  <View style={styles.updateInputs}>
  <Text>First Name</Text>
  <TextInput style={constants.textInput}
          placeholder={user.first_name}
          onChangeText={updateFirstName}
          value={first_name}
        />
      <Text>Last Name</Text>
      <TextInput style={constants.textInput}
          placeholder={user.last_name}
          onChangeText={updateLastName}
          value={last_name}
        />
        <Text>Username</Text>
          <TextInput style={constants.textInput}
          placeholder={user.username}
          onChangeText={updateUsername}
          value={username}
        />
  
  <View ><Text className={styles.messageText}>{message}</Text></View>
  <Button title="Submit Updates" onPress={handleSubmit} />
  <Button title="Log out" onPress={handleLogout} />
  </View>
  </View>
  )}

export default ProfileScreen;