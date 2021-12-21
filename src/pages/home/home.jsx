import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Modal,
  TouchableOpacity,
  Image,
  StatusBar,
  StyleSheet,
} from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { Picker } from "@react-native-picker/picker";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const Stack = createStackNavigator();
import * as Linking from "expo-linking";

import HomeMemo from "./home-memo";
import HomeReview from "./home-review";
import { paymentRequest } from "../payment/payment.service";

function HomeMain({ navigation, ...props }) {
  const url = Linking.useURL(Linking.createURL());
  const [modalVisible, setModalVisible] = useState(false);
  const [resultDonateObj, setResultDonateObj] = useState(null);
  const [donateAmout, setDonateAmout] = useState("");
  const [donateMessage, setDonateMessage] = useState("");
  const handleDonate = () => {
    try {
      const amout = parseIng(donateAmout);
      if (amount < 1000 || donateMessage == "") {
        return;
      }
      const url = Linking.createURL("donate");
      paymentRequest(url, amout, donateMessage).then((data) => {
        Linking.openURL(data.deeplink);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleCloseResult = () => {
    setModalVisible(false);
    setResultDonateObj(null);
  };
  useEffect(() => {
    if (!url) {
      return;
    }
    const parsedUrl = Linking.parse(url);
    if (parsedUrl.path == "donate") {
      setResultDonateObj(parsedUrl.queryParams);
      console.log(parsedUrl);
    }
  }, [url]);
  useEffect(() => {
    if (!modalVisible) {
      setDonateAmout("");
      setDonateMessage("");
    }
  }, [modalVisible]);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <StatusBar translucent />
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeReview")}
        style={{
          marginVertical: 40,
          height: 150,
          width: "80%",
          backgroundColor: "white",
          borderRadius: 20,
          borderColor: "#3d90e3",
          borderWidth: 5,
          padding: 20,
          paddingLeft: 0,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Image
          source={require("../../../assets/home-ontap.png")}
          style={{
            height: "100%",
            width: 150,
            resizeMode: "contain",
          }}
        />
        <View
          style={{ justifyContent: "space-around", alignItems: "flex-end" }}
        >
          <Text style={{ color: "#3d90e3", fontSize: 28, fontWeight: "bold" }}>
            Tổng hợp
          </Text>
          <Entypo
            name="arrow-long-right"
            size={32}
            color="#3d90e3"
            style={{
              width: 65,
              textAlign: "center",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#3d90e3",
            }}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeMemo")}
        style={{
          height: 150,
          width: "80%",
          backgroundColor: "white",
          borderRadius: 20,
          borderColor: "#ff9933",
          borderWidth: 5,
          padding: 20,
          paddingLeft: 0,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Image
          source={require("../../../assets/home-save.png")}
          style={{
            height: "100%",
            width: 150,
            resizeMode: "contain",
          }}
        />
        <View
          style={{ justifyContent: "space-around", alignItems: "flex-end" }}
        >
          <Text style={{ color: "#ff9933", fontSize: 28, fontWeight: "bold" }}>
            Ghi nhớ
          </Text>
          <Entypo
            name="arrow-long-right"
            size={32}
            color="#ff9933"
            style={{
              width: 65,
              textAlign: "center",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#ff9933",
            }}
          />
        </View>
      </TouchableOpacity>
      {/* donate  */}
      <TouchableOpacity
        style={{
          height: 80,
          width: "50%",
          marginLeft: "30%",
          marginTop: 35,
          backgroundColor: "#ed4250",
          borderRadius: 20,
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        onPress={() => setModalVisible(true)}
      >
        <FontAwesome5 name="donate" size={24} color="#fdc006" />
        <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
          Ủng hộ
        </Text>
        <FontAwesome name="heart" size={24} color="white" />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        {!resultDonateObj ? (
          <KeyboardAvoidingView
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <KeyboardAvoidingView
              behavior="height"
              style={{
                margin: 20,
                backgroundColor: "white",
                borderRadius: 20,
                padding: 35,
                elevation: 5,
                height: "80%",
                width: "90%",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "#ed4250",
                  marginBottom: 15,
                }}
              >
                Ủng hộ
              </Text>
              <View>
                <Text style={{ fontWeight: "bold" }}>Số tiền</Text>
                <TextInput
                  style={styles.input}
                  placeholder="10000"
                  value={donateAmout}
                  onChangeText={(text) => setDonateAmout(text)}
                />
                <Text style={{ fontWeight: "bold", marginTop: 30 }}>
                  Lời nhắn
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Cảm ơn"
                  value={donateMessage}
                  onChangeText={(text) => setDonateMessage(text)}
                />
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 10,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      marginRight: 30,
                      paddingTop: 11,
                    }}
                  >
                    Ủng hộ qua
                  </Text>
                  <Picker
                    style={{
                      height: 50,
                      width: 150,
                      marginTop: 10,
                    }}
                  >
                    <Picker.Item label="Momo" value="momo" />
                  </Picker>
                </View>
              </View>
              <View
                style={{
                  marginTop: 30,
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-around",
                }}
              >
                <TouchableOpacity
                  style={[styles.paymentBtn, { borderColor: "#a6a6a6" }]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={[styles.textPaymentBtn, { color: "#a6a6a6" }]}>
                    Hủy
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.paymentBtn, { borderColor: "#ed4250" }]}
                  onPress={handleDonate}
                >
                  <Text style={[styles.textPaymentBtn, { color: "#ed4250" }]}>
                    Xác nhận
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </KeyboardAvoidingView>
        ) : (
          <View
            style={{
              margin: 20,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 35,
              elevation: 5,
              height: "80%",
              width: "90%",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
                color: "#ed4250",
                marginBottom: 15,
              }}
            >
              <FontAwesome name="heart" size={20} color="#ed4250" />
              Cảm ơn
              <FontAwesome name="heart" size={20} color="#ed4250" />
            </Text>
            <View style={{ marginVertical: 5 }}>
              <Text style={{ fontWeight: "bold" }}>Trạng thái</Text>
              <TextInput
                style={styles.resultInput}
                editable={false}
                value={resultDonateObj.message}
              />
            </View>
            <View style={{ marginVertical: 5 }}>
              <Text style={{ fontWeight: "bold" }}>Số tiền</Text>
              <TextInput
                style={styles.resultInput}
                editable={false}
                value={resultDonateObj.amount}
              />
            </View>
            <View style={{ marginVertical: 5 }}>
              <Text style={{ fontWeight: "bold" }}>Mã giao dịch</Text>
              <TextInput
                style={styles.resultInput}
                editable={false}
                value={resultDonateObj.orderId}
              />
            </View>
            <View style={{ marginVertical: 5 }}>
              <Text style={{ fontWeight: "bold" }}>Lời nhắn</Text>
              <TextInput
                style={styles.resultInput}
                editable={false}
                value={resultDonateObj.orderInfo}
              />
            </View>
            <TouchableOpacity
              style={[
                styles.paymentBtn,
                { borderColor: "#6ca5f0", marginTop: 30 },
              ]}
              onPress={handleCloseResult}
            >
              <Text style={[styles.textPaymentBtn, { color: "#6ca5f0" }]}>
                Xác nhận
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  paymentBtn: {
    padding: 10,
    borderRadius: 20,
    minWidth: 100,
    borderWidth: 2,
  },
  textPaymentBtn: {
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 3,
    borderColor: "#ed4250",
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: "white",
    width: "100%",
    color: "#20232a",
    fontSize: 30,
    fontWeight: "bold",
  },
  resultInput: {
    marginTop: 5,
    paddingVertical: 4,
    borderWidth: 3,
    paddingHorizontal: 10,
    borderColor: "#a6a6a6",
    borderRadius: 6,
    backgroundColor: "white",
    width: "100%",
    color: "#20232a",
    fontSize: 16,
    fontWeight: "bold",
  },
});

function Home(props) {
  return (
    <Stack.Navigator
      initialRouteName="HomeMain"
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen name="HomeMain" component={HomeMain} />
      <Stack.Screen name="HomeReview" component={HomeReview} />
      <Stack.Screen name="HomeMemo" component={HomeMemo} />
    </Stack.Navigator>
  );
}
export default Home;
