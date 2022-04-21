import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.rtl.css'
import Layout from './Layout/Layout';
 import InvoicePage from './Pages/InvoicePage';
 import ProductPage from './Pages/ProductPage';
 import CustomerPage from './Pages/CustomerPage';
 import ProductListPage from "./Pages/ProductListPage"
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import ProductProvider from './Stores/Context/ProductContext';
const App=()=>{
  return (
    <div>
      <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
             <Route path='/invoice' element={<InvoicePage/>}/>
              <Route path='/product' element={<ProductPage />} />
              <Route path='/product/:productid' element={<ProductPage />} />

              <Route path='/productlist' element={<ProductListPage/>} />
              <Route path='/customer' element={<CustomerPage />} />
            </Route>

        </Routes>  
      </BrowserRouter>
      </ProductProvider>
    </div>
  );
}

export default App;
