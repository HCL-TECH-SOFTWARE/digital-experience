# Updating scripts and removing deprecated features

To create new Virtual Portals with the same content as the portal from which you migrated, you must pre-configure the default content for creating the Virtual Portal. You must also remove or replace references to deprecated features.

When you migrate a Virtual Portal, HCL Digital Experience treats all pages in the portal as custom, customer-created content. As a result, if the Virtual Portal contains pages that are associated with features that are not available in the new installed version, HCL Digital Experience migrates those pages regardless.

For example, if you migrate a Virtual Portal that contains a Document Libraries page, HCL Digital Experience preserves that page. You can remove these pages manually after you migrate the Virtual Portal.

1.  Register your filename.xml file that you used in the previous system to pre-configure the default content for creating the Virtual Portal.

    **Note:** The name of the file might change based on the release and editions of portal that you are using. The following are examples of file names: "InitVirtualContentPortal.xml, InitAdminVirtualPortal.xml."

2.  **Important:** If you are migrating to HCL Digital Experience 8.5 CF04 or later, you can skip the following steps.

3.  Use the WebSphere® Integrated Solutions Console to update the virtual portal XML scripts to remove references to Dynamic Person Tag portlet.

    **Note:** Your script can contain references to Dynamic Person Tag portlet. This portlet is no longer available and any reference to this portlet causes your script to fail.

    1.  Go to the WebSphere Integrated Solutions Console.

    2.  Click **Applications** \> **Application Types** \> **Assets**.

    3.  Select VirtualPortal.zip, and click **Export**.

    4.  Remove the web-app sequence that includes the opening `<web-app...>` and the closing `</web-app>` tags, and everything in between.

        See the following example to see how the portlet is defined in a web-app sequence:

        ```
        <web-app action="locate" uid="com.ibm.wkplc.people.portal.portlet.dynamicpersontag.web.app">
          <portlet-app action="locate" uid="com.ibm.wkplc.people.portal.portlet.dynamicpersontag.portlet.app">
            <portlet action="locate" name="Dynamic Person Tag" objectid="3_CGAH47L008DE402BK8543I1O47"></portlet>
          </portlet-app>
        </web-app>
        ```

    5.  Remove the Person Tag page that includes the opening `<content-node...>` and the closing `</content-node>` tags, and everything in between. The object `ids`, `portletrefs`, `sharerefs`, and other references in the example might vary in your installation.

        See the following example of the page that is defined in the content-node sequence.

        ```
        <content-node type="page" uniquename="ibm.portal.Person.Tag">
          <supported-markup markup="html" update="set"></supported-markup>
          <localedata locale="en">
        <title>Person Tag</title>
        <description>Person Tag portlet, which enables live names and information for names in IBM Portal</description>
          </localedata>
        </content-node>
        ```

    6.  Select VirtualPortal.zip, and click **Update**.

    7.  Select the default value **Replace entire asset**.

    8.  Locate the updated file and upload the file.

4.  Use the WebSphere Integrated Solutions Console to update the virtual portal XML scripts to remove references to CAI/TAI portlets. For example, the portlets are defined in a web-app sequence like the following examples.

    **Note:** Your script can contain references to the CAI/TAI portlets. These portlets are no longer available and any reference to these portlets cause your script to fail.

    ```
    <web-app action="locate" uid="com.ibm.workplace.community.portal">
      <portlet-app action="locate" uid="com.ibm.workplace.community.portal.1">
        <portlet action="locate" name="Community" objectid="Z3_CGAH47L0008270I7MOUHLP18C5"/>
      </portlet-app>
    </web-app>
    ```

    ```
    <web-app action="locate" uid="com.ibm.workplace.builder.parameterPortlet.ParamConfigPortlet.40b0885181fd00171b3b9587aea11c02">
      <portlet-app action="locate" uid="com.ibm.workplace.builder.parameterPortlet.ParamConfigPortlet.40b0885181fd00171b3b9587aea11c02.1">
        <portlet action="locate" name="Parameters" objectid="Z3_CGAH47L0008270I7MOUHLP18O5"/>
      </portlet-app>
    </web-app>
    ```

    ```
    <web-app action="locate" uid="com.ibm.workplace.policystatus.PolicyStatus">
      <portlet-app action="locate" uid="com.ibm.workplace.policystatus.PolicyStatus.1">
        <portlet action="locate" name="Policy Status Portlet" objectid="Z3_CGAH47L0008270I7MOUHLP18S5"/>
      </portlet-app>
    </web-app>
    ```

    ```
    <web-app action="locate" uid="com.ibm.workplace.builder.propertiesPortlet.portal">
      <portlet-app action="locate" uid="com.ibm.workplace.builder.propertiesPortlet.portal.1">
        <portlet action="locate" name="Properties portlet" objectid="Z3_CGAH47L0008270I7MOUHLP1845"/>
      </portlet-app>
    </web-app>
    ```

    ```
    <web-app action="locate" uid="com.ibm.workplace.builder.manageroles.ManageRoles.50047239651b0018123cdeae474aa5c4">
      <portlet-app action="locate" uid="com.ibm.workplace.builder.manageroles.ManageRoles.50047239651b0018123cdeae474aa5c4.1">
        <portlet action="locate" name="Roles portlet" objectid="Z3_CGAH47L0008270I7MOUHLP18K5"/>
      </portlet-app>
    </web-app>
    ```

    ```
    <web-app action="locate" uid="com.ibm.workplace.cdo.portal">
          <portlet-app action="locate" uid="com.ibm.workplace.cdo.portal.1">
            <portlet action="locate" name="Application Catalog" objectid="Z3_CGAH47L00OJ790IAH1AFAN1067"/>
          </portlet-app>
        </web-app>
    ```

    ```
    <web-app action="locate" uid="com.ibm.workplace.tai.tc">
          <portlet-app action="locate" uid="com.ibm.workplace.tai.tc.1">
            <portlet action="locate" name="Template Catalog Manager" objectid="Z3_CGAH47L00OJ790IAH1AFAN1060"/>
          </portlet-app>
        </web-app>
    ```

    The pages that reference these portlets in sequences like the following examples.

    ```
    <component action="update" active="true" deletable="false" domain="rel" modifiable="undefined" objectid="Z7_CGAH47L0008270I7MOUHLP18M7" ordinal="100" skinref="undefined" type="control" width="undefined">
      <portletinstance action="update" domain="rel" objectid="Z5_CGAH47L0008270I7MOUHLP18E0" portletref="Z3_CGAH47L0008270I7MOUHLP18C5" shareref="Z5_CGAH47L0008270I7MOUHLP18E0"/>
    </component>
    ```

    ```
    <component action="update" active="true" deletable="false" domain="rel" modifiable="undefined" objectid="Z7_CGAH47L0008270I7MOUHLP18I0" ordinal="100" skinref="undefined" type="control" width="undefined">
      <portletinstance action="update" domain="rel" objectid="Z5_CGAH47L0008270I7MOUHLP18I4" portletref="Z3_CGAH47L0008270I7MOUHLP18O5" shareref="Z5_CGAH47L0008270I7MOUHLP18I4"/>
    </component>
    ```

    ```
    <component action="update" active="true" deletable="false" domain="rel" modifiable="undefined" objectid="Z7_CGAH47L0008270I7MOUHLP18U4" ordinal="100" skinref="undefined" type="control" width="undefined">
      <portletinstance action="update" domain="rel" objectid="Z5_CGAH47L0008270I7MOUHLP18U2" portletref="Z3_CGAH47L0008270I7MOUHLP18S5" shareref="Z5_CGAH47L0008270I7MOUHLP18U2"/>
    </component>
    ```

    ```
    <component action="update" active="true" deletable="false" domain="rel" modifiable="undefined" objectid="Z7_CGAH47L0008270I7MOUHLP18Q6" ordinal="100" skinref="undefined" type="control" width="undefined">
      <portletinstance action="update" domain="rel" objectid="Z5_CGAH47L0008270I7MOUHLP18Q1" portletref="Z3_CGAH47L0008270I7MOUHLP1845" shareref="Z5_CGAH47L0008270I7MOUHLP18Q1"/>
    </component>
    ```

    ```
    <component action="update" active="true" deletable="false" domain="rel" modifiable="undefined" objectid="Z7_CGAH47L0008270I7MOUHLP1865" ordinal="100" skinref="undefined" type="control" width="undefined">
      <portletinstance action="update" domain="rel" objectid="Z5_CGAH47L0008270I7MOUHLP1863" portletref="Z3_CGAH47L0008270I7MOUHLP18K5" shareref="Z5_CGAH47L0008270I7MOUHLP1863"/>
    </component>
    ```

    The `portletref` attribute of the `portletinstance` tag matches one of the `objectid` attributes from the portlet tags in the web-app section.

    ```
    <portlet action="locate" name="Roles portlet" objectid="Z3_CGAH47L0008270I7MOUHLP18K5"/>
    <portletinstance portletref="Z3_CGAH47L0008270I7MOUHLP18K5" ... />
    ```

    Make sure to remove the web-app sequence that includes the opening `<web-app...>` and the closing `</web-app>` tags, and everything in between. Also, remove the components that reference the portlets. It includes the opening `<component ...>` and the closing `</component>` tags, and everything in between. The `object ids`, `portletrefs`, `sharerefs`, and other references in the example might vary in your installation.



