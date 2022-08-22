# Rolling out a second locale

It is best to start with a single extra locale, and then add others \(if required\) afterwards.

1.  Create the second locale, translate it, and set it up for the Multilingual Solution workflow:

    1.  Create a workflow in your base locale as described in the Multilingual Solution documentation.

        To ensure that newly created content in the new page is included in the other sites of your multilingual system, you must move the content through your multilingual workflow. To do this, ensure that the workflow for the content contains a localization or regionalization stage from your multilingual workflow.

        For example, to configure all of the Content Template content that is based on the "Templated Workflow" to pass through the Multilingual solution "Localize" workflow stage:

        1.  Go to **CTC Process** \> **Workflow Items** \> **Workflows**.

        2.  Edit the default Content Template workflow "Templated Workflow".

        3.  After the Draft stage and before the Publish Stage, add the Multilingual solution "Localize" stage from the library "ML Configuration".

        4.  Save the workflow.

    2.  Copy your base site library to another locale by using the copy tool provided with Multilingual Solution.

    3.  Translate the content in the new library.

    4.  Set up the workflow in the new locale for non-base locale workflows.

2.  Link the new locale site to the same pages as your base locale. Modify each portal page to add an additional association to the equivalent areas in the new locale site.



**Related information**  


[Update notification extension Multilingual Solution](../wcm/wcm_mls_ext_update.md)

[Library copy portlet extension Multilingual Solution](../wcm/wcm_mls_ext_library.md)

