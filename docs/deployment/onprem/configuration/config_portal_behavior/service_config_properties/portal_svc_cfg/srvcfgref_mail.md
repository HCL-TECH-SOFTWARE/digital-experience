# Mail Service

The portal Mail Service allows you to configure the properties that are used by the feature **Enable sending email to new members** for composite application communities.

In the WebSphere® Integrated Solutions Console, the portal Mail Service is listed as **WP MailService**.

-   **mail.from.fallback = \( root@your.host.com \)**

    Use this property to specify the replacement email address that the mail sending service will use if a sender address does not comply with RFC822. - The mail sending service checks that the sender address of each email complies with RFC822. If the sender address does not comply with RFC822, that sender address is replaced by the email address specified by this property. The default is root@your.host.com . This is an example email address; its format is valid by RFC822, but it does not point to real address.

-   **mail.jndi.name = \( mail/PortalMailService \)**

    Use this property to specify the JNDI name of the mail session that is to be used. The default is mail/PortalMailService .


**Parent topic:**[Portal service configuration](../admin-system/srvcfgref.md)

