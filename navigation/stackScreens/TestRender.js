import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { testHandlerStyle } from "../../assets/styles/mainStyle";
import { useState, useMemo, useEffect } from "react";
import { Feather } from "@expo/vector-icons";

// const data = require("../../data/verbs/irregular_verbs_min.json").slice(0, 20);
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
        <View style={testHandlerStyle.drectBtn}>
          <Text style={{fontSize: 18}}>x</Text>
        </View>
        <View style={testHandlerStyle.drectBtn}>
          <Text style={{fontSize: 18}}>10/12</Text>
        </View>
        <View style={testHandlerStyle.drectBtn}>
          <Text style={{fontSize: 18}}>cur</Text>
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
          <TouchableOpacity style={testHandlerStyle.checkBtn}>
            <Text style={{ fontSize: 18, color: "#fff" }}>Check</Text>
          </TouchableOpacity>
          <View style={[testHandlerStyle.row, testHandlerStyle.between]}>
            <TouchableOpacity style={testHandlerStyle.drectBtn}>
              <Text style={{color: "#000", fontSize: 17}}>Prev</Text>
            </TouchableOpacity>
            <TouchableOpacity style={testHandlerStyle.drectBtn}>
              <Text style={{color: "#000", fontSize: 17}}>Exit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={testHandlerStyle.drectBtn}>
              <Text style={{color: "#000", fontSize: 17}}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const ListView = ({ currVerbs, checkResult }) => {
  const [results, setReults] = useState([...currVerbs]);

  const changePastSimple = (val, index) => {};
  const changePastPeractive = (val, index) => {};
  const renderItem = ({ item, index }) => (
    <View>
      <View
        style={[
          testHandlerStyle.row,
          testHandlerStyle.around,
          { paddingVertical: 10 },
        ]}
      >
        <View style={[testHandlerStyle.items, { width: "30%" }]}>
          <Text style={[testHandlerStyle.itemText]}>{item.word}</Text>
        </View>
        <View style={testHandlerStyle.items}>
          <TextInput
            style={testHandlerStyle.input}
            onChangeText={(val) => changePastSimple(val, index)}
            placeholder="Past simple"
          />
        </View>
        <View
          style={testHandlerStyle.items}
          onChangeText={(val) => changePastPeractive(val, index)}
        >
          <TextInput
            style={testHandlerStyle.input}
            placeholder="Past participle"
          />
        </View>
      </View>
      <View
        style={{ width: "100%", height: 1, backgroundColor: "#000" }}
      ></View>
    </View>
  );

  const MemoizedFlatList = useMemo(
    () => (
      <View>
        <FlatList
          data={currVerbs}
          refreshing={false}
          keyExtractor={(item) => item.word}
          renderItem={(item, index) => renderItem(item, index)}
        />
        <TouchableOpacity
          style={testHandlerStyle.startBtn}
          // onPress={()=>checkResult(results)}
        >
          <Feather name="check-circle" size={27} color="#fff" />
        </TouchableOpacity>
      </View>
    ),
    []
  );
  return MemoizedFlatList;
};

export default TestRender;
