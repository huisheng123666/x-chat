import { Configuration, OpenAIApi } from "openai";
import type { OpenAIApi as OpenApiType } from 'openai'
import {NextResponse} from "next/server";

const configuration = new Configuration({
  organization: "org-w5EeDSKRsgNH5atqjnBnz3Ui",
  apiKey: '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',
});

let openApi: OpenApiType | null = null

export async function GET(request: Request) {
  return new Response('Hello, Next.js!')
}

export async function POST(request: Request) {
  // if (!openApi) {
  //   openApi = new OpenAIApi(configuration);
  // }
  // try {
  //   const body = await request.json()
  //   const res = await openApi.createCompletion({
  //     model: "text-davinci-003",
  //     prompt: body.msg,
  //     temperature: 0,
  //     max_tokens: 7,
  //   })
  //   return NextResponse.json(res)
  // } catch (err) {
  //   console.log(err)
  //   return NextResponse.json({ code: 1 })
  // }

  return NextResponse.json({ code: 1 })
}
