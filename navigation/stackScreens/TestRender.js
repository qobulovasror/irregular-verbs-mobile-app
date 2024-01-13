import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { testHandlerStyle } from "../../assets/styles/mainStyle";
import { useState, PureComponent, useEffect } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";

const data = require("../../data/verbs/irregular_verbs_min.json").slice(0, 20);

class ListItem extends PureComponent {
  render() {
    const { item, index } = this.props;
    return (
      <View>
        <View
          style={[testHandlerStyle.row, testHandlerStyle.around, {paddingVertical: 10}]}>
          <View style={[testHandlerStyle.items, {width: '30%'}]}>
            <Text style={[testHandlerStyle.itemText]}>{item.word}</Text>
          </View>
          <View style={testHandlerStyle.items}>
            <TextInput style={testHandlerStyle.input} placeholder="Past simple"/>
          </View>
          <View style={testHandlerStyle.items}>
            <TextInput style={testHandlerStyle.input} placeholder="Past participle"/>
          </View>
        </View>
        <View
          style={{ width: "100%", height: 1, backgroundColor: "#000" }}
        ></View>
      </View>
    );
  }
}

function TestRender({navigation, seleVerb, setSeleVerb}) {
  const [currVerbs, setCurrVerbs] = useState([]);
  const [results, setReults] = useState(Array(seleVerb.length))
  const checkResult = () =>{
    
  }
  useEffect(()=>{
    const verbs = []
    data.forEach((item, index)=>{
      if(seleVerb[index]){
        verbs.push({word: item.word, ps: item.ps, pp: item.pp})
      }
    })
    setCurrVerbs(verbs);
  }, [])
  return (
    <View style={testHandlerStyle.conatainer}>
      <View style={[testHandlerStyle.row, testHandlerStyle.around, { marginTop: 10 }]}>
        <Text style={testHandlerStyle.listHeader}>Infinitive</Text>
        <Text style={testHandlerStyle.listHeader}>Past simple</Text>
        <Text style={testHandlerStyle.listHeader}>Past participle</Text>
      </View>
      <FlatList
        data={currVerbs}
        initialNumToRender={5}
        renderItem={({ item, index }) => (
          <ListItem
            item={item}
            index={index}
          />
        )}
        keyExtractor={(item) => item.word}
      />
      <TouchableOpacity style={testHandlerStyle.startBtn} onPress={checkResult}>
        <Feather name="check-circle" size={27} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

export default TestRender;
