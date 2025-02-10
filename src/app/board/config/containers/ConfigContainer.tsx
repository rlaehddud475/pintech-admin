'use client'
import React, {
  useState,
  useCallback,
  useLayoutEffect,
  useActionState,
} from 'react'
import { updateBoard } from '../services/actions'
import ConfigForm from '../components/ConfigForm'
import useMenuCode from '@/app/global/hooks/useMenuCode'
const initialValue = {
  mode: 'add',
  open: false,
  useEditor: false,
  useEditorImage: false,
  useAttachFile: false,
  useComment: false,
  listUnderView: false,
  locationAfterWrting: 'list',
  skin: 'default',
  listAuthority: 'ALL',
  viewAuthority: 'ALL',
  writeAuthority: 'ALL',
  commentAuthority: 'ALL',
}
const ConfigContainer = ({ bid }: { bid?: string } | undefined) => {
  useMenuCode('board', 'configWrite')
  const [form, setForm] = useState(initialValue)
  const actionState = useActionState(updateBoard)
  const onClick = useCallback((field, value) => {
    setForm((form) => ({ ...form, [field]: value }))
  }, [])
  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }))
  }, [])

  return (
    <ConfigForm
      form={form}
      onChange={onChange}
      onClick={onClick}
      actionState={actionState}
    />
  )
}

export default React.memo(ConfigContainer)
