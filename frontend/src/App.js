import React, {Fragment} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Container} from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <Fragment>
      <Header/>
      <main className="py-3">
         <Container>
            <HomeScreen />
         </Container>
      </main>
      <Footer/>
    </Fragment>
  );
}

export default App;
