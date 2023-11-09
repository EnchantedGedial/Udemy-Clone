import NavBar from "@/Components/NavBar";
import SideBar from "@/Components/SideBar";



export default function DashbordLayout({ children }) {
    return (
    
   <div className="h-full  m-auto">
    <NavBar/>
    <div className="flex">
<SideBar/>
       {children}
    </div>
  
   </div>
      
    )
  }
  