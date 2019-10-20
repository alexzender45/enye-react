import React from 'react';


 function  Header(){
     return (
         <header style = {headerStyle}>
             <h1>User Detials Todo List</h1>
             </header>
     )
 }
 const headerStyle = {
     background : 'blue',
     color : '#fff',
     textAlign : 'center',
     padding : '10px',
     marginLeft : '300px',
     marginRight : '300px',
     marginBottom : '50px'
 }
 export default Header;