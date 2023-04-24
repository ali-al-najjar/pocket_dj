import { View, Text, FlatList, RefreshControl} from "react-native";
import { DUMMY_DATA } from "../../../../data/dummy";
import styles from "./styles";
import MoodItem from "./MoodItem";

const MoodsList = () => {

  const renderItem = ({item}) => {
    return <MoodItem id={item.id} title={item.title}/>
}

  return(
    <View style={styles.moods_list}>
      <FlatList
      data= {DUMMY_DATA}
      keyExtractor={item=> item.id}
      renderItem = {renderItem}
      numColumns={3}
      refreshControl={      
        <RefreshControl
          refreshing ={false}
          />}
      />

      
    </View>
  )
}

export default MoodsList;