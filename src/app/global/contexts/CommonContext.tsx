'use client'
import { createContext, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { setDefaultLocale } from 'react-datepicker'
import { ko } from 'date-fns/locale'
import useUser from '../hooks/useUser'
import loadable from '@loadable/component'
const Side = loadable(() => import('../ui/outlines/Side'))
setDefaultLocale(ko)
const SubMenus = loadable(() => import('../components/SubMenus'))
type ContextType = {
  state?: { title?: string; menuCode?: string; subMenuCode?: string }
  actions?: {
    setTitle?: (title: string) => void
    setMenuCode?: (menuCode: string) => void
    setSubMenuCode?: (subMenuCode: string) => void
  }
}
const CommonContext = createContext<ContextType>({})
const CommonProvider = ({ children }) => {
  const { isAdmin } = useUser()
  const [title, setTitle] = useState<string | undefined>()
  const [menuCode, setMenuCode] = useState<string | undefined>()
  const [subMenuCode, setSubMenuCode] = useState<string | undefined>()
  const value: ContextType = {
    state: { title, menuCode, subMenuCode },
    actions: { setTitle, setMenuCode, setSubMenuCode },
  }
  return (
    <CommonContext.Provider value={value}>
      <HelmetProvider>
        <>
          <Helmet>{title && <title>{title}</title>}</Helmet>
          {isAdmin && <Side />}
          <section>
            {isAdmin && <SubMenus />}
            {children}
          </section>
        </>
      </HelmetProvider>
    </CommonContext.Provider>
  )
}
const { Consumer: CommonConsumer } = CommonContext
export { CommonProvider, CommonConsumer }
export default CommonContext
