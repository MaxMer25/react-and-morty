import { useParams } from "react-router-dom";

export default function Character() {
  let { id } = useParams();

  return <h1>Hello {id} </h1>;
}
