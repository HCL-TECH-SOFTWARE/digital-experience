# Collaborative Services API and the person tag

Collaborative Services are a set of methods and JavaServer Page tags that allow developers who are writing portlets for HCL Portal or other application servers to add Lotus collaborative functionality to their portlets. The services can be used to develop new custom portlets, or to add collaborative functionality (for example, menus or person links indicating online status) to existing portlets.

The Collaborative Services include a JavaServer Page tag language descriptor (TLD) for a person tag.

When added to your custom portlet, the person tag causes people's names to appear as hyperlinks, and the **Click here for Person Card** option to display when the user moves the cursor over an active (underlined) person's name. Clicking this option displays the Person card. If HCL Portal cannot identify the person name, it displays the name as plain text and the **Click here for Person Card** option is not available.

By default, the Person card includes the action **Show Profile****Profile**. The **Send Email****Send Mail** action displays if the user has an email address. If Sametime is installed and enabled to work with the portal, the person tag adds an icon that indicates the person's online status and additional actions:

-   **Chat**
-   **Add to Sametime Contacts****Add as Sametime Contact**

!!!note
    The person tag provides only default actions, but you can add your own custom actions to the person menu in any portlet.

You can configure the amount of time that the Person card displays by modifying the **personTagTimeout** custom property.

You can also customize the Person card so that only the business card fields display by default, letting users choose whether to expand the information shown.

The tag library for Collaborative Services that includes the person tag is installed on the portal server in the following locations:

-   **Windows™**

    PortalServer_root\pcc.impl\people.iml\persontag\taglib\people.tld\people\people.impl\persontag\taglib\shared\app\WEB-INF\tld

-   **UNIX™ and Linux™**

    PortalServer_root/pcc.impl/people.iml/persontag/taglib/people.tld/people/people.impl/persontag/taglib/shared/app/WEB-INF/tld

!!!note
    You do not need to copy or move the .tld file anywhere within your portal project; you need only refer to its location in your portal installation. You need a reference to it in the JSP file for every portlet that you deploy that uses the person tag.


<!-- ???+ info "Related information"  
    -   [People awareness](../collab/i_coll_c_people_aw.md) -->

