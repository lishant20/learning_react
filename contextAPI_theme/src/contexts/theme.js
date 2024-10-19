import { createContext, useContext } from "react";
/*createContext mah default value ni halnah milxah agadi ko way mah thiyenah
initial state mah default obj ni hanah milxah
variable + method duitai milxah
*/
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

//customs hooks ni banaunah milxah
//yo use garesi harek mah dui dui ota import garnu pardainah
//i.e useContext rah UserContext--coding structure 1-otai file mah

export default function useTheme() {
  return useContext(ThemeContext)
}