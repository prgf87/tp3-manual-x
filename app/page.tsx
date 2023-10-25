import { NotionRenderer } from 'react-notion-x';

export default async function Home() {
  const indexPage = await fetch('/api/notion');
  console.log(indexPage, 'INDEXPAGE###############');
  return <main>Hello!</main>;
}
