package bookstore.patterns.domainlogic.transactionscript;

public interface Commandable<T>
{
    T run();
}
