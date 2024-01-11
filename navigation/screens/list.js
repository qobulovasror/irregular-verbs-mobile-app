import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { mainStyle } from "../../assets/styles/mainStyle";
import { FontAwesome } from "react-native-vector-icons";
import * as MediaLibrary from 'expo-media-library';
import { Audio } from 'expo-av';

import data from "../../data/verbs/irregular_verbs_min.json";
import full_data from "../../data/verbs/irregular_verbs.json";


function List() {
  const playAutio = async (name = "ate") => {
    name = name.toLowerCase().split("/")[0]
    // name = '../../data/audios/'+name+'.mp3'
    try {
        const { sound } = await Audio.Sound.createAsync(require('../../data/audios/'+name+'.mp3'));
        await sound.playAsync();
        
    } catch (error) {
        console.log(error);
    }
  };
  const playMusic = async (fileUri) => {
}
  return (
    <View style={mainStyle.conatainer}>
      <TextInput style={mainStyle.input} placeholder="Enter verb ... " />
      <View style={[mainStyle.row, mainStyle.around, { marginTop: 10 }]}>
        <Text style={mainStyle.listHeader}>Infinitive</Text>
        <Text style={mainStyle.listHeader}>Past simple</Text>
        <Text style={mainStyle.listHeader}>Past participle</Text>
        <Text style={mainStyle.listHeader}>Translation</Text>
      </View>
      <FlatList
        data={data}
        initialNumToRender={7}
        renderItem={({ item }) => (
          <View style={[mainStyle.row, mainStyle.around, mainStyle.list]}>
            <TouchableOpacity
              style={mainStyle.items}
              onPress={() => playAutio(item.word)}
            >
              <Text style={mainStyle.itemText}>{item.word}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={mainStyle.items}
              onPress={() => playAutio(item.ps)}
            >
              <Text style={mainStyle.itemText}>{item.ps}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={mainStyle.items}
              onPress={() => playAutio(item.pp)}
            >
              <Text style={mainStyle.itemText}>{item.pp}</Text>
            </TouchableOpacity>
            <Text style={[mainStyle.items, mainStyle.itemTextTranslate]}>
              {item.translation.Uzbek}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.word}
      />
    </View>
  );
}

export default List;
