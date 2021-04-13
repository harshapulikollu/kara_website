import React from 'react';
import TextLoop from "react-text-loop";
import './App.css';

function App() {
  return (
    <div className="Background">
      <div className="App-header">
      <h1 >Shout your </h1>
        <TextLoop>
          <h1><span> Creativity</span></h1>
          <h1><span> Love</span></h1>
          <h1><span> Happiness</span></h1>
        </TextLoop>{" "}
      </div>
        <a href='https://play.google.com/store/apps/details?id=com.chillaavo.app&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play'  height="100"width="270" src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
        <div>
          <a href="/policy/privacypolicy">Privacy policy</a>
          <a href="/policy/termsofservice">Terms</a>
          <a href="/faq">FAQ</a>
          <a href="/policy/communityguidelines">Community Guidelines</a>
          <a href="/policy/contentpolicy">Content Policy</a>
        </div> 
    </div>
  );
}

export default App;
