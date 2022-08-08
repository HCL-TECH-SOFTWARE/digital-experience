# Adding search engines by using the administration portlet Manage Clients

To add search engines by using the administration portlet Manage Clients, follow the procedure that is given here.

1.  Go to the Manage Clients portlet. Click the **Administration menu** icon. Then, click **Portal Settings** \> **Supported Clients**. Portal opens the Manage Clients portlet.

2.  Depending on whether you want to add more search clients to the default user agent or add a complete new client, do one of the following steps:

    -   Select the client that starts with `(.*(B|b)ot.*)|(.*BOT.*)|(.*(S|s)pider.*) . . .` from the list of clients and edit it. Use this option if you simply want to add one or more search engines.
    -   Add a new client. For example, you can use this option, if you want to give the newly added search engine priority by setting it to the **First** position in the client list.
    For details about how to do this refer to the Manage Clients portlet help.

3.  Update or fill the fields and select the options as required.

    For brief descriptions of the available fields and options, see the list later in this topic. For a more detailed description of the fields and options, refer to the Manage Clients portlet help.

4.  Click **OK** to save your changes.


Fields and options in the manage Clients portlet help:

-   **User agent:**

    Type your new search engine user agent.

-   **Markup:**

    html

-   **Manufacturer**

    Search Engine Manufacturer. This field is optional.

-   **Capability:**

    `HTML_SEARCH, HTML_4_0, HTML_IFRAME, HTML_FRAME, HTML_NESTED_TABLE, HTML_2_0, HTML_JAVASCRIPT, HTML_3_2, HTML_3_0, HTML_CSS, HTML_TABLE`

-   **Position:**

    **First**. Set the specified search engine to the first position so that it is correctly recognized. The reason for this is that the pattern matching for the comparison of the user agents to the supported clients is done from concrete and specific to general.


For a more detailed description of the fields and options, refer to the Manage Clients portlet help.

**Parent topic:**[Client identification for external search engines](../admin-system/srrclientid.md)

