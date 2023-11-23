'use client'

import { useFormState, useFormStatus } from "react-dom"
import { createUser } from '@/app/actions'
import { Input, Button } from 'antd';

const initialState = {
    message: null,
}
  
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button htmlType="submit">Create</Button>
  )
}
  
export function AddForm() {
  const [state, formAction] = useFormState(createUser, initialState)

  return (
    <form action={formAction}>
      <label className="text-black" htmlFor="name">User Name</label>
      <div><br/></div>
      <Input name="name" placeholder="Enter User Name" required></Input>
      <div><br/></div>
      <SubmitButton />
      <p className="text-red-500">{ state?.message }</p>
    </form>
  )
}
  