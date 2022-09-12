# Defining social network settings for LinkedIn

Complete these configuration parameters to set up a social network connection for LinkedIn.

Before you begin you must register an application to obtain a user name and password that grants access to the LinkedIn API. To register a new application that the WCM Social Media Publisher can use:

1.  Go to https://developer.linkedin.com
2.  Sign in and click the twistie next to your login name and select **API Keys**.
3.  Click **Add New Application**.
4.  Under **Company Info** either select an existing company or select **New Company** and enter a company name.
5.  Under **Application Info** enter values for the following parameters:
    -   **Application Name:**

        This is the name of your application that is displayed at the end of each post. For example, your company name.

    -   **Application Description:**

        Enter a short description of the application.

    -   **Website URL:**

        This is the URL to your website. For example: http://www.ibm.com

    -   **Application Use:**

        Social Aggregation

    -   **Live Status:**

        During testing, you can set the application to **Development**. Once ready, modify the status to **Live**.

    -   **Contact Info:**

        Add your contact information here.

6.  Under **Author User Agreement** select the display language of the user agreement screen. **Browser Locale Setting** is recommended.
7.  Click **Add Application**.
8.  A success screen is displayed showing your API Key and Secret Key. Record these values and then click **Done**.

You then must create a new credential vault from the HCL Portal administration view where:

-   The API Key is specified as the shared user ID
-   The Secret Key is specified as the shared password.

When you create a social network configuration document for LinkedIn:

1.  Select **LinkedIn** as the social network.

2.  Define authentication settings for the social network:

    1.  Select the **Credential Vault** that contains your LinkedIn application credentials.

    2.  Click **Authorize** to bind the credentials to a specific social network account.

3.  Select a message type:

    **Note:** It is not recommended to reference rich text elements or HTML elements in any fields that do not support HTML.

    -   **Network Update:**

        1.  Enter a default message template. Predefined tags for the message are included as a guide. For example:
            -   **Message:**

                This is posted as HTML.

                ```
                [Element context="current" type="content" key="Message" format="length:200"] See more: 
                [URLCmpnt context="current" type="content" mode="standalone" start="<a href='" end="'>Link</a>"] 
                ```

    -   **Share:**

        1.  Select the appropriate visibility option.
        2.  Enter a default name, description, image, and message template. Predefined tags for the image, description, and message are included as a guide. For example:
            -   **Name:**

                This is posted as text.

                ```
                [Property field="title" context="current" type="content" format="length:100"]
                ```

            -   **Description:**

                This is posted as text.

                ```
                [Property field="description" context="current" type="content" format="length:100"]
                ```

            -   **Image:**

                This is posted as a URL.

                ```
                [Element context="current" type="content" key="Image" format="URL"]
                ```

                **Note:** The URL to the image must be internet accessible.

            -   **Message:**

                This is posted as text.

                ```
                [Element context="current" type="content" key="Message" format="length:200"]
                ```



