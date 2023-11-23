import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic' // defaults to force-static

export async function GET(slug: string) {
    return Response.json({ msg: 'hello from route handle api'})
}