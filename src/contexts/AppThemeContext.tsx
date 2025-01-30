/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../styles/theme'
import { AppThemeContextProps } from '@/types/appThemeContext'

export const AppThemeContext = createContext<AppThemeContextProps | undefined>(
  undefined,
)

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const savedTheme = localStorage.getItem('theme')
  const [appTheme, setAppTheme] = useState(savedTheme ?? 'light')

  const toggleTheme = () => {
    setAppTheme((prevTheme) => (prevTheme === 'dark' ? 'dark' : 'light'))
  }

  useEffect(() => {
    localStorage.setItem('theme', appTheme)
  }, [appTheme])
//corrigir de dark para light
  return (
    <AppThemeContext.Provider value={{ appTheme, toggleTheme }}>
      <ThemeProvider theme={appTheme === 'dark' ? lightTheme : darkTheme}>
        
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  )
}
