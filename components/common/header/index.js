import React from 'react';
import styles from './index.module.css';
import { IoLogInOutline, IoCardOutline } from "react-icons/io5";

function Header() {

  const [click, setClick] = React.useState(false);
  const [scroll, setScroll] = React.useState(false);

  function changeCss() {
    var navElement = document.querySelector("nav");
    this.scrollY > 100 ? navElement.style.boxShadow = "0px 0px 10px 0px #2323234D" : navElement.style.boxShadow = 'none';
    this.scrollY > 100 ? navElement.style.transition = "all 0.3s ease-out" : navElement.style.transition = "all 0.3s ease-in";
    this.scrollY > 100 ? navElement.style.backgroundColor = "#FFFFFF" : navElement.style.backgroundColor = "#FFFFFF00";
    this.scrollY > 100 ? navElement.style.backgroundColor = "#FFFFFF" : navElement.style.backgroundColor = "#FFFFFF00";
  }

  const handleClick = () => setClick(!click);

  const Close = () => setClick(false);

  React.useEffect(() => {
    window.addEventListener("scroll", changeCss, false);
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  return (
    <div className={styles.header}>
      <div className={click ? styles.main_container : ""} onClick={() => Close()}>
        <nav className={scroll || click ? styles.on_scroll_navbar : styles.navbar} onClick={e => e.stopPropagation()}>
          <div className='container'>
            <div className={styles.nav_container}>
              <a href="/" className={scroll || click ? styles.on_scroll_nav_logo : styles.nav_logo}>
                <img src="https://img.majorkalshiclasses.com/images/file_1689026052689.svg" className="sg-logo-light" alt="MKC-Neet-Jee-Logo" />
              </a>
              <ul className={click ? styles.nav_mobile_menu : styles.nav_menu}>
                <li className={styles.nav_item}>
                  <a className={scroll || click ? `${styles.nav_links} ${styles.on_scroll}` : styles.nav_links} href="/about-us">About us</a>
                </li>
                <li className={styles.nav_item}>
                  <a className={scroll || click ? `${styles.nav_links} ${styles.on_scroll}` : styles.nav_links} href="/neet">Neet</a>
                </li>
                <li className={styles.nav_item}>
                  <a className={scroll || click ? `${styles.nav_links} ${styles.on_scroll}` : styles.nav_links} href="/jee">Jee</a>
                </li>
                <li className={styles.nav_item}>
                  <a className={scroll || click ? `${styles.nav_links} ${styles.on_scroll}` : styles.nav_links} href="/pre-foundation">Pre-Foundation</a>
                </li>
                <li className={styles.nav_item}>
                  <a className={scroll || click ? `${styles.nav_links} ${styles.on_scroll}` : styles.nav_links} href="/contact-us">Contact us</a>
                </li>
                <div className='mobile-view align-items-center'>
                  <div className={scroll || click ? `${styles.on_scroll_login_btn} ${styles.login_btn}` : styles.login_btn}>
                    <a href="#">
                      <IoLogInOutline size={24} />
                      <span>Login</span>
                    </a>
                  </div>
                  <div className={scroll || click ? `${styles.on_scroll_pay_now_btn} ${styles.pay_now_btn}` : styles.pay_now_btn}>
                    <a href="#">
                      <IoCardOutline size={24} />
                      <span>Pay Now</span>
                    </a>
                  </div>
                </div>
              </ul>
              <div className='web-view align-items-center'>
                <div className={scroll || click ? `${styles.on_scroll_login_btn} ${styles.login_btn}` : styles.login_btn}>
                  <a href="#">
                    <IoLogInOutline size={24} />
                    <span>Login</span>
                  </a>
                </div>
                <div className={scroll || click ? `${styles.on_scroll_pay_now_btn} ${styles.pay_now_btn}` : styles.pay_now_btn}>
                  <a href="#">
                    <IoCardOutline size={24} />
                    <span>Pay Now</span>
                  </a>
                </div>
              </div>
              <div className={click ? `${styles.nav_icon} ${styles.open}` : styles.nav_icon} onClick={handleClick}>
                <div className={scroll ? `${styles.menu_btn_burger} ${styles.menu_btn_on_scroll}` : styles.menu_btn_burger}></div>
              </div>
            </div>
          </div>
        </nav>
      </div >
    </div >
  );
}

export default Header;
