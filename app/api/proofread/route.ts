import { NextRequest, NextResponse } from 'next/server';

import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

import { z } from 'zod';

const schema = z.object({
   input: z.string(),
});

export async function POST(request: NextRequest) {
   const data = schema.parse(await request.json());

   const prompt = `Can you proofread this linkedin post, remove any grammatical errors, typos, If the post is not a word, just say this AS IT IS (replace every dot (.) with two new lines): "This is not a valid word\n.Didn't think I would check it? :D\n. You should follow me on twitter tho: x.com/swe_rafay". Only reply with the proofread' post \n\n${data.input};`

   try {
      if (data.input.length <= 6) {
         return NextResponse.json({
            success: false,
            message: 'Input must be greater than 6 characters',
         }, { status: 404 });
      };

      const result = await model.generateContent(prompt);

      if (!result) {
         return NextResponse.json({
            success: false,
            message: 'Error proofreading post',
         }, { status: 404 });
      };

      return NextResponse.json({
         success: true,
         message: 'Message proofread successfully!',
         output: result.response.text(),
      }, { status: 200 });
   } catch (error) {
      return NextResponse.json({
         success: false,
         message: `Internal server error.`,
      }, { status: 500 });
   };
};