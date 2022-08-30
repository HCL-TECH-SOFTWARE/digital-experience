# Updating remote search service by using manual steps

If you originally installed the remote service by using manual steps, then you must use manual steps to upgrade it after you apply the Combined Cumulative Fix on the portal server.

Apply the Combined Cumulative Fix on the portal server. For more information about applying the Combined Cumulative Fix, go to [Combined cumulative fix instructions: Remote search.](https://help.hcltechsw.com/digital-experience/9.5/overview/ccf_95_remote_search.html).

1.  Copy PseLibs.zip and depending on the requirements of your environment, copy one of the two files WebScannerSoap.ear or WebScannerEjbEar.ear to the directory `[AppServer\_root](../reference/wpsdirstr.md#was_root)/installableApps`.

    You find these files in the following locations of your portal installation:

    -   The files WebScannerSoap.ear and WebScannerEjbEar.ear are in the directory `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/prereq/prereq.webscanner/installableApps/`
    -   The file PseLibs.zip is located under directory `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/search/wp.search.libs/installableApps`
2.  Depending on the requirements of your environment, update one of the two applications WebScannerEJbEar.ear or WebScannerSoap.ear on a remote server. For example, this can be server1.

    Proceed by the following steps:

    1.  Access the WebSphere® Integrated Solutions Console.

    2.  Click **Applications** \> **WebSphere Enterprise Application**.

    3.  Depending upon what you originally installed, specify either **PSEStandalone** or **WebScannerEar**.

    4.  Click **Update**.

    5.  Specify the option to **Replace the entire application**.

    6.  Browse and select **WebScannerEjbEar.ear** or **WebScannerSoap.ear**, depending on whether you are using EJB or web service through SOAP.

    7.  Click **Next**.

    8.  On the following panels, accept the default settings.

    9.  A message confirms that the application PSEStandalone \(for EJB\) or the application WebScannerEar \(for SOAP\) was updated successfully.

    10. Click **Save to Master Configuration**.

    11. Click **Save**.

3.  Extract the Portal Search libraries to the remote server and add them to the class path on the remote server. To do this step, proceed as follows:

    1.  Delete the contents of the directory installableApps/extract that you created when you first installed the remote search service.

    2.  Locate the file PseLibs.zip in the directory `installableApps` and extract its contents into the empty directory installableApps/extract.

    3.  Open the WebSphere Integrated Solutions Console.

    4.  Click **Environment** \> **Shared Libraries**.

    5.  Create or modify the new shared library named PSE.

        When you create the library, check the option **Use an isolated class loader for this shared library**.

    6.  Click **Apply** \> **Save** to save your changes to the configuration.

4.  Restart the WebSphere Application Server.



