async function getData(slug: string) {
    const res = await fetch('https://dummy.restapiexample.com/api/v1/employees')

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}

export default async function Page({ params }: { params: { slug: string } }) {
    const data = await getData(params.slug) 
    
    const employees = data.data.filter((employee: any) =>
         employee.id == params.slug
    )

    console.log(typeof(params.slug))

    const lists = employees.map((employee: any) =>{
        return <li>{employee.employee_name}</li>
    })

    return (
        <main>
            <div>
              <ul>{lists}</ul>  
            </div>
        </main>
    )
}