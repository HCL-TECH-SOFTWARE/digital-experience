# Collaborative Services API and the person tag

Collaborative Services are a set of methods and JavaServer Page tags that allow developers who are writing portlets for HCL Portal or other application servers to add Lotus collaborative functionality to their portlets. The services can be used to develop new custom portlets, or to add collaborative functionality \(for example, menus or person links indicating online status\) to existing portlets.

The Collaborative Services include a JavaServer Page tag language descriptor \(TLD\) for a person tag.

When added to your custom portlet, the person tag causes people's names to appear as hyperlinks, and the **Click here for Person Card** option to display when the user moves the cursor over an active \(underlined\) person's name. Clicking this option displays the Person card. If HCL Portal cannot identify the person name, it displays the name as plain text and the **Click here for Person Card** option is not available.

By default, the Person card includes the action **Show Profile****Profile**. The **Send Email****Send Mail** action displays if the user has an email address. If Sametime is installed and enabled to work with the portal, the person tag adds an icon that indicates the person's online status and additional actions:

-   **Chat**
-   **Add to Sametime Contacts****Add as Sametime Contact**

**Note:** The person tag provides only default actions, but you can add your own custom actions to the person menu in any portlet.

You can configure the amount of time that the Person card displays by modifying the **personTagTimeout** custom property.

You can also customize the Person card so that only the business card fields display by default, letting users choose whether to expand the information shown.

The tag library for Collaborative Services that includes the person tag is installed on the portal server in the following locations:

-   **Windows™**

    [PortalServer\_root](../reference/wpsdirstr.md#wp_root)\\pcc.impl\\people.iml\\persontag\\taglib\\people.tld\\people\\people.impl\\persontag\\taglib\\shared\\app\\WEB-INF\\tld

-   **UNIX™Linux™**

    [PortalServer\_root](../reference/wpsdirstr.md#wp_root)/pcc.impl/people.iml/persontag/taglib/people.tld/people/people.impl/persontag/taglib/shared/app/WEB-INF/tld

-   **IBM® i**

    [PortalServer\_root](../reference/wpsdirstr.md#wp_root)/pcc.impl/people.iml/persontag/taglib/people.tld/people/people.impl/persontag/taglib/shared/app/WEB-INF/tld

-   **z/OS®**

    [PortalServer\_root](../reference/wpsdirstr.md#wp_root)/pcc.impl/people.iml/persontag/taglib/people.tld/people/people.impl/persontag/taglib/shared/app/WEB-INF/tld


**Note:** You do not need to copy or move the .tld file anywhere within your portal project; you need only refer to its location in your portal installation. You need a reference to it in the JSP file for every portlet that you deploy that uses the person tag.

-   **[Integrating the Business card and online status in a custom portlet](../collab/i_domi_t_api_ptag_add_to_portlet.md)**  
If HCL Digital Experience is configured to work with HCL Sametime, you can integrate the business card and online awareness in a custom portlet. Person names then appear with a dynamic status indicator. Users of the portlet can move the cursor over the name of an active person and then click **Click for Business Card**.
-   **[Customizing Person card actions through the theme](../collab/i_domi_t_api_ptag_cust_theme.md)**  
You can use the theme to add items to the Person card's More actions menu in any portlet that uses the AJAX person tag.
-   **[Setting display duration for the Person card](../collab/i_coll_t_ptag_set_display.md)**  
You can configure the Person card to display longer than the default number of milliseconds by modifying the personTagTimeout custom property in the WebSphere Integrated Solutions Console.
-   **[Customizing the look of the Person card](../collab/i_coll_t_customize_pcard.md)**  
You can change elements of the Click for Person Card option and the appearance of the Person card such as text color, font, background color, and so on, by modifying Cascading Style Sheet \(CSS\) definitions specified in the styles\_people.jspf file located in the theme directory.
-   **[Making business card fields expand and collapse](../collab/i_coll_t_ptag_bcard_expand.md)**  
You can configure the Person card to display the business card fields for a selected name. Users can click a small control to expand the rest of the profile or hide it from view. You enable or disable this control by modifying the showExpandableSection custom property in the WebSphere Integrated Solutions Console.
-   **[Logging for Collaborative Services](../collab/i_domi_t_api_logging.md)**  
The Lotus Collaborative Services APIs use the WebSphere JRas facility for logging error information to the WebSphere Integrated Solutions Console or to log files.


**Related information**  


[People awareness](../collab/i_coll_c_people_aw.md)

