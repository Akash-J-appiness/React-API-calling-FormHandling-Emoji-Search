import React, { useState } from 'react'

const Formhandling = () => {

 const [formData, setformData]=useState({
    username:'',
    email:'',
    occupation:'',
    gender:'', 
    languages:[]
})

const onSubmitHandler = (event)=>{
event.preventDefault()
} 
const onChangeHandler= (event)=>{
console.log(event)
    if (event.target.name === 'languages'){
        let copy = {...formData}
        if (event.target.checked){
            copy.languages.push(event.target.value)
    } else {
        copy.languages = copy.languages.filter(el => el !== event.target.value)
    }

   setformData(copy)
    }else {
        setformData(()=>({
            ...formData,
            [event.target.name]:event.target.value
        }))
    }
}

  return (
    <>
    <h1>Form Handling</h1>
    <form onSubmit={onSubmitHandler}>
        <label className='inlabel'>user Name</label>
        <input type="text" className='mb-3'  placeholder='Enter Your Name' name='username' onChange={onChangeHandler}/> 
        <br/>
        <label className='inlabel'>Email ID</label>
      <input type="email" className='mb-3' placeholder='Enter Your Email ID' name='email' onChange={onChangeHandler} />
      <br/>
      <label className='inlabel'>Occupation</label>
    <select name='occupation' onChange={onChangeHandler}>
        <option value="student">Student</option>
        <option value="work">Work</option>
        <option value="other">Other</option>
    </select>
    <br/>
      <label className='inlabel' name='gender'>Gender</label>
        <input type='radio' name='male' value='male' onChange={onChangeHandler}/>
        <label>Male</label> <br/>
        <input type='radio' name='male' value='fe-male' onChange={onChangeHandler}/>
        <label>Fe-Male</label> <br/>
        <input type='radio' name='male' value='other' onChange={onChangeHandler}/>
        <label>Other</label> <br/>

        <label className='inlabel' name='languages'>Languages</label>
        <input type='checkbox' name='languages' value='javascript' onChange={onChangeHandler}/>
        <label>Javascript</label> <br/>
        <input type='checkbox' name='languages' value='python'onChange={onChangeHandler}/>
        <label>Python</label> <br/>
        <input type='checkbox' name='languages' value='flutter' onChange={onChangeHandler}/>
        <label>Flutter</label> <br/>

        <button onClick={()=>{console.log(formData)}}>
            Submit
        </button>
    </form>
    </>
  )
}

export default Formhandling  