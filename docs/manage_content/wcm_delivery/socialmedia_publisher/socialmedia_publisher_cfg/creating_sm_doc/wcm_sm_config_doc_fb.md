# Configuration settings for Facebook

Complete these configuration parameters to set up a social network connection for Facebook.

You must register an application to obtain a user name and password that grants access to the Facebook API. To register a new application that the WCM Social Media Publisher can use:

1.  Go to https://developers.facebook.com/apps
2.  Click **Create new App**.
3.  Enter values for the following parameters in the form that displays:
    -   **Display Name:**

        This is the name of your application that is displayed at the end of each post. For example, your company name.

    -   **Namespace:**

        This is an optional name that is used to access Facebook Insights information. It is recommended that a unique name is used for each application you set up.

    -   **Category:**

        Select a category that matches your business type. If unsure select **Apps for Pages**.

4.  Click **Create App**.
5.  A configuration screen for your application is displayed. Select the **Settings** option and enter the following:
    -   **App Domain:**

        Enter a comma-separated list of domains or server addresses that you want to use to bind this application to individual Facebook accounts. You are able to authorize against this application from one of the domains that are listed here.

6.  Click **Add Platform** and select **WebSite**.
7.  Set the **Site URL** and **Mobile Site URL** fields to your website. For example: http://www.ibm.com
8.  Click **Save Changes**.
9.  The **App ID/API Key** and **App Secret Key** are now displayed.

You must then create a new credential vault from the HCL Portal administration view where:

-   The **App ID/API Key** is specified as the shared user ID
-   The **App Secret Key** is specified as the shared password.

When you create a social network configuration document for Facebook:

1.  Select **Facebook** as the social network.

2.  Define authentication settings for the social network:

    1.  Select the **Credential Vault** that contains your Facebook application credentials.

    2.  Click **Authorize** to bind the credentials to a specific social network account.

3.  Select a message type:

    !!! note
        It is not recommended to reference rich text elements or HTML elements in any fields that do not support HTML.

    -   **Page wall post:**

        1.  Select a page.
        2.  Enter a default name, description, image, caption, and message template. Predefined tags for the image, caption, and message are included as a guide. For example:
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

            -   **Caption**

                This is posted as text.

                ```
                [Element context="current" type="content" key="Caption"]
                ```

            -   **Message**

                This is posted as text.

                ```
                [Element context="current" type="content" key="Message" format="length:100"]
                ```

    -   **Profile wall post:**

        1.  Select the appropriate visibility option.

            !!! note
                The visibility setting that is selected here does not override the default visibility setting of your Facebook application if the application has a more secure level of visibility. For example, if the visibility setting of your Facebook application is set to "Friends", you cannot change this to "Public" by selecting "Public" in this option.

        2.  Enter a default name, description, image, caption, and message template. Predefined tags for the image, caption, and message are included as a guide. For example:
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

            -   **Caption:**

                This is posted as text.

                ```
                [Element context="current" type="content" key="Caption"]
                ```

            -   **Message:**

                This is posted as text.

                ```
                [Element context="current" type="content" key="Message" format="length:100"]
                ```

    !!! note
        Page notes are deprecated by Facebook.



