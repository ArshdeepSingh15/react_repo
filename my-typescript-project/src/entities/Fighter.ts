import { Action, ActionType } from "../types/Action";

export class Fighter {
  id: string;
  name: string;
  hp: number;
  readonly maxHp: number;

  constructor(id: string, name: string, hp: number = 100) {
    this.id = id;
    this.name = name;
    this.hp = hp;
    this.maxHp = hp;
  }

  async act(): Promise<Action> {
    await this.delay(500 + Math.random() * 500);

    const shouldHeal = Math.random() < 0.3;
    const type = shouldHeal ? ActionType.HEAL : ActionType.ATTACK;

    const amount =
      type === ActionType.ATTACK
        ? this.randomInRange(10, 20)
        : this.randomInRange(8, 15);

    return { type, amount };
  }

  applyAction(action: Action, opponent: Fighter): void {
    if (action.type === ActionType.ATTACK) {
      opponent.hp = Math.max(0, opponent.hp - action.amount);
    } else if (action.type === ActionType.HEAL) {
      this.hp = Math.min(this.maxHp, this.hp + action.amount);
    }
  }

  isAlive(): boolean {
    return this.hp > 0;
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private randomInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
