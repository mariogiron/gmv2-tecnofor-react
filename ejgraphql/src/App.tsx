import { gql, useMutation, useQuery } from '@apollo/client'
import './App.css'

const ALL_BOOKS = gql`
  query{
    bookCount
    getAllBooks{
      name
      author
      editorial
    }
  }
`

const ADD_BOOK = gql`
mutation AddBook($name: String!, $author: String!, $isbn: String!, $publishDate: String!, $editorial: String!) {
  addBook(name: $name, author: $author, isbn: $isbn, publishDate: $publishDate, editorial: $editorial) {
    name
    isbn
    editorial
  }
}
`

function App() {

  const { data, loading, error } = useQuery(ALL_BOOKS);
  const [onCreateBook] = useMutation(ADD_BOOK);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>{error.message}</p>

  return (
    <>
      <p>Número de libros:{data.bookCount}</p>
      <button onClick={() => onCreateBook({
        variables: {
          name: 'Libro chachi', author: 'Mario', isbn: '112129990', editorial: 'Anaya', publishDate: '2024'
        }
      })}>Crea nuevo libro</button>
      <div className="libros">
        {data.getAllBooks.map((book: any) => (
          <div>
            <h3>{book.name}</h3>
            <p>Autor: {book.author}</p>
            <p>Editorial: {book.editorial}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
