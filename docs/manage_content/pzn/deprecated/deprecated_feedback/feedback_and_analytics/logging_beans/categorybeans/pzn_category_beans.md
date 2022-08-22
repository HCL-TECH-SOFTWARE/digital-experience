# Category beans

Content categories enable you to classify Web user interests. You use Category beans to log content categories.

As a Web site visitor navigates your Web pages, a Category bean logs the different categories viewed by the visitor during the session. For example, if a Web site visitor goes to your Web site and views information about the weather, the category "Weather" can be logged. Another Web site visitor might be more interested in sports, so you would log the "Sports" category for this user. Category beans maintain category information for the current session including the categories logged and their corresponding log counts. Category information is routed to all registered log listeners.

All categories are logged to the Feedback schema and to the user session. Category information is not logged to the LikeMinds schema.

You can create rules that access the category counts in the current session, for example:

```
News Interest is
    Weather when
      current Category Count.Weather > 5
    Sports when
      current Category Count.Sports > 5
   Otherwise Headlines

```

You can also create rules that access the category names from the current session, for example:

```
Select content
    whose News.Topics is included in current CategoryNamesCategory Names.Category Names
    order as is


```

-   **[Implementing category logging](../pzn/pzn_implement_category_logging.md)**  
To implement category logging, insert a Category bean into your JSP.
-   **[Category beans reference](../pzn/pzn_category_beans_reference.md)**  
Learn about the various method signatures of Category beans.
-   **[Implementing category logging](../pzn/pzn_implement_category_logging.md)**  
To implement category logging, insert a Category bean into your JSP.
-   **[Category beans reference](../pzn/pzn_category_beans_reference.md)**  
Learn about the various method signatures of Category beans.


