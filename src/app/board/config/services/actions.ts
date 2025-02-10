'use server'
import { redirect } from 'next/navigation'
export const updateBoard = async (params, formData: FormData) => {
  return redirect('/board/config/list')
}
