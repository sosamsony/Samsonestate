import axios from "axios";

export const baseUrl = 'https://v1.nocodeapi.com/dunamiscraft/xml_to_json/yatnQvlUQQiDLIHn?url=https://xml.propspace.com/feed/xml.php?cl=1286&pid=8245&acc=8807';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
    },
  });
  return data;
}
