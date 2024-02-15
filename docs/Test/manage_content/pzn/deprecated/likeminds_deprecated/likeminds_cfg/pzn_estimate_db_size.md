# Estimating database size | LikeMinds configuration

The size of your database depends on your application, as well as the number of users and items. View some general guidelines for estimating the size of your database, but your results may vary.

A database containing the seed data supplied with the Movie Site application may use just 250 MB, while the LikeMinds tables for a large site with millions of users may take up 10 GB. Following are some general guidelines:

The tables that contribute the most to the size of the database are as follows:

-   **Lps_User_Rating**: This table normally dominates your space considerations. Users typically average 50 to 100 ratings. The seed users supplied with Movie Site average about 500 ratings.
-   **Lps_User_Trx**: This table can grow very large, depending on the number of item affinity, clickstream, or purchase activities recorded from your applications.
-   **Lps_MBA_Scored**: This table can grow quite large, depending on the number of products your site sells and the number of relationships you want to configure for each product. For example, if you have 1000 products listed in your Lps_Item_Data table, and you want to store 10 relationships for each product, an Lps_MBA_Scored table can grow to 10,000 rows.
-   **Lps_User_Mentor**: The size of this table depends on the number of users and the number of mentors associated with each user (50 by default).
-   **Lps_User_Data**: This table may contribute a large portion of the database size if you have large numbers of users who each have few ratings. This table is heavily indexed, which can affect performance.
-   **Lps_Item_Data**: This table is normally fairly small, but may be significant if you store large amounts of data about each item.

The remaining tables are typically less than 100 KB each.

The following table gives typical numbers of rows, row sizes, and index sizes for a "typical" Microsoft SQL Server database with 5000 items and 100,000 users. The row sizes include only the fields required by LikeMinds, and they account for typical null fields and clustered index overhead. Sizes will vary for other database systems, especially for indexes.

|Table|Rows in Typical Site|Row Size (Bytes)|Total Size|Index Size (Bytes Per Row)|Total Size|
|-----|--------------------|------------------|----------|----------------------------|----------|
|Lps_User_Rating|8,000,000|25|200 MB|about 20|160 MB|
|Lps_User_Trx|8,000,000|32|256 MB|about 20|160 MB|
|Lps_User_Mentor|5,000,000|25|125 MB|about 20|100 MB|
|Lps_User_Data|100,000|typical: 100 maximum: 400|100-400MB|about 100|10 MB|
|Lps_Item_Data|5000|136 (for required fields only)|68 MB|4|2 MB|
|Lps_MBA_Scored|10,000|32|32 MB|about 20|1MB|
|Lps_Genre_Data|10-1000|116|1160 KB-116 MB| |N/A|
|Lps_Item_Genre|5000-20,000|12|60-240MB| |N/A|
|Lps_User_Selector|25,000-100,000|12|30-120MB|4|100-400 MB|

In your size estimate, remember to include space for transaction logging and rollback areas. Because the LikeMinds server commits frequently, the rollback area need not be especially large relative to the database. Allow space equal to the size of the database for transaction logs, since the LikeMinds server performs frequent updates.


