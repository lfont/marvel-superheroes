import * as React from 'react';
import { Link } from 'react-router';

import { Thumbnail, Format, buildUrl } from '../helpers/thumbnail';

const styles = require('./hero-item.css');

export interface Hero {
  id: number,
  name: string,
  thumbnail: Thumbnail,
  urls: { type: string, url: string }[]
};

export interface HeroItemProps {
  hero: Hero
};

const HeroItem: React.StatelessComponent<HeroItemProps> = ({ hero }) => {
  return (
    <li className={styles.item}>
      <Link to={`/hero/${hero.id}`} className={styles.navigation}>
        <div className={styles.thumbnail}>
          <img src={buildUrl(hero.thumbnail, Format.Standard)} />
        </div>
        <p className={styles.name}>{hero.name}</p>
      </Link>
      <p className={styles.links}>
        {hero.urls.map((url: any) =>
          <a key={url.type} href={url.url} className={styles.link}>{url.type}</a>
        )}
      </p>
    </li>
  )
}

export default HeroItem;
