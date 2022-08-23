# Visibility Rules

Visibility rules determine what a user will see, or what has been targeted towards a user. Visibility rules can be assigned to pages and portlets and will be triggered automatically by the portal as needed.

Visibility rules use any type of information, including LDAP attributes, time of day, or session information. For example, if you want to hide a portlet for an individual in a certain geography, store the location as an attribute in LDAP, and assign a visibility rule hiding the portlet. A user may have access to the revenue figures for all divisions the entire year, but these figures should not be displayed prominently except when they are first released. For a week after the figures are first released, the figures for the employee's division should show prominently on their home page. The visibility rule hides figures for divisions the employee is not in and only shows the employee's figures the week after they are released.

Visibility rules can be assigned to pages and portlets and will be triggered automatically by the portal as needed. Through the APIs, visibility rules behave like profiler rules where the only two possible profiles are **show** and **hide**. This allows visibility rules to be invoked programmatically and used in any custom application just as you would call a profiler rule. Visibility rules only apply to authenticated users.

-   **[Example: Show page or portlet](../pzn/pzn_example_visibility.md)**  
View an example of a visibility rule, Show Page that shows the specified page or portlet only during the specified time period, and only to users in the Midwest. For all other dates and users, the page or portlet is hidden.
-   **[Example: Show page or portlet](../pzn/pzn_example_visibility.md)**  
View an example of a visibility rule, Show Page that shows the specified page or portlet only during the specified time period, and only to users in the Midwest. For all other dates and users, the page or portlet is hidden.


