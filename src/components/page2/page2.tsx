import React from 'react';
import Hero from './hero';
import { useIntl } from 'react-intl';

const Page2: React.FC = () => {
  const intl = useIntl();
  return (
    <section className="section">
      <Hero intl={intl} index={1} heroClassName="is-info" />
      <Hero intl={intl} index={2} heroClassName="is-primary" />
      <Hero intl={intl} index={3} heroClassName="is-success" />
      <Hero intl={intl} index={4} heroClassName="is-danger" />
      <Hero intl={intl} index={4} heroClassName="is-warning" />
      <Hero intl={intl} index={5} heroClassName="is-black" />{' '}
      <Hero intl={intl} index={6} heroClassName="is-dark" />
    </section>
  );
};

export default Page2;
