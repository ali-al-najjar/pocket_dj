import { View, Text,FlatList} from "react-native";
import styles from './styles';
import { useNavigation } from "@react-navigation/native";
import { DUMMY_DATA } from "../../../data/remixes";
import RemixItem from "../../components/Remix/RemixItem";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyState from "../../components/EmptyState/emptyState";

const renderItem = ({item}) => {
  console.log("Rendering item with ID:", item.id);
  return <RemixItem id={item.id} title={item.title} mood={item.mood} date={item.date} />}

const RemixesScreen = () => {
  const navigation = useNavigation();
  const header = () =>{
    return (
    <View>
    <View style={styles.h1_view}>
    <Text style={styles.h1_text}>My Remixes</Text>
    </View>
    </View>
    )
  }
  return(
    <>
    <SafeAreaView style={{ flex: 1, marginBottom: 0 }} edges={[]}>
    <FlatList 
      style={styles.flatList}
      ListHeaderComponent ={header}
      ListEmptyComponent={
      <EmptyState     
        title={"No Remixes Created!"}
        description={"This page will show all your saved remixes"}
        buttonName={"Create"}
        onPress={()=> {
          navigation.navigate("Create");}}
      />}
      data= {DUMMY_DATA}
      keyExtractor={item => item.id}
      renderItem = {renderItem}
      />
    </SafeAreaView>
    </>
  )
}

export default RemixesScreen;
