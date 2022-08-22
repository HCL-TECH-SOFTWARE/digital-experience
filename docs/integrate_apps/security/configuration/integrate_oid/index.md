# Integrating with OpenID authentication

Web applications provide information and services to public users and personalized information and services to authenticated users. Users often work with multiple web applications, which require multiple IDs and passwords. This requirement can be difficult to maintain. Integrating identity providers \(Google, Yahoo, or Facebook\) into your site can simplify logging in for your users.

Google, Yahoo, Facebook, and other web platforms host information for users and they also provide access to their existing user communities. Reusing these communities on your website can increase acceptance of your business or services.

There are multiple approaches to creating a relationship between an identity provider and a service provider \(HCL Digital Experience\). HCL Portal uses OpenID and OAuth to integrate a relationship to an identity provider. OpenID provides a method of decentralized user management where users can select an identity provider to host their profile information, including user ID and password. Google and Yahoo are known identity providers that use OpenID specifications. Facebook uses OAuth.

HCL Portal requires that a trusted relationship exists between the identity provider and IBM® WebSphere® Application Server. Therefore, WebSphere Application Server provides a plug-in point, called a trust association interceptor \(TAI\), designed to create a trust based on the identity provider information.

HCL Portal provides a new implementation of this plug-in point that handles the communication between the identity provider and HCL Portal as the service provider. HCL Portal trusts the identity provider and grants the user entrance.

There are two options to integrate external users into the HCL Portal environment:

-   You can require an existing binding between a local portal account and a remote identity provider account. This option provides you with the possibility to request additional validation from the users and to have internal accounts for the users. The binding is stored in a user attribute, which requires a writable user repository.
-   You can give all users of an identity provider account access to your portal environment as an identified user. If you grant special access rights to these users, they do not need to register individually with HCL Portal. This option requires fewer steps for your business users.

Complete the following tasks to configure the identity providers that are appropriate for your business requirements.

-   **[Configuring OpenID authentication \| HCL Digital Experience](../security/use_social.md)**  
Identity providers include sites such as, but not limited to, Google, Yahoo, and Facebook. As an Administrator, you can select how to configure authentication to work with these identity providers.
-   **[Modifying the list of OpenID providers \| HCL Digital Experience](../security/mod_oid_providers.md)**  
You can change the list of identity providers that your users can access. You can add or remove providers from the list. You can change the order that the identity providers display in the **Login** and **Profile Management** portlet user interfaces.
-   **[Configuring transient users \| HCL Digital Experience](../security/openid_trans_users.md)**  
In addition to the basic OpenID authentication option, you can give users, who are trusted and verified from an identity provider, access to HCL Digital Experience. These trusted and verified users do not require a local, registered Portal user account.
-   **[Disabling transient users and OpenID authentication \| HCL Digital Experience](../security/disable_trans_openid.md)**  
After using the transient users and OpenID authentication, you might decide you want to stop using the function. You can permanently or temporarily disable the transient users function or the full OpenID authentication function.


**Related information**  


[Configuring OpenID authentication \| HCL Digital Experience](../security/use_social.md)

[Modifying the list of OpenID providers \| HCL Digital Experience](../security/mod_oid_providers.md)

[Configuring transient users \| HCL Digital Experience](../security/openid_trans_users.md)

[Disabling transient users and OpenID authentication \| HCL Digital Experience](../security/disable_trans_openid.md)

