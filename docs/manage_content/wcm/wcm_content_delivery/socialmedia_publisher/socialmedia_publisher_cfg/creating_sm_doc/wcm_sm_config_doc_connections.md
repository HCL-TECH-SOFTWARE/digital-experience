# Defining social network settings for HCL Connections

Complete these steps to set up a social network connection for HCL Connections.

Before you begin you must have already created a new credential vault from the HCL Portal administration view where:

-   Your HCL Connections user name is specified as the shared user ID.
-   Your HCL Connections password is specified as the shared password.

When you create a social network configuration document for HCL Connections:

1.  Select **HCL Connections** as the social network.

2.  Define authentication settings for the social network:

    1.  Select the **Credential Vault** that contains your HCL Connections account credentials.

    2.  Type the name of the Connections server to connect to.

    3.  Click **Authorize** to bind the HCL Connections account credentials to this configuration.

3.  Select a message type:

    -   **Blog post:**

        1.  Select the name of the Blog.
        2.  Enter a default name and message template for Blog posts. A predefined message is included as a guide. For example:
            -   **Name:**

                This is posted as text.

                ```
                [Property field="title" context="current" type="content" format="length:100"]
                ```

            -   **Message:**

                This is posted as HTML.

                ```
                [Element context="current" type="content" key="Message" format="length:100"] See more: 
                [URLCmpnt context="current" type="content" mode="standalone" start="<a href='" end="'>Link</a>"]
                ```

    -   **Message board post:**

        1.  Enter a default message template for message board posts. A predefined message is included as a guide. For example:
            -   **Message:**

                This is posted as text.

                ```
                [Element context="current" type="content" key="Message" format="length:100"] See more: 
                [URLCmpnt context="current" type="content" mode="standalone"]
                ```

    -   **Wiki post:**

        1.  Select the name of the Wiki.
        2.  Enter a default name, and message template for Wiki posts. A predefined message is included as a guide. For example:
            -   **Name:**

                This is posted as text.

                ```
                [Property field="title" context="current" type="content" format="length:100"]
                ```

            -   **Message:**

                This is posted as HTML.

                ```
                [Element context="current" type="content" key="Message" format="length:100"] See more: 
                [URLCmpnt context="current" type="content" mode="standalone" start="<a href='" end="'>Link</a>"]
                ```



