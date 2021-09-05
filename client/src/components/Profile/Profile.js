import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getProfile } from '../../redux/actions/actions'

const Profile = () => {
          const {isAuth,loading,users} = useSelector(state => state)
          const dispatch = useDispatch()
          useEffect(() => {
                   dispatch(getProfile())
          }, [dispatch])
          return (
                     loading ? (<h1>Loading ...</h1>) : !isAuth ? ( <Redirect to="/login"/>) : (
                                                  <div>
                                                  <h1>Welcome {users.fullName}</h1>
                                                  <h1>Welcome {users.email}</h1>
                                                  <h1>Welcome {users.password}</h1>
                                                  <h1>Welcome {users.phone}</h1>
                                                  </div>
                                       
                                        ) 
                   
          )
}

export default Profile
