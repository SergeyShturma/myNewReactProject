import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const initialState = {
  name: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const submitForm = () => {
    console.log(state);
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/Images/photoBG.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                paddingBottom: isShowKeyboard ? 32 : 100,
              }}
            >
              <Text style={styles.title}>Регистрация</Text>
              <TextInput
                style={styles.input}
                placeholder="Логин"
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
                onChangeText={(value) =>
                  setState((prevState) => ({
                    ...prevState,
                    name: value,
                  }))
                }
                value={state.name}
              />
              <TextInput
                style={styles.input}
                placeholder="Адрес электронной почты"
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
                onChangeText={(value) =>
                  setState((prevState) => ({
                    ...prevState,
                    email: value,
                  }))
                }
                value={state.email}
              />
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Пароль"
                onFocus={() => {
                  setIsShowKeyboard(true);
                }}
                onChangeText={(value) =>
                  setState((prevState) => ({
                    ...prevState,
                    password: value,
                  }))
                }
                value={state.password}
              />
              {!isShowKeyboard && (
                <TouchableOpacity
                  activeOpacity={0.65}
                  style={styles.btn}
                  onPress={submitForm}
                >
                  <Text style={styles.btnTitle}>Зарегистрироваться</Text>
                </TouchableOpacity>
              )}
              {!isShowKeyboard && (
                <Text style={styles.auth}>Уже есть аккаунт? Войти</Text>
              )}
              <View style={styles.avatar}>
                <TouchableOpacity
                  style={styles.addAvatar}
                  activeOpacity={0.65}
                ></TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#ecf0f1",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },

  input: {
    marginBottom: 16,
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    color: "#212121",
    padding: 16,
  },
  form: {
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    marginTop: "auto",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "relative",
  },
  title: {
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    color: "#212121",
    marginTop: 92,
    marginBottom: 32,
    textAlign: "center",
  },
  btn: {
    marginTop: 27,
    height: 51,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Platform.OS === "ios" ? "transparent" : "#FF6C00",
    marginBottom: 16,
  },
  btnTitle: { fontSize: 16, lineHeight: 19, color: "#fff" },
  auth: { textAlign: "center", fontSize: 16, lineHeight: 19, color: "#1B4371" },
  avatar: {
    position: "absolute",
    top: -60,
    left: 128,
    backgroundColor: "#F6F6F6",
    height: 120,
    width: 120,
    borderRadius: 16,
  },
  addAvatar: {
    position: "absolute",
    right: -12,
    bottom: 14,
    backgroundColor: "#fff",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#FF6C00",
    height: 25,
    width: 25,
  },
});
