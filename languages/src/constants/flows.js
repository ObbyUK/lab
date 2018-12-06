// Constants
import languages from './languages';
import courseTypes from './courseTypes';
import IntenseClasses from './classes/IntenseClasses';
import WeeklyClasses from './classes/WeeklyClasses';
// Flows
import spanishFlow from './flows/spanish';
import frenchFlow from './flows/french';
import italianFlow from './flows/italian';
import germanFlow from './flows/german';


var flows = {};
flows[languages.SPANISH] = spanishFlow;
flows[languages.FRENCH] = frenchFlow;
flows[languages.ITALIAN] = italianFlow;
flows[languages.GERMAN] = germanFlow;

var courseTypeFlows = {};
courseTypeFlows[courseTypes.WEEKLY] = {
  conversionPage: {
    classes: WeeklyClasses,
    classesPriceLabel: "8 classes",
    classesPrice: "£200",
    points: [
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
    ],
    focusBanner: {
      priceText: "8 classes = £200",
      buttonText: "Payable in weekly instalments",
    }
  },
};
courseTypeFlows[courseTypes.INTENSIVE] = {
  conversionPage: {
    classes: IntenseClasses,
    classesPriceLabel: "5 day intensive",
    classesPrice: "£275",
    points: [
      {
        image: "/icons/calendar-circle.svg",
        title: "Our intensive courses run for 3 hours a day for 5 days in a row",
        text: "",
      },
      {
        image: "/icons/people-circle.svg",
        title: "Get additional learning support on-the-go via our online community",
        text: "",
      },
      {
        image: "/icons/location-circle.svg",
        title: "All classes are recorded & made available online in case you miss a class or want a recap",
        text: "",
      }
    ],
    focusBanner: {
      priceText: "5 day intensive = £215",
    }
  },
};

export default flows;
export { courseTypeFlows };