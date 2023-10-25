import { NotionRenderer } from 'react-notion-x';

const fetchDbRecordMap = async () => {
  const response = await fetch('http://localhost:3000/api/notion');
  return response;
};

export default async function Home() {
  const index = await fetchDbRecordMap();
  // console.log(index, 'INDEXPAGE###############');
  return (
    <main>
      Hello!!
      <NotionRenderer recordMap={index} />
    </main>
  );
}
