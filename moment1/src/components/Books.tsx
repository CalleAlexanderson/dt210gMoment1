import BooksData from '../assets/books.json' // importerar json fil
import './Books.css'

function Books() {
    // skapar en array av objekt med title, series, rating och finished som fält, ger sen värdet från json datan som importerats
    const books: {title: string, series: string, rating: number, finished: boolean }[] = BooksData;
    return (
      <>
        <main>
            <div className='main-title'>
                <h2>Böcker</h2>
                <p>Mitt största fritidsintresse är att läsa och min favorit författare är Sarah J Maas. Jag äger alla hennes böcker och här är vad jag tycker om de:</p>
            </div>
            <div className='main-books'>
            {
                // loopar igenom listan med map, ger varje article index som key
                books.map((book, index)=> (
                    <article key={index}>
                        <h3>{book.title}</h3>
                        <p>Serie: {book.series}</p>
                        <p>Score: {book.rating}</p>
                        <p>Färdigläst: {book.finished ? "ja" : "nej"}</p>
                    </article>
                ))
            }
            </div>
        </main>
      </>
    )
  }
  
  export default Books