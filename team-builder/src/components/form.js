import React from 'react';

const Form=function(){
    const[tmAttr,setTmAttr]=useState({
        name:'',
        title:'',
        hobbies:'',
        phone:'',
        email:''
    });
    return(
        <form>
            <label htmlFor='name'>New Name</label>
            <input
            type='text'
            name='name'
            value={tmAttr.name}
            />
            <label htmlFor='Title'>new Title</label>
            <input 
            type='text'
            name='title'
            value={tmAttr.title}
            />
            <label htmlfor='hobbies'>Hobbies</label>
            <input 
            type='text' 
            name='hobbies'
            value={tmAttr.hobbies}
            />
            <label htmlFor='phone'>phone number</label>
            <input
            type='text'
            name='phone'
            value={tmAttr.phone}
            />
            <label htmlFor='email'>e-mail</label>
            <input
            type='text'
            name='email'
            value={tmAttr.email}
            />

            <button type='submit'>add team member</button>



        </form>
    )
}
export default Form;

