import { View, Text,Image,TextInput,TouchableOpacity} from "react-native";
import styles from './styles';
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import constants from "../../constants/styles"
import { Feather } from '@expo/vector-icons'; 
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import axios from "axios";
import {useState} from 'react';
import colors from '../../constants/colors';


const ProfileScreen = () => {
  const user = useSelector(state => state.user);
  const [selectedImage, setSelectedImage] = useState(null);
  const [profile,setProfile] = useState(user.profile)
  const handleSubmit = () => {

  }

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
  <SafeAreaView >
  <View style = {styles.profileContainer} >
  <View style={constants.h1_view}>
    <Text style={constants.h1_text}>Hello {user.first_name} {user.last_name}</Text>
  </View>
  <View style={styles.cover_container}>
  {selectedImage ? (
    <View>
      <Image source={{ uri: selectedImage }} style={styles.imageStyle} />
      <Button title ={"Cancel"} onPress={() => setSelectedImage(null)} />
    </View>
  ) : (
    <Image source={{ uri: user.profile }} style={styles.imageStyle} />
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
          onChangeText={(text) => setFirstName(text)}
          value={user.first_name}
        />
      <Text>Last Name</Text>
      <TextInput style={constants.textInput}
          placeholder={user.last_name}
          onChangeText={(text) => setLastName(text)}
          value={user.last_name}
        />
        <Text>Username</Text>
          <TextInput style={constants.textInput}
          placeholder={user.username}
          onChangeText={(text) => setFirstName(text)}
          value={user.username}
        />
  </View>
  <Button title="Submit Updates" onPress={handleSubmit} />
  </View>
  </SafeAreaView>

  )}

export default ProfileScreen;