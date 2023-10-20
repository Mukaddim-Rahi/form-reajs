import logo from './logo.svg';
import './App.css';
import Mynavbar from './components/Mynavbar/Mynavbar';
import BodyContainer from './components/BodyContainer/BodyContainer';
import FormBody from './components/FormBody/FormBody';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Mynavbar></Mynavbar>
      <BodyContainer></BodyContainer>
      <Footer></Footer>
    </div>


  );
}

export default App;
