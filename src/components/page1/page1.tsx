import React from 'react';
import './page1.scss';

interface Props {
  name?: string;
}

const Page1: React.FC<Props> = (props: Props) => (
  <div className="section">{props.name ? props.name : 'Page1'}</div>
);
export default Page1;
