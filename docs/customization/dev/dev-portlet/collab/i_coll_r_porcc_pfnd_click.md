# People Finder interaction with other portlets

Other portlets can communicate with People Finder using URL addressability.

The Person tag uses URL addressability to communicate with the People Finder if People Finder is not on the current page. Other collaboration portlets can use URL addressability to programmatically integrate People Finder features. Portlets can display a link for the **Show Profile****Profile** action and thereby access People Finder functionality in their application contexts. Clicking **Show Profile****Profile** displays the Profile inside the People Finder.

|URL Parameter|Possible Values|
|-------------|---------------|
|URLAction|URLShowPersonRecord,\(URL for the Profile page\)

URLShowOrgView|
|URLMemberID|Member Manager memberUniqueIdentifier of the person whose Profile or Organization View is to be displayed. Alternatively, the following Member Manager attributes: -   memberDN
-   any valid input for byName query
-   a valid entry of ibm-PersonAwarenessIdentifier attribute.

|

**Note:** In HCL Digital Experience, People Finder is a standard portlet and therefore does not support cooperative portlet methods.

**Parent topic:**[People Finder](../collab/i_coll_r_porcc_pfnd.md)

