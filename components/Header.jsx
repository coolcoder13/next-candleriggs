import Image from "next/image";
import React from "react";

import SearchIcon from "@mui/icons-material/Search";

import LogoImage from "../assets/images/logo.png";
import styles from "@/styles/Home.module.css";

const Header = () => {
  return (
    <header className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <Image src={LogoImage} width={100} alt="logo" />
        <div className={styles.inputWrapper}>
          <input type="text" placeholder="Search" />
          <SearchIcon />
        </div>
      </div>
      <div className={styles.headerBtn}>
        <button>Home</button>
        <button>What's on</button>
        <button>Book Venue</button>
        <button>Gallery</button>
        <button>Contact Us</button>
      </div>
    </header>
  );
};

export default Header;
