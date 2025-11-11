import React, { createContext, useState } from 'react'
export const ThemeDataConext = createContext()
const ThemeContext = (props) => {
    const [theme, settheme] = useState('light')
    return (
        <div>
            <ThemeDataConext.Provider value={[theme,settheme]}>
            {props.children}
            </ThemeDataConext.Provider>
        </div>
    )
}

export default ThemeContext
