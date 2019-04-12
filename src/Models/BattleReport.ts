import Army from "./Army";

export default interface BattleReport {
    id: number,
    turnList: Army[][],
    onDisband(id: number): void
}
