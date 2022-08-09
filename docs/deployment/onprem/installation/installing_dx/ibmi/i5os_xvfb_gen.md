# Rendering documents on IBM i

To enable document preview function for HCL Web Content Manager and the Common Mail portlet, you must set up an HTML rendering server to work with HCL Digital Experience. Because IBM i does not contain native graphics support, you must install extra fonts to run the document conversion that is required by these functions. Document conversion enables HCL Digital Experience to convert documents that are produced by commonly used office programs into web pages so that they can be viewed and searched by users online. The additional fonts include an HTML rendering server that is known as X virtual frame buffer for the X server.

**Before you begin, you must have:**

-   An HCL Digital Experience profile that runs on your IBM® i system; record the name of your HCL Digital Experience profile for future reference.
-   *OS/400 - Additional Fonts \(5770SS1, Option 43\)*.

After you set up your HTML rendering server, you must also enable the Document Conversion Services.

Complete the following tasks on each HCL Portal node to render documents on IBM i:

**Note:** Use the HTML rendering server that you associate with your HCL Portal profile only for HCL Portal. Using the HTML rendering server with other applications might cause problems.

-   **[Configuring an HTML rendering server on IBM i](../install/i5os_xvfb_setup.md)**  
After you have installed OS/400 - Additional Fonts \(5770SS1, Option 43\), on your IBM i system, an HTML rendering server \(X virtual frame buffer for X server\) is present. You must select a display number for the HTML rendering server.
-   **[Associating an HTML rendering server with HCL DX on IBM i](../install/i5os_xvfb_assoc.md)**  
After you select a display number for the HTML rendering server \(X virtual frame buffer for X server\), you must associate this server with the installed HCL Digital Experience profile.

**Parent topic:**[IBM i: Installing HCL Portal and HCL Web Content Manager](../install/installingwp-IBMi.md)

