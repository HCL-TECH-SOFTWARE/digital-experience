# Converting portlet instances and settings from the HCL DX API to the standard API

The portal provides a portlet conversion task that allows you to convert the settings and instances of HCL DX API portlets to the corresponding standard API portlets. This is useful when you intend to replace HCL DX API portlets by standard API portlets.

You can use this task as follows: The portlet conversion task converts portlet settings of the HCL DX API portlet to portlet preferences of the standard API portlet. It also converts instances of the HCL DX API portlet to instances of the standard API portlet. User customized portlet data that is associated with the portlet instance is converted into standard API portlet preferences.

To convert the instances and settings of an HCL DX API portlet to a standard API portlet, proceed by the following steps:

1.  Install the standard API portlet by which you want to replace the HCL DX API portlet.

2.  Create a portlet conversion properties file that identifies both the HCL API portlet and the standard API portlet.

    To do this, create or update the following file:

    ```
    [AppServer\_root](../reference/wpsdirstr.md#was_root)/ConfigEngine/properties/portletconversion.properties
    ```

    Confirm that the following parameters are set as specified or modify them if necessary:

    -   **For the HCL DX API portlet:**

        -   **ibmwebapp.uid**

            The uid of the Web application that contains the HCL DX API portlet. This property is required.

        -   **Parameters for identifying the HCL DX API portlet:**

            To identify the HCL DX API portlet, specify one of the following three parameters: the portlet name, the object ID, or the unique name of the HCL DX API portlet:

            -   **ibmportlet.portletname**

                The portlet name of the HCL DX API portlet.

            -   **ibmportlet.uniquename**

                The unique name of the HCL DX API portlet.

            -   **ibmportlet.objectid**

                The object ID of the HCL DX API portlet.

    -   **For the standard portlet:**

        -   **jsrwebapp.uid**

            The uid of the web application that contains the standard API portlet. This property is required.

        -   **Parameters for identifying the standard API portlet:**

            To identify the standard API portlet, specify one of the following three parameters: the portlet name, the object ID, or the unique name of the standard API portlet:

            -   **jsrportlet.portletname**

                The portlet name of the standard API portlet.

            -   **jsrportlet.uniquename**

                The unique name of the standard API portlet.

            -   **jsrportlet.objectid**

                The object ID of the standard API portlet.

    -   **Additional parameters:**

        -   **pages.uniquename**

            This parameter is optional. Specify a comma separated list of unique names of pages. If you specify this parameter, only portlets on these pages and their descendants are converted. If you leave this parameter empty or missing, instances of HCL DX API portlets on all pages are converted.

        -   **converter**

            The name of a converter class that is invoked by the `porltetconversion` task and that performs the conversion of portlet settings and portlet data. The converter class must implement the interface `com.ibm.portal.portletconversion.Converter`. You can specify the default converter `com.ibm.wps.pe.task.DefaultConverter` here. This converter performs basic conversion by filtering out portlet data items whose type is not `String`.

        -   **converter.classpath**

            Semicolon separated list of files and folders that are added to the classpath in order to load the converter class.

        -   **xmlaccess.url**

            The URL to the portal XML configuration interface servlet. You can use this parameter to run conversions for specific virtual portals. If this parameter is empty or missing, the default portal is used to run the conversion.

3.  Change to the directory `[AppServer\_root](../reference/wpsdirstr.md#was_root)/PortalServer/ConfigEngine/`.

4.  Run the portlet conversion task ConfigEngine convert-portlets .

5.  Verify the conversion by reviewing the console.

    The message Build successful indicates a successful conversion. If the message Build failed is displayed upon completion of the task, review the previous steps.

6.  After successful conversion you can uninstall the HCL DX API portlet.


Examples of `portletconversion.properties` files:

```
ibmportlet.objectid=3_O4C9FI930GPE90IGU02QAR0006
jsrportlet.objectid=3_O4C9FI930GPE90IGU02QAR00G3
ibmwebapp.uid=DCE:472fb1b0-3d22-1211-0000-005da8cf7ayz:2
jsrwebapp.uid=StdPortletDataTestPortlet.war.webmod
converter=com.ibm.wps.pe.task.DefaultConverter
```

```
ibmportlet.portletname=An PortletData test portlet
jsrportlet.portletname=StdPortletDataTestPortlet
ibmwebapp.uid=DCE:472fb1b0-3d22-1211-0000-005da8cf7ayz:2
jsrwebapp.uid=StdPortletDataTestPortlet.war.webmod
converter=com.ibm.wps.pe.task.DefaultConverter

```


**Related information**  


[Converting a Portal API Web Content Viewer to the JSR 286 API](../migrate/migrt_ptlt_api_wcm.md)

