import React, { FC } from 'react';
import { IntlShape } from 'react-intl';
import Card from './card';

interface Props {
  intl: IntlShape;
}

const Cards: FC<Props> = ({ intl }: Props) => {
  return (
    <section className="section">
      <div className="columns is-multiline">
        <Card intl={intl} index={1} date="06-01-2020" />
        <Card intl={intl} index={2} date="06-01-2020" />
        <Card intl={intl} index={3} date="06-01-2020" />
        <Card intl={intl} index={4} date="06-01-2020" />
        <Card intl={intl} index={5} date="06-01-2020" />
        <Card intl={intl} index={6} date="06-01-2020" />
        <Card intl={intl} index={7} date="06-01-2020" />
        <Card intl={intl} index={8} date="06-01-2020" />
        <Card intl={intl} index={9} date="06-01-2020" />
      </div>
    </section>
  );
};

export default Cards;
