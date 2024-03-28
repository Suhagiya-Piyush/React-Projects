// import React from 'react'

// const  Greeting =() =>{
//     let date = new Date();
//     let hours = date.getHours();
//     let Greet = "";
//     let clr;

//     if(hours >= 1 && hours < 12){
//         Greet = "Good Morning";
//         clr = {color : "green"};
//     }else if(hours >= 12 && hours <17){
//         Greet = "Good Afternoon!";
//         clr = {color : "blue"}
//     }else if(hours >= 17 && hours <20){
//         Greet = "Good Evening!";
//         clr = {color : "orange"}
//     }else{
//         Greet = "Good Night!";
//     }
//   return (
//     <div>
//             <h1 className="text-center text-xl font-semibold text-yellow-500 mt-10 border border-8 border-gray-500 outline-double px-10 py-5 rounded-2xl absolute top-28 left-60">Hello Komal, <span className="text-red-600" style={clr}>{Greet}</span></h1>
//         </div>
//   )
// }

// export default Greeting