import Footer from "./components/Footer"
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PageContent from "./components/PageContent";

function App() {
  return (
    // burda ki <PageContent/> bizim grandparentimiz yani onun içindeki (about,project,content'i de import etmiş bulunduk) clean code
    <div className="App">
      <Navbar />
      <Header />
      <PageContent /> 
      <Footer/>
    </div>
  );
}

export default App;
