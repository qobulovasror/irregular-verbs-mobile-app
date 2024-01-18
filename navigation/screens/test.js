import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { testHandlerStyle } from "../../assets/styles/mainStyle";
import { useState } from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

import { verb_with_tree as data } from "../../data/imgreq";

function Test() {
  const [results, setResult] = useState({
    current: 0,
    wrong: 0,
    currentWord: 0,
  });
  const [resValues, setResValues] = useState({
    ps: "",
    pp: ""
  })
  const [currTestState, setCurrTestState] = useState({
    ps: -1,
    pp: -1
  })
  const [check, setCheck] = useState(false)

  const checkResult = () => {
    setCheck(true)
    let isCurrentPS = (resValues.ps.trim().toLowerCase()===data[results.currentWord].ps.split("/")[0].trim().toLowerCase())? 1: 0
    let isCurrentPP = (resValues.pp.trim().toLowerCase()===data[results.currentWord].pp.split("/")[0].trim().toLowerCase())? 1: 0
    setCurrTestState({
      ps: isCurrentPS,
      pp: isCurrentPP
    })

    console.log(isCurrentPS, isCurrentPP, results.wrong + (isCurrentPP==0)? 1: 0 + (isCurrentPS==0)? 1: 0);
    setResult({
      current: (results.current + isCurrentPP + isCurrentPS),
      wrong: results.wrong + ((isCurrentPP==0)? 1: 0) + ((isCurrentPS==0)? 1: 0),
      currentWord: results.currentWord
    })
  };
  const nextWord = () => {
    setCheck(false)
    setCurrTestState({ ps: -1, pp: -1 })
    setResult({
      ...results,
      currentWord: results.currentWord+1,
    })
    setResValues({
      ps: "",
      pp: ""
    })
  };
  return (
    <View style={testHandlerStyle.conatainer}>
      <View
        style={[
          testHandlerStyle.row,
          testHandlerStyle.between,
          testHandlerStyle.showResult,
        ]}
      >
        <View style={[testHandlerStyle.drectBtn, testHandlerStyle.column]}>
          <MaterialIcons name="close" size={24} color="black" />
          <Text style={{ textAlign: "center" }}>{results.wrong}</Text>
        </View>
        <View style={testHandlerStyle.drectBtn}>
          <Text style={{ fontSize: 18 }}>{results.currentWord+"/"+data.length}</Text>
        </View>
        <View style={[testHandlerStyle.drectBtn, testHandlerStyle.column]}>
          <AntDesign name="check" size={24} color="black" />
          <Text style={{ textAlign: "center" }}>{results.current}</Text>
        </View>
      </View>
      <View style={testHandlerStyle.card}>
        <View style={[testHandlerStyle.column, {marginVertical: 15}]}>
          <View
            style={[
              testHandlerStyle.row,
              { justifyContent: "center", marginVertical: 10 },
            ]}
          >
            <Text style={{ fontSize: 18 }}>Verb: </Text>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>{data[results.currentWord].word} </Text>
          </View>
          <TextInput 
            style={[testHandlerStyle.input, {borderColor: (currTestState.ps==1)? "#0f0": (currTestState.ps==0)? "#f00": "#000"}]} 
            placeholder="Past simple" 
            value={resValues.ps}
            autoCapitalize="none"
            onChangeText={(val=>setResValues({...resValues, ps: val}))}
            />
            {
              currTestState.ps==0 &&
              <Text style={{color: "#CEAC13FF", fontSize: 20, textAlign: 'center'}}>{data[results.currentWord].ps.toLowerCase()}</Text>
            }
          <TextInput 
            style={[testHandlerStyle.input, {marginTop: 15, borderColor: (currTestState.pp==1)? "#0f0": (currTestState.pp==0)? "#f00": "#000"}]} 
            placeholder="Past participle" 
            value={resValues.pp}
            autoCapitalize="none"
            onChangeText={(val=>{setResValues({...resValues, pp: val})})}
            />
            {
              currTestState.pp==0 &&
              <Text style={{color: "#CEAC13FF", fontSize: 20, textAlign: 'center'}}>{data[results.currentWord].pp.toLowerCase()}</Text>
            }
          {!check ? (
            <TouchableOpacity style={testHandlerStyle.checkBtn} onPress={checkResult}>
              <Text style={{ fontSize: 18, color: "#fff" }}>{"Check"}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={[testHandlerStyle.checkBtn, {backgroundColor: "#00f"}]} onPress={nextWord}>
              <Text style={{ fontSize: 18, color: "#fff" }}>{"Next"}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

export default Test;
