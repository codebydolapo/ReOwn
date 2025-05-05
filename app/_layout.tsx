import { Stack } from "expo-router";
import "../global.css";
import { StatusBar, ActivityIndicator, Text } from "react-native";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { SplashScreen } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalProvider from "@/lib/global-provider";
// import store from '../redux/store';
import { Provider } from 'react-redux';

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      async function hideSplash() {
        await SplashScreen.hideAsync();
      }
      hideSplash();
    }
  }, [loaded]);

  if (error) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Error loading fonts.</Text>
      </SafeAreaView>
    );
  }

  if (!loaded) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  return (
    // <Provider store={store}>
      <GlobalProvider>
          <StatusBar
              animated={true}
              backgroundColor="#000"
          />
          <Stack screenOptions={{ headerShown: false }} />
      </GlobalProvider>
    // </Provider>
  );
}