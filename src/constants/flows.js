// Constants
import languages from './languages';
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

export default flows;