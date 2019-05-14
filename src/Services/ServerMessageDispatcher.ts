import axios, { AxiosError } from 'axios';
import config from '../config';
import Army from "../Models/Army";

export default class ServerMessageDispatcher {

    public static async sendCreateArmy(army:Army, userId:number) {
        return axios.post<Army>(`${config.api_url}players/${userId}/armies`, army
        )
            .catch((error: AxiosError) => {
                // Handle errors
                return Promise.reject(Error(error.message));
            });
    };

}
