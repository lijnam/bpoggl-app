import axios from 'axios'
import { API_URL } from '../env'
async function checkSpell (word) {
    let response = await axios.get(API_URL + 'spellcheck/' + word);
    console.log(response);
    console.log(response.data.status);
    return response.data.status;

}
export default checkSpell;