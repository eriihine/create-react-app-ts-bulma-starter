import React, { FC } from 'react';
import { IntlShape } from 'react-intl';
import { t } from '../utils/utils';

interface Props {
  titleId: string;
  intl: IntlShape;
}

const Hero: FC<Props> = ({ titleId, intl }: Props) => {
  return (
    <section className="hero is-light is-bold">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column">
              <figure className="image is-2by1">
                <img src="https://dummyimage.com/800x400" alt="placeholder" />
              </figure>
            </div>
            <div className="column">
              <h1 className="title is-1">{t(titleId, intl)}</h1>
              <p className="subtitle">{t('Text.LoremIpsum', intl)}</p>
              <div className="buttons">
                <button type="button" className="button is-primary">
                  {t('Text.Button1', intl)}
                </button>
                <button type="button" className="button is-primary is-outlined">
                  {t('Text.Button2', intl)}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
