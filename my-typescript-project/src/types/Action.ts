// Defines possible action types in the game
export enum ActionType {
  ATTACK = "attack",
  HEAL = "heal",
}
// Defines the structure of an action performed by a fighter
export interface Action {
  type: ActionType;
  amount: number;
}
