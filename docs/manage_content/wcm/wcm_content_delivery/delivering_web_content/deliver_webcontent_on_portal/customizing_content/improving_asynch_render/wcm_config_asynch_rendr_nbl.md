# Enabling asynchronous web content rendering

You enable asynchronous web content rendering by using the Edit Shared Settings or Configure mode.

To enable asynchronous web content rendering, a user needs sufficient access rights: At least either Manager role privileges on the page with the Web Content Viewer or Manager role privileges on the Web Content Viewer portlet itself.

To enable asynchronous web content rendering for a single portlet instance, use the following procedure.

1.  Go to the page that contains the Web Content Viewer portlet for which you want to enable asynchronous web content rendering.

2.  Change to **Edit** mode.

3.  Open the display menu of the portlet.

4.  Select **Edit Shared Settings** to enter the configuration mode.

5.  Expand the **Advanced Options** section if it is not expanded yet.

6.  Scroll down to the **Asynchronous Web Content Rendering** section.

7.  To enable asynchronous web content rendering for this portlet, select the check box in the Asynchronous Web Content Rendering subsection.

8.  Click **OK** to save and leave the Edit Shared Settings mode.

9.  Optionally, you can also set a timeout for the loading icon for asynchronous web content rendering. If you enable this timeout, the portal marks web content as unavailable, if it takes too long to render. To enable the timeout, proceed as follows:

10. Select **Edit Shared Settings** to enter the configuration mode.

11. Expand the **Advanced Options** section if it is not expanded yet.

12. Scroll down to the **Asynchronous Web Content Rendering** section.

13. Specify the timeout in milliseconds for the asynchronous request.

    Increase or decrease the timeout value to adjust it to the use case and to the back-end turn around times.

    To disable the timeout check completely, set the timeout to the value zero \(`0`\). The asynchronous request then waits until a page redirect occurs or the browser window is closed.

14. Change from Edit mode to View mode.


The web content now renders asynchronously. Until the web content is available, a loading icon and corresponding text appears.

**Note:** Be aware of the following possible error scenarios with asynchronous web content rendering:

-   If a timeout occurs, the placeholder area of the Web Content Viewer removes the waiting icon and displays an error text instead.
-   If the request fails on the server side inside the `serveResource` method, an HTTP error code is displayed in the placeholder area with a corresponding HCL Web Content Manager error message.
-   Issues in the web browser such as missing libraries or theme profiles are displayed in a similar way to indicate the problem.


