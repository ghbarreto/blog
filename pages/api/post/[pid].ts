// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
const fs = require('fs');
const md = require('markdown-it')();

type Data = {
  name: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    const { pid } = req.query;
    if (!pid || pid === undefined || pid === null) return;

    const file = fs.readFile(`./posts/post${pid}.md`, 'utf8', (err: Error, data: string) => {
      if (!err || data !== undefined) return res.status(200).send(md.render(data));
      if(err) console.log(err);
    });
  } else {
    return;
  }
}
