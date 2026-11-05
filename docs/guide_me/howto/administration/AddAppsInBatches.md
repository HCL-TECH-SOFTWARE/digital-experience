# How to add applications to the Application Palette in batches

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

In HCL DX, you can add applications to a page from the site toolbar and create custom categories to organize them based on your business needs and website structure. While adding applications individually is possible, larger installations benefit from bulk processing. This article describes how to create custom categories and add portlets to the Application Palette in batches.

## Instructions

To bulk add applications to the Application Palette, perform the following steps:

!!!note
    This process requires XMLAccess and access to your Portal Administration (Managed Pages) view.

### Tagging portlets using XMLAccess

1. Create an XML input file containing tag definitions for your target portlets.

    Use the following tag element format to create or assign a tag:

    ```html
    <tag action="update" resourceref="<portlet object ID>" domain="comm" owner="<your portal admin full distinguished name and domain>" locale="en">TagName</tag>
    ```

    Use this format to create a tag if it does not already exist. You can assign multiple tags to multiple portlets to display custom portlets under single or multiple categories.

    Insert your tag definitions into the following XML script structure:

    ```html
    <request xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"xsi:noNamespaceSchemaLocation="PortalConfig_8.0.0.xsd" type="update"> 
        <portal action="locate"> 
            <!-- Assignment of the tag 'sample' to the custom resource -->
            <tag action="update" resourceref="Z3_2P9GGK41P0ESB0QT8JUI5730G7" domain="comm" owner="uid=wpsadmin,o=defaultwimfilebasedrealm" locale="en">CustomAppCategory</tag>
            <tag action="update" resourceref="Z3_2P9GGK41P0ESB0QT8JUI573084" domain="comm" owner="uid=wpsadmin,o=defaultwimfilebasedrealm" locale="en">CustomAppCategory</tag>
            <tag action="update" resourceref="Z3_2P9GGK41P0ESB0QT8JUI573086" domain="comm" owner="uid=wpsadmin,o=defaultwimfilebasedrealm" locale="en">CustomAppCategory</tag>
        </portal>
    </request>
    ```

2. Run the XMLAccess command using your created file to assign the tags to the specified portlets. 
   xmlaccess -user Portal_admin_user -password Portal_admin_password -url http://[myhost]:[port]/wps/config -in yourInputFile.xml -out result.xml

   Replace Portal _admin_user with the name of the portal admin user.
   Replace Portal_admin_password with the password for the admin user.
   Replace yourInputFile.xml with the full path to your input file relative to where you are running the xmlaccess command.

   You can use whatever name you like for the output file.  In the example above we called it result.xml.

3. Obtain the portlet entity feed of all portlets tagged with your custom tag (for example, `CustomAppCategory`) using the following URL structure:

    ```url
    http://host:port/wps/mycontenthandler?uri=rm:empty?tmparam=tm%3aname%3aCustomAppCategory
    ```

### Creating the custom category

1. Log in to HCL DX as an administrator.
2. Go to **Open applications menu > Administration > Site Management > Pages > Content Root.**
3. Select **Hidden Pages** with the **ibm.portal.HiddenPages** identifier.
4. Search and select **Application Categories**.
5. Select **New URL**.
6. Under **A link to a Web page with the following URL**, ensure the **HTML** box is checked.
7. In the URL box, enter the relative URI of the full portlet entity feed, such as `rm:empty?tmparam=tm%3aname%3aCustomAppCategory`.  
8. Select **OK**.

### Verifying the custom category

1. Navigate to any page and toggle **Edit Mode**.
2. Select **Open site toolbar**, and then select **Add page components and applications**. On the toolbar, select +.
3. Select the **Applications** tab.
4. Select the custom category to verify the portlets defined in the XML input file.
