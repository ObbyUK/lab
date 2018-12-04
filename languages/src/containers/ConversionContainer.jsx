import React from 'react';
import { connect } from 'react-redux';
import { __, pipe, prop, mergeAll, contains } from 'ramda';

import './conversion-container.less';
// Actions & Style
import { 
  chooseDateAction,
  viewChooseDatePageAction,
  openEmailPopupAction
} from '../appActions';
import { classesByLocation } from './../constants/classes';
// Components
import BlankCard from './../components/BlankCard.jsx';
import CenterIconBanner from './../components/CenterIconBanner.jsx';
import ClassesTable from '../components/ClassesTable.jsx';
import ImageBulletPoints from '../components/ImageBulletPoints.jsx';
import FocusBanner from '../components/FocusBanner.jsx';

const mapStateToProps = (state) => ({
  selectedLanguage: state.app.selectedLanguage,
  selectedLocationsOptions: classesByLocation.filter((location) => contains(location.name, state.app.locations)),
  selectedTimes: state.app.time,
  locations: state.app.locations
});

const mapDispatchToProps = (dispatch) => ({
  chooseDate: (date) => dispatch(chooseDateAction(date)),
  viewChooseDatePage: () => dispatch(viewChooseDatePageAction()),
  openEmailPopup: (text) => dispatch(openEmailPopupAction(text)),
});

const mergeProps = (stateProps, dispatchProps) => mergeAll([
  stateProps,
  dispatchProps,
  {
    openEmailPopup: () => {
      dispatchProps.openEmailPopup({
        title: "Tell us what you want",
        description: `We are constantly adding new classes and locations so if you would like to make a request, just add your details and we will get in touch`,
        submittedTitle: "Thank you",
        submittedDescription: `We will be in touch shortly!`,
        emailText: `None of the dates for ${stateProps.selectedLanguage} in ${stateProps.locations} work.`
      });
    }
  }
]);

class FormContainer extends React.Component {

  componentDidMount() {
    this.props.viewChooseDatePage();
  }

  render () {
    return (
      <div className="conversion-container__body container">

        {/* WEEKLY CLASSES */}
        <div className="conversion-container__card">
          <BlankCard className="conversion-container__card-overide conversion-container__card-overide--flat">
            <h2 className="conversion-container__card-title conversion-container__card-title--flat-card">
              Here's how it works
            </h2>
            <div className="conversion-container__card-section conversion-container__card-section--weekly-classes">
              <ImageBulletPoints 
                hideMobileText={true}
                points={[
                  {
                    image: "/icons/calendar-circle.svg",
                    title: "Our classes run once per week for 8 weeks all across London",
                    text: "",
                  },
                  {
                    image: "/icons/people-circle.svg",
                    title: "Get teacher and additional learning support on-the-go via our online community",
                    text: "",
                  },
                  {
                    image: "/icons/location-circle.svg",
                    title: "All classes are recorded & made available online in case you miss a class or want a recap",
                    text: "",
                  }
                ]}
              />
            </div>
            <CenterIconBanner
              image="/icons/tick.svg"
              title="100% Moneyback guarantee!"
              description="We promise all of our learners a great experience. If you’re unhappy after your first class, we’ll refund you in full."
            />
            <FocusBanner
              priceText="8 classes = £200"
              buttonText="Payable in weekly instalments"
            />
          </BlankCard>
        </div>

        {/* DATES */}
        <div className="conversion-container__card">
          <BlankCard className="conversion-container__card-overide">
            <div className="conversion-container__card-section conversion-container__card-section--dates">
              <h2 className="conversion-container__card-title conversion-container__card-title--pad-mobile">
                Here's what we have for you
              </h2>
            </div>
            {this.props.selectedLocationsOptions.map((location, index) => (
              <div key={index} className="conversion-container__card-section conversion-container__card-section--dates">
                <ClassesTable 
                  title={location.name}
                  address={location.address}
                  pillText=""
                  priceLabel="8 classes"
                  price="£200"
                  dates={location.dates}
                  onClick={({ date, slot }) => {
                    this.props.chooseDate({ 
                      region: location.value,
                      address: location.address,
                      date: date.starts,
                      startTime: slot.starts,
                      endTime: slot.ends
                    });
                  }}
                />
              </div>
            ))}
            <div className="conversion-container__card-note">
              None of these dates or locations work for you? <span onClick={this.props.openEmailPopup.bind(this)} className="conversion-container__card-link">Let us know</span>
            </div>
          </BlankCard>
        </div>

      </div>
    );
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(FormContainer);