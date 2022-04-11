import { createContext, useState } from "react";

//This is the creation of the dark mode/ light mode that its being used all around the proyect

export const ThemeContext = createContext([])

const ThemeContextProvider = ({children}) => {

    const [theme, setTheme] = useState(false)

    return (
        <ThemeContext.Provider value={{
            theme,
            setTheme
        }}>
            
            {children}

        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider