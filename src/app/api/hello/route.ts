import {NextResponse} from "next/server";
import axios from "axios";

export async function GET(request: Request) {
  return new Response('Hello, Next.js!')
}

export async function POST(request: Request) {
  try {
    // const body = await request.json()
    const res = await axios.post('https://api.openai.com/v1/chat/completions', {
      "model": "gpt-3.5-turbo",
      "messages": [{"role": "user", "content": "你好"}],
      "temperature": 0.7
    }, {
      headers: {
        Authorization: 'Bearer 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'
      }
    })
    return NextResponse.json(res.data)
  } catch (err) {
    console.log(err)
    return NextResponse.json({ code: 1 })
  }
}
