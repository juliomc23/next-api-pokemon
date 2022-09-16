import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import FooterComponent from "../../components/Footer/FooterComponent";
import HeaderComponent from "../../components/Header/HeaderComponent";

import styles from "../../styles/Home.module.css";

interface Pokemon {
  name: string;
  id: number;
  abilities: Array<Habilities>;
  types: [
    {
      type: {
        name: string;
      };
    }
  ];
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    }
  ];
}

interface Habilities {
  ability: {
    name: string;
    url: string;
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const req = await fetch("https://pokeapi.co/api/v2/pokemon");
  const res = await req.json();

  const paths = res.results.map((pokemon: Pokemon) => {
    return {
      params: { name: pokemon.name },
    };
  });

  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const pokemonName = context.params?.name;

  const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  const res = await req.json();

  return {
    props: res,
  };
};

export default function PokemonName(props: Pokemon) {
  const id = props.id;

  return (
    <div>
      <Head>
        <title>Pokemon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeaderComponent />
        <div className={styles.pokemonCard}>
          {
            <div className={styles.pokeImage}>
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}
                alt="Front pokemon image"
                width={400}
                height={300}
              />
            </div>
          }

          <p className={styles.pokeName}>{props.name}</p>

          <Link href="/pokedex">
            <div className={styles.closePokemon}></div>
          </Link>

          <div className={styles.pokeTypes}>
            {props.types.map(({ type }) => {
              return (
                <p key={type.name} className={type.name}>
                  {type.name}
                </p>
              );
            })}
          </div>

          <div className={styles.pokeInfo}>
            {props.stats.map(({ base_stat, stat }) => {
              return (
                <span key={stat.name}>
                  {stat.name}: {base_stat}
                </span>
              );
            })}
          </div>

          <section className={styles.pokeAbilities}>
            {props.abilities.map(({ ability }) => {
              return <p key={ability.name}>{ability.name}</p>;
            })}
          </section>
        </div>
        <FooterComponent />
      </main>
    </div>
  );
}
