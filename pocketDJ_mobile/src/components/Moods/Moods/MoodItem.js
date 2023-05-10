import { ImageBackground, Text, TouchableOpacity, View, ActivityIndicator } from "react-native"
import { useState,useEffect } from 'react';
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { getToken } from "../../../auth/auth";
import axios from 'axios';
import { Alert } from 'react-native';
import Colors from "../../../constants/colors";
import SongItem from "../../Songs/SongItem";

const MoodItem = ({ id, name, cover }) => {

  const navigation = useNavigation();
  const [showIndicator, setShowIndicator] = useState(false);
  const [mix, setMix] = useState();
  const token = getToken();

  const data = new FormData();
  data.append('mood_id', id)

  const MakeRemix = async () => {
    setShowIndicator(true);
    axios.post("http://192.168.1.127:8000/mix", data, {
      headers: {
        Authorization: 'Token ' + token._j,
        "Content-Type": "multipart/form-data"
      }
    })
      .then((res) => {
        setShowIndicator(false);
        if (res.status === 200) {
          console.log(res.data);
          setMix(res.data)
      }})
      .catch((err => {
        setShowIndicator(false);
        console.log(err.request.response);
        Alert.alert(
          'Unlucky!',
          'New Songs will be added soon for this item',
          [
            {
              text: 'Choose Another Mood',
              onPress: () => console.log('OK pressed'),
              style: 'destructive'
            }
          ]);
      }))
  }

  useEffect(() => {
    if (mix) {
      const durationinMillis = Math.ceil(mix.duration * 60000);
      navigation.navigate('Song Player', {
        title: mix.name,
        image: {uri : `http://192.168.1.127:8000/media/${mix.cover}`},
        AudioURL: {audio : mix.link },
        Duration: {durationinMillis : durationinMillis},
      });
    }
  }, [mix]);

  return (
    <TouchableOpacity onPress={MakeRemix}>
      <ImageBackground
        source={{ uri: cover }}
        imageStyle={{ borderRadius: 10 }}
        style={[styles.mood, { borderRadius: 5 }]}>
        <Text style={styles.mood_text}>{name}</Text>
        {showIndicator ?
        <View style={styles.indicator}>
        <ActivityIndicator size="large" color={Colors.black}/>
        <Text style={styles.indicator_text}>Remix is being prepared!</Text>
        </View> : null}
        
        
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default MoodItem;
