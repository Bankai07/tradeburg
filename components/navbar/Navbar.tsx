import Logo from "./Logo";
import NavLinks from "./NavLinks";
import CTAButton from "./CTAButton";
export default function Navbar(){return <header style={{display:"flex",justifyContent:"space-between",padding:"20px 40px"}}><Logo/><NavLinks/><CTAButton/></header>;}