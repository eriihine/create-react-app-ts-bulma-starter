import React, { FC } from 'react';
import { IntlShape } from 'react-intl';
import { t } from '../utils/utils';

interface Props {
  intl: IntlShape;
  index: number;
  date: string;
}

const Card: FC<Props> = ({ intl, index, date }: Props) => {
  return (
    <div className="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen">
      <div className="card">
        <header className="card-header">
          <time className="card-header-title is-centered" dateTime="2018-01-31">
            {date}
          </time>
        </header>
        <div className="card-content content">
          <h2 className="card-title">{t('Text.Card', intl, { index })}</h2>
          <p className="card-text">{t('Text.LoremIpsum', intl)}</p>
        </div>
        <footer className="card-footer">
          <a href="#" className="card-footer-item">
            {t('Text.ReadMore', intl)}
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Card;
