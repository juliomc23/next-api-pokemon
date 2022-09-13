import React, { useState } from "react";
import Image from "next/image";
import style from "../../styles/Home.module.css";

import { useRouter } from "next/router";
import Link from "next/link";
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
        <div className={style.container}>
          {pokemon?.map((pokemon: Pokemon) => {
            id++;
            return (
              <Link key={pokemon.name} href={`/pokemon/${pokemon.name}`}>
                <div className={style.border}>
                  <div className={style.superior}>
                    <Image
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}
                      alt={pokemon.name}
                      width={150}
                      height={150}
                    />
                  </div>
                  <div className={style.superior_circle}>
                    <div className={style.interior_circle}></div>
                  </div>
                  <div className={style.inferior}>
                    <span>{pokemon.name}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default BodyComponent;
