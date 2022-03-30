# Directory Search 

The Directory Search or "People Picker" portlet is a common embedded component that allows users to search for and select names of people \(individual users\) and groups for which the portal is configured.

Directory Search is different from People Finder in two ways:

-   Users use Directory Search as part of a task, such as sending a document link to other people with access to the same document library. Users can search for user or group names and select them. Directory Search then tries to find the selection so that it can be used in the next step of the larger task.
-   Users can search for groups and people.

Directory Search is supported as a remote WSRP service, and is available from all calling applications.

## Using the Directory Search portlet

Directory Search opens in a window that is set to use the "no skin" skin so that it displays without a title bar. The portlet provides common controls for searching for people and groups.

|Control|Description|
|-------|-----------|
|**Search for**|The field where users enter all or part of a name for retrieval from the directory. Users can search for person names only, group names only, or person names and group names.|
|**Search results**|The list of names \(persons and groups\) that match the search text. By default, the application context and the type of directory determine the information that is displayed in the columns of the search results list. You can configure the search results to show information in 3 columns. Users can use the third column to distinguish between people whose name information in the first and second columns is identical.|
|**Show details**|Displays profile information for the selected name. If the search results include multiple users with the same displayed name, viewing a selected name's profile lets you check whether it is the one you want. **Tip:** As an alternative, you can hover over the selected name to see the profile information.

|

## Starting Directory Search Portlet

Starting the Directory Search portlet requires the use of the HCL Digital Experience urlGeneration tag. This tag creates a URL to the Directory Search portlet. The following parameters are used with urlGeneration tag. This tag uses openModalDialog to pass a callback method, which is called when the portlet is closed, and contains the resulting people or groups that were selected:

-   contentNode="PeopleConstants.IBM\_PORTAL\_DIRECTORY\_SEARCH\_PAGE"
-   compositionNode="PeopleConstants.IBM\_PORTAL\_DIRECTORY\_SEARCH\_CONTROL"
-   portletWindowState="solo"
-   newWindow="true"

The parameters that are mentioned in the following table are used with the urlGeneration tag. The Lable and buckets parameters are required, while the other parameters are optional. Except for the following parameters, the urlGeneration tag accepts customized parameters.

|Parameter|Possible values|Description|
|---------|---------------|-----------|
|Label

|default when parameter not specified: `Selected names:`

`picker.mail.label=Recipients:`

`str.calendar.label=Recipients:`

|Resource key for the text string that the calling portlet requires; these resource keys are stored in the people picker property file. For example, the default is `Selected names` but the Mail portlet needs it to be `Recipients`.|
|dirs

|default when parameter not specified: `WMM`

`WMM=Organization Directory Adapter`

|A comma delimited list that consists of the directory adapters that the picker should search.|
|searchScope

|`peopleOnly`

`groupsOnly`

`all`

If parameter is not specified, people and groups are searched \(all\)

|Determines whether you can search for people only, groups only, or both people and groups. Also determines whether the **Show Group Member** button is displayed. If the value for this parameter is either `groupsOnly` or all, the **Show Group Member** button is displayed.

|
|requireEmail

|true/false

|Determines whether the user can select the name of a person who does not have an email address. If the value for this parameter is true and the user tries to select a person who does not have an email address, an error message

|
|buckets

|default when parameter not specified: Only one Search results list box is displayed, and the user can select only 1 name in it.

`picker.mail.bucket1,picker.mail.bucket2`,

`picker.mail.bucket3=To,cc,bcc`

|The value is 0 or a comma-delimited list of resource keys for the text strings that the calling portlet requires. These resource keys are stored in the people picker property file.

Determines the following:

Whether the user can select only 1 name or more than 1 name.

Whether a second list box is displayed. If the user can select multiple names, a second list box that holds the selected names is displayed. If the user can select only one name, the second list box bucket is not displayed.

The number of **Add** buttons that are displayed, and the number of **buckets** in the second list box. Example: the default is one button that is labeled **Add** and no **buckets** in the second list box, but the Mail portlet has three buttons and buckets: To, cc, and bcc.

|

## Setting up Directory Search

For Directory Search, make sure that your environment meets the following client and server requirements.

**Note:** The ability to search for users and groups in the Directory Search portlet requires the USER role on the USERS and USER GROUPS virtual resources.

## Client requirements

This portlet supports browsers capable of rendering HTML markup. The following table provides detailed information.

|Item|Description|
|----|-----------|
|Markup level|HTML 4.01 Transitional|
|Java applet|No|
|JavaScript|Yes|
|<iframe\>|No|
|Style sheets|Portal styles only|
|Software|The Directory Search portlet is compatible with specific web browser software releases. For details, refer to the *HCL Portal hardware and software requirements*.The Directory Search portlet is compatible with specific web browser software releases. For details, refer to the *Lotus® Quickr® hardware and software requirements* document.|
|Accessibility|Yes|

## Server requirements

There are no special server requirements for the Directory Search portlet.

## Deployment/Installation

This portlet is installed automatically as part of HCL Portal installation.

**Note:** This portlet is supported as a remote WSRP service.

## Configuring Directory Search

When you are searching for people and groups, Directory Search searches the repositories that are defined in the Member Manager component of the portal. These repositories can include the default file repository, LDAP user registry, property extension database, database user registry, or custom user registry. For more information about configuring Member Manager, see the topic on User registry considerations.

The directory applies the `byName` query that is defined in Member Manager when retrieving person or group names. The `byName` query uses cn when it is retrieving a group name, and at least one of the following attributes when it is retrieving a person name:

-   cn
-   givenName
-   sn
-   DisplayName

For detailed information, refer to the attribute definition and mapping files and the configuration property files that are described in Member Manager documentation.

## Configuration parameters

The attributes that the Directory Search portlet examines depend on how `configurePeoplePickerSearch` is set. To set the value, use these steps:

1.  Log on to the WebSphere® Integrated Solutions Console as an administrator.
2.  Go to **Resources** \> **Resource Environment** \> **Resource Environment Providers** \> **WP PeopleService** \> **Custom properties**.
3.  Check the entry for `configurePeoplePickerSearch`.

    If `configurePeoplePickerSearch` is `false` \(default setting\), the following attributes are searched:

    -   For user: `cn`, `givenName`, `sn`, `displayName`
    -   For group: `cn`, `description`, `viewIdentifiers`, `displayName`
    If `configurePeoplePickerSearch` is `true`, the following attributes are searched:

    -   For user: attributes that are specified in the `pickerPeopleSearchAttribute` property
    -   For group: attributes that are specified in the `pickerGroupSearchAttribute` property

To customize search attributes, complete the following steps:

1.  Log on to the WebSphere Integrated Solutions Console as an administrator.
2.  Go to **Resources** \> **Resource Environment** \> **Resource Environment Providers** \> **WP PeopleService** \> **Custom properties**.
3.  Set `configurePeoplePickerSearch` to `true`.
4.  Specify attributes at the `pickerPeopleSearchAttribute` property \(for user\) or at the `pickerGroupSearchAttribute` property \(for group\).

    **Note:** `pickerPeopleSearchAttribute` and `pickerGroupSearchAttribute` each require four attributes. For example, to search `cn`, `displayName`, `sn`, and `viewIdentifiers` for group, use the following settings: `configurePeoplePickerSearch = true` `pickerGroupSearchAttribute = cn,displayName,sn,viewIdentifiers`

5.  Save the changes. In a clustered environment, synchronize all nodes.
6.  Restart HCL Portal.

-   **[Changing the number of search results found ](../collab/i_domi_t_por_dirs_results_limit.md)**  
By default, Member Manager limits the number of entries that are returned to 50 when you use the Directory Search window to search the organization directory for names. By modifying the pickersettings.properties file, you can change the number of search results returned.
-   **[Changing the minimum number of characters in names for searching ](../collab/i_domi_t_por_dirs_char_limit.md)**  
By default, Member Manager requires users to enter a minimum of two characters when they use the Directory Search window to search the organization directory for names. This limit is not appropriate for all languages. By modifying the pickersettings.properties file, you can reduce the limit to one character.
-   **[Configuring display attributes in the directory search portlet ](../collab/i_coll_r_por_dirs_dsply_attrib.md)**  
You can configure the display attributes in the directory search dialog.
-   **[Configuring search attributes in the directory search portlet ](../collab/i_coll_r_por_dirs_search_attrib.md)**  
You can configure the search attribute in the directory search dialog.
-   **[Configuring the wildcard support in directory search queries ](../collab/i_domi_t_wildcard.md)**  
You can use the wildcard character \(\*\) in directory search queries.

**Parent topic:**[Finding users ](../collab/collab_pfind_dirs.md)

**Related information**  


[HCL Digital Experience detailed system requirements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=ba230c701b983c50f37655352a4bcb29)

