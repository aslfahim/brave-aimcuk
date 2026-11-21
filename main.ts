// Rain on the Roof, Kettle On — an entry for make.fun's
// "Make the AI judge feel brave" (make-the-ai-judge-feel-brave-20261121-0302).
// Three short movements, poured one after another into entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function movementOne(): string {
  return "Rain on the roof, steady as a hand resting on a shoulder.";
}

function movementTwo(): string {
  return "The kettle takes its time, and so do you. Steam rises, curls, and lets go of the spout.";
}

function movementThree(): string {
  return "Whatever waits can wait on the other side of this cup. Drink slowly. The storm is only weather, and weather passes.";
}

function pour(): string {
  const cup: string[] = [];
  cup.push(movementOne());
  cup.push(movementTwo());
  cup.push(movementThree());
  return cup.join(" ");
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), pour(), { encoding: "utf8" });
