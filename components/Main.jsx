import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Grid } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import Icon from "@mui/material/Icon";
import BgLogoImage from "../assets/images/background.png";
import ItemImage from "../assets/images/listitem1.jpg";
import BgImage from "../assets/images/bg.jpg";

import useWindow from "./useWindow";

import styles from "@/styles/Home.module.css";
const Main = () => {
  const [listToDisplay, setlistToDisplay] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);
  const { width } = useWindow();

  const renderList = useMemo(() => {
    console.log("renderList", width);
    if (width === "mobile") return listToDisplay.slice(0, 3);
    else if (width === "tab") return listToDisplay.slice(0, 6);
    else return listToDisplay;
  }, [width]);

  return (
    <main className={styles.main}>
      <Grid container className={styles.wrap}>
        {/* <div className={styles.mainImg}> */}
        <Image
          src={BgLogoImage}
          alt="bg-img"
          width={"100%"}
          className={styles.mainImg}
        />
        {/* </div> */}
        {/* <div className={styles.mainTitle}> */}
        <Grid item xs={12}>
          <Grid
            container
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent="center"
          >
            <div className={styles.outerWrapper}>
              {/* <div> */}
              <h2>The perfect night out in Glasgow !</h2>
              <h3>18 Candleriggs</h3>
              <h3>ON 14TH & 15TH FEB</h3>
              <button>Book Tickets</button>
              <p>3 course meal & show included $17 per person</p>
              {/* </div> */}
            </div>
          </Grid>
        </Grid>
        {/* </div> */}
      </Grid>
      <Grid margin={2} container alignItems="center" className={styles.heading}>
        <h2>What's On At Glasgow's Coolest Event Space</h2>
      </Grid>
      <Grid marginTop={2} container spacing={2}>
        {renderList.map((item) => {
          return (
            <Grid
              key={item}
              alignItems="center"
              marginBottom={2}
              xs={12}
              sm={6}
              md={4}
            >
              <div id={item} key={item} className={styles.outer}>
                <div className={styles.itemImg}>
                  <Image src={ItemImage} alt="bg-img" width={100} />
                </div>
                <div className={styles.desc}>
                  <h3>The Rocky Horror Tribute Show</h3>
                  <p>
                    The UK's Leading Premier tribute to the hit stage show and
                    classic 1975 film.
                  </p>
                  <p>
                    The Rocky Horror Show promises to be one of the most
                    enjoyable interactive theatre experiences you will ever see.
                    Join us for some spooky cocktails.
                  </p>
                  <button>Book Tickets</button>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
      <Grid margin={2} container alignItems="center" className={styles.heading}>
        <h2>Must See Events</h2>
      </Grid>
      <Grid container>
        <Image
          className={styles.bgImage}
          src={BgImage}
          alt="bg-img"
          width={"100%"}
        />
      </Grid>
      <footer>
        <Grid container className={styles.footer}>
          <div>
            <h2>Get Event Update</h2>
            <div className={styles.email}>
              <input type="text" placeholder="Enter Email Address" />
              <button>Submit</button>
            </div>
          </div>
          <div>
            <h3>Contact Us</h3>
            <div className={styles.contact}>
              <Icon component={MailIcon} />
              <p>events@18candleriggs.com</p>
            </div>
          </div>
        </Grid>
      </footer>
    </main>
  );
};

export default Main;
