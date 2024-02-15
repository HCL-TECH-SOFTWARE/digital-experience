# Setting root access for all web content libraries

Learn how to set root access for all HCL Digital Experience web content libraries using the web content authoring portlet.

You must have administrator access to assign access to the JCR content root node.

This task can be used to assign users a specific level of access to all libraries available through the web content authoring portlet. It is also used to assign virtual portal administrators "contributor" or "administrator" access to the JCR content root node so that they can administer libraries through the web content library view of the Administration page. Although it is possible to assign non-administrator users "contributor" or "administrator" access to the JCR content root node, they cannot work with web content libraries because only administrators have access to the administration page.

1.  Go to **Administration** \> **Portal Content** \> **Web Content Libraries**.

2.  Click **Set access on root**.

3.  Assign users access to a role type:

    1.  Grant virtual portal administrators "administrator" access to enable them to create new libraries and view, edit, and delete all existing libraries.

    2.  Grant virtual portal administrators "contributor" access to enable them to create new libraries and view, edit, and delete libraries that they created. You can assign these users administrator access to libraries they did not create by editing the access settings of individual libraries.

    3.  Grant users a specific level of access to all libraries available through the web content authoring portlet.

4.  Click `Done`
