import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import CommunityGuidelines from './policies/community_guidelines';
import ContentPolicy from './policies/content_policy';
import PrivacyPolicy from './policies/privacy_policy';
import TermsOfService from './policies/terms_of_service';
import PageNotFound from './404';
import FAQ from './faq';
import Report from  './policies/report';

import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
     <Router basename={'/kara_website'}>
      <div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
           <App />
          </Route>
          {/* uncomment below once we go into testing */}
          <Route path="/policy/termsofservice">
            <TermsOfService />
          </Route>
          <Route path="/policy/privacypolicy">
            <PrivacyPolicy />
          </Route>
          <Route path="/policy/contentpolicy">
            <ContentPolicy />
          </Route>
          <Route path="/policy/communityguidelines">
            <CommunityGuidelines />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route path="/report">
            <Report />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
          {/* <Route path ="/policy/blockedbyuser">
          //todo: add help about blocking
          </Route> */}
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
