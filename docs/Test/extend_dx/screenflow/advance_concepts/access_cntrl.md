# Access control

You can use the Portal Access Control (PAC) to control what users can do when they are working with dialogs.

You can assign users the following roles on the virtual resource PCM_DIALOGS:

-   Administrator - An administrator has the rights and all tasks that are related to dialogs are done by the administrator.
-   Security administrator - A security administrator can grant access on dialogs to other users.
-   Manager - A manager can delete dialog definitions.
-   User - A user can view a dialog definition and all its transition endpoints and transitions.
-   Editor - An editor can create or edit a dialog definition. For example, an editor can add or remove transition endpoints or transitions.

These roles settings are inherited.

To assign users or user groups to these roles with the XML configuration interface \(XMLAccess\), run a script similar to the one shown in the following code sample.

Code sample:

```

01 <virtual-resource action="update" domain="rel" name="PCM_DIALOGS">
02  <access-control externalized="false" owner="undefined" private="false">
03          <role actionset="User" update="set">
04              <mapping subjectid="all authenticated portal users" subjecttype="user_group" update="set"/>
05          </role>
06  </access-control>
07 </virtual-resource>
```

Processing a specific dialog depends on whether the user has sufficient rights on all pages and portlets that are part of the dialog. You specify access control settings on a dialog definition level. The following code sample shows an example.

Code sample:

```

01 <dialog name="dialog1">
02  <access-control externalized="false" owner="undefined" private="false">
03      <role actionset="User" update="set">
04          <mapping subjectid="uid=wpsadmin,o=defaultWIMFileBasedRealm" subjecttype="USER" update="set"/>
05      </role>
06      <role actionset="Editor" update="set">
07          <mapping subjectid="uid=wpsadmin,o=defaultWIMFileBasedRealm" subjecttype="USER" update="set"/>
08      </role>
09  </access-control>
10  <transition-endpoint name="...">
11      ...
12  </transition-endpoint>
13  <transition>
14      ...
15  </transition>
16 </dialog>

```

!!!note
    Assigning access on a specific dialog definition does not automatically assign access to all artifacts that are part of this dialog definition, such as pages, and portlets.



