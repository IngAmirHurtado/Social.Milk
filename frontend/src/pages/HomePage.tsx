import NavBar from "@/components/navBar/NavBar";
import SideBar from "@/components/sideBar/SideBar";

const HomePage = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center overflow-hidden bg-muted ">
 
      <NavBar />

     
      <div className="w-full lg:w-[1100px]  mt-16 h-full flex gap-3 ">
        <div className="min-w-[250px]  py-3 hidden md:block ">
          <SideBar />
        </div>
        <div className="md:py-3 w-full max-h-full overflow-hidden flex-grow">
          {/* Este div es el que manejará el scroll */}
          <div className="bg-background h-full rounded-lg p-3 overflow-auto max-h-[calc(100vh-88px)]">
            {/* Contenido principal */}
            {[...Array(50)].map((_, i) => (
              <h1 key={i}>HOLAAA</h1>
            ))}
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default HomePage;
