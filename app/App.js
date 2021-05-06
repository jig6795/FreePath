import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";
import { useFonts } from "expo-font";
import MainNavigation from "./src/navigation/navigation";
import Theme from "./src/styles/Theme";
import Menu from "./src/components/Common/Menu/Menu";
import CardAdd from "./src/components/Home/Card/CardAdd";
import Login from "./src/components/Profile/Login";
import NotoSansKRBlack from "./src/assets/fonts/NotoSansKR-Black.otf";
import NotoSansKRBold from "./src/assets/fonts/NotoSansKR-Bold.otf";
import NotoSansKRMedium from "./src/assets/fonts/NotoSansKR-Medium.otf";
import NotoSansKRRegular from "./src/assets/fonts/NotoSansKR-Regular.otf";
import NotoSansKRLight from "./src/assets/fonts/NotoSansKR-Light.otf";
import NotoSansKRThin from "./src/assets/fonts/NotoSansKR-Thin.otf";

const App = () => {
  const [loaded] = useFonts({
    6: NotoSansKRBlack,
    5: NotoSansKRBold,
    4: NotoSansKRMedium,
    3: NotoSansKRRegular,
    2: NotoSansKRLight,
    1: NotoSansKRThin,
  });

  const [darkMode, setDarkMode] = useState(false);
  const [popMenu, setPopMenu] = useState(false);
  const [popCardAdd, setPopCardAdd] = useState(false);
  const [popLogin, setPopLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider theme={darkMode ? Theme.DefaultTheme : Theme.DefaultTheme}>
      <SafeAreaProvider>
        <MainNavigation
          setPopMenu={setPopMenu}
          setPopCardAdd={setPopCardAdd}
          setPopLogin={setPopLogin}
          setIsLoggedIn={setIsLoggedIn}
          isLoggedIn={isLoggedIn}
        />
      </SafeAreaProvider>
      {popMenu && (
        <Menu
          setPopMenu={setPopMenu}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      )}
      {popCardAdd && <CardAdd setPopCardAdd={setPopCardAdd} />}
      {popLogin && !isLoggedIn && (
        <Login setPopLogin={setPopLogin} setIsLoggedIn={setIsLoggedIn} />
      )}
    </ThemeProvider>
  );
};

export default App;
