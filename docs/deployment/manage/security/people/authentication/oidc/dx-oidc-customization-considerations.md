# Implications for customizing IdP's user login flow

Before you plan to integrate HCL Digital Experience (DX) with an Identity Provider (IdP) for user authentication and authorization there are some implications to consider. For general consideration, see [Customization considerations](https://github.com/HCL-TECH-SOFTWARE/hclds-keycloak/tree/main/docs/customization/oidc-customization-considerations.md).

## Additional implications for DX

When you are using custom login portlets, you can not re-use the custom code, when integrating OIDC Authorization Code Flow for user authentication and authorization with DX.

Additional considerations you should look at are described below:

### Page title

All the IdPs provide a way to customize page titles. Keycloak defaults this realm name in use, this can be customized by updating the FTL templates and are fairly simple to achieve.

### Brand logo

Most of the IdPs allow you to customize the brand logo by replacing pre-defined image resources. For some, they allow you to add your resources to a particular location and then reference them through CSS. IdPs that use a wizard based tool would allow you to upload images to achieve this.

### Custom background

IdPs allow you to either provide custom background color or image using CSS or allow you to provide them with a wizard based tool. This should be fairly simple to achieve.

### Custom layout

This is specific to an IdP and how they allow you to update partial or entire layout of the screens in the flow. Also, they could have limitations on how much you are allowed to customize. The reference implementation is based on Keycloak, which uses Freemarker Template Language for defining the screen layouts. The complexity of providing a custom layout can range between low to moderate depending on the IdP in use. For more information, see [custom layout](https://github.com/HCL-TECH-SOFTWARE/hclds-keycloak/tree/main/docs/customization/oidc-customization-considerations.md#custom-layouts). How this can be achieved for Keycloak is documented in [Custom themes](https://github.com/HCL-TECH-SOFTWARE/hclds-keycloak/tree/main/docs/customization/custom-themes.md#html-templates).

### Internationalization

Similar to how you can update the layout of existing screens, an IdP could support the internationalization of right-to-left languages, but this has to be verified with IdP in use. Keycloak allows to add localization strings to custom themes. Default themes do not adapt based on right-to-left languages. Please refer to [Internationalization](https://github.com/HCL-TECH-SOFTWARE/hclds-keycloak/tree/main/docs/customization/oidc-customization-considerations.md#internationalization) and for Keycloak this is documented in [Custom themes](https://github.com/HCL-TECH-SOFTWARE/hclds-keycloak/tree/main/docs/customization/custom-themes.md#internationalization).

### Additional portlets

If you are using additional portlets on the landing or the log in page, it won't be straightforward to re-use or migrate custom code to the IdP. This could be very specific to IdP and if they allow you to customize page layouts in a way that you can add custom portlets to the custom layouts, mostly by writing them from scratch. There could be some additional security implications that you should be mindful about. This could be fairly complex to achieve, or it could even mean that you won't be able to have additional portlets on the IdPs login page.

### Custom login pages for virtual portals

If your IdP allows you to customize the login pages for a particular realm/client, this could be achieved by customizing them differently for different realm/client. You could then map a particular realm/client to a vitual portal to achieve customization for different virtual portals. Keycloak does allow you to configure/set theme for a realm or a client.
