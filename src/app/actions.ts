import { revalidatePath } from 'next/cache'
import { z } from 'zod'

export async function createUser(prevState: any, formData: FormData) {
    const schema = z.object({
      name: z.string().min(3),
    })
    const parse = schema.safeParse({
      name: formData.get('name'),
    })
  
    if (!parse.success) {
      return { message: 'Invalid data' }
    }
  
    const data = parse.data
  
    try {
        // call api
        revalidatePath('/')
        return { message: `Created user ${data.name}` }
    } catch (e) {
        return { message: 'Failed to create user' }
    }
}