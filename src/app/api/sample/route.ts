import { NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(req: NextApiRequest, _: NextApiResponse) {
  return NextResponse.json({
    request: req,
    response: {
      sampleData: 'sample response',
    },
  });
}
