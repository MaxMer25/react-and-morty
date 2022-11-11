import { useParams } from "react-router-dom";

export default function Favorites({ apiData }) {
  let { characterId } = useParams();
  return <p>Favorite Page</p>;
}
