import { useRouter } from 'next/router'
import { createContext, useContext } from 'react'
import en from '../translations/en.json'
import es from '../translations/es.json'

const languages = { en, es }
const i18nContext = createContext()

export function I18nProvider({ children }) {
  const { locale } = useRouter()
  const t = key => languages[locale][key]

  return (
    <i18nContext.Provider value={{ t }}>
      {children}
    </i18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(i18nContext)
  if (context == null) throw new Error('useI18n must be used within a I18nProvider')

  return context
}
