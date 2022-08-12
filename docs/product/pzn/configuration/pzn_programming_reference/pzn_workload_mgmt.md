# Workload management

Only one Portal Personalization engine can be installed on an application server.

Consequently, there is one Personalization engine for each servlet engine. Personalization supports application server clustering, because each Personalization instance in the cluster shares the same IBM® Java™ Content Repository. Therefore, each Personalization instance accesses the same customer data stores.

IBM WebSphere® Application Server dynamic caching is used to cache resource instance and the results of queries used in rules. The dynamic cache shares expiration notification for the cache across clones in a cluster. Although Personalization uses the dynamic cache internally to cache the results of rules, it is also possible to use the WebSphere Application Server dynamic cache to cache the entire response from a JSP or servlet.

**Note:** Care must be taken when using Personalization and the dynamic cache of JSPs, servlets, or portlets. When using the dynamic cache to cache JSPs or servlets, the cache key must take into account all the inputs into any rules on that page. If rules on the page use an employee department attribute of a user resource, the cache key must be configured to contain this employee department attribute.

**Parent topic:**[Personalization programming reference](../pzn/pzn_programming_reference.md)

**Parent topic:**[Personalization programming reference](../pzn/pzn_programming_reference.md)

