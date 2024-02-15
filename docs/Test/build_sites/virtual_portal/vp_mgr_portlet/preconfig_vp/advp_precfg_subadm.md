# Preconfiguring the sub-administrators for virtual portals

You can configure the roles and access rights that are assigned to sub-administrators on portlets of a virtual portal globally and before you create a virtual portal. The following steps must be completed on your initial portal installation.

1.  Click the **Administration menu** icon. Then, click **Portlet Management** \> **Portlets**. Then, click **Manage Portlets**.

2.  In the list of portlets, locate the Virtual Portal Manager portlet.

3.  Click the **Configure Portlet** \(wrench\) icon of the Virtual Portal Manager portlet.

4.  Perform the following steps, depending on the requirements for your virtual portals:

    1.  If you want to change the list of portlets, to which the sub-administrators have access:

        1.  Edit the **portletListNeedAccess** parameter of the portlet. Remove those portlets for which you want the sub-administrators of your virtual portals to have no access rights.
        2.  Add portlets as required by adding the unique names of the portlets to the list. You might need to take a note of the list and remove the parameter, and then enter the parameter with your updated list.
        The default list contains all portlets that are listed under Content of a virtual portal.

    2.  If you want to change the access rights that are granted to the sub-administrators on the portlets of virtual portals, edit the **actionSetName** parameter of the portlet and change the role that you want to assign to the sub-administrators to the role that fits your requirements.

        The default role is EDITOR. You might need to take a note of the parameter and remove it, and then reenter the parameter with the updated value. You can enter the following values: Administrator, Security Administrator, Delegator, Manager, Privileged User, User.

        !!! note
            sub-administrators have the roles that you assign to them on all the portlets that are listed under the **portletListNeedAccess** parameter of the Virtual Portal Manager portlet \(see the previous step\).

5.  Click **OK** to save your changes.

6.  Assign the virtual portal sub-administrators administrator rights on the JCR root as required.



???+ info "Related information"
    - [Content of a virtual portal](../../vp_planning/advppln_content.md)
    - [Sub-administrators of a virtual portal and their access roles and permissions](../../vp_planning/vp_roles/advppln_roles_subadm.md)
    - [Filling a virtual portal with content](../../adm_vp_task/vp_adm_task/advp_tsk_fill_content.md)

