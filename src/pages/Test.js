import React, { useState } from 'react'
import {Users} from '../data/user'
export default function Test() {
    console.warn(Users)
    const [newuser,setNewUser] = useState();
    function abc(e){
      setNewUser(e)
    }
    function test(){

      Users.map((v,i)=>{
      const testCOn = ()=>{
        //v.user == newuser ? alert(newuser) : 'no'
        if(v.user == newuser){
          alert(newuser)
        }else{
         
        }
      }
      testCOn()
    })
    }
  return (
      <>
      <div className="container py-5 my-5"><input className="form-control" value={newuser} onChange={(e)=>{abc(e.target.value)}} /><button className="btn btn-success my-4" onClick={(e)=>{test()}}>Click</button></div>
    <center className="my-5">
        {
          Users.map((v,i)=>{
            return(
              <><h1>{v.fname + v.lname}</h1></>
            )
          })
        }
        
    </center>
    </>
  )
}
