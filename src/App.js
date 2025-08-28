
import './index.css';
import Header from './components/header';
// import NewArrivals from './pages/newArrivals';
// import FemaleCategory from './pages/female-category';
// import MenCategory from './pages/men-category';
import Footer from './components/footer';
import AllRoutes from './route/AllRoutes';

function App() {
  return (
    <div className="App">
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
