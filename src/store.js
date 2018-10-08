import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';

// Roots
import rootReducer from './rootReducer';
import rootEpic from './rootEpic';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(history) {
  // const middleware = routerMiddleware(history);
  const epicMiddleware = createEpicMiddleware();
  const middlewares = [routerMiddleware(history), epicMiddleware];

  if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger();
    middlewares.push(logger);
  }

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  epicMiddleware.run(rootEpic);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./rootReducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
