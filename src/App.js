import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layouts/header"
import Footer from "./components/layouts/footer"

function App() {

  return (
    <div className="App">
    <Header/>

      <button className='btn btn-info'>
        Click me
      </button>

    <Footer/>
    </div>
  );
}

export default App;
