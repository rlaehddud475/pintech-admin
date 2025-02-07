'use client'
import React from 'react'
import styled from 'styled-components'
import sizes from '../../styles/sizes'
import colors from '../../styles/colors'
const { big } = sizes
const { light, dark, white } = colors
const StyledSideMenus = styled.aside`
  min-height: 800px;
  background: ${light};
  a {
    color: ${dark};
    font-size: ${big};
    display: block;
    height: 45px;
    line-height: 43px;
    & .on{
        background: ${dark};
        color: ${white};
    }
    & + & {
      board-top: 2px solid ${dark};
      li
    }
  }
`
const Side = () => {
  return (
    <StyledSideMenus>
      <a href=""></a>
    </StyledSideMenus>
  )
}
export default React.memo(Side)
