import { Link } from "react-router-dom";
import  Doctor1 from '../../images/doctor1.png';
import './blog.scss';
import { shortenText } from '../../utils/shortText';

const Blog = () => {

  const blogs = [
    {
        id: 1,
        image: Doctor1,
        title: "How often should I exercise? How often should I exercise?,How often should I exercise?",
        desc: "Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum omnis ex, fuga temporibus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!",
        authorID: 2,
        authorAvatar: Doctor1,
        AuthorName: "john doe",
        CreatedOn: "12th sept 2023"
    },
    {
      id: 2,
      image: Doctor1,
      title: "How often should I exercise?",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quos nulla hic consequatur iste asperiores nisi magni quibusdam! Ducimus enim accusantium sequi alias veritatis quisquam corporis, rem a hic provident perspiciatis illo sapiente! Possimus quas ducimus illum hic maxime dolores amet perferendis vero culpa tempora ullam nostrum ipsum porro similique officiis quasi facere, pariatur animi quod error temporibus fugiat iure cumque sit? Sequi mollitia, modi adipisci consequuntur itaque aut nostrum beatae corporis voluptas assumenda perspiciatis earum illum commodi enim cumque optio architecto, error sed sint dolorem quae necessitatibus. Error natus ab necessitatibus eius itaque voluptas, ex voluptate laudantium doloremque, iure ipsum ipsa culpa, aliquid quisquam magnam facere earum? Voluptates dolores vero eveniet doloremque pariatur quae provident, voluptatem harum nihil magnam.",
      authorID: 2,
      authorAvatar: Doctor1,
      AuthorName: "john doe",
      CreatedOn: "12th sept 2023"
    },
    {
      id: 3,
      image: Doctor1,
      title: "How often should I exercise?",
      desc: "Cri culpa inventore ut similique repellendus perferendis sint!",
      authorID: 2,
      authorAvatar: Doctor1,
      AuthorName: "john doe",
      CreatedOn: "12th sept 2023"
    }, 
    {
      id: 4,
      image: Doctor1,
      title: "How often should I exercise?",
      desc: "Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum omnis ex, fuga temporibus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!",
      authorID: 2,
      authorAvatar: Doctor1,
      AuthorName: "john doe",
      CreatedOn: "12th sept 2023"
    }
]

  return (
   <section>
    <div className="container header">
      <div className="news-container">
        {
          blogs.map(({id, image, title, desc, authorID, authorAvatar, AuthorName, CreatedOn}) => { return(
            <div className="news" key={id}>
              <div className="thumbnail-image">
                <img src={image} alt="" />
              </div>
              <div className="news-text">
                <Link to={"/blog/sdsdsd"}><h3>{shortenText(title, 70)}</h3></Link>
                <p>{shortenText(desc, 200)} {desc.length > 200 ? <Link className="link" to={"/blog/sdsdsd"}>Read More</Link> : null}</p>
                <Link to={`/doctor/${authorID}`}>
                  <div className='blog-author'>
                    <div className="image">
                      <img src={authorAvatar} alt="" />
                    </div>
                    <div>
                      <h4>{AuthorName}</h4>
                      <small>{CreatedOn}</small>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )})
        }
      </div>
    </div>
   </section>
  );
}

export default Blog;

