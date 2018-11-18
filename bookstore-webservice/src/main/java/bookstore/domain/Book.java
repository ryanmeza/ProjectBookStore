package bookstore.domain;

import java.math.BigDecimal;
import java.time.ZonedDateTime;
import java.util.Objects;

public class Book
{
    private int id;
    private String isbn;
    private String title;
    private String desc;
    private Publisher publisher;
    private ZonedDateTime publishDate;
    private BigDecimal price;

    @Override
    public boolean equals(Object o)
    {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Book book = (Book) o;
        return id == book.id &&
                Objects.equals(isbn, book.isbn) &&
                Objects.equals(title, book.title) &&
                Objects.equals(desc, book.desc) &&
                Objects.equals(publisher, book.publisher) &&
                Objects.equals(publishDate, book.publishDate) &&
                Objects.equals(price, book.price);
    }

    @Override
    public int hashCode()
    {
        return Objects.hash(id, isbn, title, desc, publisher, publishDate, price);
    }

    public int getId()
    {
        return id;
    }

    public void setId(int id)
    {
        this.id = id;
    }


    public String getIsbn()
    {
        return isbn;
    }

    public void setIsbn(String isbn)
    {
        this.isbn = isbn;
    }

    public String getTitle()
    {
        return title;
    }

    public void setTitle(String title)
    {
        this.title = title;
    }

    public String getDesc()
    {
        return desc;
    }

    public void setDesc(String desc)
    {
        this.desc = desc;
    }

    public Publisher getPublisher()
    {
        return publisher;
    }

    public void setPublisher(Publisher publisher)
    {
        this.publisher = publisher;
    }

    public ZonedDateTime getPublishDate()
    {
        return publishDate;
    }

    public void setPublishDate(ZonedDateTime publishDate)
    {
        this.publishDate = publishDate;
    }

    public BigDecimal getPrice()
    {
        return price;
    }

    public void setPrice(BigDecimal price)
    {
        this.price = price;
    }

    public static final class BookBuilder
    {
        private int id;
        private String isbn;
        private String title;
        private String desc;
        private Publisher publisher;
        private ZonedDateTime publishDate;
        private BigDecimal price;

        public BookBuilder()
        {
        }

        public static BookBuilder aBook()
        {
            return new BookBuilder();
        }

        public BookBuilder withId(int id)
        {
            this.id = id;
            return this;
        }

        public BookBuilder withIsbn(String isbn)
        {
            this.isbn = isbn;
            return this;
        }

        public BookBuilder withTitle(String title)
        {
            this.title = title;
            return this;
        }

        public BookBuilder withDesc(String desc)
        {
            this.desc = desc;
            return this;
        }

        public BookBuilder withPublisher(Publisher publisher)
        {
            this.publisher = publisher;
            return this;
        }

        public BookBuilder withPublishDate(ZonedDateTime publishDate)
        {
            this.publishDate = publishDate;
            return this;
        }

        public BookBuilder withPrice(BigDecimal price)
        {
            this.price = price;
            return this;
        }

        public Book build()
        {
            Book book = new Book();
            book.setId(id);
            book.setIsbn(isbn);
            book.setTitle(title);
            book.setDesc(desc);
            book.setPublisher(publisher);
            book.setPublishDate(publishDate);
            book.setPrice(price);
            return book;
        }
    }
}
