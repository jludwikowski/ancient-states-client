import UnitPrototype from './UnitPrototype';

export default interface Unit extends UnitPrototype {
    level: number,
    finalDamage: number,
    finalHealth: number,
}
