import React, { useState } from 'react';
import styles from './index.module.css';
import { Modal } from 'react-bootstrap';
import SectionHead from '@/components/common/section-head';
import { PiStudentFill } from 'react-icons/pi';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { CgArrowLongRight } from 'react-icons/cg';
import { IoClose, IoPlay } from 'react-icons/io5';

function AboutUs() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={`section bg-light ${styles.about_wrapper}`}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className={styles.about_hero_img}>
              <img src="https://img.majorkalshiclasses.com/images/file_1689168062173.jpeg" />
              <img src="http://img.majorkalshiclasses.com/images/file_1689167671811.jpeg" />
              <div className={styles.about_play}>
                <button onClick={() => handleShow()}>
                  <IoPlay size={28} />
                </button>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <SectionHead
              subTitle="ABOUT US"
              title="The highest result of education is tolerance"
            />
            <div className={styles.about_inner}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc null liobortis nibh porttitor. Facilisi arcu, nibh vel risus, morbi pharetra. Facilisi sit miam mauris non iaculis elit fusce amet nunc in odio molestie.
              </p>
              <div className='row'>
                <div className='col-md-6'>
                  <div className={styles.about_feature}>
                    <div className={styles.ab_icon}>
                      <PiStudentFill size={32} color='#ffffff' />
                    </div>
                    <div className={styles.ab_info}>
                      <h4>Flexible Classes</h4>
                      <p>There are many variations of passages of the Ipsum available for now</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className={styles.about_feature}>
                    <div className={styles.ab_icon}>
                      <MdOutlineSupportAgent size={32} color='#ffffff' />
                    </div>
                    <div className={styles.ab_info}>
                      <h4>Educator Support</h4>
                      <p>There are many variations of passages of the Ipsum available for now</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.more_btn} mt-5`}>
                <a href="" className='btn btn-primary'>
                  <div className='d-flex align-items-center p-2'>
                    <h5 className='fw-normal mb-0 pe-2'>Learn More</h5>
                    <CgArrowLongRight size={24} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        contentClassName="bg-transparent border-0"
        size="lg"
      >
        <div
          className="video"
          style={{
            position: "relative",
            paddingBottom: "56.25%" /* 16:9 */,
            paddingTop: 25,
            height: 0
          }}
        >
          <iframe
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}
            src={`https://www.youtube.com/embed/ZAJdA8fOHIo?autoplay=1`}
            allow="autoplay; encrypted-media"
          />

          <button className={styles.close_btn} onClick={handleClose}>
            <IoClose size={24} color='white' />
          </button>
        </div>
      </Modal>

    </div>
  );
}

export default AboutUs;
