import sliderImage1 from '../images/hero-1.png';
import sliderImage2 from '../images/hero-2.png';
import sliderImage3 from '../images/hero-3.png';
import sliderImage4 from '../images/hero-4.png';
import { Pagination, Autoplay, Mousewheel } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/mousewheel';

const HeroHeader = () => {

    const HeroSlider = [
        {
            title: "Let's help you take care of your health",
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, quisquam adipisci. Tenetur, minus earum deserunt excepturi dolores laborum alias rerum, atque, adipisci quam nam? Architecto, perferendis quibusdam. Incidunt sed magnam nesciunt sunt. Dolore commodi soluta assumenda architecto sunt provident iure numquam excepturi, optio deserunt, harum nulla eum quo quod, exercitationem vitae qui. Quod sunt tempore, unde labore cumque numquam laborum. Veniam ex eaque quod exercitationem amet enim reiciendis alias, illum, consectetur ut officiis.',
            image: sliderImage1,
            link: '/login'
        },
        {
            title: "Take care of yourself because it matters",
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, quisquam adipisci. Tenetur, minus earum deserunt excepturi dolores laborum alias rerum, atque, adipisci quam nam? Architecto, perferendis quibusdam. Incidunt sed magnam nesciunt sunt. Dolore commodi soluta assumenda architecto sunt provident iure numquam excepturi, optio deserunt, harum nulla eum quo quod, exercitationem vitae qui. Quod sunt tempore, unde labore cumque numquam laborum. Veniam ex eaque quod exercitationem amet enim reiciendis alias, illum, consectetur ut officiis.',
            image: sliderImage2,
            link: '/login'
        },
        {
            title: "Monitor your health to the fullest",
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, quisquam adipisci. Tenetur, minus earum deserunt excepturi dolores laborum alias rerum, atque, adipisci quam nam? Architecto, perferendis quibusdam. Incidunt sed magnam nesciunt sunt. Dolore commodi soluta assumenda architecto sunt provident iure numquam excepturi, optio deserunt, harum nulla eum quo quod, exercitationem vitae qui. Quod sunt tempore, unde labore cumque numquam laborum. Veniam ex eaque quod exercitationem amet enim reiciendis alias, illum, consectetur ut officiis.',
            image: sliderImage3,
            link: '/login'
        },
        {
            title: "Let's give you the best drugs for your health",
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, quisquam adipisci. Tenetur, minus earum deserunt excepturi dolores laborum alias rerum, atque, adipisci quam nam? Architecto, perferendis quibusdam. Incidunt sed magnam nesciunt sunt. Dolore commodi soluta assumenda architecto sunt provident iure numquam excepturi, optio deserunt, harum nulla eum quo quod, exercitationem vitae qui. Quod sunt tempore, unde labore cumque numquam laborum. Veniam ex eaque quod exercitationem amet enim reiciendis alias, illum, consectetur ut officiis.',
            image: sliderImage4,
            link: '/login'
        }
    ]

  return (
    <section className='container hero-container header'>
        <Swiper
            // install Swiper modules
            modules={[Pagination, Autoplay, Mousewheel]}
            autoplay={{
                delay: 2500,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
            }}
            direction={'horizontal'}
            mousewheel={{
                enabled: true,
                forceToAxis: true,
                sensitivity: 1,
                releaseOnEdges: true,
            }}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            >
                {HeroSlider.map((slider, index) => {
                        return (
                            <SwiperSlide key={index} className="slide">
                                <div className="slide-text">
                                    <h1>{slider.title}</h1>
                                    <p>{slider.desc}</p>
                                    <Link to={slider.link} className='btn'>Explore</Link>
                                </div>
                                <div className="slide-image">
                                    <img src={slider.image} alt="" />
                                </div>
                            </SwiperSlide> 
                        )
                    })}
                
        </Swiper>
    </section>
  );
}

export default HeroHeader;
