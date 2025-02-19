import HeroPage from "@/components/HeroPage";
import ProductPreview from "@/components/ProductPreview";
import { Features } from "@/components/Features";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";


export default function Home() {
  
  return (
    <div className="min-h-screen">
      {/* <Navbar/> */}
      <main>

        <HeroPage/>

<        ProductPreview
/>
       

        {/* Features Section - Cyberpunk Gradient */}
       <Features/>

        {/* Pricing Section - Midnight Gradient */}
        <Pricing/>


        {/* Footer - Dark Night Gradient */}
       <Footer/>
      </main>
    </div>
  );
}
