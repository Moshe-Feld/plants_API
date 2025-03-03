import axios from 'axios';


export async function getUrl(url) {
  try {
    const result = await axios.get(url);
    console.log(result.data)
    return result.data;
  }
  catch (err) {
    console.log(`Error in getUrl: ${err.message}`);
    return null;
  }
}
