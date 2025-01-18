import Content from "@/components/Molecule/Content/Content";
import Header from "@/components/Molecule/Header/Header";
import Hero from "@/components/Molecule/Hero/Hero";
import ProductSuggestions from "@/components/Organism/ProductSuggestions/ProductSuggestions";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ProductSuggestions />
      <Content />
    </>
  );
}

export default App;
