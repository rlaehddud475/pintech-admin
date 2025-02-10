import React from 'react'
import ConfigContainer from '../../containers/ConfigContainer'
const EditPage = ({ params }) => {
  const { bid } = params
  return <ConfigContainer bid={bid} />
}
export default React.memo(EditPage)
