
import log from "./logo.jpeg"
import styles from './header.module.css'

import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleDropdownShow = () => {
    setShowDropdown(true);
  };

  const handleDropdownHide = () => {
    setShowDropdown(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={log} alt="Company Logo" ></img>
        <span className={styles.companyName}>Pharma Company</span>
      </div>
      <nav className={`${styles.nav} ${showMenu ? styles.showMenu : ""}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/business-portfolio">Business Portfolio</a></li>
          <li
            className={`${styles.dropdown} ${
              showDropdown ? styles.showDropdown : ""
            }`}
            onMouseEnter={handleDropdownShow}
            onMouseLeave={handleDropdownHide}
          >
            <a href="/organization-and-team">Organization &amp; Team</a>
            <div className={styles.dropdownContent}>
              <a href="/our-team">Our Team</a>
              <a href="/our-partners">Our Partners</a>
            </div>
          </li>
          <li><a href="/contact">Contact</a></li>
          <li><button className={styles.productListBtn}>Product List</button></li>
        </ul>
      </nav>
      <div className={styles.hamburgerMenu} onClick={handleMenuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header



// import React, { useState } from "react";
// import styles from "./header.module.css";

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className={styles.header}>
//       <div className={styles.logo}>
//         <img src="company-logo.png" alt="Company Logo" />
//         <span className={styles.companyName}>Pharma Company</span>
//       </div>

//       <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
//         <ul>
//           <li>
//             <a href="#">Home</a>
//           </li>
//           <li>
//             <a href="#">About</a>
//           </li>
//           <li>
//             <a href="#">Services</a>
//           </li>
//           <li>
//             <a href="#">Business Portfolio</a>
//           </li>
//           <li>
//             <a href="#">Organization and Team</a>
//             <ul className={styles.dropdown}>
//               <li>
//                 <a href="#">Management Team</a>
//               </li>
//               <li>
//                 <a href="#">Board of Directors</a>
//               </li>
//               <li>
//                 <a href="#">Advisory Board</a>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <a href="#">Contact</a>
//           </li>
//           <li>
//             <button className={styles.productListBtn}>Product List</button>
//           </li>
//         </ul>
//       </nav>

//       <div className={styles.hamburgerMenu} onClick={toggleMenu}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </header>
//   );
// }

// export default Header;

