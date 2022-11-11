import Card from "../components/Card";

export default function Home({ apiData }) {
  return (
    <>
      <Card apiData={apiData} />
    </>
  );
}
