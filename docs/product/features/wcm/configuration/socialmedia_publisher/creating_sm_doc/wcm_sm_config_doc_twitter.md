# Defining social network settings for Twitter

Complete these configuration parameters to set up a social network connection for Twitter.

Before you begin, you must register a Twitter application to obtain a user name and password that grants access to the Twitter API. To register a new application that the WCM Social Media Publisher can use:

1.  Go to https://dev.twitter.com
2.  Log in and click **Create an app**.
3.  Click **Add New Application**.
4.  Under **Application Info** enter values for the following parameters:
    -   **Application Name:**

        This is the name of your application that is displayed at the end of each post. For example, your company name.

    -   **Application Description:**

        Enter a short description of the application.

    -   **Website:**

        This is the URL to your website. For example: http://www.ibm.com

    -   **Callback URL:**

        Set this to `http://domain/wps/wcmsocial/servlet/oAuthCB/twitter` where "domain" is your domain name.

5.  Read the terms and conditions and select **I Agree**.
6.  Enter the security/captcha information if required.
7.  Your Consumer Key and Consumer Secret is displayed. Make a record of these.
8.  Click the **Settings** tab.
9.  In the **Application Type** section, set the **Access** property to Read and write.
10. Click the **Update this Twitter application's settings**.

When you have registered your application, you then create a new Credential Vault from the HCL Portal administration view where:

-   The Consumer Key is specified as the shared user ID.
-   The Consumer Secret is specified as the shared password.

When you create a social network configuration document for Twitter:

1.  Select **Twitter** as the social network.

2.  Define authentication settings for the social network:

    1.  Select the **Credential Vault** that contains your Twitter application credentials.

    2.  Click **Authorize** to bind the credentials to a specific social network account.

3.  Enter a default message template. This is posted as text. Predefined tags for the message are included as a guide. For example:

    ```
    [Property field="title" context="current" type="content" format="length:100"] 
    [URLCmpnt context="current" type="content" mode="storable"] 
    [profilecmpnt type="content" context="current" field="keywords" separator=" #" include="exact" start="#"]
    ```

    **Note:** Rich Text is not supported for Twitter posts, so it is not recommended to reference rich text elements in your post message.

    **Note:** If your posts are exceeding the 140 character limit for Twitter posts, you can adjust length of the title by reducing the length option in the format parameter as shown in this example. Long category names, or a large number of categories, can also lead to exceeding the 140 character limit.


**Parent topic:**[Creating a social network configuration document](../wcm/wcm_sm_config_doc_creating.md)

