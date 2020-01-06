import React from 'react';
import Hero from './hero';
import { useIntl } from 'react-intl';
import Cards from './cards';

const Page1: React.FC = () => {
  const intl = useIntl();
  return (
    <section className="hero is-light is-bold">
      <Hero titleId="Text.HeroTitle" intl={intl} />
      <Cards intl={intl} />
    </section>
  );
};

export default Page1;
