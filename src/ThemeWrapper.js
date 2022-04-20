import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from './contexts/ThemeContext';

export default function ThemeContextWrapper(props) {
    const [theme, setTheme] = useState(themes.dark);
    
    function changeTheme(theme) {
        setTheme(theme);
        console.log("yoo" + theme);
    }

    function domTheme(theme) {
        switch(theme) {
            case themes.light:
                document.body.classList.remove('dark')
                break
            case themes.dark:
                document.body.classList.add('dark')
                break
            default:
                document.body.classList.remove('dark')
                break
        }
    }

    useEffect(() => {
        console.log(theme)
        domTheme(theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}