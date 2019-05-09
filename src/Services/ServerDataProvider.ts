import axios, { AxiosError } from 'axios';
import config from '../config';
import Army from "../Models/Army";
import Building from "../Models/Building";
import BuildingPrototype from "../Models/BuildingPrototype";
import Player from "../Models/Player";
import UnitPrototype from "../Models/UnitPrototype";

export default class ServerDataProvider {

    public static async getPlayerData(id: number) {
        const [rawPlayerData, baseBuildingData, playerArmies] = await Promise.all([
            (await axios.get<Player>(`${config.api_url}get/Player`, {
                params: {
                    id,
                }
            })
                .catch((error: AxiosError) => {
                    // Handle errors
                    return Promise.reject(Error(error.message));
                })).data,
            (await this.getBaseBuildings()).data,
            (await this.getPlayerArmies(id)).data,
            ]);
        /* Bulding conversiuon to client model */
        rawPlayerData.city.buildings = this.convertCityDataToBuildingList(baseBuildingData,
            [rawPlayerData.city.barracksLevel,
                rawPlayerData.city.forgeLevel,
                rawPlayerData.city.fieldsLevel,
                rawPlayerData.city.wallLevel]);
        /* Fetch Armies */
        rawPlayerData.armies = playerArmies;
        return rawPlayerData;
    };

    public static async getBaseBuildings() {
        return axios.get<BuildingPrototype[]>(`${config.api_url}get/BaseBuildings`, {
        })
            .catch((error: AxiosError) => {
                // Handle errors
                return Promise.reject(Error(error.message));
            });
    };

    public static async getPlayerArmies(id: number) {
        return axios.get<Army[]>(`${config.api_url}get/PlayerArmies`, {
            params: {
                id,
            }
        })
            .catch((error: AxiosError) => {
                // Handle errors
                return Promise.reject(Error(error.message));
            });
    };

    public static convertCityDataToBuildingList(baseBuildings:BuildingPrototype[], buildingLevelList:number[]) {
        const resultBuildingList:Building[] = [];
        baseBuildings.forEach((buildingPrototype,index) => {
            resultBuildingList[index]={...buildingPrototype, level: buildingLevelList[index]};
        })
        return resultBuildingList
    };

    public static async getBaseUnits() {
        return (await axios.get<UnitPrototype[]>(`${config.api_url}get/BaseUnits`, {
        })
            .catch((error: AxiosError) => {
                // Handle errors
                return Promise.reject(Error(error.message));
            })).data;
    };

    public static async getRules() {
        return (await axios.get(`${config.api_url}get/Rules`, {
        })
            .catch((error: AxiosError) => {
                // Handle errors
                return Promise.reject(Error(error.message));
            })).data;
    };

}
