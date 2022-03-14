import axios from "axios";

const URL='https://api.instantwebtools.net/v1/airlines';
class AirlineService
{
    async getAllAirlines()
    {
        return axios.get(URL);
    }
}
export default new AirlineService;