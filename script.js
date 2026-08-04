const library = [];

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
