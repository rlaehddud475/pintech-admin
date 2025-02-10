import React from 'react'
import { TableCols } from '@/app/global/components/Tables'
import { styled } from 'styled-components'
import { Input } from '@/app/global/components/FormComponents'
import { ButtonGroup, BigButton } from '@/app/global/components/Buttons'
const StyledForm = styled.form`
  tbale {
    th {
      width: 180px;
    }
  }
  &:last-of-type {
    margin-bottom: 30px;
  }
`
const ConfigForm = () => {
  return (
    <StyledForm>
      <TableCols>
        <tbody>
          <tr>
            <th>게시판 ID</th>
            <td>
              <Input type="text" name="bid" />
            </td>
          </tr>
        </tbody>
      </TableCols>
      <ButtonGroup className="button-group center" width={450}>
        <BigButton type="reset" color="white">
          다시입력
        </BigButton>
        <BigButton type="submit" color="dark">
          등록하기
        </BigButton>
      </ButtonGroup>
    </StyledForm>
  )
}
export default React.memo(ConfigForm)
