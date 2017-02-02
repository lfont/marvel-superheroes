import * as React from 'react';
import { Link } from 'react-router';

import HeroItem, { Hero } from './HeroItem';

const styles = require('./heroes-list.css');

export interface HeroesListProps { heroes: Hero[] };

const HeroesList: React.StatelessComponent<HeroesListProps> = ({ heroes }) => {
  return (
    <ul className={styles.list}>
      {heroes.map(hero =>
        <HeroItem key={hero.id} hero={hero} />
      )}
    </ul>
  )
}

export default HeroesList;
