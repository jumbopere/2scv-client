import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Container } from "@mui/material";

import { FirstStep, SecondStep, Final } from "./Components";

const App = () => {
  const [user, setUser] = useState({});
  const updateUser = (data) => {
    setUser((prevUser) => ({ ...prevUser, ...data }));
  };
  const resetUser = () => {
    setUser({});
  };
  const [userProfile, setUserProfile] = useState(
    JSON.parse(localStorage.getItem("profile"))
  );


  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Routes>
          <Route
            path="/"
            element={<FirstStep user={user} updateUser={updateUser} />}
          />
          <Route
            path="second"
            element={
              <SecondStep
                user={user}
                updateUser={updateUser}
                resetUser={resetUser}
              />
            }
          />
         <Route path="profile" element={!userProfile ? <Navigate to="/" replace /> :  <Final setUserProfile={setUserProfile}  userProfile={userProfile}/>}  />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
