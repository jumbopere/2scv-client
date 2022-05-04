import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";

import { FirstStep, SecondStep } from "./Components";

const App = () => {
  const [user, setUser] = useState({});
  const updateUser = (data) => {
    setUser((prevUser) => ({ ...prevUser, ...data }));
  };
  const resetUser = () => {
    setUser({});
  };

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
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
