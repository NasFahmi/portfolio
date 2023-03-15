import  Navbar  from "./Components/navbar/Navbar";
import  Section  from "./Components/Hero/Section";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
export default function Home() {  
  return (
    <div className="bg-Background ">
      <main className="flex justify-center items-center flex-col">
        <Navbar />
        <Section />
        <Project />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
