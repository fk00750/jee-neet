import React from 'react';
import SectionHead from '@/components/common/section-head';
import styles from './index.module.css';
import { GiLightBulb, GiTeacher, GiBookshelf } from 'react-icons/gi';
import { SiGoogleclassroom } from 'react-icons/si';
import { TbBoxAlignBottomRight } from 'react-icons/tb';
import { LuBrainCircuit } from 'react-icons/lu';
import { BsPatchQuestionFill } from 'react-icons/bs';
import { PiCubeFocusFill } from 'react-icons/pi';

function AdvantagesOfMKC() {
  return (
    <div className='section'>
      <div className='container'>
        <SectionHead
          subTitle="LET’S LEARN TOGETHER"
          title="Advantages of MKC"
          position="center"
        />
        <div className='row mt-5'>
          <div className='col-md-3 mt-4'>
            <div className={styles.info_card}>
              <GiLightBulb size={36} />
              <h5>Conceptual Classes</h5>
              <p>Lore Ipsum a simply dummy text of the printing</p>
            </div>
          </div>
          <div className='col-md-3 mt-4'>
            <div className={styles.info_card}>
              <GiTeacher size={36} />
              <h5>No.1 Faculty</h5>
              <p>Lore Ipsum a simply dummy text of the printing</p>
            </div>
          </div>
          <div className='col-md-3 mt-4'>
            <div className={styles.info_card}>
              <SiGoogleclassroom size={36} />
              <h5>Digital Classroom</h5>
              <p>Lore Ipsum a simply dummy text of the printing</p>
            </div>
          </div>
          <div className='col-md-3 mt-4'>
            <div className={styles.info_card}>
              <GiBookshelf size={36} />
              <h5>Study Material</h5>
              <p>Lore Ipsum a simply dummy text of the printing</p>
            </div>
          </div>
          <div className='col-md-3 mt-4'>
            <div className={styles.info_card}>
              <TbBoxAlignBottomRight size={36} />
              <h5>OMR Base Test</h5>
              <p>Lore Ipsum a simply dummy text of the printing</p>
            </div>
          </div>
          <div className='col-md-3 mt-4'>
            <div className={styles.info_card}>
              <LuBrainCircuit size={36} />
              <h5>CBT Based Test</h5>
              <p>Lore Ipsum a simply dummy text of the printing</p>
            </div>
          </div>
          <div className='col-md-3 mt-4'>
            <div className={styles.info_card}>
              <BsPatchQuestionFill size={36} />
              <h5>Doubt Clearing Session</h5>
              <p>Lore Ipsum a simply dummy text of the printing</p>
            </div>
          </div>
          <div className='col-md-3 mt-4'>
            <div className={styles.info_card}>
              <PiCubeFocusFill size={36} />
              <h5>Focus on Strategy</h5>
              <p>Lore Ipsum a simply dummy text of the printing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvantagesOfMKC;
