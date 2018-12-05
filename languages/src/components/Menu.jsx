import React from 'react';
import queryString from 'query-string';
import { contains, values } from 'ramda';

import './menu.less';
// Constants
import languages from './../constants/languages'

export default class  extends React.Component {

  constructor (props) {
    super(props);
  }

  getLogoHref() {
    if (this.isOnLangaugeLandingPage()) {
      console.log(1);
      return window.location.pathname;
    }
    if (this.isOnLanguageForm()) {
      return "/"+this.getUrlQuery().language;
    }
    return "/";
  }

  isOnLangaugeLandingPage() {
    return this.isALanguage(window.location.pathname.slice(1));
  }

  isOnLanguageForm() {
    return this.isALanguage(this.getUrlQuery().language);
  }

  isALanguage(value) {
    return contains(value, values(languages));
  }

  getUrlQuery() {
    return queryString.parse(window.location.search);
  }

  render () {
    return (
      <div className="menu">
        <a href={this.getLogoHref()}>
          <img src="/icons/logo-red.svg" alt="" className="menu__logo"/>
        </a>
      </div>
    );
  }
}
