import React from 'react'
import ConfigContainer from '../containers/ConfigContainer'
import { MainTitle } from '@/app/global/components/StyledTitle'
import classNames from 'classnames'
const WritePage = () => {
  return (
    <>
      <MainTitle className={classNames}>게시판 게시글 등록</MainTitle>
      <ConfigContainer />
    </>
  )
}
export default React.memo(WritePage)
