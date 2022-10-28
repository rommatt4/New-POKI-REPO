import axios from "axios";

const getPokeJSON = async (data) => {
  const result = [];
  const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151");


  res.data.map(async (item) => {
    const res = await axios.get(item.url);
    result.push(res.json());
  });
}
export default getPokeJSON;