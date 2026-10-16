---
id: wcm_dev_elements_username_props
title: Defining component designs for different users
---

A User Name element displays the current user's name in a presentation template, component design, or element design. You can use a User Name  element only by creating a User Name component. You cannot add a User Name element to authoring templates, site areas, or content items.

1. Enter identification information for the component.

2. Create an anonymous user design. This design is used when an anonymous user accesses a website. You must select "Display Anonymous" to enable the Anonymous user design. If "Display Anonymous" is not selected, the User Name element is not rendered when an anonymous user accesses a website.

3. Create a User Name design. This design is displayed when an authenticated user accesses a website. You can use a placeholder tag with a value of "name" in the User Name design to display the name of the current user. For example:

    ```
    [placeholder tag="name" start="Welcome " end=" to this Site" ]
    ```

    To display the distinguished name of a user, use tag="dn".

    ```
    [placeholder tag="dn" start="Welcome " end=" to this Site" ]
    ```

???+ info "Related information"  
    - [Inserting an image in an element](../../elements/element_designs/wcm_dev_elements_insert_image.md)
    - [Inserting a link in an element](../../elements/element_designs/wcm_dev_elements_insert_link.md)
    - [Inserting element tags](../../elements/element_designs/wcm_dev_elements_insert_tags.md)
    - [Creating web content tags](../../../content_management_artifacts/tags/creating_web_content_tags/index.md)
