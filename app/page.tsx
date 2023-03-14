import  Navbar  from "./Components/navbar/Navbar";
import  Section  from "./Components/Hero/Section";
export default function Home() {  
  return (
    <div className="bg-Background ">
      <main className="flex justify-center items-center flex-col">
        <Navbar />
        <Section />
      </main>
    </div>
  )
}
