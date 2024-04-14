import "./App.css"
import Header from "./header";
import Hero from "./hero";
import Specials from "./specials";
import Footer from "./footer";
import CustomersSay from "./CustomersSay";
import Chicago from "./Chicago";

export default function Home() {

  return(
    <>
    <Header />
    <Hero />
    <Specials />
    <CustomersSay />
    <Chicago />
    <Footer />
    </>
  )

}