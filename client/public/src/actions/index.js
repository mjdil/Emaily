import axios from 'axios';
import { FETCH_USER} from './types';

const fetchUser= () =>{
  return function (){
  axious.get('/api/current_user')
  .then(res => dispatch({type: FETCH_USER, payload: res.data }))

}
};

export const handleToken = (token) => async dispatch => {
  const res = await axious.post('/api/stripe', token);
  dispatch({type: FETCH_USER, payload: res.data});


};
