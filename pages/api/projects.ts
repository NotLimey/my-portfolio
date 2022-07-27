// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../firebase/firebase-admin'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const snapshot = await db.collection('projects').get();

  const data: any[] = [];

  snapshot.forEach((doc: any) => {
    data.push({
      id: doc.id,
      ...doc.data()
    })
  });

  res.status(200).json(data)
}