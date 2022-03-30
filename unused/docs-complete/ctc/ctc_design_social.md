# Integrating your site with social media 

The Content Template Catalog templates provide sample integration with social media services, but you will typically replace these with a customized implementation.

Before testing social media integration in the Content Template templates or customized templates, make the server publicly accessible. The social media service is likely to do a callback to the provided URL, and fails if the server is not accessible.

**Note:** Due to restrictions with the Facebook and Twitter API, these social media tools will not work if the website is accessed by using a short DNS host name. The full server host name must be used for the social media buttons to work correctly.

-   **For Twitter:**

    1.  Create a Twitter button by going to this URL: https://twitter.com/about/resources/buttons\#tweet
    2.  Use these settings:
        -   URL: `[PathCmpnt type="noprefixbase"][URLCmpnt context="portalContext" type="content" mode="static" htmlencode="true"]`
        -   Tweet Text: `[Property context="portalContext" type="content" field="title"]`
        -   Via: Your Twitter account
    3.  Copy the generated code and replace the markup in this component: CTC Design\>Components\>Fragments\>Tweet Button
    You are now able to track who is sharing your content by using your Twitter account

-   **For Facebook:**

    1.  Create a Like button by going to this URL: http://developers.facebook.com/docs/reference/plugins/like
    2.  Use these settings:
        -   URL: Facebook requires a real URL, so you cannot use Web Content Manager tags. Use a temporary URL instead. For example: http://replaceme
    3.  Click **Get Code**.
    4.  Click the IFRAME link in the dialog.
    5.  Copy the code and replace the markup in this component: CTC Design\>Components\>Fragments\>Like Button
    6.  Replace http://replaceme with `[PathCmpnt type="noprefixbase"][URLCmpnt context="portalContext" type="content" mode="static" htmlencode="true"]`
    If you have a Facebook app, your appid is in the url. Now you can track who likes your content in the Facebook app.


**Parent topic:**[Customizing sites built with Content Template ](../ctc/ctc_design_custom.md)

