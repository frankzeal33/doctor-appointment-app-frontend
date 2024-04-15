import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import LoginImg from '../../images/Mobile login.gif';
import './login.scss';
import Doctor from "../../images/doctor1.png";

const Login = () => {
  return (
    <section className="container header">
        <div className="login-container">
            <div className='image'>
                <img src={LoginImg} alt="" />
            </div>
            <div className='card'>
                <Tabs>
                    <TabList>
                        <Tab>Login</Tab>
                        <Tab>Register</Tab>
                    </TabList>

                    <TabPanel>
                        <form action="">
                            <h4>Welcome Back</h4>
                            <div className='input-field'>
                                <input type="email" placeholder='Email'/>
                            </div>    
                            <div className='input-field'>
                                <input type="password" placeholder='Passsword' />
                            </div>
                            <div>
                                <button className='btn'>LOG IN</button>  
                            </div>
                            
                        </form>
                    </TabPanel>
                    <TabPanel>
                        <form action="">
                            <h4>Appointment Starts Here</h4>
                            <div className='input-field'>
                                <input type="text" placeholder='Name' />
                            </div>
                            <div className='input-field'>
                                <input type="email" placeholder='Email'/>  
                            </div>
                            <div className='box'>
                                <label htmlFor="">Gender:</label>
                                <div>
                                    <input type="radio" name='gender' id='male' value="male"/>
                                    <label htmlFor="male" className='space'>Male</label>
                                </div>
                                <div>
                                    <input type="radio" name='gender' id='female' value="female"/>
                                    <label htmlFor="female" className='space'>Female</label>
                                </div>
                            </div>
                            <div className='input-field'>
                                <input type="text" placeholder='Phone Number'/>
                            </div>
                            <div className='box'>
                                <label htmlFor="user-type">What are you?</label>
                                <select name="" id="user-type">
                                    <option value="">Patient</option>
                                    <option value="">Doctor</option>
                                </select>
                            </div>
                            <div className='box'>
                                <div className='img-preview'>
                                    <img src={Doctor} alt="" />
                                </div>
                                <input type="file" placeholder='Profile Photo' id='photo'/>
                                <label htmlFor="photo" className='photo'>Upload Profile Photo</label>
                            </div>
                            <div className='input-field'>
                                <input type="password" placeholder='Password' /> 
                            </div>
                            <div className='input-field'>
                                <input type="password" placeholder='Confirm Password' />
                            </div>
                            <div>
                                <button className='btn'>REGISTER</button>
                            </div>
                        </form>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    </section>
  );
}

export default Login;
