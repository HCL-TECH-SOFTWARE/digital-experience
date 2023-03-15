# Update Sorting Page by Title

Starting with CF210, you can enable a synch of the Page by Title to the WCM Library. This configuration is disabled by default. This page describes how to enable the feature and describes how it works.

## Description

The Managed Pages feature enables the storing of pages in the Portal Site WCM library which enables workflow, project support, syndication, and other features for pages. When the feature was initially implemented, the data stored in the Portal Site library has the object id of the page as a title. This causes text search to not work for the pages and also the sorting to be off. 

With CF210, there is a new feature to sync the title of the page into the Portal Site library in WCM (and underlying JCR).

## Configuration

1. Add new variable "enable.page.title.sync" in DX WebSphere Application Server under **Resources > Resources Environment Providers > WCM_WCMConfigService > Custom properties**. Set the value to "true".

2. After adding the new variable, restart the JVM.

3. Export all the pages (**Home > Administration > Site Management > Pages > Export Content Root**).

4. Import the exported pages (**Home > Applications > XML Import**). Importing triggers the re-save of pages and, if enabled, the feature saves the title on the title field and not the object id. This is required for each virtual Portal.

5. Go to Web Contents (**Home > Web Content > Authoring > Portal Site > Content > Content Root**) and click **Title Column**. 
    Table entries are sorted by title in ascending order. 

List of pages before clicking **Title Column**:
![Sorting of Pages before](../advadmin_managedpages/_img/sorting_pages_before.png)

List of pages after clicking **Title Column**:
![Sorting of Pages after](../advadmin_managedpages/_img/sorting_pages_after.png)

## Limitations

The sorting works exactly like the sorting of content so the same limitations apply:

-   The page title uses the default language of the system, so the sorting happens based on the page title in that language.
-   The sorting first shows all items in capital letters, followed by the small letter.
-   Ideally, this should be enabled on the syndicator and subscribers if using Managed Pages syndication.


## Disabling the feature

1. Edit the variable "enable.page.title.sync" in DX WebSphere Application Server under **Resources > Resources Environment Providers > WCM_WCMConfigService > Custom properties**. Set the value to "false".

2. After adding the new variable, restart the JVM.

3. Export all the pages (**Home > Administration > Site Management > Pages > Export Content Root**).

4. Import the exported pages (**Home > Applications > XML Import**). Importing triggers the re-save of pages and, if disabled, the feature saves the object id on the title field and not the page title. This is required for each virtual Portal.

5. Go to Web Contents (**Home > Web Content > Authoring > Portal Site > Content > Content Root**) and click **Title Column**. Table entries are sorted by object id in ascending order. 
