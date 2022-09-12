import React, { useState } from "react";
import Image from "next/image";
import style from "../../styles/Home.module.css";

import { useRouter } from "next/router";
interface Props {
  pokemon?: [];
  name?: string;
  url?: string;
}

interface Pokemon {
  name: string;
  url: string;
}

const BodyComponent = ({ pokemon }: Props) => {
  const router = useRouter();
  let id = 0;
  return (
    <>
      {router.pathname === "/" ? (
        <Image
          src="/images/Pokemon.png"
          alt="Pokemon-Logo"
          width="100%"
          height="35%"
          layout="responsive"
        />
      ) : (
        pokemon?.map((pokemon: Pokemon) => {
          id++;
          return (
            <div key={pokemon.name}>
              <p>{pokemon.name}</p>
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}
                alt={pokemon.name}
                width={200}
                height={200}
              />
            </div>
          );
        })
      )}
    </>
  );
};

export default BodyComponent;
