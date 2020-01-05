import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Page1 from '../page1/page1';
import Page2 from '../page2/page2';
import Navbar from '../navbar/navbar';

import './main.scss';

interface Props {
  setLocale: React.Dispatch<string>;
  locale: string;
}

const Main: FC<Props> = (props: Props) => {
  return (
    <>
      <Router>
        <section className="columns has-background-lighter">
          <Navbar locale={props.locale} setLocale={props.setLocale} />
          <Switch>
            <Route path="/page1">
              <Page1 />
            </Route>
            <Route path="/page2">
              <Page2 />
            </Route>
            <Redirect from="*" to="/page1" />
          </Switch>
        </section>
      </Router>
    </>
  );
};
export default Main;
