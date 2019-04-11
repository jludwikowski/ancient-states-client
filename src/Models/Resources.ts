import Resource from './Resource';

export default interface Resources {
    [key:string]: any;
    food: Resource;
    iron: Resource;
    timber: Resource;
    stone: Resource;
    gold: Resource;
    influence: Resource;
}
