import axios from "axios";
import xml2js from "xml2js";

export const baseUrl = 'https://xml.propspace.com/feed/xml.php';

export const fetchApi = async () => {
  const { data } = await axios.get(baseUrl, {
    params: {
      cl: 1286,
      pid: 8245,
      acc: 8807,
    },
  });
  const parser = new xml2js.Parser();
  const jsonData = await parser.parseStringPromise(data);
  return jsonData;
}