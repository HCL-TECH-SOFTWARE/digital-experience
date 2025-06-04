# Attribute-based administration

Attribute-based administration provides a facility to customize the layout of a page for individual authenticated users by using rules to show or hide pages or portlets.

Portal Personalization rules can be used to control whether a page is displayed in the site navigation; this is managed by choosing a rule appropriate for the user attribute you want to enable to see the page. If the rule returns true, the page or portlet will be shown, otherwise, it will be hidden.

Attribute-based administration is only available for authenticated users. If Personalization is not installed or is not enabled in the properties settings, you will not see this option. For anonymous users, all pages are shown.

## Access Control and Visibility Rules

Access Control and Visibility Rules both impact what appears on a portal page or portlet. Access Control determines what a user is allowed to see on a page or in a portlet. In order to see pages and portlets, a user must be explicitly defined as a member of the group that has access. The groups are arranged in a hierarchy and each group is assigned roles such as administrators or editors.

Visibility rules determine what a user will see, or what has been targeted towards a user, and Access Control is based on group membership, visibility rules use any type of information, including LDAP attributes, or time of day. For example if you want to hide a portlet for an individual in a certain geography, store the location as an attribute in LDAP, and assign a visibility rule hiding the portlet. For example, a user may have access to the revenue figures for all divisions for the entire year, but these figures should not be displayed prominently except when they are first released. For a week after the figures are first released, the figures for the employee's division should show prominently on their home page. The visibility rule hides figures for divisions the employee is not in and only shows the employee's figures the week after they are released.

Access Control takes precedent over visibility rules. You must have access to a page or portlet prior to applying visibility rules. Access Control also determines if a page or portlet will be returned in a search; if a user does not have access, he will not be able to see the portlet or page in search results. If a user has access to a portlet or page, but has the visibility rule set to hide the page or portlet, it will show up in search results.



