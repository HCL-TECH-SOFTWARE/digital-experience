# Accessing business card and navigating to user's profile

The Collaborative Service API offers a set of methods and JavaServer Page (JSP) tags that enable developers to integrate Lotus collaborative features into their portlets for HCL Portal or other application servers. These services can be utilized to create new custom portlets or to enhance existing portlets with collaborative functionalities, such as menus or person links.

When you incorporate a JSP tag library descriptor (TLD) for a person tag into your custom portlet, the person tag transforms people's name into hyperlink.

Hovering over an active (underlined) name displays the business card with user's profile information. And clicking on that will navigate you to the user's profile in a new tab.

!!!info
    - Currently the business card does not support any customization like adding or removing fields unlike **Person Card**
    - If HCL Portal cannot recognize the person's name, it will display the name as plain text, and the business card will not be available.
