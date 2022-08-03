


// import React, { useEffect, createContext, useReducer, useHistory, useContext } from 'react';
// import './App.css';
// import NavBar from './components/Navbar';
// import { BrowserRouter, Route } from 'react-router-dom'
// import Home from './components/screens/Home';
// import Profile from './components/screens/Profile';
// import Signin from './components/screens/Signin';
// import Signup from './components/screens/Signup';
// import CreatePost from './components/screens/CreatePost';
// import LandingPage from './components/screens/landing-page';
// import PostView from './components/screens/post-view';
// import Switch from 'react';
// import { reducer, initialState } from './reducers/userReducer'




// export const UserContext = createContext()

// const Routing = ()=>{
//   const history = useHistory()
//   const {state, dispatch} = useContext(UserContext)
//   useEffect(()=>{
//     const user = JSON.parse(localStorage.getItem("user"))
//     if(user){
//       dispatch({type:"USER", payload:user})
//       history.push('/')
//     }else{
//       history.push('/signin');
//     }
//   },[])

//   return (
//     <Switch>
//       <Route exact path="/" ><Home /> </Route>
//       <Route exact path="/landing-page" ><LandingPage /> </Route>
//       <Route exact path="/post-view" ><PostView /> </Route>
//       <Route exact path="/signin" ><Signin /> </Route>
//       <Route exact path="/signup" ><Signup /> </Route> 
//       <Route exact path="/profile" ><Profile /> </Route>
//       <Route exact path="/createpost" ><CreatePost /> </Route>
//     </Switch>
//   )
// }

// function App() {

//   const [state, dispatch] = useReducer(reducer, initialState)

//   return (
//     <UserContext.Provider value={{state, dispatch}}>

//       <BrowserRouter>
//         <NavBar />
//         <Routing />
//       </BrowserRouter>
//     </UserContext.Provider>
//   );
// }
// export default App;
