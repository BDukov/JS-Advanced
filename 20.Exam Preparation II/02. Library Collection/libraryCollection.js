class LibraryCollection {
    constructor(capacity) {
      this.capacity = capacity;
      this.books = [];
    }
    addBook(bookName, bookAuthor) {
      if (this.capacity === this.books.length) {
        throw Error("Not enough space in the collection.");
      }
      this.books.push({
        bookName,
        bookAuthor,
        paid: false,
      });
      return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }
   
    payBook(bookName) {
      for (const book of this.books) {
        if (book.bookName === bookName) {
          if (book.paid) {
            throw Error(`${bookName} has already been paid.`);
          } else {
            book.paid = true;
            return `${bookName} has been successfully paid.`;
          }
        }
      }
      throw Error(`${bookName} is not in the collection.`);
    }
   
    removeBook(bookName) {
      for (let index = 0; index < this.books.length; index++) {
        const element = this.books[index];
        if (element.bookName === bookName) {
          if (!element.paid) {
            throw Error(
              `${bookName} need to be paid before removing from the collection.`
            );
          } else {
            this.books.splice(index, 1);
            return `${bookName} remove from the collection.`;
          }
        }
      }
      throw Error("The book, you're looking for, is not found.");
    }
   
    getStatistics(bookAuthor) {
      if (bookAuthor === undefined) {
        let result = `The book collection has ${
          this.capacity - this.books.length
        } empty spots left.`;
        let sortedBooks = this.books.sort((a, b) =>
          a.bookName.localeCompare(b.bookName)
        );
        for (const book of sortedBooks) {
          result += `\n${book.bookName} == ${book.bookAuthor} - ${
            book.paid ? "Has Paid" : "Not Paid"
          }.`;
        }
        return result;
      }
   
      let result = [];
      for (const book of this.books) {
        if (book.bookAuthor === bookAuthor) {
          result.push(
            `${book.bookName} == ${book.bookAuthor} - ${
              book.paid ? "Has Paid" : "Not Paid"
            }.`
          );
        }
        return result.join("n");
      }
      throw Error(`${bookAuthor} is not in the collection.`);
    }
  }

const library = new LibraryCollection(2)
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.getStatistics('Miguel de Cervantes'));

