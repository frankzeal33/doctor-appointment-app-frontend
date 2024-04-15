import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';
import './notify.scss';
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Notify = () => {
  return (
    <section className="container header">
        <div className="notification">
            <h2>Notifications</h2>
            <Tabs>
                <TabList>
                    <Tab>Unseen</Tab>
                    <Tab>Seen</Tab>
                </TabList>

                <TabPanel>
                    <div className='buttons'>
                        <button>Mark all as seen</button>
                    </div>
                    <div className='msg'>
                        <Link to={`/appointments/:book_id`}><p>Your appointment has been approved</p></Link>
                        <FaEye size={20}/>
                    </div>
                    <div className='msg'>
                        <p>This message is from admin</p>
                        <FaEye size={20}/>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='buttons'>
                        <button>Delete all seen notifications</button>
                    </div>
                    <div className='msg'>
                        <Link to={`/appointments/:book_id`}><p>this is a read message</p></Link>
                        <MdDelete size={20}/>
                    </div>
                    
                </TabPanel>
            </Tabs>
        </div>
    </section>
  );
}

export default Notify;
