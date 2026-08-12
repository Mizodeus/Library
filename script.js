const library = [];

const DEFAULT = [
    {title: "Fight Club", pages: 224, isRead: true, author: "Chuck Palahniuk"},
    {title: "The Witcher: The Last Wish", pages: 288, isRead: false, author: "Andrzej Sapkowski"}
];

const container = document.querySelector('.container');
const addBookBtn = document.querySelector('.addBook');
const dialog = document.querySelector('#addBookDialog');
const form = document.querySelector('#addBookForm')
const cancelBtn = document.querySelector('#cancelButton');

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

function renderBooks() {
    container.innerHTML = '';

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
}

addBookBtn.addEventListener('click', () => {
    dialog.showModal();
})

cancelBtn.addEventListener('click', () => {
    form.reset();
    dialog.close()
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    addBookToLibrary(
        data.get('title'),
        Number(data.get('pages')),
        form.isRead.checked,
        data.get('author')
    );

    renderBooks();

    form.reset();
    dialog.close();
});

library.push(...DEFAULT);

renderBooks();