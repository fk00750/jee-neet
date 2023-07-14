import React, { useState } from 'react';
import styles from './index.module.css';
import { Button, Modal } from 'react-bootstrap';
import { CgArrowLongLeft } from 'react-icons/cg';
import EnquiryForm from '@/components/common/enquiry-form';

function HeroSection() {

  const [mobileNumber, setMobileNumber] = useState('');
  const [inputError, setInputError] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setMobileNumber('');
    setInputError('');
    setShow(false);
  };
  const handleShowStarterModal = () => {
    if (mobileNumber) {
      if (mobileNumber.length === 10) {
        setShow(true);
      } else {
        setInputError('Please enter valid mobile number.');
      }
    } else {
      setInputError('Please enter your mobile number.');
    }
  };

  return (
    <>
      <div className={styles.hero_wrapper}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-7'>
              <div className={styles.hero_info_box}>
                <div className={styles.hero_info}>
                  <h6 className='text-uppercase'>Better Learning Future With MKC</h6>
                  <h1 className='fw-bold'>The Best Institute for NEET/JEE Preparation</h1>
                  <p>MKC learning package that includes the best study material, library resources, advanced technology, doubt-clearing sessions, mentorship and more!</p>
                  <div className={styles.hero_enquiry}>
                    <input
                      className='form-control px-4 py-3'
                      placeholder='Enter Your Mobile Number'
                      onChange={(e) => {
                        setInputError(null);
                        setMobileNumber(e.target.value);
                      }}
                    />
                    <Button className='d-flex align-items-center px-4 py-3' onClick={() => handleShowStarterModal()}>
                      <CgArrowLongLeft size={24} />
                      <h5 className='fw-normal mb-0 ps-2'>Get Started</h5>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-5'>
              <div className={styles.hero_image}>
                <img src='http://img.majorkalshiclasses.com/images/file_1689030899738.png' className='img-fluid' />
                <div className={styles.hero_image_bg}>
                  <img src='http://img.majorkalshiclasses.com/images/file_1689032990473.png' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <div className='p-3'>
          <div className='pb-4'>
            <h4 className='mb-0 text-center'>Send Your Enquiry</h4>
          </div>
          <EnquiryForm
            mobileNumber={mobileNumber ? mobileNumber : null}
            buttonTitle="Submit"
            buttonClass="btn btn-primary w-100"
          />
        </div>
      </Modal>
    </>
  );
}

export default HeroSection;
