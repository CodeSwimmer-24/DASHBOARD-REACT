// @flow
import superagentRequest from 'superagent';
import Cookies from 'js-cookie';
import captureError from './captureError';
import getEnvironmentVariables from '../getEnvironmentVariables';

const BASE_URL: string = getEnvironmentVariables('REACT_APP_API_END_POINT');

export const makeGetRequest = (endpoint: string, data?: Object): Promise<*> => {
  const auth = Cookies.get('auth');
  const agent = superagentRequest
    .get(`${BASE_URL}${endpoint}`)
    .withCredentials()
    .set('Accept', 'application/json');
  if (data !== undefined) {
    agent.query(data);
  }
  if (auth) {
    agent.set('Authorization', `Bearer ${auth}`);
  }
  return agent.catch(captureError);
};

export const makePostRequest = (endpoint: string, data?: Object): Promise<*> => {
  const auth = Cookies.get('auth');
  if (auth) {
    return superagentRequest
      .post(`${BASE_URL}${endpoint}`)
      .send(data)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${auth}`)
      .catch(captureError);
  }

  return superagentRequest
    .post(`${BASE_URL}${endpoint}`)
    .send(data)
    .set('Accept', 'application/json')
    .withCredentials(true)
    .catch(captureError);
};
