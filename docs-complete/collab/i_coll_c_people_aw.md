# People awareness 

People awareness makes people's names appear as hyperlinks that users can click to display information about the individual and gain access to actions for contacting and working with him or her. If the administrator has configured an HCL Sametime server to work with HCL Digital Experience, users can see each other's online presence in their person links according to the status options they have set in their Sametime client \(for example, whether the person is active, away, offline, or does not want to be disturbed\). The person's online status appears only if Sametime is enabled.

**Note:** Users who are not in an LDAP user registry do not have awareness and cannot see if other users are online. This can happen if you install your portal and then enable a Federated LDAP or Federated DB repository that does not contain that user. Also, users who sign up using the Self Care portlet do not have awareness.

**User impersonation and people awareness:** When a user who is enabled for impersonation impersonates other users, the people awareness feature is disabled for the entire session for which that user is authenticated.

## Person card

Move the cursor over an active \(underlined\) name to see the **Click here for Person Card** option. The Person card displays business card details such as the email address, job title, and so on. Available actions display following the business card section.

Click **Profile** to display full information about the person including \(by default\) business card information, contact information, current job, and background. The information in the business card section is distinct from the set of information you can configure to appear from a person link, so you may choose to display different information about people in each of these contexts.

You can also customize how much information is displayed. For example, you can show just the business card fields by default and let users choose whether to expand the information shown to include contact information, job, and background fields. You can also configure how long the Person card displays.

Additional actions that are available on the Person card depend on whether Domino and collaboration products, the Lotus® Collaborative Services, or both, are configured to work with HCL Portal. These actions can include:

-   **Send Email****Send Mail**

    Opens a new message in the preferred email client as specified in browser and operating system. This option appears only if the user has an email address.

-   **Chat**

    Appears only if Sametime is enabled. This action is not available if the person is offline or has set status to "Do not disturb me."

-   **Add to Sametime List****Add as Sametime Contact**

    Appears only if Sametime is enabled. Action displays a window where a user can add the person to the contact list, as a member of a new or existing personal group. For more information about Sametime client features, see the Sametime documentation.


If you are using a screen reader, you can press Shift + Enter to see the Person card, and then press Tab to navigate through the available actions.

## People awareness and the Person tag

People awareness in the form of online presence \(names displayed as hyperlinks\) is supported by Collaborative Services. In contexts where the Person card is available, the Person JSP tag provides contextual collaboration functionality that is related to a named person. The tag generates the HTML that renders both the actions to display on the Person card and the online presence state to display for that person, taking into account the Domino and collaboration product servers that are installed and enabled in the portal environment.

For more information on configuring a collaborative portal, see the topic on integrating Domino® and the Extended Product Portlets into HCL Portal. When configuring collaboration, pay special attention to the Collaborative Services environment properties file, CSEnvironment.properties, which supports people awareness.

For details on the implementation of the Person tag, and instructions on customizing the tag for HCL Portal applications that you develop, see the Collaborative Services API topic.

-   **[Configuring contact information on person links ](../collab/i_domi_t_pa_cfg_contact_info_p_links.md)**  
When users click a person link, the Person card displays contact information for the selected person. You configure this information by modifying custom properties in the WebSphere Integrated Solutions Console, specifying the Member Manager attributes that correspond to the fields you want to display in the contact information and the order in which you want the information to appear.

**Parent topic:**[Integrating with HCL Sametime ](../collab/i_domi_t_sv_st_cfg_intro.md)

**Previous topic:**[Configuring HCL Sametime Proxy ](../collab/cfg_st_single_ldap.md)

**Related information**  


[People Finder ](../collab/i_coll_r_porcc_pfnd.md)

[Sametime documentation](https://help.hcltechsw.com/sametime/welcome/index.html)

[Collaborative Services API and the person tag ](../collab/i_coll_r_cs_api.md)

[Setting display duration for the Person card ](../collab/i_coll_t_ptag_set_display.md)

