import Header from "./components/Header";
import Footer from "./components/Footer";
// import{BrowserRouter as Router} from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";


function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart/:id?" element={<CartScreen />} />
            <Route path="/cart/" element={<CartScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
