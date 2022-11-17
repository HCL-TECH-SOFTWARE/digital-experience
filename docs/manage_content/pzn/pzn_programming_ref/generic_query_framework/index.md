# Generic query framework

The generic query framework enables resource collection developers to convert a property-based query object into a language specific executable query string. It contains query component classes, and builder and callback interfaces.

-   Query framework classes, such as the Query class, Predicate class, and Condition class provide an object representation of a query.
-   Builder and callback interfaces together facilitate a query string generation mechanism that delegates operations to domain specific callbacks for property-to-attribute resolution and query string syntax conversion.

-   **[Using the Generic Query Framework](pzn_using_generic_query_framework.md)**  
The resource engine constructs a generic query object and passes it to domain developers through the ResourceDomain3 interface method findResourceByQuery\(\). Get an overview of how this query object can be converted into a meaningful domain query string.


