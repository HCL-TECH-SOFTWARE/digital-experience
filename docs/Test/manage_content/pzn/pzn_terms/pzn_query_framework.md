# Query framework

The query framework is an object representation of a query.

The query framework is not specifically oriented toward querying either object or relational databases. A set of common operators is defined, but what an attribute represents is determined by the interpreter of the query.

Since the framework makes no assumptions about how the name of an attribute is translated to the object it represents, object trees and graphs, relational models, or almost any other data structure could be queried with the framework. The query framework is used to pass query information from the runtime engine into the resource engine. It is up to the resource collection to interpret the query. Traditionally, this interpretation of the query object is done through a callback class, which is essentially a translator from the query framework into a protocol-specific query language.


