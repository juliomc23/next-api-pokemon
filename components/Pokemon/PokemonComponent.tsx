import Link from "next/link";
import React from "react";
import Image from "next/image";

import style from "../../styles/Home.module.css";

interface Types {
  name: string;
  id: number;
}

const PokemonComponent = ({ name, id }: Types) => {
  return (
    <>
      <Link href={`/pokemon/${name}`}>
        <div className={style.border}>
          <div className={style.superior}>
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}
              alt={name}
              width={110}
              height={90}
            />
          </div>
          <div className={style.superior_circle}>
            <div className={style.interior_circle}></div>
          </div>
          <div className={style.inferior}>
            <span>{name[0].toUpperCase() + name.substring(1)}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PokemonComponent;
