import axios from 'axios';
import keys from '../config/keys';

const fn = () => {}

const request = ({ path, method = 'get', params = {}, success = fn, fail = fn }) => {
  return axios[method](`${keys.serverURL}${path}`, params)
    .then(response => {
      return success(response.data);
    })
    .catch(error => {
      return fail(error);
    })
}

export default request;
