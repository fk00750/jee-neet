import React from 'react';
import styles from './index.module.css';
import HeroHead from '@/components/common/hero-head';
import { Table, Image } from 'react-bootstrap';
import EnquiryForm from '@/components/common/enquiry-form';

function JeePreparation() {
  return (
    <>
      <HeroHead
        title='JEE'
        subTitle='Major Kalshi Classes is the best coaching for JEE preparation'
        position='center'
      />
      <div className='section bg-light shadow'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <div className='card shadow-sm border-0 py-3 px-4'>
                <h4 className='fw-bold'>Schedule of Exam</h4>
                <div className='content mt-2'>
                  <Table striped bordered responsive>
                    <thead>
                      <tr>
                        <th>Exam</th>
                        <th>Notification</th>
                        <th>Exam Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>JEE Main - (I)</td>
                        <td>December</td>
                        <td>January</td>
                      </tr>
                      <tr>
                        <td>JEE Main - (II)</td>
                        <td>February</td>
                        <td>April</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className='card shadow-sm border-0 py-3 px-4 mt-3'>
                <h4 className='fw-bold'>Exam Scheme</h4>
                <div className='content mt-2'>
                  <Table striped bordered responsive>
                    <thead>
                      <tr>
                        <th>Paper</th>
                        <th>Subjects</th>
                        <th>Type of Questions</th>
                        <th>Mode of Examination</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Paper 1: B.E/B.Tech</td>
                        <td>
                          Mathematics<br />
                          Physics<br />
                          Chemistry
                        </td>
                        <td>Objective Type Multiple Choice Questions (MCQs) and Questions for which the answer is a numerical value, with equal weightage to Mathematics, Physics, and Chemistry</td>
                        <td>Computer Based Test (CBT) mode only</td>
                      </tr>
                      <tr>
                        <td>Paper 2A: B. Arch</td>
                        <td>
                          Part-I: Mathematics<br />
                          Part-II: Aptitude Test<br />
                          Part-III: Drawing Test
                        </td>
                        <td>
                          Part-I: Objective Type Multiple Choice Questions (MCQ) and Questions for which the answer is a numerical value<br />
                          Part-II: Objective Type Multiple Choice Questions (MCQs)<br />
                          Part-III: Questions to test drawing Pen and Paper Based (offline) mode to be
                        </td>
                        <td>
                          Part-I: Computer Based Test (CBT) mode only<br />
                          Part-II: Computer Based Test (CBT) mode only<br />
                          Part-III: Pen and Paper Based (offline) mode to be attempted on a Drawing sheet of A4 size
                        </td>
                      </tr>
                      <tr>
                        <td>Paper 28: B. Planning</td>
                        <td>
                          Part-I: Mathematics<br />
                          Part-II: Aptitude Test<br />
                          Part-III: Planning-Based<br />
                          Questions
                        </td>
                        <td>
                          Part-I: Objective Type Multiple Choice Questions (MCQ) and Questions for which the answer is a numerical value<br />
                          Part-II: Objective Type Multiple Choice Questions (MCQs)<br />
                          Part-III: Objective Type Multiple Choice Questions (MCQs)
                        </td>
                        <td>
                          Part-I: Computer Based Test (CBT) mode only<br />
                          Part-II: Computer Based Test (CBT) mode only<br />
                          Part-III: Computer Based Test (CBT) mode only<br />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className='card shadow-sm border-0 py-3 px-4 mt-3'>
                <h4 className='fw-bold'>Exam Pattern</h4>
                <div className='content mt-2'>
                  <Table striped bordered responsive>
                    <thead>
                      <tr>
                        <th>Subject</th>
                        <th>Section A</th>
                        <th>Section B</th>
                        <th>Marks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Mathematics</td>
                        <td>20*</td>
                        <td>10*</td>
                        <td>100</td>
                      </tr>
                      <tr>
                        <td>Physics</td>
                        <td>20*</td>
                        <td>10*</td>
                        <td>100</td>
                      </tr>
                      <tr>
                        <td>Chemistry</td>
                        <td>20*</td>
                        <td>10*</td>
                        <td>100</td>
                      </tr>
                      <tr>
                        <th colSpan={3} className='text-center'>90</th>
                        <th>300</th>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className='card shadow-sm border-0 py-3 px-4 mt-3'>
                <h4 className='fw-bold'>Marking Scheme</h4>
                <div className='content mt-2'>
                  <Table striped bordered responsive>
                    <thead>
                      <tr>
                        <th colSpan={2}>Marking Scheme for MCQs</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Correct Answer or the Most Appropriate Answer</td>
                        <td>Four marks (+4)</td>
                      </tr>
                      <tr>
                        <td>Unanswered / Marked for Review</td>
                        <td>No marks (-1)</td>
                      </tr>
                      <tr>
                        <td>Incorrect Answer</td>
                        <td>Minus one mark (-1)</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div className='content mt-2'>
                  <Table striped bordered responsive>
                    <thead>
                      <tr>
                        <th colSpan={2}>Marking Scheme for questions for which the answer is a Numerical Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Correct Answer</td>
                        <td>Four marks (+4)</td>
                      </tr>
                      <tr>
                        <td>Unanswered / Marked for Review</td>
                        <td>No marks (-1)</td>
                      </tr>
                      <tr>
                        <td>Incorrect Answer</td>
                        <td>Minus one mark (-1)</td>
                      </tr>
                    </tbody>
                  </Table>
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
