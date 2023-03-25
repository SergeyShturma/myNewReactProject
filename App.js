import { useCallback } from "react";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// SplashScreen.preventAutoHideAsync();

const MainStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  const [isLoaded] = useFonts({
    "Roboto-Bold": require("./assets/Fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/Fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/Fonts/Roboto-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) return null;

  return (
    // <NavigationContainer onLayout={onLayoutRootView}>
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
        <MainStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
