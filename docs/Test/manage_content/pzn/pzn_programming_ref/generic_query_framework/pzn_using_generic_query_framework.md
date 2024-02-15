# Using the Generic Query Framework

The resource engine constructs a generic query object and passes it to domain developers through the ResourceDomain3 interface method findResourceByQuery(). Get an overview of how this query object can be converted into a meaningful domain query string.

The developer can take one of the following approaches to convert this query object into a meaningful domain query string.

1.  Walk through the query object.

    !!!note
        The com.ibm.websphere.query.base.Query class contains query components that the developer can cover to generate domain specific query string. For detailed information on query hierarchy and components, see the Portal Personalization API documentation.

2.  Use a system provided builder callback.

    There are nine builder callbacks:

    1.  Microsoft™ SQL Server Enterprise Edition: (com.ibm.websphere.query.callbacks.SqlSelectQueryCallback)

        !!!note
            Although the generic SQL callback can be used for most SQL Server databases, there are minor differences in SQL syntax and availability of functions which require specific subclasses for some databases.

    2.  IBM® DB2 Universal Database™ Enterprise Server Edition: (com.ibm.websphere.query.callbacks.DB2SqlSelectQueryCallback)
    3.  IBM DB2 Universal Database for z/OS®: (com.ibm.websphere.query.callbacks.DB2390SqlSelectQueryCallback)
    4.  IBM DB2 Universal Database for i:(com.ibm.websphere.query.callbacks.DB2400SqlSelectQueryCallback)
    5.  Apache Derby: (com.ibm.websphere.query.callbacks.DerbySqlSelectQueryCallback)
    6.  Oracle Enterprise Edition: (com.ibm.websphere.query.callbacks.OracleSelectQueryCallback)
    7.  LDAP: (com.ibm.websphere.query.callbacks.LdapSelectQueryCallback)

        !!!note
            The LDAP callback supports a set of function common to many LDAP repositories. Users may subclass this callback to support more advanced vendor specific functions.

    Property resolution and query syntax conversion are handled in the callbacks. The developer can prepare a property mapping hash table and use it with one of the previous callbacks to build the executable query string. Here is the sample code for SQL query string generation:

    ```
    String s=q.buildString(new SqlSelectQueryCallback(h));
    ```

    where q is a query object, and h is a property mapping hash table.

    For detailed information on these builder callbacks, see the Personalization API documentation.

3.  Develop and use a domain specific builder callback.

    If the system provided builder callbacks do not satisfy resource domain requirements, a domain specific builder callback can be created and used as long as it implements ISelectQueryCallback. The developer can decide the mechanisms to interpret properties and derive the proper query syntax in their own callbacks. The code would look like:

    ```
    String s=q.buildString(new MySelectQueryCallback(myParameter));
    ```

    where q is a query object, and MySelectQueryCallback is the custom builder callback that takes myParameter as parameter.



