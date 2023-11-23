async function getData() {
    // const res = await fetch('https://dummy.restapiexample.com/api/v1/employees')

    // if (!res.ok) {
    //   throw new Error('Failed to fetch data')
    // }
   
    // return res.json()

    const users: Array<{ id: number, text: string }> = [
        {
          id: 1,
          text: 'User 1'
        },
        {
          id: 2,
          text: 'User 2'
        },
      ]

    return { data: {users} }
}

export default async function Page() {
    const data = await getData() 

    const lists = data.data.users.map((user) =>{
        return <li key={user.id}>
            {user.text}
        </li>
    })

    return (
    <main>
      <h1 className="sr-only">Todos</h1>
      <ul>
        {lists}
      </ul>
    </main>
    )
}