'use client'


import { useState } from "react"
import { Button } from "antd"

export default function Home() {
    const [data, setData] = useState('null')

    const getData = async () => {
        const result = await (await fetch('http://localhost:3000/api')).json()
        setData(result.msg)
    }

    return (
        <main className="bg-white">
            <Button onClick={getData}>Call Route Handles</Button>
            <p className="text-red-500">{data}</p>
        </main>
    )
}