import {useParams} from "react-router-dom";

function Card() {
  const {id} = useParams();
  return <>ID: {id}</>;
}

export default Card;
