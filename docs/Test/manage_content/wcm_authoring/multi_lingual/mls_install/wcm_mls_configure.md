# Configuring a multilingual system Multilingual Solution

After you install the multilingual extensions, you then must configure your system to support multilingual authoring and rendering.

1.  Log in to HCL Portal as an administrator.

2.  Create a group for your locale owners:

    1.  Click the **Administration menu** icon. Then, click **Access** \> **Users and Groups**.

    2.  Create a group for your locale owners. For example: **Locale Owners**. The base locale owner must belong to this group.

3.  Modify the security of the "**ML Configuration**" library:

    1.  Click the **Administration menu** icon. Then, click **Portal Content** \> **Web Content Libraries**.

    2.  Assign the **Locale Owners** group to the **Editor** role on the library.

    3.  Assign the **Locale Owners** group to the **Contributor** role on the library.

    4.  This is an optional step. To hide all sections in the authoring portlet, except the content and component views, disable inheritance for all item types except content and components.

    5.  Assign the **Administrators** group to the **Administrators** role on the library and all item types.

4.  Run the Update Member Fixer tool by running the following command from the [wp\_profile\_root](../../../../guide_me/wpsdirstr.md)`/ConfigEngine` directory:

    -   **Windows™**

        ConfigEngine.bat run-wcm-admin-task-member-fixer -DPortalAdminId=username -DPortalAdminPwd=password -DWasUserId=username -DWasPassword=password -Dlibrary="ML Configuration" -Dfix=true -DinvalidDn=update -DmismatchedId=update -DaltDn=update

    -   **Linux™**

        ./ConfigEngine.sh run-wcm-admin-task-member-fixer -DPortalAdminId=username -DPortalAdminPwd=password -DWasUserId=username -DWasPassword=password -Dlibrary="ML Configuration" -Dfix=true -DinvalidDn=update -DmismatchedId=update -DaltDn=update

5.  Go to the authoring portlet and update the Configuration settings to add the **"ML Configuration"** library to the list of selected libraries.

6.  Create multilingual configuration file for each set of localized or regionalized libraries.

    1.  From the authoring portlet, create a new content item:

        -   use the **LocalizedConfigurationFileAT** content template from the "**ML Configuration**" library for localized sites.
        -   use the **RegionalizedConfigurationFileAT** content template from the **"ML Configuration"** library for regionalized sites.

    2.  Type a name and display title to represent the set of multilingual sites.

    3.  Complete the following fields:

        -   **Base Content Library**

            Type the name of the library that is used to store items from the default locale, or leave the field blank to indicate that no base locale is used.

        -   **Content Libraries**

            Type the names of all the libraries in your multilingual system, including the base content library, separated by commas. This list must not include any shared design libraries. The order that the libraries are entered in this field determines the output of the render-time and edit-time extensions, so it is recommended to place the base content library first then add the remaining libraries in the order that you want them to be displayed.

        -   **Has Regionalizations**

            Used for localized sites only, this setting determines whether any of the localized sites have associated regionalized versions. Change this setting to true if any regionalized sites are associated with the current set of libraries.

        -   **Content Library Owners**

            For each library listed in the **Content Libraries** field, specify the library name and email address of the user who will be the owner for that library, placing each entry on a new line. For example: MyLibraryFR=wpsadmin@portal.com

        |Site Type|Language Tree|Libraries|Configuration files|
        |---------|-------------|---------|-------------------|
        |Localized site|        -   English <br> -   Spanish|        -   English <br> -   Spanish|        -   **Localized Configuration file** <br> -   Base Content Library: English <br> -   Content Libraries: English, Spanish|
        |Regionalized site|        -   English <br> -   English US \(Primary\) <br> -   English Australia <br> -   Spanish <br> -   Spanish Spain \(Primary\) <br> -   Spanish Mexico|        -   English <br> -   English US <br> -   English Australia <br> -   Spanish <br> -   Spanish Spain <br> -   Spanish Mexico|        -   **Localized Configuration file** <br> -   Base Content Library: English <br> -   Content Libraries: English, Spanish <br> -   **Regionalized Configuration file 1 \(English\)** <br>  -   Base Content Library: English <br> -   Content Libraries: English, English US, English Australia <br> -   **Regionalized Configuration file 2 \(Spanish\)** <br> -   Base Content Library: Spanish <br> -   Content Libraries: Spanish, Spanish Spain, Spanish Mexico|

7.  For each library referenced in each multilingual configuration file, create a link component directly under the Components folder that references the multilingual configuration file:

    -   For references to a localized multilingual configuration file, the link component name must be **MLConfFileReference**.
    -   For references to a regionalized multilingual configuration file, the link component name must be **RegionalizedMLConfFileReference**.
    -   The **ALL\_USERS** group must be assigned to the **User** role in the component access controls.

8.  This step is optional. Activate email notifications for the workflow synchronization extensions:

    1.  Open a multilingual configuration file from the **"ML Configuration"** library.

    2.  Update the following settings in the **General Workflow Synchronization Settings** section:

        -   **emailServer**

            Type the name of your email server.

        -   **emailFromAddress**

            The email address that is entered here is used to set the "From" address on all email notifications. This field must be set to a valid email address.

        -   **authoringUIURL**

            Type the URL of your Authoring server. For example, http://localhost:10045/wps/myportal/wcmAuthoring

    3.  Enable email notifications for each multilingual extension:

        -   **Localized Sites**

            Set the **localize.emailNotificationsEnabled** field in the **Localize Workflow Synchronization Settings** section to **true**.

        -   **Regionalized Sites**

            Set the **regionalize.emailNotificationsEnabled** field in the **Regionalize Workflow Synchronization Settings** section to **true**.

        -   **Synchronized publishing**

            Set the **SyncPublish.emailNotificationsEnabled** field in the **SyncPublish Workflow Synchronization Settings** section to **true**.

        -   **Synchronized expiration**

            Set the **SyncExpire.emailNotificationsEnabled** field in the **SyncExpire Workflow Synchronization Settings** section to **true**.

        -   **Synchronized deletion**

            Set the **SyncDelete.emailNotificationsEnabled** field in the **SyncDelete Workflow Synchronization Settings** section to **true**.

9.  This step is optional. To enable project integration for synchronized publishing, set the **SyncPublish.useProjects** field in the **SyncPublish Workflow Synchronization Settings** section to **true**.

10. This step is optional. For portal sites, you can choose to have portal page mappings added automatically as new translations are created. This option requires the document that is being copied or linked from to have an existing portal page mapping:

    1.  Open a multilingual configuration file from the **"ML Configuration"** library.

    2.  Add updateContentMappings=true to the **General Settings**.

11. Enable syndication for the **"ML Configuration"** library.

    !!! note
        The multilingual solution must be installed on both the syndicator and subscriber before syndication can be enabled.



???+ info "Related information"
    - [Web content associations](../../../wcm_delivery/deliver_webcontent_on_dx/getting_started/wcm_delivery_contentmap_about.md)

