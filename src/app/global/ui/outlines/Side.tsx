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
    height: 55px;
    line-height: 53px;
    text-align: center;
  }
  a .on {
    background: ${dark};
    color: ${white};
  }
  a + a {
    board-top: 2px solid ${dark};
  }
`
const Side = () => {
  return (
    <StyledSideMenus>
      <a href="/member">회원 관리</a>
      <a href="/board">계시판 관리</a>
    </StyledSideMenus>
  )
}
export default React.memo(Side)
