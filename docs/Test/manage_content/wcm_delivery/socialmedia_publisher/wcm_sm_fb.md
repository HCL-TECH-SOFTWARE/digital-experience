# Publishing content directly to a Facebook page

The Social Media Publisher is used to post status updates about your content to Facebook profiles and pages. You can also post content items directly to a Facebook page.

1.  Go to https://developers.facebook.com/apps

2.  Click **Create new App**.

3.  A form opens. Enter values for the following parameters:

    -   **App Name:**

        This is the name of your application that is displayed at the end of each post. For example, your company name.

    -   **App Namespace:**

        This is name that is used to access Facebook Insights information. It is recommended that a unique name is used for each application.

4.  Click **Continue**.

5.  A configuration screen for your application is displayed. Select **Page Tab** under **Select how your app integrates with Facebook** and complete the following parameters:

    -   **Page tab name:**

        Enter the name for the page tab.

    -   **Page tab URL:**

        This is the URL to the content item you want to add to the Facebook page.

    -   **Secured Page tab URL:**

        This is an https version of the Page tab URL.

6.  Click **Save Changes**.

7.  Click **Authorize** to bind the credentials to a specific social network account.


-   To post your content to the Facebook page, use the following URL where APP\_ID is the Application-Id of Facebook Page Tab application:

    ```
    http://www.facebook.com/dialog/pagetab?app_id=APP_ID&next=https%3A%2F%2Fwww.facebook.com%2Fconnect%2Flogin_success.html
    ```

-   Publishing content directly to a Facebook page requires a Secured Page tab URL to be provided. This means that your server must be SSL enabled.


