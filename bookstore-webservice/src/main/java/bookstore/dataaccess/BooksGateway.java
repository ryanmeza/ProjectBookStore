package bookstore.dataaccess;

import bookstore.domain.Book;


import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

//TODO: Should be a singleton
public class BooksGateway extends BaseTableGateway
{
    public BooksGateway()
    {

    }

    public List<Book> findAll() throws SQLException
    {
        PreparedStatement sql;
        ResultSet results;
        List<Book> mappedResult = new ArrayList<>();
        try
        {
            sql = conn.prepareStatement("SELECT * FROM BOOKS");
            results = sql.executeQuery();

            while (results.next())
            {
                Book book = new Book.BookBuilder().withId(results.getInt("book_id"))
                        .withIsbn(results.getString("isbn"))
                        .withTitle(results.getString("book_title"))
                        .withDesc(results.getString("book_description"))
                        //.withPublisher(new Publisher())
                        //.withPublishDate(set.getDate("publish_date").toInstant().atZone(ZoneId.systemDefault()))
                        .withPrice(results.getBigDecimal("book_price"))
                        .build();
                mappedResult.add(book);
            }

        }
        catch (SQLException ex)
        {
            System.out.println(String.format("SQL Exception : %s - %s", ex.getErrorCode(), ex.getSQLState()));
        }
        catch (Exception ex)
        {
            System.out.println(ex.getMessage());
        }
        finally
        {
            conn.close();
        }

        return mappedResult;
    }
}
