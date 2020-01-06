import React, { FC } from 'react';
import { IntlShape } from 'react-intl';
import { t } from '../utils/utils';

interface Props {
  intl: IntlShape;
  index: number;
  heroClassName?: string;
}

const Hero: FC<Props> = ({ intl, index, heroClassName }: Props) => {
  return (
    <div className={`hero ${heroClassName}`}>
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{t('Text.HeroTitle#', intl, { index })}</h1>
          <h2 className="subtitle">
            {t('Text.HeroSubtitle', intl, { index })}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
