import { Dispatch, SetStateAction } from "react";

interface Pokemon {
  name: string;
  id: number;
  abilities: Array<Habilities>;
}

interface Habilities {
  ability: {
    name: string;
    url: string;
  };
}

export const getFirstAbility = async (
  props: Pokemon,
  setFirstAbility: Dispatch<SetStateAction<string>>
) => {
  const url = await props.abilities[0].ability.url;

  const req = await fetch(url);
  const res = await req.json();

  console.log(res);

  setFirstAbility(res.effect_entries[0].effect);
};

export const getSecondAbility = async (
  props: Pokemon,
  setSecondAbility: Dispatch<SetStateAction<string>>
) => {
  const url = await props.abilities[1].ability.url;

  const req = await fetch(url);
  const res = await req.json();

  console.log(res);

  setSecondAbility(res.effect_entries[1].effect);
};
