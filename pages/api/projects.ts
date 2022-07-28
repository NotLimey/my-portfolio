// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllProjects } from '@/db/db/projects';
import { isUserAdmin } from '@/db/admin';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await getAllProjects();
  const t = req;

  res.status(200).json(data)
}