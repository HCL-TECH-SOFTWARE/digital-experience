# Rendering Business Cards using person tags

The Collaborative Service API offers a set of methods and JavaServer Page (JSP) tags that enable developers to integrate Lotus collaborative features into their portlets for HCL Portal or other application servers. These services can be utilized to create new custom portlets or enhance existing portlets with collaborative functionalities such as menus or person links.

## Using JSP tags for person link

When you incorporate a JSP Tag Library Descriptor (TLD) for a person tag into your custom portlet, the person tag transforms people's names into person links. This integration allows users to access profile information seamlessly.

## Hovering over a person link

Hovering over an active (underlined) name using the semantic person tag displays a Business Card with a quick overview of the user's profile information without needing to navigate to another page. For more information, refer to the [semantic person tag documentation](../../../../extend_dx/portlets_development/collaborative_services_api_person_tag/index.md).

The hover-over functionality is not automatically triggered if names are displayed outside the semantic person tag context. Practitioners must integrate web components into their presentation templates to enable this functionality.

![Person link and business card - Example](../user_guides/img/person-link-business-card.png)
If HCL Portal cannot recognize the person's name, it will display the name as plain text, and the business card will not be available.

!!! Notes
    - Issues with unrecognized names arise from inconsistencies in the user ID associated with the web component. Ensure you are using the correct user ID.
    - However, for person tags, this may not always be accurate. When using person tags, the user ID may not always align between DX and People Service. For example, DX may pull users from multiple LDAPs or search domains that People Service cannot access, leading to unrecognized names. To avoid this, ensure to maintain consistent user baseline configurations on DX and People Service.
## Clicking a person link

Clicking a person link will direct you to the user's profile in a new tab. This profile page contains more detailed information about the user, such as their contact information, professional summary, and other relevant details.

![Profile Page - Example Profile](../user_guides/img/profile-page.png)

## Customizing the Business Card component

- Unlike Person Cards, the current Business Card component does not support any customization, such as adding or removing fields. However, you can fully replace the existing system module or web component to your liking.
For detailed instructions on how to replace and customize the Business Card component, refer to the [Customizing Business Card Component](./customization/customizing_business_card_component.md) page.

  