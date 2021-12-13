import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ThongBao from "./thongbao";
import DoiMatKhau from "./doimatkhau";
import HoTroHocTap from "./hotrohoctap";
import ChinhSuaHoSo from "./chinhsuahoso";
import CongDong from "./congdong";
import AccountChild from "./account";

const Stack = createNativeStackNavigator();

export default function Account() {
  return (
    <>
      <Stack.Navigator
        initialRouteName="AccountChild"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="AccountChild" component={AccountChild} />
        <Stack.Screen name="ThongBao" component={ThongBao} />
        <Stack.Screen name="DoiMatKhau" component={DoiMatKhau} />
        <Stack.Screen name="HoTroHocTap" component={HoTroHocTap} />
        <Stack.Screen name="ChinhSuaHoSo" component={ChinhSuaHoSo} />
        <Stack.Screen name="CongDong" component={CongDong} />
      </Stack.Navigator>
    </>
  );
}
