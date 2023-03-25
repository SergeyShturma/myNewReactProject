import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
// import BackgroundPic from "./BackgroundPic";

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [dimensions, setDimensions] = useState(Dimensions.get("window").width);

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      console.log("width: ", width);
      setDimensions(width);
    };

    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

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
        {/* <BackgroundPic /> */}
        <ImageBackground
          source={require("../assets/Images/photoBG.jpg")}
          style={styles.image}
        >
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                paddingBottom: isShowKeyboard ? 32 : 144,
                width: dimensions,
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
              {!isShowKeyboard && (
                <View>
                  <TouchableOpacity
                    activeOpacity={0.65}
                    style={styles.btn}
                    onPress={submitForm}
                  >
                    <Text style={styles.btnTitle}>Войти</Text>
                  </TouchableOpacity>
                  <Text style={styles.auth}>
                    Нет аккаунта?&nbsp;
                    <TouchableOpacity
                      activeOpacity={0.65}
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <Text style={styles.authTitle}>Зарегистрироваться</Text>
                    </TouchableOpacity>
                  </Text>
                </View>
              )}
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
    alignItems: "center",
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
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: "auto",
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
