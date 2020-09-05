import React, { useState, useEffect } from 'react';
import './Body.css'
import User from '../User/User';
import Detail from '../Detail/Detail';
const Body = () => {

const [users,setUsers] = useState([])
useEffect(()=>{
const url = 'https://jsonplaceholder.typicode.com/posts';
fetch(url)
.then(res => res.json())
.then(data => setUsers(data))



},[])

    return (
        <div>
          

                {
                      users.map(user=><User user={user}  >
                       
                      </User>)  


                }

        </div>
    );
};

export default Body;