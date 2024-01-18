import { StyleSheet } from "react-native";

const mainStyle = StyleSheet.create({
  conatainer: {
    padding: 10,
    marginBottom: 25,
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  between: {
    justifyContent: "space-between",
  },
  around: {
    justifyContent: "space-around",
  },
  header: {
    fontSize: 30,
    textAlign: "center",
  },
  input: {
    padding: 10,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: "#000",
  },
  listHeader: {
    fontSize: 17,
    fontWeight: "600",
  },
  list: {
    zIndex: 10,
    borderBottomColor: "#000",
    borderBottomWidth: 0.5,
    paddingTop: 5,
    paddingVertical: "auto",
    height: 45,
  },
  items: {
    width: "25%",
    margin: "auto",
    display: "flex",
    flexDirection: "row",
  },
  itemText: {
    height: "100%",
    fontSize: 16.5,
  },
  itemTextTranslate: {
    textAlign: "center",
    fontSize: 16,
  },
  startBtn: {
    position: "absolute",
    top: "90%",
    right: "5%",
    backgroundColor: "#00f",
    padding: 15,
    borderRadius: 10,
  },
});

const textStyle = StyleSheet.create({
  conatainer: {
    padding: 10,
    marginBottom: 60,
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  between: {
    justifyContent: "space-between",
  },
  around: {
    justifyContent: "space-around",
  },
  header: {
    fontSize: 30,
    textAlign: "center",
  },
  input: {
    padding: 10,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: "#000",
  },
  listHeader: {
    fontSize: 17,
    fontWeight: "600",
  },
  list: {
    zIndex: 10,
    // height: 45,
  },
  items: {
    margin: "auto",
    display: "flex",
    flexDirection: "row",
  },
  itemText: {
    height: "100%",
    fontSize: 16.5,
  },
  itemTextTranslate: {
    textAlign: "center",
    fontSize: 16,
  },
  startBtn: {
    position: "absolute",
    bottom: "5%",
    right: "5%",
    backgroundColor: "#00f",
    padding: 15,
    borderRadius: 10,
  },
  selectAllBtn: {
    padding: 5,
    borderRadius: 10,
    paddingStart: 15,
    borderColor: "#00f",
    borderWidth: 0.8
  },
  checkBtnText: { 
    marginStart: 15, 
    fontSize: 20, 
    color: "#00f" 
  }
});

const testHandlerStyle = StyleSheet.create({
  conatainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  between: {
    justifyContent: "space-between",
  },
  around: {
    justifyContent: "space-around",
  },
  header: {
    fontSize: 30,
    textAlign: "center",
  },
  input: {
    padding: 7,
    borderRadius: 7,
    borderWidth: 0.5,
    borderColor: "#000",
    marginVertical: 5,
    marginHorizontal: 10,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 15
  },
  listHeader: {
    fontSize: 17,
    fontWeight: "600",
  },
  list: {
    padding: 7,
    borderRadius: 7,
    borderWidth: 0.5,
    borderColor: "#000",
  },
  items: {
    width: "35%",
    marginHorizontal: 5
  },
  itemText: {
    height: "100%",
    fontSize: 18,
    textAlign: "center"
  },
  itemTextTranslate: {
    textAlign: "center",
    fontSize: 16,
  },
  checkBtn: {
    backgroundColor: "#41C68EFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    padding: 10, marginTop: 5
  },
  drectBtn: {
    width: '30%',
   backgroundColor: "#F9B74Dff",
    alignItems: "center",
    justifyContent: "center",
    padding: 15, 
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 3,
  },
  card: {
    width: '80%',
    marginHorizontal: '10%',
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
  },
  showResult: {
    position: 'absolute', 
    top: '0%',
    left: 0,
    margin: '10%'
  }
});

export { mainStyle, textStyle, testHandlerStyle };
