import React from 'react';
import styles from './index.module.css';
import LetUsHelp from '../let-us-help';
import { Image } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <LetUsHelp />
      <footer className={styles.footer}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div className={styles.footer_logo}>
                <Image
                  src="https://img.majorkalshiclasses.com/images/file_1689026052689.svg"
                  className='img-fluid'
                />
              </div>
              <p>Major Kalshi Classes, a renowned coaching institute for NEET and JEE exams, has recently launched its new website with the aim of providing a seamless and comprehensive online learning experience to aspiring medical and engineering students.</p>
            </div>
            <div className='col-md-8'>
              <div className='row'>
                <div className='col-md-4'>
                  <div>
                    <h5>Courses</h5>
                    <ul>
                      <li><a href="#">Neet</a></li>
                      <li><a href="#">Jee</a></li>
                      <li><a href="#">Pre-Foundation</a></li>
                    </ul>
                  </div>
                  <div>
                    <h5>Other Links</h5>
                    <ul>
                      <li><a href="#">Terms & Condition</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                    </ul>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div>
                    <h5>Quick Links</h5>
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About us</a></li>
                      <li><a href="#">Admissions</a></li>
                      <li><a href="#">Careers</a></li>
                      <li><a href="#">Blogs</a></li>
                    </ul>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div>
                    <h5>Contact Us</h5>
                    <div className='pt-2'>
                      <p className='mb-0'>Address</p>
                      <p className='mb-0 text-secondary'>105/244, Shapath Building, Tagore Town, Prayagraj, Uttar Pradesh - 211002</p>
                    </div>
                    <div className='pt-2'>
                      <p className='mb-0'>Phone</p>
                      <p className='mb-0 text-secondary'>(+91) 9696330033</p>
                    </div>
                    <div className='pt-2'>
                      <p className='mb-0'>Email</p>
                      <p className='mb-0 text-secondary'>support@majorkalshiclasses.com</p>
                    </div>
                    <div className='pt-2'>
                      <p className='mb-0'>Follow Us</p>
                      <div className={styles.social_media}>
                        <a href='#'>
                          <FaFacebookF />
                        </a>
                        <a href='#'>
                          <FaInstagram />
                        </a>
                        <a href='#'>
                          <FaLinkedinIn />
                        </a>
                        <a href='#'>
                          <FaTwitter />
                        </a>
                        <a href='#'>
                          <FaYoutube />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-dark mt-5'>
          <p className='mb-0 py-4 text-center text-white'>© 2023 Major Kalshi Classes. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
