import React from 'react';
import './page2.scss';

interface Props {
  name?: string;
}

const Page2: React.FC<Props> = (props: Props) => (
  <div className="section">{props.name ? props.name : 'Page2'}</div>
);
export default Page2;
