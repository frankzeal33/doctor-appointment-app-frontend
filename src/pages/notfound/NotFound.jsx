import { Link } from "react-router-dom"
import "./pagenotfound.scss"
import NotFoundImg from "../../images/not Found.gif"

export const NotFound = () => {
  return (
    <section>
        <div className="container header">
            <div className="notfound-container">
                <img src={NotFoundImg} alt="" />
                <h2>Page Not Found</h2>
                <Link to={"/"} className="btn">Go Back To Home Page</Link>
            </div>
        </div>
    </section>
  )
}
