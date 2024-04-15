import  Doctor1 from '../../images/doctor1.png';
import '../bookinginfo/bookinginfo.scss';
import { useState } from 'react';
import {FaEdit, FaCheck} from 'react-icons/fa'

const Profile = () => {

  const [toggleState, setToggleState] = useState(1);
  const [toggleExperience, setToggleExperience] = useState(false);
  const [toggleEducation, setToggleEducation] = useState(false);
  const [isAvatarTouched, setIsAvatarTouched] = useState(false);

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <section>
        <div className="container header booking">
            <div className='left-container'>
              <div className="booking-info">
                <div className="book-image profile-image">
                  <img src={Doctor1} alt="" />
                  <form>
                    <input type="file" id='avatar' className='avatar-input' accept='png, jpg, jpeg'/>
                    <label htmlFor="avatar" onClick={() => setIsAvatarTouched(true)}><FaEdit className='change-img'/></label>
                    {isAvatarTouched && <button><FaCheck className='change-img img-light'/></button>}
                  </form>
                </div>
                <div className='brief-info'>
                  <h5>Role: Doctor</h5>
                  <h3>Dr. ikenna peace</h3>
                  <button>DENTIST</button>
                  <p>Email: frankzeal33@gmail.com</p>
                </div>
              </div>
              <div className='contents'>
                <div className='tabs'>
                  <div className={`tab ${toggleState === 1 ? 'active-tab' : '' }`} onClick={() => toggleTab(1)}>PROFILE</div>
                  <div className={`tab ${toggleState === 2 ? 'active-tab' : '' }`} onClick={() => toggleTab(2)}>PASSWORD</div>
                </div>
                <div className="tab-content">
                  <div className={`content ${toggleState === 1 ? 'active-content' : '' }`}>
                    <h3>Profile Information</h3>
                    <p className='info'>To get approved, please complete your profile. We will review, verify your documents and approve within 2 days.</p>
                    <form action="">
                      <div className="form-container">
                        <div className='input-field'>
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder='Name' />
                        </div>
                        <div className='input-field'>
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder='Email'/>  
                        </div>
                        <div className='input-field'>
                            <label htmlFor="">Gender:</label>
                            <select name="" id="">
                              <option value="">Male</option>
                              <option value="">Female</option>
                            </select>
                        </div>
                        <div className='input-field'>
                            <label htmlFor="">Phone Number</label>
                            <input type="text" placeholder='Phone Number'/>
                        </div>
                        <div className='input-field'>
                            <label htmlFor="">Blood Type</label>
                            <input type="text" placeholder='Examples: O, A+, A-, B+, B-, AB'/>
                        </div>
                        <div className='input-field'>
                            <label htmlFor="user-type">User Role</label>
                            <select name="" id="user-type">
                                <option value="">Patient</option>
                                <option value="">Doctor</option>
                            </select>
                        </div>
                        <div className='input-field'>
                            <label>Specialization</label>
                            <select name="" >
                                <option value="">Dentist</option>
                                <option value="">Surgeon</option>
                                <option value="">Chemoterapist</option>
                            </select>
                        </div>
                        <div className='input-field'>
                            <label>Working days</label>
                            <select name="" >
                                <option value="Everyday">Everyday</option>
                                <option value="Monday-Friday">Monday-Friday</option>
                                <option value="Monday-saturday">Monday-saturday</option>
                            </select>
                        </div>
                        <div className='input-field'>
                            <label htmlFor="">Working time: From</label>
                            <input type="time"/>
                        </div>
                        <div className='input-field'>
                            <label htmlFor="">Working time: To</label>
                            <input type="time"/>
                        </div>
                        <div className='input-field'>
                            <label htmlFor="">Ticket Price</label>
                            <input type="text" placeholder='Ticket Price in $'/>
                        </div>
                        <div className='input-field'>
                            <label htmlFor="">facebook link</label>
                            <input type="text" placeholder='https://facebook.com/profile'/>
                        </div>
                        <div className='input-field'>
                            <label htmlFor="">Whatsapp link</label>
                            <input type="text" placeholder='https://wa.link/number'/>
                        </div>
                        <div className='input-field'>
                            <label htmlFor="">Twitter link</label>
                            <input type="text" placeholder='https://twitter.com/profile'/>
                        </div>
                      </div>
                      <div className='button'>
                        <button className='btn'>UPDATE PROFILE</button>
                      </div>
                    </form>
                    <div className="education">
                      <h3>EDUCATION / QUALIFICATIONS</h3>
                      <div>
                        <div>
                          <h4>2016-2023</h4>
                          <h4>B.Sc degree in surgeon</h4>
                        </div>
                        <p>university of london, united kindom</p>
                      </div>
                      <div>
                        <div>
                          <h4>2016-2023</h4>
                          <h4>B.Sc degree in surgeon</h4>
                        </div>
                        <p>university of london, united kindom</p>
                      </div>
                    </div>
                    <form action="">
                      {toggleEducation ? <div className="form-container">
                          <div className='input-field'>
                              <label htmlFor="">From</label>
                              <input type="date" placeholder='Name' />
                          </div>
                          <div className='input-field'>
                              <label htmlFor="">To</label>
                              <input type="date" placeholder='Name' />
                          </div>
                          <div className='input-field'>
                              <label htmlFor="">Degree</label>
                              <input type="text" placeholder='Name' />
                          </div>
                          <div className='input-field'>
                              <label htmlFor="">University/School</label>
                              <input type="text" placeholder='Name' />
                          </div>
                          <div className='box input-field'>
                            <div className='img-preview'>
                              <img src={Doctor1} alt="" />
                            </div>
                            <input type="file" placeholder='Profile Photo' id='photo'/>
                            <label htmlFor="photo" className='photo'>Upload Certificate</label>
                          </div>
                      </div> : ""}
                      <div className='button'>
                        {!toggleEducation ? <label className='btn' onClick={() => setToggleEducation(true)}>ADD EDUCATION</label> :
                        <button className='btn'>ADD</button>}
                      </div>
                    </form>
                    <div className="experience">
                      <h3>EXPERIENCE</h3>
                      <div className='experience-boxes'>
                        <div className="box">
                          <h4>2016-2023</h4>
                          <h4>Associate surgeon</h4>
                          <p>St. andrew hospital, london</p>
                        </div>
                        <div className="box">
                          <h4>2016-2023</h4>
                          <h4>Associate surgeon</h4>
                          <p>St. andrew hospital, london</p>
                        </div>
                        <div className="box">
                          <h4>2016-2023</h4>
                          <h4>Associate surgeon</h4>
                          <p>St. andrew hospital, london</p>
                        </div>
                        <div className="box">
                          <h4>2016-2023</h4>
                          <h4>Associate surgeon</h4>
                          <p>St. andrew hospital, london</p>
                        </div>
                      </div>
                    </div>
                    <form action="">
                      {toggleExperience ? <div className="form-container">
                          <div className='input-field'>
                              <label htmlFor="">From</label>
                              <input type="date" placeholder='Name' />
                          </div>
                          <div className='input-field'>
                              <label htmlFor="">To</label>
                              <input type="date" placeholder='Name' />
                          </div>
                          <div className='input-field'>
                              <label htmlFor="">Position</label>
                              <input type="text" placeholder='Name' />
                          </div>
                          <div className='input-field'>
                              <label htmlFor="">Hospital</label>
                              <input type="text" placeholder='Name' />
                          </div>
                      </div> : ""}
                      <div className='button'>
                        {!toggleExperience ? <label className='btn' onClick={() => setToggleExperience(true)}>ADD EXPERIENCE</label> :
                        <button className='btn'>ADD</button>}
                      </div>
                    </form>
                    <div>
                      <h3>About Me</h3>
                      <form action="">
                        <textarea name="" id="" placeholder="Write about you" className='profile-about' cols="30" rows="10"></textarea>
                        <button>UPDATE ABOUT</button>
                      </form>
                    </div>
                  </div>
                  <div className={`content ${toggleState === 2 ? 'active-content' : '' }`}>
                    <h3>Change Login Password</h3>
                    <div>
                      <form action="">
                        <div className="form-container">
                          <div className='input-field'>
                            <label htmlFor="">Old Password</label>
                              <input type="password" placeholder='Password' /> 
                          </div>
                          <div className='input-field'>
                            <label htmlFor="">New Password</label>
                            <input type="password" placeholder='Password' /> 
                          </div>
                          <div className='input-field'>
                            <label htmlFor="">Confirm New Password</label>
                            <input type="password" placeholder='Confirm New Password' />
                          </div>
                        </div>
                        <div className='button'>
                          <button className='btn'>CHANGE PASSWORD</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="right-container">
              <div className="booking-actions">
                <button>LOG OUT</button>
                <button>DELETE ACCOUNT</button>
              </div>
            </div>
        </div>
    </section>
  );
}

export default Profile;
