import axios, { AxiosError } from 'axios';
import config from '../config';
import Player from "../Models/Player";

export default class ServerDataProvider {

    public static async getPlayerData(id: number) {
        return axios.get<Player>(`${config.api_url}get/Player`, {
            params: {
                id,
            }
        })
            .catch((error: AxiosError) => {
                // Handle errors
                return Promise.reject(Error(error.message));
            });
    }
}
