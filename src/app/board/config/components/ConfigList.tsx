import React from 'react'
import styled from 'styled-components'
import { TableRows } from '@/app/global/components/Tables'
import { Md10K, MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
const StyledForm = styled.form``
const ConfigList = () => {
  return (
    <>
      <StyledForm>
        <TableRows>
          <thead>
            <th>
              <MdCheckBoxOutlineBlank />
            </th>
          </thead>
        </TableRows>
      </StyledForm>
    </>
  )
}
export default React.memo(ConfigList)
