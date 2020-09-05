import React from 'react';
import './User.css'
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core'

const User = (props) => {
    const user = props.user;
   
    return (
        <div className="user">
             <h3>ID : {user.id} </h3>
            <h4>  UserId : {user.userId} </h4>
            <h4>Title : {user.title} .</h4>
            <h6> Body : {user.body} . </h6>
          
          <Link to={`/detail/${user.id}`}>     <Button  variant="outlined" color="primary">See Detail</Button> </Link>


        
        </div>
    );
};

export default User;