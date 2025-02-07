import StyledComponentsRegistry from './registry'
import Header from './global/ui/outlines/Header'
import Footer from './global/ui/outlines/Footer'
import { CommonProvider } from './global/contexts/CommonContext'
import { Metadata } from 'next'
import { getUserInfo } from './member/services/actions'
import { UserProvider } from './global/contexts/UserContext'
import 'react-datepicker/dist/react-datepicker.css'
import './globals.css'
import { after } from 'next/server'

export const metadata: Metadata = {
  title: '사이트 관리자',
  description: '설명...',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const userInfo = await getUserInfo()
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <UserProvider _userInfo={userInfo}>
            <Header />
            <main>
              <CommonProvider>
                <section className="main-content">{children}</section>
              </CommonProvider>
            </main>
          </UserProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
