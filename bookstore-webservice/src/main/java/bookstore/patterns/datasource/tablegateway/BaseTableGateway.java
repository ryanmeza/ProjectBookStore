package bookstore.patterns.datasource.tablegateway;

import java.sql.Connection;
import java.sql.DriverManager;

public abstract class BaseTableGateway
{
    protected Connection conn;

    public BaseTableGateway()
    {
        try
        {
            conn = DriverManager.getConnection("jdbc:sqlite:C:/db/Book_Store.db");
        }
        catch (Exception ex)
        {
            System.out.println(ex.getMessage());
        }
    }
}
