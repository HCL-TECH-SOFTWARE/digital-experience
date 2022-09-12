# Contact Us Page Template

Use this page template to allow users of your website to contact you by sending an email message. This page template can also be used as an example of how to create your own forms and how to submit them for processing.

When added to a site, this page is associated with this site area: Your Library/Your Site Path/Your Page Name

This page includes the following portlets:

-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Index Signpost. This displays a breadcrumb and a page header.
    -   This item is configured to display this block component: CTC Design/Block Components/Index Signpost
    -   The CSS class of contentSignpost is applied to the container DIV.
-   A Dynamic Body portlet. The context for this portlet is inherited from the parent page. This displays a heading and body field for the Contact Us form.
-   A Dynamic Body portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Email Configuration. This is only visible in edit mode and is used to store the email parameters that are used to send feedback to.
    -   This item is configured to use this component: CTC Design/Fragments/Email Action
    -   This item is formatted in edit mode by using this component: CTC Desig/Block Components/Contact Us Email Design
    -   This item uses this header component: CTC Design/Component Headers/Index Title
-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Contact Us Page. This displays a form allowing users to submit feedback to your site.
    -   This item is configured to display this block component: CTC Design/Block Components/Contact Us Form
    -   This list is pre-configured with a context override of: Your Library/Your Site Path/Your Page Name/Components/Email Configuration
    -   The CSS class of contentBlock lotusui30\_body lotusui30 is applied to the container DIV.
-   A page component configuration Reference portlet that is configured to display this content item: Your Library/Your Site Path/Your Page Name/Components/Connect Tools. This displays a set of social media tools.
    -   This item is configured to display this block component: CTC Design/Block Components/Social Tools
    -   This item is configured to display this header component: CTC Design/Component Headers/Component Title
    -   This list is pre-configured with a context override of: Your Library/Your Site Path/Your Page Name/Meet the Team
    -   The CSS class of contentBlock is applied to the container DIV.

## Customizing the Contact Us page template

The Contact Us page template gives you the option of customizing your own email form layout and design by selecting a different html component under the Contact Form section.

The categories displayed on the contact form can be customized by referencing a different taxonomy component in the Contact Form. For example: CTC Design/Field Designs/Email Categories

The Submission Page section contains a link to the Contact Us Submission template that handles how the email should be sent and its configuration.

## Customizing the Contact Us submission template

The Contact Us Submission template contains fields for configuring how emails are sent.

-   **Email component**

    This is a JSP component that performs the processing and email of the message. This component can be customized to suit your requirements.

-   **Email design**

    This is a HTML component that defines how the email message is presented to the email recipient.

-   **Host**

    This is the host address of the email server used to send emails.

-   **Port**

    The port of the email server used to send emails.

-   **Recipient address**

    The email address where users e-mails will be sent to. This is your email address.


The Contact Us submission configurations can also be accessed from the Contact Us page when in edit mode. It can be accessed by toggling the **Hide Non-displaying fields** view in the **Email Configuration** portlet. This allows for the configurations to be edited in place without having to access the authoring UI.

## Sending a message

The page presents the user with a contact form allowing fields to be entered for the message subject, from email address \(the address of the user sending the message\), the body of the message, and the category of the message.


