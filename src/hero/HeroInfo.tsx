import * as React from 'react';

import { Thumbnail, Format, buildUrl } from '../helpers/thumbnail';

const styles = require('./hero-info.css');

export interface HeroItem { name: string, resourceURI: string };
export interface HeroItemList { items: HeroItem[] };

export interface Hero {
  name: string,
  description: string,
  thumbnail: Thumbnail,
  comics: HeroItemList,
  series: HeroItemList
};

export interface HeroInfoProps { hero: Hero; };

const renderList = (list: HeroItemList): any => {
  return (
    <ul>
      {list.items.map((item: HeroItem) =>
        <li key={item.name}>
          <a href={item.resourceURI}>{item.name}</a>
        </li>
      )}
    </ul>
  );
};

const HeroInfo: React.StatelessComponent<HeroInfoProps> = ({hero}) => {
  if (!hero) {
    return null;
  }

  return (
    <div className={styles.info}>
      <img src={buildUrl(hero.thumbnail, Format.Portrait)} className={styles.thumbnail} />
      <div className={styles.content}>
        <div className={styles.head}>
          <h1>{hero.name}</h1>
          <p>{hero.description}</p>
        </div>
        <div className={styles.list}>
          <h2>Comics</h2>
          {renderList(hero.comics)}
        </div>
        <div className={styles.list}>
          <h2>Series</h2>
          {renderList(hero.series)}
        </div>
      </div>
    </div>
  );
}

export default HeroInfo;
