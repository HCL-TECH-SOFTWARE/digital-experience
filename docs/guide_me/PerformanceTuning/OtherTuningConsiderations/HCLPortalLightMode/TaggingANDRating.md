# Tagging & Rating

## Database Fetch Size
For sites with a large number of tags, the performance of the Tag Cloud Portlet may become unacceptable. To fix this, change the number of database rows that are fetched by each call to the database. The optimal value depends on the number of tags and the usage patterns of the system. For 50,000 tags, the fetch size was increased to 500.

### How to Set
In the WebSphere Integrated Solutions Console
Resources -> Resource Environment -> Resource Environment Providers -> WP DataStoreService
Name: <domain>.datasource.fetchsize
Value: 500

Note <domain> is one of the Portal database domains. Public tags are stored in the comm domain;
private tags are stored in the cust domain.