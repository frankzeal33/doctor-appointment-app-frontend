import  Doctor1 from '../images/doctor1.png';
import  Doctor2 from '../images/doctor2.jpg';
import  Doctor3 from '../images/doctor3.jpg';
import  Doctor4 from '../images/doctor4.jpg';
import  Doctor5 from '../images/doctor5.jpg';
import  Doctor6 from '../images/doctor6.jpg';
import { FaStar, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Card from './Card';

const HomeDoctors = () => {
    const doctors = [
        {
            id: 1,
            name: "Dr. khan franklin",
            image: Doctor1,
            category: "Dentist",
            hospital: 'St mathew hospital, lagos state',
            rating: 4.2,
            review: 5,
            bookStatus: 'OPEN'
        },
        {
            id: 2,
            name: "Dr. David John",
            image: Doctor2,
            category: "Dentist",
            hospital: 'St mathew hospital, New York',
            rating: 4.2,
            review: 5,
            bookStatus: 'CLOSED'
        },
        {
            id: 3,
            name: "Dr. Doe elshaddia",
            image: Doctor3,
            category: "Dentist",
            hospital: 'St mathew hospital, lagos state',
            rating: 4.2,
            review: 5,
            bookStatus: 'OPEN'
        },
        {
            id: 4,
            name: "Dr. David Frank",
            image: Doctor4,
            category: "Dentist",
            hospital: 'St mathew hospital, lagos state',
            rating: 4.2,
            review: 5,
            bookStatus: 'OPEN'
        },
        {
            id: 5,
            name: "Dr. mathilda Joseph",
            image: Doctor5,
            category: "SERGEON",
            hospital: 'St mathew hospital, lagos state',
            rating: 4.2,
            review: 5,
            bookStatus: 'OPEN'
        },
        {
            id: 6,
            name: "Dr. John frank",
            image: Doctor6,
            category: "CHEMOTERAPIST",
            hospital: 'St mathew hospital, lagos state',
            rating: 4.2,
            review: 5,
            bookStatus: 'OPEN'
        }
    ]

  return (
    <section>
        <div className="container doctor-container">
            <h2>Popular Doctors</h2>
            <div className="doctors">
                    {doctors.map(({id, name, image, category, hospital, rating, review, bookStatus}, index) => {
                        return (
                            <Link to={`/doctor/${id}`} key={index}>
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
                                        <p>{hospital}</p>
                                        <div className="buttons">
                                            <button className={bookStatus === "OPEN" ? 'open' : 'closed'}>{bookStatus}</button>
                                            <button><FaArrowRight size={20}/></button>
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

export default HomeDoctors;
