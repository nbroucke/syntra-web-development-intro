class LibrarySection {
  constructor() {
    this.books = [];
  } // return all books that have a term somewhere in the title

  search(term) {
    return this.books.filter((book) =>
      book.title.toLowerCase().includes(term.toLowerCase())
    );
  } // getter to return all books

  get all() {
    return this.books;
  } // return all available books: inStock is more than borrowed

  get available() {
    return this.books.filter((book) => book.inStock > 0);
  } // return all borrowed books: borrowed bigger than 0

  get borrowed() {
    return this.books.filter((book) => book.borrowed > 0);
  } // borrow book

  borrow(isbn) {
    this.books = this.books.map((book) => {
      if (book.ISBN === isbn) book.borrowed++;
      return book;
    });
  }
}

class DramaSection extends LibrarySection {
  constructor() {
    super();
    this.books = [
      {
        title: "50 shades of Gray",
        author: "Vertongen",
        ISBN: 12543,
        inStock: 20,
        bookPlacement: "Drama|200|1",
        borrowed: 0,
        cover:
          "https://kbimages1-a.akamaihd.net/f16e3461-030b-41c0-aed5-03e1a54c3dea/1200/1200/False/design-a-book-cover.jpg",
        desc: "This is a book about 50 shades of gray",
      },
    ];
  }
}

class Library {
  constructor() {
    const dramaBooks = new DramaSection();
    const state = { books: dramaBooks.all };

    this.state = new Proxy(state, { set: this.update });
    this.bookList = new BookList(this.state);
  }

  update(prevState, property, value) {
    if (property === "books") {
      this.bookList.render();
    }
  }
}

class BookList {
  //based on the state from the library, we hsow the books
  constructor(state) {
    console.log(state);
    //select the element in the Dom and append some books
    this.bookContainer = document.querySelector(".books");
    console.log(this.bookContainer);
    state.books.forEach((book) => {
      const bookInstance = new Book(book);
      this.bookContainer.appendChild(bookInstance.el);
    });
  }
}

//responsible for shape of a book in the application (html)
class Book {
  constructor(book) {
    this.book = book;
  }
  get el() {
    this.#htmlToElement(this.#bookCard);
  }

  #htmlToElement(htmlstring) {
    const template = document.createElement("template");
    htmlstring = htmlstring.trim;
    template.innerHTML = htmlstring;
    return template.content.firstChild;
  }

  #bookCard() {
    const x = `<article class="book"> 
              <img src="${this.book.cover}"/> 
              <section> 
                  <h3>${this.book.title}</h3>
              </section> 
            </article>`;
    console.log("dit is x", x);
    return x;
  }
}

const app = new Library();

//
//
//
//
//
//

class FantasySection extends LibrarySection {
  #app;

  constructor() {
    super();
    // this.#app = app;
    // accessing this array directly will lead to CONFUSION
    this._books = [
      {
        title: "Another Book",
        author: "Raymond E. Feist",
        ISBN: 4029,
        inStock: 20,
        bookPlacement: "Fantasy|200|1",
        reading: 0,
        borrowed: 0,
        returned: 0,
        cover: "https://img.fruugo.com/product/4/85/75541854_max.jpg",
        desc: "This is a very long description detailing the book plot.",
      },
      {
        title: "The Magician",
        author: "Raymond E. Feist",
        ISBN: 4030,
        inStock: 20,
        bookPlacement: "Fantasy|200|1",
        reading: 0,
        borrowed: 0,
        returned: 0,
        cover: "https://img.fruugo.com/product/4/85/75541854_max.jpg",
        desc: "This is a very long description detailing the book plot.",
      },
      {
        title: "The Magician",
        author: "Raymond E. Feist",
        ISBN: 4031,
        inStock: 18,
        bookPlacement: "Fantasy|200|1",
        reading: 0,
        borrowed: 20,
        returned: 0,
        cover: "https://img.fruugo.com/product/4/85/75541854_max.jpg",
        desc: "This is a very long description detailing the book plot.",
      },
    ];
  }
}

class UI {
  #htmlToElement(htmlString) {
    const template = document.createElement("template");
    htmlString = htmlString.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = htmlString;
    return template.content.firstChild;
  }

  append(selector, html) {
    const article = this.#htmlToElement(html);
    return document.querySelector(selector).append(article);
  }

  bookCard(book) {
    return `
    <article class="book">
      <img src="${book.cover}" />
      <section>
        <h3>${book.title}</h3>
        <h5>${book.author}</h5>
        <p>${book.desc}</p>
        <section>
          <p>In Stock: <b>${book.inStock}</b></p>
          <button class="collect" data-id="${book.ISBN}">Collect</button>
          <button class="return" data-id="${book.ISBN}">Return</button>
        </section>
      </section>
    </article>
    `;
  }
}

class App {
  #fantasySection;
  #UI;
  constructor() {
    this.#fantasySection = new FantasySection();
    this.#UI = new UI();
  }
  bootstrap() {
    const books = this.#fantasySection.all;
    books.forEach((book) => this.#UI.append(".books", this.#UI.bookCard(book)));
    console.log(books);
  }
}

//const app = new App();
//app.bootstrap();
