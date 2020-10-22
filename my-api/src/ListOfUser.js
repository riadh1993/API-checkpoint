import React,{useEffect,useState} from 'react'
import axios from"axios"



export default () => {

 const[users,setUsers] = useState([]);
 useEffect(() => {
     axios({
         method: 'GET',
         url: `https://jsonplaceholder.typicode.com/users`,

     }).then(res => {
         setUsers(res.data)
     })
 })


return (
    <div>{users.map((user,id) => <h3 key={id}>{user.username}</h3>)}</div>
)


}