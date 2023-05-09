import { ImageBackground, Text, TouchableOpacity, View ,ActivityIndicator} from "react-native"
import {useState, useEffect,useCallback} from 'react';
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { getToken } from "../../../auth/auth";
import axios from 'axios';
// import RemixItem from "../../components/Remix/RemixItem";
import { Alert } from 'react-native';
import Colors from "../../../constants/colors";

const MoodItem = ({id , name ,cover}) => {

  const navigation = useNavigation();
  // const [loading, setLoading] = useState(true);
  // const [remix, setRemix] = useState();
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
      // setLoading(false);
      console.log(res.status)
      console.log(res.data);
      
    })
    .catch((err=>{
      // setLoading(false);
      console.log(err.request.response);
      Alert.alert(
        'Unlucky!',
        'New Songs will be added soon for this item',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK pressed'),
            style: 'cancel'
          }
        ],{
        backgroundColor: Colors.rgbaPrimary,
        color: 'black',
        titleStyle: {
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center',
          color: 'red'
        },
        messageStyle: {
          fontSize: 16,
          textAlign: 'center',
          color: 'black'
        }
      });
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
    {/* {loading ? <ActivityIndicator size="large" color="#0000ff" /> : <RemixItem id={remix.id} title={remix.name} date={remix.date} mood={item.mood_name} audio={item.link} cover={item.cover} duration={parseFloat(item.duration)}/>} */}
    </TouchableOpacity>
  )
}

export default MoodItem;