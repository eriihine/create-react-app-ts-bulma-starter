import React from 'react';
import './page2.scss';

interface Props {
  name?: string;
}

const Page2: React.FC<Props> = (props: Props) => (
  <section className="section">{props.name ? props.name : 'Page2'}</section>
);

export default Page2;
