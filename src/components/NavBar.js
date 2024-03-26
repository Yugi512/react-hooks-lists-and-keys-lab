import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksObj = links.map((link) => {
    const hrefs = `#${link}`
    return <a key={link} href={hrefs}>{link}</a>
  })  
  return <nav>{linksObj}</nav>;
}

export default NavBar;
