---
id: wcm_dev_auth-temp_sa_prop_add
title: Setting default site area properties
---

# Setting default site area properties

You can define default site area properties, such as rendering behavior, default content, and template maps.

1.  You can select one of the following rendering options:

        |**Render the default content as a child of this site area**|If selected, the default content item is rendered. If the default content item is stored under a different site area, the context of this site area is used when the content item is rendered. If no content is selected, the first child content item is rendered.|
    |**Redirect to default content**|If selected, the default content item is rendered. If the default content item is stored under a different site area, the context of that site area is used when the content item is rendered. If no content is selected, the first child content item is rendered.|
    |**Render the site area directly**|If selected, the site area itself is rendered.|
    |**Render the first child content of this site area**|If selected, the first child content item is rendered.|
    |**Render the first child of this site area**|If selected, the first child item is rendered. This item can be either be a site area or content item.|

2.  To select the default content item to display when a link to this site area is run, click **Select Default Content**.

    -   Select a content item and then click **OK**.
3.  A site area can be associated with an authoring template, which defines the type of web content that is displayed on the page. In addition, an authoring template to presentation template mapping can be selected, which determines the presentation of the children of the site area.

    -   Click **Add** to create a template map.
        -   Select one authoring template and then one presentation template and then click **Next**.
        -   Select a presentation template, and then click **Finish**.
    -   To edit an existing template map, select a template map from the index and then click **Edit**.
        -   Edit the template map and then click **Finish**.
    -   To remove an existing template map, select a template map from the index and then click **Remove**.
    
    !!!note
        The template map that is selected here does not apply to the current site area, only to its children. The current site area uses the template map set in its most immediate ancestor.

4.  If you select to render a site area directly, you can also select a different presentation template to use when this item is displayed instead of the one specified in the template map that is used by the item. To do this click **Select Presentation Template Override** and select an appropriate presentation template.

    !!!note
        The presentation template that you select must contain tags that are appropriate to this item if this item is to be displayed correctly.

5.  If you do not want the content that is stored in a site area or any child items of a site area to be read by the search service, clear the **Search Collection Visibility** check box.


