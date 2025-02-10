'use server'
import { redirect } from 'next/navigation'
import apiRequest from '@/app/global/libs/apiRequest'
export const updateBoard = async (params, formData: FormData) => {
  let errors = {}
  let hasErrors = false
  const form = {}
  for (const [k, v] of formData.entries()) {
    if (k.includes('$ACTION')) continue
    form[k] = v
  }
  const requiredFields = {
    bid: '게시판 아이디를 입력하세요',
    name: '게시판 이름을 입력하세요',
  }
  for (const [field, msg] of Object.entries(requiredFields)) {
    const value = formData.get(field)
    if (!value || !value.trim()) {
      errors[field] = errors[field] ?? []
      errors[field].push(msg)
      hasErrors = true
    }
  }
  if (!hasErrors) {
    const res = await apiRequest('/board/admin/config/save', 'POST', form)

    if (res.status !== 200) {
      const result = await res.json()
      errors = result.message
      hasErrors = true
    }
  }
  if (hasErrors) {
    return errors
  }
  return redirect('/board/config/list')
}
export const getBoard = async (bid) => {
  try {
    const res = await apiRequest(`/board/info/${bid}`)
    if (res.status === 200) {
      const result = await res.json()
      return result.success && result.data
    }
  } catch (err) {
    console.error(err)
  }
}
