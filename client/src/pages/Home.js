import React from "react";
import HomeLayout from "../components/HomeLayout/HomeLayout"
//import { useHistory } from "react-router-dom";

function Home(props) {
  const userName = props.login;
  //const history = useHistory();
  //let val;
  // if(isLoggedIn === true)
  //     {
        //val = <HomeLayout name={userName}/>
      // }else{
      //  val =  history.push('/login')
      // }
  return (
    <div>
      <br />
      <HomeLayout name={userName}/>
    </div>
  );
}

export default Home;
