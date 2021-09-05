import axios from "axios"
import { GET_USER, GET_USER_FAIL, GET_USER_SUCCES, LOGIN, LOGIN_FAIL, LOGIN_SUCCES, REGISTER, REGISTER_FAIL, REGISTER_SUCCES } from "../types"


export const registerUser = (newUser) => async(dispatch) => {
          dispatch({
                    type:REGISTER
          })
          try {
                    const regUser = await axios.post('/user/register',newUser)
                    dispatch({
                              type:REGISTER_SUCCES,
                              payload:regUser.data
                    })
          } catch (error) {
                    dispatch({ 
                              type:REGISTER_FAIL,
                              payload:error.response.data
                    })
          }
}

export const loginUser = (user) => async(dispatch) => {
          dispatch({
                    type:LOGIN
          })
          try {
                    const logUser = await axios.post('/user/login',user)
                    console.log(logUser)
                    localStorage.setItem('token',logUser.data.token)
                    dispatch({
                              type:LOGIN_SUCCES,
                              payload:logUser.data
                    })
          } catch (error) {
                    dispatch({
                              type:LOGIN_FAIL,
                              payload:error.response.data
                    })
          }
}

export const getProfile = () => async(dispatch) => {
          const token = localStorage.getItem('token')
          const config = {
                    headers:{
                              Authorization:token
                    }
          }
          dispatch({
                    type:GET_USER
          })
          try {
                    const isAuth = await axios.get('/user/Auth', config)
                    dispatch({
                              type:GET_USER_SUCCES,
                              payload:isAuth.data
                    })
          } catch (error) {
                    dispatch({
                              type:GET_USER_FAIL,
                              payload:error.response.data
                    })
          }
}