const library = [];

const DEFAULT = [
    {name: "Fight Club", pages: "224", isRead: true, author: "Chuck Palahniuk"},
    {name: "The Witcher: The Last Wish", pages: "288", isRead: true, author: "Andrzej Sapkowski"}
]

function Book(title, pages, isRead, author) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.id = crypto.randomUUID();
};

function addBookToLibrary(title, pages, isRead, author) {
    const book = new Book(title, pages, isRead, author);
    library.push(book);
};

