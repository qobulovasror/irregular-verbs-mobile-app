import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { testHandlerStyle } from "../../assets/styles/mainStyle";
import { useState, useEffect } from "react";
import { Feather, AntDesign, MaterialIcons } from "@expo/vector-icons";

import { verb_with_tree as data } from "../../data/imgreq";

function TestRender({ seleVerb }) {
  const [results, setResult] = useState({
    current: 0,
    wrong: 0,
    currentWord: 0,
  });

  const [currVerbs, setCurrVerbs] = useState([]);

  const checkResult = () => {};

  useEffect(() => {
    const verbs = [];
    data.forEach((item, index) => {
      if (seleVerb.includes(index)) {
        verbs.push(item);
      }
    });
    setCurrVerbs(verbs);
  }, []);
  return (
    <View style={testHandlerStyle.conatainer}>
      <View style={[testHandlerStyle.row, testHandlerStyle.between, testHandlerStyle.showResult]}>
        <View style={[testHandlerStyle.drectBtn, testHandlerStyle.column]}>
          <MaterialIcons name="close" size={24} color="black" />
          <Text style={{textAlign: 'center'}}>0</Text>
        </View>
        <View style={testHandlerStyle.drectBtn}>
          <Text style={{fontSize: 18}}>{"10/12"}</Text>
        </View>
        <View style={[testHandlerStyle.drectBtn, testHandlerStyle.column]}>
            <AntDesign name="check" size={24} color="black" />
            <Text style={{textAlign: 'center'}}>0</Text>
        </View>
      </View>
      <View style={testHandlerStyle.card}>
        <View style={[testHandlerStyle.column]}>
          <View
            style={[
              testHandlerStyle.row,
              { justifyContent: "center", marginVertical: 10 },
            ]}
          >
            <Text style={{ fontSize: 18 }}>Verb: </Text>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>{"BEND"} </Text>
          </View>
          <TextInput style={testHandlerStyle.input} placeholder="Past simple" />
          <TextInput style={testHandlerStyle.input} placeholder="Past simple" />
          {
            true?
            <TouchableOpacity style={testHandlerStyle.checkBtn}>
              <Text style={{ fontSize: 18, color: "#fff" }}>{"Check"}</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity style={testHandlerStyle.checkBtn}>
              <Text style={{ fontSize: 18, color: "#fff" }}>{"Next"}</Text>
            </TouchableOpacity>
          }
        </View>
      </View>
    </View>
  );
}

export default TestRender;
