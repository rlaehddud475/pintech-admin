'use client'
import React, { useContext, useState, useEffect } from 'react'
import CommonContext from '../contexts/CommonContext'
import getMenus from '../datas/Menus'
import styled from 'styled-components'
import classNames from 'classnames'

const StyledMenu = styled.nav``

const SubMenus = () => {
  const [menus, setMenus] = useState()
  const {
    state: { menuCode, subMenuCode },
  } = useContext(CommonContext)

  useEffect(() => {
    setMenus(() => getMenus(menuCode))
  }, [menuCode])

  return (
    menus &&
    menus.length > 0 && (
      <StyledMenu>
        {menus.map(({ code, name, url }) => (
          <a
            key={'submenu_' + url}
            href={url}
            className={classNames('menu', { on: code === subMenuCode })}
          >
            {name}
          </a>
        ))}
      </StyledMenu>
    )
  )
}

export default React.memo(SubMenus)
