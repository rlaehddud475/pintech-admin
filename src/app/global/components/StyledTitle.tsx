/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useContext, useLayoutEffect } from 'react'
import { styled } from 'styled-components'
import CommonContext from '../contexts/CommonContext'
import sizes from '../styles/sizes'
import colors from '../styles/colors'
const { big, medium } = sizes
const { dark } = colors
const _MainTitle = ({ children, className }) => {
  const {
    actions: { setTitle },
  } = useContext(CommonContext)

  useLayoutEffect(() => {
    setTitle(children)
  }, [children, setTitle])

  return <h1 className={className}>{children}</h1>
}

export const MainTitle = styled(_MainTitle)`
  padding: 0 10px 15px;
  margin: 0 0 25px;
  font-size: ${big};
  border-bottom: 2px solid ${dark};
  color${dark}
`

export const SubTitle = styled.h2`
  padding: 0;
  margin: 0 0 15px;
  font-size: ${medium};
  color: ${dark};
`
