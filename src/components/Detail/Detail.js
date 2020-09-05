import React, { useEffect, useState } from 'react';
import './Detail.css'
import { useParams } from 'react-router-dom';
import Coment from '../Coment/Coment';
import fakeData from '../FakeData/FakeData';
const Detail = () => {



    const {Detail} = useParams();

   
    const [image,setImage]= useState(fakeData);
    
        console.log(image)
     const allImage =   image.find(img=> img.img);
     console.log(allImage)
   

console.log(fakeData)

const [comments,setComments] = useState([]);
useEffect(()=>{
const url = `https://jsonplaceholder.typicode.com/comments?postId=${Detail}`;
fetch(url)
.then(res => res.json())
.then(data => setComments(data))


},[])

// console.log(comments)


    const [user,setUser] = useState({})
useEffect(()=>{
const url = `https://jsonplaceholder.typicode.com/posts/${Detail}`
fetch(url)
.then(res => res.json())
.then(data=> setUser(data))


},[])

// console.log(user)
    return (
        <div>
               <div className="detail">
               <h1>Detail is here  </h1>
                <h3> Id : {user.id} </h3>
                <p>Title : {user.title} </p>
                <p>Body : {user.body} </p>

               </div>

                    {
                        comments.map(coment=><Coment comment={coment}
                          
                                    allImage={allImage}
                        ></Coment>)
                    }              
        </div>
    );
};

export default Detail;