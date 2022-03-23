# Removing obsolete portlets from virtual portal scripts 

Some portlets were deprecated or removed in this release. If you have references to deprecated or removed portlets in your virtual portal scripts, you must manually remove those references.

In the virtual portal XML scripts, look for references to deprecated portlets such as,Manage Seed List and remove them.

-   `<portlet action="locate" name="Manage Seed List" objectid="3_CGAH47L008DE402BK8543I1G63"></portlet>`
-   `<p><portletinstance action="update" domain="rel" objectid="5_CGAH47L008DE402BK8543I18D4" portletref="3_CGAH47L008DE402BK8543I1G63" shareref="5_CGAH47L008DE402BK8543I18D4"></portletinstance></p>`

**Note:** Keep in mind that `objectid`, `portletref`, `shareref`, might vary in your installation.

You might also find references to installer/wp.config/config/work which is no longer valid and must be replaced to installer/wp.config/config/templates.

There might be other references to resources that do not exist in this new release of HCL Portal. Make sure that you update all those references as needed.

**Parent topic:**[Preparing your source environment ](../migrate/mig_t_premig_tasks.md)

