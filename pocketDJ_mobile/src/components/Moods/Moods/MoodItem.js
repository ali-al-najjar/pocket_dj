import { ImageBackground, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { getToken } from "../../../auth/auth";
import axios from 'axios';

const MoodItem = ({id , name ,cover}) => {
  const navigation = useNavigation();

  // const handleMood=()=>{
  //   navigation.navigate('Player', {
  //     title: name,
  //     image: { uri: cover },
  //     });
  // }
  const token = getToken();
  
  const data = new FormData();
  data.append('mood_id', id)
  const MakeRemix = async () => {
    axios.post("http://192.168.1.127:8000/mix",data,{
      headers: {
        Authorization: 'Token ' + token._j,
        "Content-Type": "multipart/form-data"
      }
    })
    .then((res)=>{
      console.log(res.data);
      
    })
    .catch((err=>{
      console.log(err.request.response);
      console.log(token)
    }))
  }

  return (
    <TouchableOpacity onPress={MakeRemix}>
    <ImageBackground 
    source={{ uri: cover }}
    imageStyle={{ borderRadius: 10}}
    style = {[styles.mood, { borderRadius: 5 }]}>
    <Text style={styles.mood_text}>{name}</Text>
    </ImageBackground>
    </TouchableOpacity>
  )
}

export default MoodItem;