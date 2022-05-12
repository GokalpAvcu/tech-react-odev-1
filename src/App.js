import Footer from "./template-1/Footer";
import Header from "./template-1/Header";
import Navbar from "./template-1/Navbar";
import PageContent from "./template-1/PageContent";

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
