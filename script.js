const library = [];

const DEFAULT = [
    {title: "Fight Club", pages: "224", isRead: true, author: "Chuck Palahniuk"},
    {title: "The Witcher: The Last Wish", pages: "288", isRead: false, author: "Andrzej Sapkowski"}
];

const container = document.querySelector('.container');

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

library.push(...DEFAULT);

library.forEach(book => {
    const card = document.createElement('div');
    card.className = 'book-card';

    const title = document.createElement('p');
    title.textContent = book.title;

    const pages = document.createElement('p');
    pages.textContent = book.pages;

    const author = document.createElement('p');
    author.textContent = book.author;

    const btn = document.createElement('button');

    function updateButton() {
        btn.classList.toggle('active', book.isRead);
        btn.textContent = book.isRead ? 'Read' : 'Not Read';
    }

    updateButton();

    btn.addEventListener('click', () => {
        book.isRead = !book.isRead;
        updateButton();
    });

    card.append(title, pages, author, btn)
    container.append(card)
});