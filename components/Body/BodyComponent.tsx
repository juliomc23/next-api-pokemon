import React, { useState } from "react";
import Image from "next/image";
import style from "../../styles/Home.module.css";

import { useRouter } from "next/router";
import Link from "next/link";
import PokemonComponent from "../Pokemon/PokemonComponent";
// interface Props {
//   pokemon?: [];
//   name?: string;
//   url?: string;
// }

type Props = {
  pokemon: [];
};

interface Types {}

interface Pokemon {
  name: string;
  url: string;
}

const BodyComponent = ({ pokemon }: Props): JSX.Element => {
  const router = useRouter();
  let id = 0;

  if (router.pathname === "/") {
    return (
      <Image
        src="/images/Pokemon.png"
        alt="Pokemon-Logo"
        width="100%"
        height="35%"
        layout="responsive"
      />
    );
  }

  if (router.pathname === "/pokedex") {
    return (
      <>
        {pokemon.map((pokemon: Pokemon) => {
          id++;
          return (
            <PokemonComponent key={pokemon.name} name={pokemon.name} id={id} />
          );
        })}
      </>
    );

    // return (
    //   <>
    //     {router.pathname === "/" ? (
    //       <Image
    //         src="/images/Pokemon.png"
    //         alt="Pokemon-Logo"
    //         width="100%"
    //         height="35%"
    //         layout="responsive"
    //       />
    //     ) : (
    //       <div className={style.container}>
    //         {pokemon?.map((pokemon: Pokemon) => {
    //           id++;
    //           return (
    //             <Link key={pokemon.name} href={`/pokemon/${pokemon.name}`}>
    //               <div className={style.border}>
    //                 <div className={style.superior}>
    //                   <Image
    //                     src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}
    //                     alt={pokemon.name}
    //                     width={110}
    //                     height={90}
    //                   />
    //                 </div>
    //                 <div className={style.superior_circle}>
    //                   <div className={style.interior_circle}></div>
    //                 </div>
    //                 <div className={style.inferior}>
    //                   <span>
    //                     {pokemon.name[0].toUpperCase() +
    //                       pokemon.name.substring(1)}
    //                   </span>
    //                 </div>
    //               </div>
    //             </Link>
    //           );
    //         })}
    //       </div>
    //     )}
    //   </>
    // );
  }
};
export default BodyComponent;
