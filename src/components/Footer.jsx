import react from "react";



function Footer(){
    const year = new Date().getFullYear();
    return <footer>
    <p className="footer p"> Copyright {year} </p>
    </footer>
}

export default Footer;