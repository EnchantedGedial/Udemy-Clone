import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return <>
  <div className="h-full mt-4 flex items-center justify-center text-center m-auto">

  <SignIn  />;
  </div>
  
  </>
}