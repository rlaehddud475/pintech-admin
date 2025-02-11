import React from 'react'
import ConfigContainer from '../../containers/ConfigContainer'
import { MainTitle } from '@/app/global/components/StyledTitle'
import classNames from 'classnames'
const EditPage = ({ params }) => {
  const { bid } = params
  return (
    <>
      <MainTitle className={classNames}>게시판 설정수정</MainTitle>
      <ConfigContainer bid={bid} />
    </>
  )
}
export default React.memo(EditPage)
