import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import React, { useState } from "react";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Login() {
  const [countryCode, setCountryCode] = useState("+49");
  const [phoneNumber, setPhoneNumber] = useState("");
  const keyboardVerticalOffset = Platform.OS === "ios" ? 80 : 0;

  // declaring types
  enum signInType {
    Phone,
    Email,
    Google,
    Apple,
  }

  /**
   * logic for phone number verification
   * we're using clerk client
   * 
   * @param type: strings object 
   */
  
  const onSignIn = async (type:  signInType) => {
     if (type === signInType.Phone) {

     }
   
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Welcome back !</Text>
        <Text style={defaultStyles.descriptionText}>
          Enter the phone number associated with your account
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Country code"
            placeholderTextColor={Colors.gray}
            value={countryCode}
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Mobile number"
            placeholderTextColor={Colors.gray}
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        <Link href={"/SignUp"} replace asChild>
          <TouchableOpacity>
            <Text style={defaultStyles.textLink}>
              Don't have an account? Sign Up
            </Text>
          </TouchableOpacity>
        </Link>

       

        {/* {===========================  for signUp button =============================} */}
        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            phoneNumber !== "" ? styles.enabled : styles.disabled,
            { marginBottom: 20 },
          ]}
          onPress={(() => onSignIn(signInType.Phone))}
        >
          <Text style={defaultStyles.buttonText}>Continue</Text>
        </TouchableOpacity>

           {/**
            * 1. the hairline width is for a tiny line diff for separation */ }

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
          <View
            style={{ flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: Colors.gray }}
          />
          <Text style={{ color: Colors.gray, fontSize: 20 }}>or</Text>
          <View
            style={{ flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: Colors.gray }}
          />
        </View>

          {/* {===========================  for Login Screen clerk Options  =============================} */}
        <TouchableOpacity
          onPress={() => onSignIn(signInType.Email)}
          style={[
            defaultStyles.pillButton,
            {
              flexDirection: 'row',
              gap: 16,
              marginTop: 20,
              backgroundColor: '#fff',
            },
          ]}>
          <Ionicons name="mail" size={24} color={'#000'} />
          <Text style={[defaultStyles.buttonText, { color: '#000' }]}>Continue with email </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onSignIn(signInType.Google)}
          style={[
            defaultStyles.pillButton,
            {
              flexDirection: 'row',
              gap: 16,
              marginTop: 20,
              backgroundColor: '#fff',
            },
          ]}>
          <Ionicons name="logo-google" size={24} color={'#000'} />
          <Text style={[defaultStyles.buttonText, { color: '#000' }]}>Continue with Google </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onSignIn(signInType.Apple)}
          style={[
            defaultStyles.pillButton,
            {
              flexDirection: 'row',
              gap: 16,
              marginTop: 20,
              backgroundColor: '#fff',
            },
          ]}>
          <Ionicons name="logo-apple" size={24} color={'#000'} />
          <Text style={[defaultStyles.buttonText, { color: '#000' }]}>Continue with Apple-ID </Text>
        </TouchableOpacity>



      </View>
    </KeyboardAvoidingView>
  );
}

/* {=========================== UNIQUE PAGE STYLESHEET =============================} */
const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: "row",
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});
