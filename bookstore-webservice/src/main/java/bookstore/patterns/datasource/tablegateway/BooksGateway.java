package bookstore.patterns.datasource.tablegateway;

import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class BooksGateway extends BaseTableGateway
{
    public BooksGateway()
    {

    }
    public ResultSet findAll()
    {
        PreparedStatement sql;
        ResultSet results = null;
        try
        {
            sql = conn.prepareStatement("SELECT * FROM BOOKS");
            results = sql.executeQuery();
        }
        catch (Exception ex)
        {
            System.out.println(ex.getMessage());
        }

        return results;
    }
}
