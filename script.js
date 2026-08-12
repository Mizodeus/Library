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
        title.className = 'title';

        const pages = document.createElement('p');
        pages.textContent = 'Pages: ' + book.pages ;
        pages.className = 'pages'

        const author = document.createElement('p');
        author.textContent = book.author;
        author.className = 'author';

        const readBtn = document.createElement('button');
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';

        function updateButton() {
            readBtn.classList.toggle('active', book.isRead);
            readBtn.textContent = book.isRead ? 'Read' : 'Not Read';
        }

        updateButton();

        readBtn.addEventListener('click', () => {
            book.isRead = !book.isRead;
            updateButton();
        });

        delBtn.addEventListener('click', () => {
            const index = library.findIndex(book => book.id == book.id);

            if (index !== -1) {
                library.splice(index, 1);
                renderBooks();
            }
        })

        card.append(title, pages, author, readBtn, delBtn)
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