// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
// import Greeting from "./Components/Greeting";
// import Style from "../src/Components/Styles/Greeting.module.css";
// import morning from './Components/Assets/morning.jpg';
// import './Components/Styles/Style.css';
// import Props from './Components/Props';
// import Data from './Components/Props-Data';
import Demo from './Components/Task-3';


function App() {
  return (
    <div className="App">
      <Header className="header"/>
      {/* <div className='flex justify-center my-auto'>
        <img src={morning} alt="" className={Style.img}/>
        <Greeting />
      </div> */}
      {/* <div className='flex flex-wrap justify-around'>
        {Data.map((cValue, ind, array) =>{
          console.log(cValue,"cValue");
          return (<Props key={ind} name={cValue.name} img={cValue.img} disc={cValue.disc}/>);
        })} */}
        {/* <Props name="* html 5 *" img={logo_1} disc="HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."/>
        <Props name="* css *" img={logo_2} disc="Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language."/>
        <Props name="* Tailwind *" img={logo_3} disc="Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap."/>
        <Props name="* JavaScript *" img={logo_4} disc="JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS."/>
        <Props name="* React JS *" img={logo_5} disc="React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components."/>
        <Props name="* Node JS *" img={logo_6} disc="Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more."/> */}
      {/* </div> */}
      {}
        <Demo a ="😄" b = "😃" c = "😄"/>
    </div>
  );
}

export default App;
