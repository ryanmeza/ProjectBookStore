package bookstore.patterns.domainlogic.transactionscript;

import bookstore.patterns.datasource.tablegateway.BooksGateway;

import java.sql.ResultSet;

public class AllBooks implements Commandable<ResultSet>
{
    @Override
    public ResultSet run()
    {
        return new BooksGateway().findAll();
    }
}
