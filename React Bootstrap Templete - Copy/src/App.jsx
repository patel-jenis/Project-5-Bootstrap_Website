import Details from "./components/Details"
import Feature from "./components/Feature"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Info from "./components/Info"
import MainSection from "./components/MainSection"
import NewCollection from "./components/NewCollection"
import NewProduct from "./components/NewProduct"
import Offbanner from "./components/Offbanner"
import Testimonial from "./components/Testimonial"

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <MainSection />
                <Info />
                <Details />
                <Offbanner />
                <Feature />
                <NewCollection />
                <NewProduct />
                <Testimonial />
            </main>
            <Footer />
        </div>
    )
}

export default App