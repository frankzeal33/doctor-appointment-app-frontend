import  Doctor1 from '../../images/doctor1.png';
import  Doctor2 from '../../images/doctor2.jpg';
import  Doctor3 from '../../images/doctor3.jpg';
import { FaStar, FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Card from '../../components/Card';

const Booking = () => {
    const bookings = [
        {
            name: "Dr. khan franklin",
            image: Doctor1,
            category: "Dentist",
            time: '26th sept 2024 12:30 pm',
            rating: 4.2,
            review: 5,
            bookStatus: 'BOOKED'
        },
        {
            name: "Dr. David John",
            image: Doctor2,
            category: "Dentist",
            time: '26th sept 2024 12:30 pm',
            rating: 4.2,
            review: 5,
            bookStatus: 'CANCELLED'
        },
        {
            name: "Dr. Doe elshaddia",
            image: Doctor3,
            category: "Dentist",
            time: '26th sept 2024 12:30 pm',
            rating: 4.2,
            review: 5,
            bookStatus: 'BOOKED'
        }
    ]

  return (
    <section>
        <div className="container doctor-container header">
            <h2>My Appointments</h2>
            <div className="doctors">
                    {bookings.map(({name, image, category, time, rating, review, bookStatus}, index) => {
                        return (
                            <Link to={"/appointments/sdsdsd"} key={index}>
                                <Card>
                                    <div className="doctor">
                                        <div className="image">
                                            <img src={image} alt="" />
                                        </div>
                                        <h3>{name}</h3>
                                        <div className="buttons">
                                            <button className='category'>{category}</button>
                                            <div>
                                                <FaStar color='#ffb116' size={20}/>
                                                <span>{rating}({review})</span>
                                            </div>
                                        </div>
                                        <p>{time}</p>
                                        <div className="buttons">
                                            <button className={bookStatus === 'BOOKED' ? 'open' : 'closed'}>{bookStatus}</button>
                                            <button><FaEye size={20}/></button>
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        )})
                    }
            </div>
        </div>
    </section>
  );
}

export default Booking;

