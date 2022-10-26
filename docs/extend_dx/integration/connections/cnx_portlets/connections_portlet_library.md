# The Library portlet

Libraries provide community members with document management capabilities to upload, manage, organize, and collaborate on community files.

## Requirements and restrictions

Note the following requirements and restrictions when you add a library portlet to a community page:

-   A library portlet works only on a community page.
-   You can deploy only one instance of a Library portlet on a community page.
-   The Library portlet requires Portal 8 or higher. It does not work on Portal 7 or earlier releases.
-   The Library portlet requires sufficient space to display the contents. Choose a page layout so that the portlet can display in at least two thirds of the width of the page.
-   The theme profile of the Community page on which the Library portlet is deployed requires additional theme modules in order to render and function properly. For more information, see the topic *Updating the portal theme*, which specifies the additional modules required.

**Displaying a library**

A community page can contain only one Library portlet. When you add a library portlet to a community page, one of the following scenarios is true:

-   If a single library exists for the associated IBM Connections community, that library displays automatically in the Library portlet.
-   If multiple libraries exist for the associated Connections community, the contents of the first library in the community displays in the portlet.

    !!! note
        Use a setting in the **Edit Settings** panel of the Library portlet to select a different library when there is more than one to choose from.

-   If no library exists for the associated Connections community, a message informs you that there are no libraries to display.

    !!! note
        If the library associated with the Library portlet is removed from the Connections community, you see this message: Configured library does not exist in the community.


## Using the Library portlet

Community libraries provide owners and members with the following content management capabilities and enhanced social features:

-   Checkin and checkout. Members can check out files and edit them using private drafts. Checked out files are locked to prevent other users from making updates at the same time.
-   Version control. Members can see who updated content at a glance and rollback to previous file versions if there is a need to recover older content.
-   File organization. Members can copy, move, and delete files, and use Trash view functionality to manage deleted content.
-   Draft review. Members can collaborate on shared files and send them through an established review cycle to obtain the approval of selected members of the community.
-   Sharing. Community owners can set file-level access to the library, giving them tighter control over who can edit content.
-   Social content management. Members can interact with content in the community library in a social and dynamic way. For example, they can use tags to categorize content and improve search results, and like files to recommend them to fellow members. Members can also track file updates in the community activity stream, follow files, comment on files, and see who downloaded files.

For details on how to use the library, see the IBM Connections documentation on libraries.

!!! note
    -   The portlet provides only the full page view experience of the Library widget. Therefore, any references in the documentation to configuring the Library or the Overview page capabilities of the Library do not apply to the portlet.
    -   The Library portlet does not support basic authentication.

## Editing the settings for the Library portlet

You can personalize the portlet to show a particular library if there are more than one in the associated Connections community. If you have at least editor access for the page and for the portlet, choose **Edit Shared Settings** and choose what library displays by default when users access the portlet. For more information about access levels, see the WebSphere® Portal wiki.

