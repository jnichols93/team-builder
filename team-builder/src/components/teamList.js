import React from 'react';


const TeamList = function(props){
    console.log('props from TeamList:',props);
    return(
        <div className='teamMember-list'>
            {props.teamMemberList.map(teamMember => {
                return(
                    <div className='teamMember'>
                        <h1>{teamMember.name}</h1>
                        <h2>{teamMember.title}</h2>
                        </div>
                );
            })}
             </div>
    );
};
export default TeamList;







