import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { textStyle } from "../../assets/styles/mainStyle";
import Checkbox from "expo-checkbox";
import { useState, useMemo } from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const data = require("../../data/verbs/irregular_verbs_min.json");


function Test({ navigation, setSeleVerb }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const checkAllHandler = (percentage) => { 
    setSelectedItems(Array.from(Array(Math.round((data.length*percentage)/100)).keys()))
  };
  const startHandler = () => {
    setSeleVerb(selectedItems);
    navigation.navigate("Test");
  };
  return (
    <View style={textStyle.conatainer}>
      <View style={[textStyle.row, textStyle.around, { marginTop: 10 }]}>
        <Text style={textStyle.listHeader}>Select</Text>
        <Text style={textStyle.listHeader}>Infinitive</Text>
        <Text style={textStyle.listHeader}>Past simple</Text>
        <Text style={textStyle.listHeader}>Past participle</Text>
      </View>
      <View style={[textStyle.row, textStyle.around]}>
        <TouchableOpacity
          style={[textStyle.selectAllBtn, textStyle.row]}
          onPress={()=>checkAllHandler(100)}
        >
          <AntDesign name="checkcircleo" size={25} color="#00f" />
          <Text style={textStyle.checkBtnText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[textStyle.selectAllBtn, textStyle.row]}
          onPress={()=>checkAllHandler(50)}
        >
          <AntDesign name="checkcircleo" size={25} color="#00f" />
          <Text style={textStyle.checkBtnText}>Half</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[textStyle.selectAllBtn, textStyle.row]}
          onPress={()=>checkAllHandler(25)}
        >
          <AntDesign name="checkcircleo" size={25} color="#00f" />
          <Text style={textStyle.checkBtnText}>Quarter</Text>
        </TouchableOpacity>
      </View>
      <ListView 
        selectedItems={selectedItems} 
        setSelectedItems={setSelectedItems} 
      />
      <TouchableOpacity
        style={[
          textStyle.startBtn,
          {
            backgroundColor: selectedItems.length==0? "#99c": "#00f"
          },
        ]}
        disabled={selectedItems.length==0}
        onPress={startHandler}
      >
        <MaterialCommunityIcons name="run-fast" size={27} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}



const ListView = ({selectedItems, setSelectedItems}) => {
  const renderItem = ({ item, index }) => (
    <View>
        <TouchableOpacity
          style={[textStyle.row, textStyle.around, textStyle.list, {paddingHorizontal: 20}]}
          onPress={() => handleCheckboxChange(index)}
        >
          <View style={textStyle.row}>
            <View style={[textStyle.items, {width: "20%"}]}>
              <Text style={textStyle.itemText}>{index+1}</Text>
            </View>
            <View style={[textStyle.items, {width: "50%"}]}>
              <Text style={textStyle.itemText}>{item.word}</Text>
            </View>
          </View>
          <Checkbox
            style={{ margin: 8, zIndex: 15 }}
            value={selectedItems.includes(index)}
            onValueChange={() => handleCheckboxChange(index)}
          />
        </TouchableOpacity>
        <View
          style={{ width: "100%", height: 0.5, backgroundColor: "#000" }}
        ></View>
    </View>
  );

  const handleCheckboxChange = (itemId) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(itemId)) {
        return prevSelectedItems.filter((id) => id !== itemId);
      } else {
        return [...prevSelectedItems, itemId];
      }
    });
  };

  const MemoizedFlatList = useMemo(() => (
    <FlatList
      data={data}
      keyExtractor={(item) => item.word}
      renderItem={(item, index)=>renderItem(item, index)}
    />
  ), [selectedItems]);
  return MemoizedFlatList;
};


export default Test;
