import './App.css';
import { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { addUser ,deleteUser , updateUser } from './features/users';


function App() {


  const [name , setName] = useState('')
  const [username , setUsername] = useState('')
  const [newUsername , setnewUsername] = useState('')
  const userList = useSelector((state) => state.users.value)
  const dispatch = useDispatch()


  const handledispatch = () => {
      dispatch(addUser({ id :userList[userList.length -1].id + 1, name , username}))
  }

  
  return (
    <div className="App">
        <h1>Just a Simple Application usin React Redux</h1>
     <div>

      <input 
      className='input'
      type='text'
      placeholder='name'
      onChange={(e) => {setName(e.target.value)}} 
        />

      <input
      className='input'
       type='text' 
       placeholder='username'
       onChange={(e) => {setUsername(e.target.value)}}
        />

      <button  className = 'button-30' onClick={handledispatch}>add user</button>
     
     </div>
     
     <div >
      <div  className='container'>
    
      {userList.map((user , id) => {
        return  <div
        className='card'  key={id}>
      <h1 >{user.name}</h1>
      <h2 >{user.username}</h2>

      
      <input
      className='input'
       type='text' 
       placeholder='new username'
       onChange={(e) => {setnewUsername(e.target.value)}} 
       />

       
       <button className='button-30' onClick={() => {dispatch(deleteUser({username : user.username}))}}>delete user</button>
       <br />
       <button className='button-30 ' onClick={() => {dispatch(updateUser({username : user.username , newusername : newUsername}))}}>update user</button>
      
      </div>
        
      })}
      </div>

      
     </div>
    </div>
  );
}

export default App;
