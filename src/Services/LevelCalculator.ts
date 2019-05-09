import ServerDataProvider from "./ServerDataProvider";

export default class LevelCalculator {

    public isInitiated:boolean = false;
    public rules = {
        BuildingUpgradePriceStep: 1,
        BuildingUpgradeTimeStep: 1,
    };

    public async init() {
        this.rules = await ServerDataProvider.getRules();
        this.isInitiated = true;
    };

    public async getFinalValue(value:string, baseValue:number, level:number) {
        if(!this.isInitiated) {
            await this.init();
        }
        let multiplier = 1;
        switch (value) {
            case 'BuildingUpgradePrice':
                multiplier = this.rules.BuildingUpgradePriceStep;
                break;
            case 'BuildingUpgradeTime':
                multiplier = this.rules.BuildingUpgradeTimeStep;
                break;
            default:
                break;
        }
        return baseValue * (multiplier ** level)
    };

}
