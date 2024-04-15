import  Doctor1 from '../../images/doctor1.png';
import '../bookinginfo/bookinginfo.scss';
import { FaStar } from "react-icons/fa";
import { useState } from 'react';
import { FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const DoctorInfo = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <section>
        <div className="container header booking">
            <div className='left-container'>
              <div className="booking-info">
                <div className="book-image">
                  <img src={Doctor1} alt="" />
                </div>
                <div className='brief-info'>
                  <h3>Dr. Khan Franklin</h3>
                  <button>DENTIST</button>
                  <div className='review'>
                    <FaStar color='#ffb116' size={20}/>
                    <span>3.4(5)</span>
                  </div>
                  <p>working days: monday-saturday</p>
                  <p>working hours: 8am - 8pm</p>
                  <div className='socials'>
                    <a href="https://facebook.com"><FaFacebookSquare /></a>
                    <a href="https://whatsapp.com"><FaWhatsappSquare /></a>
                    <a href="https://twitter.com"><FaSquareXTwitter /></a>
                  </div>
                </div>
              </div>
              <div className='contents'>
                <div className='tabs'>
                  <div className={`tab ${toggleState === 1 ? 'active-tab' : '' }`} onClick={() => toggleTab(1)}>ABOUT</div>
                  <div className={`tab ${toggleState === 2 ? 'active-tab' : '' }`} onClick={() => toggleTab(2)}>FEEDBACKS</div>
                  <div className={`tab ${toggleState === 3 ? 'active-tab' : '' }`} onClick={() => toggleTab(3)}>ADD REVIEW</div>
                </div>
                <div className="tab-content">
                  <div className={`content ${toggleState === 1 ? 'active-content' : '' }`}>
                    <h3>About of <span>Dr. Franklin Ojiego</span></h3>
                    <p className='about-desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatibus qui necessitatibus voluptatem. Ipsa totam ut asperiores aperiam deserunt ea minus adipisci accusantium nulla dolor voluptates delectus, molestiae libero voluptate id in officiis quaerat at molestias illo ratione. Labore iure incidunt possimus impedit hic velit, dolorem ex harum commodi molestias temporibus amet eveniet unde, ipsa adipisci explicabo magni quibusdam asperiores error ipsum fuga, corporis quia doloremque eligendi. Natus blanditiis culpa accusantium atque distinctio unde repellat asperiores ipsa dicta eveniet dolor earum libero sapiente quisquam quo, nam omnis porro enim cupiditate provident numquam pariatur temporibus ex. Distinctio voluptates architecto nostrum quibusdam.</p>
                    <div className="education">
                      <h3>EDUCATION</h3>
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
                  </div>
                  <div className={`content ${toggleState === 2 ? 'active-content' : '' }`}>
                    <h3>All Patients Review (10)</h3>
                    <div className="review">
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, incidunt.</p>
                      <div className='review-box'>
                        <div className='review-info'>
                          <div className="review-image">
                            <img src={Doctor1} alt="" />
                          </div>
                          <div>
                            <h4>John Doe</h4>
                            <small>12 march, 2024</small>
                          </div>
                        </div>
                        <div className="stars">
                          <FaStar style={{ stroke: "#ffb116", strokeWidth: "30", color: "#ffb116", marginLeft: ".2rem"}}  color='white' size={18}/>
                          <FaStar style={{ stroke: "#ffb116", strokeWidth: "30", color: "#ffb116", marginLeft: ".2rem"}}  color='white' size={18}/>
                          <FaStar style={{ stroke: "#ffb116", strokeWidth: "30", color: "#fff", marginLeft: ".2rem"}}  color='white' size={18}/>
                          <FaStar style={{ stroke: "#ffb116", strokeWidth: "30", color: "#fff", marginLeft: ".2rem"}}  color='white' size={18}/>
                          <FaStar style={{ stroke: "#ffb116", strokeWidth: "30", color: "#fff", marginLeft: ".2rem"}}  color='white' size={18}/> 
                        </div>
                      </div>
                    </div>
                    <div className="review">
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, incidunt.</p>
                      <div className='review-box'>
                        <div className='review-info'>
                          <div className="review-image">
                            <img src={Doctor1} alt="" />
                          </div>
                          <div>
                            <h4>John Doe</h4>
                            <small>12 march, 2024</small>
                          </div>
                        </div>
                        <div className="stars">
                          <FaStar style={{ stroke: "#ffb116", strokeWidth: "30", color: "#ffb116", marginLeft: ".2rem"}}  color='white' size={18}/>
                          <FaStar style={{ stroke: "#ffb116", strokeWidth: "30", color: "#ffb116", marginLeft: ".2rem"}}  color='white' size={18}/>
                          <FaStar style={{ stroke: "#ffb116", strokeWidth: "30", color: "#fff", marginLeft: ".2rem"}}  color='white' size={18}/>
                          <FaStar style={{ stroke: "#ffb116", strokeWidth: "30", color: "#fff", marginLeft: ".2rem"}}  color='white' size={18}/>
                          <FaStar style={{ stroke: "#ffb116", strokeWidth: "30", color: "#fff", marginLeft: ".2rem"}}  color='white' size={18}/>      
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`content ${toggleState === 3 ? 'active-content' : '' }`}>
                    <h3>Give Doctor a Star/Review</h3>
                    <form action="">
                      <textarea name="" id="" cols="30" rows="10"></textarea>
                      <div className="stars">
                        <FaStar style={{ stroke: "#ffb116", strokeWidth: "30", color: "#ffb116", marginRight: ".3rem", cursor: "pointer"}}  color='white' size={22}/>
                        <FaStar style={{ stroke: "#ffb116", strokeWidth: "30", color: "#ffb116", marginRight: ".3rem", cursor: "pointer"}}  color='white' size={22}/>
                        <FaStar style={{ stroke: "#ffb116", strokeWidth: "30", color: "#fff", marginRight: ".3rem", cursor: "pointer"}}  color='white' size={22}/>
                        <FaStar style={{ stroke: "#ffb116", strokeWidth: "30", color: "#fff", marginRight: ".3rem", cursor: "pointer"}}  color='white' size={22}/>
                        <FaStar style={{ stroke: "#ffb116", strokeWidth: "30", color: "#fff", marginRight: ".3rem", cursor: "pointer"}}  color='white' size={22}/>      
                      </div>
                      <button>ADD REVIEW</button>
                    </form>
                  </div>
                </div>
              </div>

            </div>
            <div className="right-container">
              <div className="booking-actions">
                <form>
                  <h3>TICKET PRICE: $200</h3>
                  <p>Choose Booking Day & Time</p>
                  <input type="date"/>
                  <input type="time" />
                  <button>CHECK AVAILABILITY</button>
                  <button>BOOK NOW</button>
                </form>
              </div>
              <div className="messages">
                <div className='message-header'>
                  <h3>Message from Doctor</h3>
                </div>
                <div className='message-body'>
                  <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, numquam!</p>
                    <h5>Doctor</h5>
                    <small>22nd sept 2024</small>
                  </div>
                  <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, numquam!</p>
                    <h5>Doctor</h5>
                    <small>22nd sept 2024</small>
                  </div>
                  <p style={{display: "grid", placeItems: "center", marginTop: "2rem" }}>No Messages</p>
                </div>
              </div>
            </div>

        </div>
    </section>
  );
}

export default DoctorInfo;
