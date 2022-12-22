import axios from "axios";

export const baseUrl = 'https://xml.propspace.com/feed/xml.php?cl=1286&pid=8245&acc=8807';

export const fetchApi = async () => {
  const { data } = await axios.get(baseUrl);
  return data;
}