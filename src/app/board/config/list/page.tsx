import React from 'react'
import classNames from 'classnames'
import { MainTitle } from '@/app/global/components/StyledTitle'
import ConfigListContainer from '../containers/ConfigListContainer'
const ListPage = () => {
  return (
    <>
      <MainTitle className={classNames}>게시판 목록</MainTitle>
      <ConfigListContainer />
    </>
  )
}
export default React.memo(ListPage)
