import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { textStyle } from "../../assets/styles/mainStyle";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const data = require("../../data/verbs/irregular_verbs_min.json").slice(0, 20)

function Test() {
  const [selectVerb, setSelectVerb] = useState(Array(data.length).fill(true));
  const setCheckValue = (index) => {
    let curr = selectVerb;
    curr[index] = !selectVerb[index];
    setSelectVerb(curr);
  };
  return (
    <View style={textStyle.conatainer}>
      <View style={[textStyle.row, textStyle.around, { marginTop: 10 }]}>
        <Text style={textStyle.listHeader}>Select</Text>
        <Text style={textStyle.listHeader}>Infinitive</Text>
        <Text style={textStyle.listHeader}>Past simple</Text>
        <Text style={textStyle.listHeader}>Past participle</Text>
      </View>
      <TouchableOpacity style={[textStyle.selectAllBtn, textStyle.row]}
        onPress={()=>setSelectVerb(Array(data.length).fill(true))}
        >
        <AntDesign name="checkcircleo" size={25} color="#00f"  />
        <Text style={{marginStart: 15, fontSize: 20, color: "#00f" }}>Select All</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        initialNumToRender={15}
        style={{marginBottom: 10}}
        renderItem={({ item, index }) => (
            <View>
                <TouchableOpacity
                    style={[textStyle.row, textStyle.around, textStyle.list]}
                    onPress={() => setCheckValue(index)}
                >
                    <Checkbox
                        style={{ margin: 8, zIndex: 15 }}
                        value={selectVerb[index]}
                        onValueChange={() => setCheckValue(index)}
                    />
                    <View style={textStyle.items}>
                    <Text style={textStyle.itemText}>{item.word}</Text>
                    </View>
                    <View style={textStyle.items}>
                    <Text style={textStyle.itemText}>{item.ps}</Text>
                    </View>
                    <View style={textStyle.items}>
                    <Text style={textStyle.itemText}>{item.pp}</Text>
                    </View>
                </TouchableOpacity>
                <View style={{width: '100%', height: 0.5, backgroundColor: "#000"}}></View>
            </View>
        )}
        keyExtractor={(item) => item.word}
      />
      <TouchableOpacity style={textStyle.startBtn}>
        {/* <AntDesign name="check" size={27} color="#fff" /> */}
        <MaterialCommunityIcons name="run-fast" size={27} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

export default Test;
