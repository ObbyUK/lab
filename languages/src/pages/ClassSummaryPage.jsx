import React from 'react';
import { connect } from 'react-redux';
import { propEq, find, mergeAll, contains } from 'ramda';
import queryString from 'query-string';

// Actions & Style
import { 
  viewClassSummaryPageAction
} from '../appActions';
import './ready-to-learn-page.less';
// Components
import Menu from '../components/Menu.jsx';
import Footer from '../components/Footer.jsx';
import ImageBanner from '../components/ImageBanner.jsx';
import SalesBar from '../components/SalesBar.jsx';
import ClassSummaryContainer from '../containers/ClassSummaryContainer.jsx';

const mapStateToProps = (state) => ({
  header: state.app.flow.headers[state.app.status]||{},
  skillLevel: state.app.skillLevel,
});

const mapDispatchToProps = (dispatch) => ({
  viewClassSummaryPage: (urlParamaters) => dispatch(viewClassSummaryPageAction(urlParamaters))
});

const mergeProps = (stateProps, dispatchProps) => mergeAll([
  stateProps,
  dispatchProps,
  {
  }
]);

class ClassSummaryPageContainer extends React.Component {

  componentDidMount() {
    this.props.viewClassSummaryPage(queryString.parse(window.location.search));
  }

  render () {
    return (
      <div className="ready-to-learn-page">
        <div className="ready-to-learn-page__sales-banner">
          <SalesBar text="SALE! Book today to get £20 off, ends in" />
        </div>
        <div className="ready-to-learn-page__body">
          <Menu />
          {/* HEADER */}
          <div className="ready-to-learn-page__header">
            <ImageBanner
              blurt={this.props.header.blurt}
              title={this.props.header.title}
              description={this.props.header.description}
              src={this.props.header.src}
            />
          </div>
          {this.props.skillLevel &&
            <ClassSummaryContainer />
          }
          <Footer />
        </div>
      </div>
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ClassSummaryPageContainer);