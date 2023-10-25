import { NotionAPI } from 'notion-client';

export default async function handler(req, res) {
  const notion = new NotionAPI();
  const databaseId = process.env.NOTION_DB_ID;

  const recordMap = await notion.getPage(databaseId);
  console.log(Object.keys(recordMap), 'MAP#####');
  res.status(200).send(recordMap);
}
