import { Link } from "react-router-dom";
import  Doctor1 from '../../images/doctor1.png';
import './blogitem.scss';

const BlogItem = () => {

  const blog = {
        id: 1,
        image: Doctor1,
        title: "How often should I exercise? How often should I exercise?,How often should I exercise?",
        desc: "Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum omnis ex, fuga temporibus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!",
        authorID: 2,
        authorAvatar: Doctor1,
        AuthorName: "john doe",
        CreatedOn: "12th sept 2023"
    }

  return (
   <section>
    <div className="container header">
      <div className="single-news">
        <div className="single-news-image">
          <img src={blog.image} alt="" />
        </div>
        <div className="news-text">
          <h3>{blog.title}</h3>
          <p>{blog.desc}</p>
          <Link to={`/doctor/${blog.authorID}`}>
            <div className='blog-author'>
              <div className="image">
                <img src={blog.authorAvatar} alt="" />
              </div>
              <div>
                <h4>{blog.AuthorName}</h4>
                <small>{blog.CreatedOn}</small>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
   </section>
  );
}

export default BlogItem;

