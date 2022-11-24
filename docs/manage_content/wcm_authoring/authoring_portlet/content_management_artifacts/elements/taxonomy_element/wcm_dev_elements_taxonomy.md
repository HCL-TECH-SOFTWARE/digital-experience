# Taxonomy element

A taxonomy element defines the layout of a category selection form that enables users to select categories to display in a personalized menu.

You configure the element by selecting either a taxonomy or a category to be the start area of the category selection tree. You then select a child depth relative to the start area. Select "Include Start" if you would like the start area to display in the category selection tree. This option has no effect if the start area is a taxonomy.

There are two element design options available: one is rendered when the logged in user selects the category that is to be displayed, and the other is rendered if the user does not select the category. These element designs are rich text elements, and are used in a similar fashion to the navigator and menu elements.

!!!note
    To use this feature, you must configure a property extension database to store user-specific data. See [Configuring a property extension database](../../../../../../deployment/manage/security/people/authentication/user_registry/update_user_registry/lookaside_db.md) for further information.

## Creating a taxonomy element

You can use a taxonomy element only by creating a taxonomy component. You cannot add a taxonomy element to authoring templates, site areas, or content items.


