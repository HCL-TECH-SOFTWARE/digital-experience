# Customizing page templates in the Create Page dialog

The hierarchy tree control makes it possible for HCL Digital Experience users to create new child and sibling pages based on predefined page templates.

The list contains all page templates that are available under the hidden page named Page Templates. You can push your most important page templates to the beginning of the list. To do so, you assign sort keys to them.

The sorting mechanism of the page template list uses the sort key as the primary and the template title as the secondary sorting criterion. For sorting based on the sort key, it determines the lexicographic order. Page templates that have the same sort key appear in alphabetical order. This two-level sorting approach makes it possible to classify your templates. For example, you can assign sort key A to the templates that you consider to be most important, sort key B to all second important templates and so on.

You specify the sort key by setting the page parameter ibm.portal.pageTemplate.sortKey on the template pages. You can set the key by using either the Manage Pages administration portlet or by using the XML configuration interface \(XML Access\).

-   To set the parameter by using the Manage Pages portlet, proceed as follows:

    1.  Go to the respective template page.

        You find the template pages under the hidden page named Page Templates.

    2.  Select **Edit Page Properties**.

    3.  Expand **Advanced options**.

    4.  Select **I want to set parameters**.

    5.  To specify the sort key for the template page, set the parameter ibm.portal.pageTemplate.sortKey = string.

        For string, specify a string of your choice.

-   To set the parameter by using the XML configuration interface, set the parameter by using the following syntax:

    ```
    <parameter name="ibm.portal.pageTemplate.sortKey" type="string" update="set">A</parameter>
    ```
