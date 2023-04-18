import Header from './Pages/components/Header';
import Core from './Pages/Core';
import Login from './Pages/Login'
import Register from './Pages/Register';
import Product from './Pages/Product';
import { Routes, Route } from 'react-router-dom';
import Catalog from './Pages/Catalog';
import EdboardLogin from './Pages/EdboardLogin';
import Edboard from './Pages/Edboard';
import InterestForm from './Pages/InterestForm';
import ForgotPassword from './Pages/ForgotPassword';


function App () {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Core />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/forgotPassword' element={<ForgotPassword/>}/>
        <Route path='/register' element={<Register />} />
        <Route path='/interestForm' element={<InterestForm />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/edboardLogin' element={<EdboardLogin />} />
        <Route path='/edboard' element={<Edboard />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </>
  );
}

export default App;