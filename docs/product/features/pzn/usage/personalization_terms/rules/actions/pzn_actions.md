# Actions

Actions use simple evaluation statements to select content to use or display, or to set information.

Basic arithmetic calculations \(addition, subtraction, multiplication, division\) that follow order of operations can be used on either side of the evaluation; parentheses are not supported. Actions can be combined with profilers into bindings.

The following action items are supported:

-   **Select actions**

    Select data or content. Select actions retrieve data from a data store, typically for display on a web page. Select actions also can be used within bindings to exclude certain content, that is, filtering a subset of returned content from a superset.

-   **Update actions**

    Update content or objects on the request. Update actions cannot select content. Update actions are used to store content or data in the user profile, an application object, or other data stores.

-   **Email actions**

    Send email messages using a web page as the body. Email actions cannot select content. An email action sends an email message to a recipient or list of recipients. An email action assigned to a content spot sends an email message when the content spot is triggered. For example, at the time a website visitor views a page with the content spot.

    The email action editor allows the fields that identify the recipients \(primary, copied and blind copied\), the subject line, and the sender to be identified by either explicit text or by resources attributes. The email body is a separate file, such as a text file, an HTML file, or a JSP, that must be accessible from the email server via a URI. An emailed JSP can contain content spots for personalizing the email message for the user who triggers the content spot.

    Although email actions differ somewhat from email promotions, both have prerequisites that must be in place and working before email can be sent.


-   **[Example: Simple select content action](../pzn/pzn_example_simple_select_content_action.md)**  
View an example for a simple select content action.
-   **[Example: Simple update action](../pzn/pzn_example_simple_update_action.md)**  
View an example of an update action that is part of a Web site that allows visitors to manage certain information and preferences about themselves.
-   **[Example: Simple email action](../pzn/pzn_example_simple_email_action.md)**  
This email action rule example is typical of one that might be used after a website visitor submits a form indicating interest in an item or service.
-   **[Example: Simple select content action](../pzn/pzn_example_simple_select_content_action.md)**  
View an example for a simple select content action.
-   **[Example: Simple update action](../pzn/pzn_example_simple_update_action.md)**  
View an example of an update action that is part of a Web site that allows visitors to manage certain information and preferences about themselves.
-   **[Example: Simple email action](../pzn/pzn_example_simple_email_action.md)**  
This email action rule example is typical of one that might be used after a website visitor submits a form indicating interest in an item or service.

**Parent topic:**[Rules](../pzn/pzn_rules.md)

**Parent topic:**[Rules](../pzn/pzn_rules.md)

