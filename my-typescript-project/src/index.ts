import { Fighter } from "./entities/Fighter";
import { BattleArena } from "./core/BattleArena";

async function main() {
  const Arshdeep = new Fighter("A", "Arshdeep");
  const Dragon = new Fighter("B", "Dragon");

  const arena = new BattleArena(Arshdeep, Dragon);
  const result = await arena.startBattle();

  console.table(
    result.log.map((entry) => ({
      Turn: entry.turn,
      Actor: entry.actorName,
      Action: entry.action,
      Amount: entry.amount,
      "Arshdeep HP": entry.hpA,
      "Dragon HP": entry.hpB,
    }))
  );

  console.log(`🏁 Final Winner: ${result.winner.name}`);
}

main().catch(console.error);
