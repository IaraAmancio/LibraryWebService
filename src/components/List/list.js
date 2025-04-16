import './list.scss'
import { FaUser, FaBook, FaLink, FaComment } from "react-icons/fa";

const List = (props) => 
    props.book.map((book, index) => (
    <div key={index} className="card-book">
               <span className="title"><FaBook size={18} color="white"/> <strong>{book.title}</strong></span>
               <span className="author"><FaUser color="white"/> {book.author}</span>
               <span className="num_comments"><FaComment color="white"/> {book.num_comments} comments</span>
               <span className="link"><FaLink color="white"/> <a href={book.url}>{book.url}</a></span>
    </div>
    )
     )

export default List;