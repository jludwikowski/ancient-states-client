import Army from "./Army";
import City from "./City";
import {Entity} from './Entity';
import Resources from "./Resources";

export default interface Player extends Entity {
    email: string,
    city: City,
    armies: Army[],
    resources: Resources,
}
