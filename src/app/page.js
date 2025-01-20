import CardProduct from "@/components/Molecule/CardProduct/CardProduct";
import PopularProducts from "@/components/Molecule/PopularProducts/PopularProducts";
import Header from "@/components/Molecule/Header/Header";
import Hero from "@/components/Molecule/Hero/Hero";
import ProductSuggestions from "@/components/Organism/ProductSuggestions/ProductSuggestions";
import "bootstrap/dist/css/bootstrap.min.css";
import Discounts from "@/components/Molecule/Discounts/Discounts";
import Footer from "@/components/Molecule/Footer/Footer";
import BannerBigSummer from "@/components/Molecule/BannerBig Summer/BannerBigSummer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ProductSuggestions />
      <CardProduct />
      <PopularProducts />
      <Discounts />
      <BannerBigSummer />
      <Footer />
    </>
  );
}

export default App;
