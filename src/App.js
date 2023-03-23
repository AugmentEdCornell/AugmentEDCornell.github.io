// import './App.css';
// import Features from './components/Features';
// import Header from './components/Header';
// import { Slogan } from './components/Visuals';
// import { Graphic } from './components/Visuals';
// import Motivations from './components/Motivations';
// import Team from './components/Team';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// function App() {
//   return (
//     <Container fluid>
//       <Row>
//         <Header />
//       </Row>
//       <Row className='pt-5' id="home">
//         <Col md={6} className="features">
//           <Slogan />
//           <Features />
//         </Col>
//         <Col md={6}>
//           <Graphic />
//         </Col>
//       </Row>
//       <Row className="pt-5" id="motivations">
//         <Motivations />
//       </Row>
//       <Row className="pt-5" id="team">
//         <Team />
//       </Row>
//       <Row>
//         <Testimonials />
//       </Row>
//       <Row>
//         <Footer />
//       </Row>
//     </Container>
//   );
// }

// export default App;
import Header from './Pages/components/Header';
import Core from './Pages/Core';
import Login from './Pages/Login'
import Register from './Pages/Register';
import Product from './Pages/Product';
import { Routes, Route } from 'react-router-dom';
import Catalog from './Pages/Catalog';
import EdboardLogin from './Pages/EdboardLogin';
import Edboard from './Pages/Edboard';


function App () {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Core />}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register />} />
      <Route path='/catalog' element={<Catalog />} />
      <Route path='/edboardLogin' element={<EdboardLogin />} />
      <Route path='/edboard' element={<Edboard />} />
      <Route path='/product' element={<Product />} />
    </Routes>
    </>
  );
}

export default App;