import  Doctor1 from '../../images/doctor1.png';
import  Doctor2 from '../../images/doctor2.jpg';
import  Doctor3 from '../../images/doctor3.jpg';
import  Doctor4 from '../../images/doctor4.jpg';
import  Doctor5 from '../../images/doctor5.jpg';
import  Doctor6 from '../../images/doctor6.jpg';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import { IoGrid } from "react-icons/io5";
import { FaSearch, FaArrowRight  } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import './finddoctor.scss';
import { useState } from 'react';

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

const FindDoctor = () => {
    const categories = [
        {
            category: "DENTIST",
        },
        {
            category: "SURGEON",
        },
        {
            category: "THERAPIST",
        },
        {
            category: "CHEMOTERAPIST"
        },
        {
            category: "GYNACOLOGIST",
        },
        {
            category: "DENTIST",
        },
        {
            category: "SURGEON",
        },
        {
            category: "THERAPIST",
        },
        {
            category: "CHEMOTERAPIST"
        },
        {
            category: "GYNACOLOGIST",
        },
        {
            category: "SURGEON",
        },
        {
            category: "THERAPIST",
        },
        {
            category: "CHEMOTERAPIST"
        },
        {
            category: "GYNACOLOGIST",
        }
    ]

    const [toggleSpec, setToggleSpec] = useState(window.innerWidth > 1250 ? true : false);

    if(window.innerWidth <= 1250){
        if(toggleSpec){
            window.addEventListener("scroll", () => {
                setToggleSpec(false)
            })
        }
    }

    const removeNav = () => {
        if(window.innerWidth <= 1250){
            setToggleSpec(false)
        }
    }

  return (
    <section>
        <div className="container find-doctor-container header">
           {toggleSpec &&  <div className="side-category">
                <AiOutlineClose size={28} className="spec-close" onClick={() => setToggleSpec(!toggleSpec)}/>
                <ul>
                    {categories.map(({category}, index) => {
                       return <li key={index} onClick={removeNav}>{category}</li>
                    })}
                </ul>
            </div>}
            <div className='main'>
                <div className="search">
                    <IoGrid className='hamburger' onClick={() => setToggleSpec(prev => !prev)}/>
                    <div className='form'>
                        <form action="">
                            <input type="search" placeholder='Search Doctor' />
                            <button type='button'><FaSearch size={18}/></button>
                        </form>
                    </div>
                </div>
                <div className="find-doctors">
                    {doctors.map(({id, name, image, category, hospital, rating, review, bookStatus}) => {
                        return (
                            <Link to={`/doctor/${id}`} key={id}>
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
        </div>
    </section>
  );
}

export default FindDoctor;
