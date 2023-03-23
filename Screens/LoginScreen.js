import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen() {
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
          source={require("../assets/Images/photoBG.jpg")}
          style={styles.image}
        >
          <View
            style={{
              ...styles.form,
              marginBottom: isShowKeyboard ? -291 : 0,
            }}
          >
            <Text style={styles.title}>Войти</Text>
            <View>
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
            </View>
            <View>
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
            </View>

            <TouchableOpacity
              activeOpacity={0.65}
              style={styles.btn}
              onPress={submitForm}
            >
              <Text style={styles.btnTitle}>Войти</Text>
            </TouchableOpacity>
            <Text style={styles.auth}>Нет аккаунта? Зарегистрироваться</Text>
          </View>
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
    // alignItems: "center",
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
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    color: "#212121",
    marginTop: 32,
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
  auth: {
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
