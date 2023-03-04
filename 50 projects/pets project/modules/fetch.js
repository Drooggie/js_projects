export async function getPoke(index) {
  const data = await (
    await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
  ).json();

  addCard(data);
}

import { addCard } from "./functions.js";
