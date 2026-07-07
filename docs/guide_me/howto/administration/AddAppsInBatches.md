# How to add applications to the Application Palette in batches

## Applies to

> HCL Digital Experience v9.5 and Higher

## Introduction

Within HCL DX, you can add applications to a page from the site toolbar. You can add new categories to the site toolbar to organize your applications. After you deploy HCL DX, you can customize the Create > Applications user interface in the site toolbar. Add categories that reflect your business needs and website organization.

It is possible to add applications to your custom application palette category one at a time, but for larger installations with many custom applications, you can follow steps below to create custom categories and bulk add portlets to the application palette.

## Instructions

This is a two step process and requires XMLAccess and access to your Portal Administration (Managed Pages) view.

1. Create a custom tag and assign that tag to the applications you want in a custom application palette category. You can do that with the following XML-code that you will need to create and use as input file for your XMLAccess command:

    ```html
    <request
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"xsi:noNamespaceSchemaLocation="PortalConfig_8.0.0.xsd" type="update"> <portal action="locate"> <!-- Assignment of the tag 'sample' to the custom resource -->
    <tag action="update" resourceref="Z3_2P9GGK41P0ESB0QT8JUI5730G7" domain="comm" owner="uid=wpsadmin,o=defaultwimfilebasedrealm" locale="en">CustomAppCategory</tag>
    <tag action="update" resourceref="Z3_2P9GGK41P0ESB0QT8JUI573084" domain="comm" owner="uid=wpsadmin,o=defaultwimfilebasedrealm" locale="en">CustomAppCategory</tag>
    <tag action="update" resourceref="Z3_2P9GGK41P0ESB0QT8JUI573086" domain="comm" owner="uid=wpsadmin,o=defaultwimfilebasedrealm" locale="en">CustomAppCategory</tag>
    </portal>
    </request>
    ```

    The general format looks like this:

    ```html
    <tag action="update" resourceref="<portlet object ID>" domain="comm" owner="<your portal admin full distinguished name and domain>" locale="en">TagName</tag>
    ```

    You can use this format to create a tag, if it doesn't exist already.  You can assign as many tags as you want to as many portlets as you want. In this way you could have custom portlets show up under just one category or multiple different categories.

    You can now get a portlet entity feed of all portlets tagged with your custom tag, called CustomAppCategory, by using this URL:

    ```URL
    http://host:port/wps/mycontenthandler?uri=rm:empty?tmparam=tm%3aname%3aCustomAppCategory
    ```

    This is the portlet entity feed.  You need to use this when you create a category in the next step.

2. Next, please do the following steps to create a new category:

    a. Navigate to **Administration > Managed Pages > Content Root > Hidden Pages > Find the applications root**. The unique name is: **com.ibm.portal.toolbar.applications.category.label.root**.  

    b. Under the application category root label, create a new URL. Select the markup type as HTML and then put in a relative URL. In our case, it is the URI of the full portlet entity feed URL. For example you can paste the following for the URL: **rm:empty?tmparam=tm%3aname%3aCustomAppCategory**.

This creates a category and will add all portlets tagged with that category to the application category immediately.
