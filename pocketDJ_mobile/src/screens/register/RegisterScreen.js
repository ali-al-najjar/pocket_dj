import { View, Text, TextInput, TouchableOpacity, Image,ScrollView, KeyboardAvoidingView} from "react-native";
import styles from './styles';
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import constants from '../../constants/styles';
import colors from '../../constants/colors';
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/Button/Button";
import { MaterialIcons } from '@expo/vector-icons';
import axios from "axios";
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons'; 
import * as FileSystem from 'expo-file-system';

const RegisterScreen = () => {

  const navigation = useNavigation();
  const [first_name,setFirstName] = useState("")
  const [last_name,setLastName] = useState("")
  const [selectedImage, setSelectedImage] = useState(null);
  const [username,setUserName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirm_password,setConfirmPassword] = useState("")
  const [profile,setProfile] = useState("")
  const[error,setError]=useState("");


  const validateEmail=(email) =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);}

  const validatePassword=(password)=> {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return passwordRegex.test(password);
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
        }
        } 


      const handleSubmit = (e) => {
        e.preventDefault()
        if (username || first_name || last_name || email || password || confirm_password){
        if (validateEmail(email)){
          if(validatePassword(password)){
            if(password === confirm_password) {
              const data = new FormData();
              data.append("first_name", first_name);
              data.append("last_name", last_name);
              data.append("email", email);
              data.append("username", username);
              data.append("password", password);
              data.append("password2", confirm_password);
              data.append("role", "User");
              data.append("profile", profile);

            console.log(data)
            axios.post("http://192.168.1.127:8000/register",data,{
              headers: {
                "Content-Type": "multipart/form-data"
              }
            })
            .then((res)=>{
              console.log(res.data);
              setError("");
              navigation.goBack();
            })
            .catch((err=>{
              console.log(err.request.response);
            }))
            setError("");
              }else(setError(<View style={constants.error_container}><MaterialIcons name="error-outline" size={24} color="red" /><Text style={constants.error}>Your passwords don't match</Text></View>))
            }else(setError(<View style={constants.error_container}><MaterialIcons name="error-outline" size={24} color="red" /><Text style={constants.error}>Your password is malformed</Text></View>))
          }else(setError(<View style={constants.error_container}><MaterialIcons name="error-outline" size={24} color="red" /><Text style={constants.error}>Your email is malformed</Text></View>))
        }else(setError(<View style={constants.error_container}><MaterialIcons name="error-outline" size={24} color="red" /><Text style={constants.error}>No Empty fields are allowed</Text></View>))

}

  return(
    <SafeAreaView style={styles.registerContainer} forceInset={{ bottom: 'never' }}>
    <KeyboardAvoidingView       
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled>
    <ScrollView >
    <View style={constants.innerContainer}>
    <View style={constants.h1_view}>
      <Text style={constants.h1_text}>Create a new account</Text>
      </View>
      <Text>First Name</Text>
      <TextInput style={constants.textInput}
          placeholder="Enter your first name"
          onChangeText={(text) => setFirstName(text)}
          value={first_name}
        />
      <Text>Last Name</Text>
      <TextInput style={constants.textInput}
          placeholder="Enter your last name"
          onChangeText={(text) => setLastName(text)}
          value={last_name}
        />

      {selectedImage && (
        <Image
          source={{ uri: selectedImage }}
          style={styles.imageStyle}
        />
      )}
  <TouchableOpacity onPress={handleChoosePhoto}>
    <View style={styles.imageUpload}>
      <View>
        <Feather name="image" size={30} color={colors.primaryColor} />
        </View>
        <View>
        <Text style={constants.links}>Choose Photo</Text>
        </View>
    </View>
  </TouchableOpacity>
      <Text>Username</Text>
      <TextInput style={constants.textInput}
          placeholder="choose a username"
          onChangeText={(text) => setUserName(text)}
          value={username}
        />
      <Text>Email Address</Text>
      <TextInput style={constants.textInput}
          placeholder="Enter your email address"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      <Text>Password</Text>
      <TextInput style={constants.textInput}
          placeholder="Enter your password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      <Text>Confirm Password</Text>
      <TextInput style={constants.textInput}
          placeholder="Confirm your password"
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirm_password}
        />
      <View>
      <Text>{error}</Text>
      </View>
        <Button title="Register" onPress={handleSubmit} />
        <View style={constants.linksSection}>
        <Text>Already have an account? </Text> 
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={constants.links}>Login Now</Text>
        </TouchableOpacity>
        </View>
        </View>
        </ScrollView>
        </KeyboardAvoidingView>
        </SafeAreaView>
  )
}

export default RegisterScreen;



