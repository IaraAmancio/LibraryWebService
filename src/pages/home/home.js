import React, { useEffect, useState } from "react";
import './home.scss'
import { BsSearch } from "react-icons/bs";
import Header from '../../components/Header/header.js'
import List from "../../components/List/list.js";
import { UsePagination } from "../../hook/usePagination.js";


const Book = {
    author: "",
    children: [],
    created_at: "",
    created_at_i: 0,
    num_comments: 0,
    objectID: "",
    points: 0,
    story_id: 0,
    title: "",
    updated_at: "",
    url: "",
    _highlightResult: {
      author: {
        matchLevel: "",
        matchedWords: [],
        value: "",
      },
      title: {
        fullyHighlighted: false,
        matchLevel: "",
        matchedWords: [],
        value: "",
      },
      url: {
        matchLevel: "",
        matchedWords: [],
        value: "",
      },
    },
    _tags: [],
  };
  

const Home = () => {

    const [books, setBooks] = useState([]);
    const [inputBook, setInputBook] = useState('')
    const [lastSearch, setLastSearch] = useState(localStorage.getItem('search') || '')

    const searchedFilter = books.filter((book) => {
        return book.title!== undefined? book.title.toLocaleLowerCase().includes(inputBook.toLocaleLowerCase()):''
    })

    const {actualPage, totalPages, handleBackPage, handleNextPage, getItensPage} = UsePagination(searchedFilter, 10);
    
    
    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL)
        .then(data => {
            return data.json()
        }).then(
            post => { 
                const allbooks = post.hits.map((book) => book)
                console.log(allbooks)
                setBooks(allbooks)
        }
    )
        setInputBook(lastSearch)
    }, [])   


    useEffect(() => {
        localStorage.setItem('search', inputBook)
    }, [inputBook])


   


    function handleShow() {
        setLastSearch(inputBook)
    }

        return(
            <div className="container">
                <Header/>

                <div className="section-search">
                        <div className="input-search">
                            <input
                                type="text"
                                value={inputBook}
                                onChange={(e) => {setInputBook(e.target.value)}                        
                                }
                                placeholder="Qual livro você está procurando?"
                            />
                            
                            <button className="search" onClick={handleShow}><BsSearch size={25}/></button>   
                        </div>
                        
                        <div className="section-last-search">
                            {lastSearch !== ''? <div className="last-input"><p>Pesquisa mais recente: </p>              
                                    <button onClick={(e) => {
                                    setInputBook(`${lastSearch}`)
                                    }}>{lastSearch}</button></div>:" "}
                        </div>      
                </div>

                <div className="section-book">
                    {searchedFilter.length === 0? <p>Nenhum resultado! </p>: <List book={getItensPage()}/>
                    }   
                </div>        

                 <div className="section-pagination">
                    <button
                        type="button"
                        onClick={handleBackPage}
                        disabled={actualPage === 1}
                    >
                        Voltar
                    </button>

                    <p>PÁGINA {actualPage} DE {totalPages}</p>
                    
                    <button
                        type="button"
                        onClick={handleNextPage}
                        disabled={actualPage === totalPages}
                    >
                        Avançar
                    </button>
                </div>     
                                        
            </div>
        )
}

export default Home;
