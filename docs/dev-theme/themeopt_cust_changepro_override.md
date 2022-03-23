# Setting a profile override on a page

You can change the profile for a specific page to define the modules loaded.

**Related information**  


[Embedding the HCL Portal 8.5 site toolbar dynamically without a dynamic content spot ](../dev-theme/themeopt_cust_toolbar_dynamic_embedding.md)

## Page Properties portlet

1.  Turn on **Edit Mode**.

2.  Click **Page** \> **Edit Page Properties** or **Menu** \> **Edit Page Properties**.

3.  Click **Advanced**.

4.  In the **Theme Settings** section, select the desired profile from the **Profile** drop-down, such as Full or Lightweight.

5.  Click **Save**.


## WebDAV

1.  Connect to WebDAV for the page where you want to set the profile override.

2.  Download the metadata.properties file that displays for the page to your local system.

3.  Open the metadata.properties file on your local system.

4.  Set a parameter with the name resourceaggregation.profile and a value pointing to the location of the profile.

    For Example:

    ```
    resourceaggregation.profile=profiles/profile_lightweight.json
    ```

5.  Save the file.

6.  Upload the file back to WebDAV.


## XMLAccess

1.  Export the page you want to set the profile override on, you can use the command line or the Manage Pages portlet.

2.  Open the XML export of the page and find the definition for the page.

    For Example:

    ```
    <content-node action="update" active="true" allportletsallowed="true" content-parentref=" 
    Z6_M0000000000000000000000001" create-type="explicit" domain="rel" objectid=" Z6_M000
    0000000000000000000002" ordinal="700" themeref="ZJ_MLSU3F5400G000IPJM60CT3GN6" type="staticpage">
    ```

3.  Set a metadata parameter on the page with the name resourceaggregation.profile and a value pointing to the profile.

    For Example:

    ```
    <parameter name="resourceaggregation.profile" type="string" update="set"><![CDATA[profiles/profile_lightweight.json]]&gt;</parameter>
    ```

4.  Import the XML file using the command line or use the XML Import portlet.


