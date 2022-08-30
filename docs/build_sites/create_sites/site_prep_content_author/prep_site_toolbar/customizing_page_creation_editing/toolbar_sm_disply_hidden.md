# Displaying hidden pages in Site Manager

You can use metadata to control the display of hidden pages in the tree view of site manger. Your settings determine if users have the option to display or hide hidden pages or to always view hidden pages in Site Manager. Hidden pages never display in your site navigation.

The hidden page that is created in Site Manager from the Landing Page template provides you with an example of a hidden page that is set to always display in Site Manager. The landing page template creates a landing page and a hidden Content page. You can think of the Content page as the hidden details page for your landing page that stores the content items that you plan to display on your landing page. If you review the metadata for the hidden Content page that is created, both the com.ibm.portal.Hidden and com.ibm.portal.Details parameters are set to true.

For other pages in your site with com.ibm.portal.Hidden set to true, you can also set the com.ibm.portal.Details to true to always display the hidden page in the tree view of Site Manager.

1.  Turn on **Edit Mode** from the action bar. Site Manager opens automatically.

2.  To view hidden pages in the tree view, click the **Show hidden pages in the tree view** icon in Site Manager. From the context menu, click **Open Page Settings**.

3.  From the Basic view, click the **Edit** icon by Edit Page Properties to open Manage Page Properties.

4.  From the Advanced tab, go to the Metadata section. Click **Show hidden metadata**. Click **Add** if you need to add a new parameter.

    -   To give users the option of showing and hiding hidden pages in Site Manager, you do not need to do anything. The com.ibm.portal.Hidden parameter is already set to true. This setting indicates that you have a hidden page that does not display in the site navigation. You can display the hidden page in Site Manager when you click the **Show hidden pages in the tree view** icon or hide the hidden page in site manager when you click the **Hide hidden pages in the tree view** icon.
    -   If you want the hidden page to always display in Site Manager, click **Add** and enter com.ibm.portal.Details in the field as a parameter with a value of true. Your hidden page will always display in Site Manager even when a user clicks the **Hide hidden pages in the tree view**.
5.  Click **Save**.



