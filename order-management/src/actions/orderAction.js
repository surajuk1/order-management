import { FETCH_ORDERS,POST_ORDERS,PUT_ORDERS } from './actionTypes';
import axios from 'axios';

export const fetchOrders = (params) => dispatch => {
	  //var orders = [{order_id:1,user:"suraj",product:"Hand Wash",price:150.00,quantity:5,total:750.00,date:"2020-11-05"}]

      axios.get(`http://localhost:3006/order`,{params})
      .then(response => {
        let rowData = response.data
        dispatch({
          type: FETCH_ORDERS,
          payload: rowData
        })
      })

};


export const postOrders = (params) => dispatch => {

      axios.post(`http://localhost:3006/order`,{params})
      .then(response => {
        let rowData = response.data
        dispatch({
          type: POST_ORDERS,
          payload: rowData
        })
      })

};


export const putOrders = (params) => dispatch => {

      axios.put(`http://localhost:3006/order`,{params})
      .then(response => {
        let rowData = response.data
        dispatch({
          type: PUT_ORDERS,
          payload: rowData
        })
      })

};