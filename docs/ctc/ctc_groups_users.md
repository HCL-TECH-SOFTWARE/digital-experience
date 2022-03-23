# Groups and users 

A set of predefined groups and users are included with Content Template. The groups are designed to demonstrate how different user types can interact with Content Template. Each group contains sample users. You can add your own users to the predefined groups to give real users the same access as the example users.

**Note:** These predefined groups and users are supported on stand-alone servers only. They might not install properly on a cluster, or when using a custom LDAP.

Each group includes a generic user and a real world persona. The generic users are useful when creating quick prototypes. The personas are useful when creating demonstration sites. The password for each user is the same as its login name.

|Group|Description|Generic user login and password|Persona login and password|Persona name|Portal page access|CTC Demo and Content library access|Design and Process library access|
|-----|-----------|-------------------------------|--------------------------|------------|------------------|-----------------------------------|---------------------------------|
|CTC Site Managers|Site Managers manage the layout and styles of the site, and can create new pages in the site.|ctcmanager|amoreno|Al Moreno|Manager|Manager|ManagerReviewer access from the draft stage of the templated workflow

|
|CTC Site Developers|Site developers can manage the layout and styles of the site, but cannot create new pages.|ctcdeveloper|mleclair|Maureen Leclair|Editor|Editor|Editor|
|CTC Content Reviewers|Reviewers can view the site, and edit and review items that are in a workflow.|ctcreviewer|dmishkey|Dan Mishkey|User|Editor|ContributorReviewer access from the draft stage of the templated workflow

|
|CTC Content Authors|Content authors can view the site, create new items, and edit items that they created.|ctcauthor|estandwood|Evelyn Standwood|User|Editor|Contributor|
|CTC Content Viewers|Content viewers are authenticated users who can only view the site, not edit it.|ctcviewer|graynes|Garnder Raynes|User|User|User|
|Anonymous user|Anonymous users can view sites where anonymous access is enabled.| | | |User on the CTC Demo Site and Internet site samples.|User|User|

## Installing

These groups and users are not configured to be installed by default. You must change the CTC\_USERS parameter to true in the ctc.properties file before installing or upgrading Content Template.

If you install these after an initial installation of Content Template, you must manually set permissions for each user and group.

**Parent topic:**[Sample sites, site templates, groups, and users ](../ctc/ctc-assets-sample-sites.md)

