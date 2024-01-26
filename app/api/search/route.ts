import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl

  const search_query = searchParams.get('q')

  if (!search_query)
    return NextResponse.json(
      { success: false, error: 'Bad request' },
      { status: 400 }
    )

  const data = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?key=${
      process.env.YT_KEY
    }&maxResults=${20}`
  ).then((r) => r.json())

  return NextResponse.json({ time: Date(), data })
}
