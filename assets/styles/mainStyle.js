import {StyleSheet} from 'react-native'

export const mainStyle = StyleSheet.create({
    conatainer: {
        padding: 10,
        marginBottom: 60
    },
    row: {
        display: 'flex',
        flexDirection: "row"
    },
    column: {
        display: 'flex',
        flexDirection: "column"
    },
    between: {
        justifyContent: "space-between"
    },
    around: {
        justifyContent: "space-around"
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
        fontWeight: "600"
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
        flexDirection: "row"
    },
    itemText: {
        height: '100%',
        fontSize: 16.5,
    },
    itemTextTranslate: {
        textAlign: "center", 
        fontSize: 16,
    }
})