# Changing the theme logo in the Simple Theme 

You can change the theme logo to customize your portal site and reflect your business or brand.

Ensure that you created a custom theme for Greenwheels that uses the Simple Theme template. To learn how to create the custom theme, go to the Roadmaps section and find *Roadmap: Creating a custom Simple Theme*.

1.  Create the directory ThemeLogo.

2.  Use a [WebDAV client](../admin-system/webdav.md) to donwload the Greenwheels theme.

3.  Open the directory ThemeLogo.

4.  Upload your new logo to a folder in the theme, such as Greenwheels/css/images. In this example, the new logo is a .png image called logo.png.

5.  Open the theme.html file in the root theme folder, Greenwheels/theme.html.

6.  Locate the following code string:

    `<svg class="stLogo" role="img" aria-label="HCL Digital Experience"> <title>IBM Digital Experience</title> <use xlink:href="#stBee"></use> </svg>`.

7.  Replace the code string in the step above with the following code string:

    `<img alt="Logo" src="css/images/logo.png">`.

8.  Save the file.

9.  Use a [WebDAV client](../admin-system/webdav.md) to upload the changed files of your theme.


The default logo is replaced by your custom logo.

**Parent topic:**[Understanding the Simple Theme ](../dev-theme/themeopt_themedev_simpletheme.md)

