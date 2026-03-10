// src/core/BattleArena.ts

import { Fighter } from "../entities/Fighter";
import { ActionType } from "../types/Action";

export interface ActionLog {
  turn: number;
  actorId: string;
  actorName: string;
  action: ActionType;
  amount: number;
  hpA: number;
  hpB: number;
}

export class BattleArena {
  private fighterA: Fighter;
  private fighterB: Fighter;
  private log: ActionLog[] = [];

  constructor(fighterA: Fighter, fighterB: Fighter) {
    this.fighterA = fighterA;
    this.fighterB = fighterB;
  }

  async startBattle(): Promise<{ winner: Fighter; log: ActionLog[] }> {
    console.log(`⚔️  Battle Start: ${this.fighterA.name} vs ${this.fighterB.name}\n`);

    let attacker = this.fighterA;
    let defender = this.fighterB;
    let turn = 1;

    while (this.fighterA.isAlive() && this.fighterB.isAlive()) {
      const action = await attacker.act();
      attacker.applyAction(action, defender);

      this.log.push({
        turn,
        actorId: attacker.id,
        actorName: attacker.name,
        action: action.type,
        amount: action.amount,
        hpA: this.fighterA.hp,
        hpB: this.fighterB.hp,
      });

      console.log(
        `Turn ${turn}: ${attacker.name} → ${action.type} (${action.amount}) | ` +
        `${this.fighterA.name}: ${this.fighterA.hp} HP, ${this.fighterB.name}: ${this.fighterB.hp} HP`
      );

      if (!defender.isAlive()) break;

      // swap turns
      [attacker, defender] = [defender, attacker];
      turn++;
    }

    const winner = this.fighterA.isAlive() ? this.fighterA : this.fighterB;
    console.log(`\n🏆 Winner: ${winner.name}\n`);
    return { winner, log: this.log };
  }
}
