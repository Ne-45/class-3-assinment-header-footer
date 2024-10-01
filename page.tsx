import Image from "next/image";
 
import profile from "../app/profile.jpg";
import Header from "../app/components/header";
import Footer from "../app/components/footer";
export default function home() {
  return (
<>
<Header/>
  
   
   <div className="homeContainer">
   <div className="childContainer">
     Hey,
     <br />
     My Name is <span className="pinkColor">Ne-45</span>
     <br />I am a Mathematics teacher

     <p className="para-text"> I am an O-level Mathematics teacher by profession.
      <br/> I have learnt html, css, javascript and typescript.
      Now I am the student of nextjs in Quater2 of
     <span className="greencolor"> GIAIC</span> </p>
     
   </div>
   <div className= "profile-pic">
    <Image className="profile"  layout="fixed" src={profile} alt="profile pic"></Image>
   </div>
 </div>
 
 <Footer/>
 </>
  )

}


