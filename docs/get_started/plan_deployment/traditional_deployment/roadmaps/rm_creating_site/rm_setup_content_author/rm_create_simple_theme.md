# Creating a custom theme

This roadmap highlights how to create the custom theme of a design from an HTML component. The theme is used to customize the site builder template and other page templates for the new site that a content author creates.

## Who should use this roadmap

You are a developer on the technical team that is tasked with implementing the HTML prototype. You are responsible only for creating a custom theme and replacing the default logo with your company logo. Other developers are responsible for developing other pieces of the design. Learn the basics of creating and changing the theme logo to reflect your business.


## Creating your custom theme

1.  Click the **Applications menu** icon. Then, click **Theme Development**.

2.  Click **Create Theme**.

3.  In the **Title** field, enter ``Greenwheels``.

4.  From the **Template** menu, select **Simple**.

5.  Click **Create**.

6.  When the dialog indicates that your theme was created, click **Done**. You created your new theme, and you can customize its look and feel.
8.  From the Theme Manager, locate Greenwheels and select **Manage properties**.

9.  On the **General** tab, select **1Column** from the **Default Layout** menu.


Your custom simple theme is ready for the content author to use to customize site and page templates.

## Changing the theme logo

Ensure that you created a custom theme for Greenwheels that uses the simple theme template. To learn how to create the custom theme, go to the Roadmaps section and find *Roadmap: Creating a custom Simple Theme*.

1.  Create the directory ThemeLogo.

2.  Use a [WebDAV client](../../../../../../manage_content/wcm_delivery/webdav/administer_webdav/index.md) to download the Greenwheels theme.

3.  Open the ``ThemeLogo`` directory .

4.  Upload your new logo to a folder in the theme, such as ``Greenwheels/css/images``. In this example, the new logo is a ``.png`` image called ``logo.png``.

5.  Open the ``theme.html`` file in the ``Greenwheels/theme.html`` root theme folder.

6.  Locate the following code string:

    ```
    <svg class="stLogo" role="img" aria-label="HCL Digital Experience"> <title>IBM Digital Experience</title> <use xlink:href="#stBee"></use> </svg>
    ```

7.  Replace the code string in the preceding step with the following code string:

    ```
    <img alt="Logo" src="css/images/logo.png">
    ```

8.  Save the file.

9.  Use a [WebDAV client](../../../../../../manage_content/wcm_delivery/webdav/administer_webdav/index.md) to upload the changes files of your theme.


The default theme logo is replaced by the Greenwheels logo.

