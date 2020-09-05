import React from 'react';
import './Coment.css'
const Coment = (props) => {
    console.log(props.allImage)
    const comment = props.comment;
const {postId,id,name,body,email} = comment;

    return (
        <div className="comment">
          <div>
          <h3>   postId : {postId} </h3>
            <h4>   id : {id} </h4>
            <h3> Name : {name} </h3>
            <h4> Email : {email} </h4>
            <h6> Body : {body} </h6>
          </div>
          <div>
              <img src={props.allImage.img} alt=""/>
          </div>
        </div>
    );
};

export default Coment;