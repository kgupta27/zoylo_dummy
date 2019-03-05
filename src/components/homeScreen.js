import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity
} from "react-native";


class HomeScreen extends React.Component{

    data = {
        "criteria": "",
        "gpsLatitude": 28.5103,
        "gpsLongitude": 77.0921,
        "size": "4",
        "page": "0",
        "distance": "",
        "homeVisit": "",
        "appointmentDate": "",
        "appointmentTime": "",
        "minFee": "",
        "maxFee": "",
        "onlineConsultation": "",
        "gender": [

        ],
        "amenities": [
            ""
        ],
        "minExperience": "",
        "maxExperience": "",
        "language": [

        ],
        "paymentOption": [
            ""
        ],
        "rating": "",
        "sortBy": ""
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'HomeScreen',
        };
    };

    // constructor(props) {
    //     super(props);
    // }

    async apiCall() {
        console.warn("APi Call!");
        await this.props.forceUpdate(this.data)
        this.props.forceUpdateReply.then(async (res) => {
            console.warn("Response: ", res)
            if (res.status == 200) {
                console.warn("Success: ");
             }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>HomeScreen!</Text>
                <Button onPress={() => { this.apiCall() }} title="Fetch Request" style={styles.button} />
            </View>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#DCDCDC"
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
});