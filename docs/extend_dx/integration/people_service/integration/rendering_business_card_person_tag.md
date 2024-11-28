# Rendering business card using person tag

The Collaborative Service API offers a set of methods and JavaServer Page (JSP) tags that enable developers to integrate Lotus collaborative features into their portlets for HCL Portal or other application servers. These services can be utilized to create new custom portlets or to enhance existing portlets with collaborative functionalities, such as menus or person links.

## Using JSP tags for person link

When you incorporate a JSP Tag Library Descriptor (TLD) for a person tag into your custom portlet, the person tag transforms people's names into hyperlinks. This integration provides an interactive experience for users, allowing them to access profile information seamlessly.

## Hovering over person link

Hovering over an active (underlined) name using the semantic person tag displays a business card with a quick overview of the user's profile information, without requiring navigation to another page. For more information, refer to the [semantic person tag documentation](https://opensource.hcltechsw.com/digital-experience/CF223/extend_dx/portlets_development/collaborative_services_api_person_tag/).

If names are displayed outside of the semantic person tag context, practitioners must integrate web components into their presentation templates to enable the hover-over functionality. This functionality is not automatically triggered in these cases.

![Person link and business card - Example](../user_guides/img/person-link-business-card.png)

## Clicking on person link

Clicking on the underlined name will direct you to the user's profile in a new tab. This profile page contains more detailed information about the user, including their contact information, professional summary, and other relevant details.

![Profile Page - Example Profile](../user_guides/img/profile-page.png)

## Important information

- **Customization:** The current Business Card component does not support any customization, such as adding or removing fields, unlike the **Person Card**. However, you can fully replace the existing system module or web component to your liking. This approach allows full flexibility with customizations.
For detailed instructions on how to replace and customize the business card component, please refer to the [Customizing Business Card Component](./customization/customizing_business_card_component.md) guide.

- **Unrecognized Names:** If HCL Portal cannot recognize the person's name, it will display the name as plain text, and the business card will not be available.

!!! Notes
    The "unrecognized name" issue arises from inconsistencies in the user ID associated with the web component. Ensure you are using the correct user ID.  In the case of person tags, this may not always be accurate. In particular, when using person tags, the user ID may not always align between DX and People Service,  (for example, DX may pull users from multiple LDAPs or search domains that the people service cannot access). In such cases, the unrecognized name issue will occur. To avoid this, it is crucial to maintain consistent user baseline configurations on both sides.
  