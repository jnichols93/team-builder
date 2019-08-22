import React, { useState } from "react";

const TeamMemberForm = function(props){
    // tm for team member
    const [tm, setTm] = useState({ 
        name:'',
        title:''
    });

    const handleChange = event => {
        console.log('change handled:',event.target.value);
        setTm({...tm, [event.target.name]: event.target.value});
    }



const submitForm = event => {
    event.preventDefault();
    console.log('form submitted');
    const newTm = {...tm, id: Date.now()};
    props.addNewTeamMember(newTm);
    setTm({name:'', title:''});
};

return(
    <form onSubmit={submitForm}>
        <label htmlFor='name'>New Team Member Name</label>
        <input
        type='text'
        name='name'
        value={tm.name}
        onChange={handleChange}
        />
        <label htmlFor='title'>New Team Member Title</label>
        <input
        type='text'
        name='title'
        value={setTm.title}
        onChange={handleChange}
        />
    <button type='submit'>Add Team Member</button>
    </form>
);
}


export default TeamMemberForm;

