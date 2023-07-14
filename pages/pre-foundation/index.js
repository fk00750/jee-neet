
import React from 'react';
import styles from './index.module.css';
import HeroHead from '@/components/common/hero-head';
import { Table, Image } from 'react-bootstrap';
import EnquiryForm from '@/components/common/enquiry-form';

function JeePreparation() {
  return (
    <>
      <HeroHead
        title='PRE-FOUNDATION'
        subTitle='Major Kalshi Classes is the best coaching for Pre-Foundation preparation'
        position='center'
      />
      <div className='section bg-light shadow'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <div className='card shadow-sm border-0 py-3 px-4'>
                <h4 className='fw-bold'>Overview</h4>
                <div className='content mt-2'>
                  <p>
                    NEET 2024 Eligibility
                    Read below the primary eligibility criteria required to sit in NEET UG 2024.The minimum age requirement to appear 17 years during admission or before December 31, 2024. Therefore, students born on or after December 31, 2006, upper age limit for General category candidates is 25 years, and for other categories, it is 30 years.Applicants must have passed Class 12 in PCB and English from a recognised board with a minimum of 50% marks, while 40% for OBC/SC/ST should be Indian Nationals, NRIS, OCIS, PIOS or Foreign Nationals. categories.Students in NEET 2024 is are eligible. The of the general category it is 45% for PWD and 40% for OBC/SC/ST categories. Students should be Indian Nationals,NRIs,OCIs, PIOs or Foreign Nationals.
                  </p>
                </div>
              </div>
              <div className='card shadow-sm border-0 py-3 px-4 mt-3'>
                <h4 className='fw-bold'>Exam Pattern Overview</h4>
                <div className='content mt-2'>
                  <p>
                    NEET(UG) exam pattern is given below :
                  </p>
                  <Table striped="columns" bordered responsive>
                    <thead>
                      <tr>
                        <th>Particulars</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Exam Mode</td>
                        <td>offline</td>
                      </tr>
                      <tr>
                        <td>Exam Duration</td>
                        <td>3 hours 20 minutes</td>
                      </tr>
                      <tr>
                        <td>Question paper type</td>
                        <td>Multiple Choice Question (MCQs)</td>
                      </tr>
                      <tr>
                        <td>Total number of questions that will be asked</td>
                        <td>200 (180 applicable questions for attempt)</td>
                      </tr>
                      <tr>
                        <td>Total Marks</td>
                        <td>720</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className='card shadow-sm border-0 py-3 px-4 mt-3'>
                <h4 className='fw-bold'>Latest Exam Pattern</h4>
                <div className='content mt-2'>
                  <Table striped="columns" bordered responsive>
                    <thead>
                      <tr>
                        <th>Subjects</th>
                        <th>Sections</th>
                        <th>Marks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Physics</td>
                        <td>
                          <div>
                            Section A: 35 questions
                          </div>
                          <div>
                            Section B: 15 questions
                          </div>
                        </td>
                        <td>
                          <div>
                            Section A: 140
                          </div>
                          <div>
                            Section B: 40
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Chemistry</td>
                        <td>
                          <div>
                            Section A: 35 questions
                          </div>
                          <div>
                            Section B: 15 questions
                          </div>
                        </td>
                        <td>
                          <div>
                            Section A: 140
                          </div>
                          <div>
                            Section B: 40
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Botany</td>
                        <td>
                          <div>
                            Section A: 35 questions
                          </div>
                          <div>
                            Section B: 15 questions
                          </div>
                        </td>
                        <td>
                          <div>
                            Section A: 140
                          </div>
                          <div>
                            Section B: 40
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Zoology</td>
                        <td>
                          <div>
                            Section A: 35 questions
                          </div>
                          <div>
                            Section B: 15 questions
                          </div>
                        </td>
                        <td>
                          <div>
                            Section A: 140
                          </div>
                          <div>
                            Section B: 40
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className='card shadow-sm border-0 py-3 px-4 mt-3'>
                <h4 className='fw-bold'>NEET Marking Scheme</h4>
                <div className='content mt-2'>
                  <ul className='p-0'>
                    <li>
                      - Every question in the NEET UG will carry 4 marks
                    </li>
                    <li>
                      - Each correct answer will fetch 4 marks
                    </li>
                    <li>
                      - For each incorrect response, there will be a one-mark deduction
                    </li>
                    <li>
                      - If there is more than one correct answer to a question, then all/any one will be considered correct
                    </li>
                    <li>
                      - Any un-attempted or unanswered question will not receive any marks
                    </li>
                    <li>
                      - Candidates will be awarded 4 marks in case a question is dropped, irrespective of whether the question was attempted or not
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card shadow-sm border-0 py-3 px-3'>
                <EnquiryForm
                  buttonTitle="Send"
                  buttonClass="btn btn-primary w-100"
                />
              </div>
              <div className='mt-3'>
                <Image
                  src="https://img.majorkalshiclasses.com/images/file_1683660348905.jpg"
                  className='img-fluid w-100'
                  rounded
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JeePreparation;
