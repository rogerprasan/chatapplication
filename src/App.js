// import React, { useRef, useState } from "react";
// import {Chat} from './components/Chat';
// import {Auth} from './components/Auth';

// // import {Chat} from "./components/Chat";
// import Cookies from "universal-cookie";
// import "./App.css";

// import {signOut} from "firebase/auth"
// import {auth} from "./firebase-config";
// const cookies=new Cookies;
// function App() {
//   const[isAuth,setIsAuth]=useState(cookies.get("auth-token"));
//   const[room,setRoom]=useState(null);
  
//   const roomInputRef=useRef(null);

//   const signUserOut= async()=>{
//      await signOut(auth);
//      cookies.remove("auth-token");
//      setIsAuth(false);
//      setRoom(null);
//   };
//   if(!Auth){
//   return (
//   <div>
//     <Auth setIsAuth={setIsAuth}/>
//   </div>
//   )
//   }
//   return (
//   <>
//     {room ?(
    
//       <Chat room={room}/>
    
//     ):(
//     <div className="room">
//       <label>enter room name</label>
//       <input ref={roomInputRef}/>
//       <button onClick={()=>setRoom(roomInputRef.current.value)}>
//         Enter chat
//         </button>

//     </div>
//     )}
//     <div className="sign-out">
//       <button onClick={signUserOut}>Sign Out</button>

//     </div>
   
//   </>
//   );
  

// }

// export default App;







import React, { useState, useEffect } from "react";
import { Chat } from "./components/Chat";
import { Auth } from "./components/Auth.js";
import { AppWrapper } from "./components/AppWrapper";
import Cookies from "universal-cookie";
import "./App.css";

const cookies = new Cookies();

function ChatApp() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [isInChat, setIsInChat] = useState(null);
  const [room, setRoom] = useState("");

  if (!isAuth) {
    return (
      <AppWrapper
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        setIsInChat={setIsInChat}
      >
        <Auth setIsAuth={setIsAuth} />
      </AppWrapper>
    );
  }

  return (
    <AppWrapper isAuth={isAuth} setIsAuth={setIsAuth} setIsInChat={setIsInChat}>
      {!isInChat ? (
        <div className="room">
          <label> Type room name: </label>
          <input onChange={(e) => setRoom(e.target.value)} />
          <button
            onClick={() => {
              setIsInChat(true);
            }}
          >
            Enter Chat
          </button>
        </div>
      ) : (
        <Chat room={room} />
      )}
    </AppWrapper>
  );
}

export default ChatApp;
