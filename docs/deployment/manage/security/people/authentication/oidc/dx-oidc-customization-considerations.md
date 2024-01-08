# Implications for customizing IdP's user login flow

Before you plan to integrate DX with an Identity Provider (IdP) for user authentication and authorization there are some implications that should be considered. Please refer to [Customization considerations](https://git.cwp.pnp-hcl.com/hclds/hclds-keycloak/blob/develop/docs/customization/oidc-customization-considerations.md) for some general considerations you should keep in mind.

## Additional implications for DX

If you are using custom login portlets, you won't be able to re-using the custom code won't be trivial, when integrating OIDC Authorization Code Flow for user authentication and authorization with DX.

Additional considerations you should look at are described below:

### Page title

Mostly all IdPs provide a way to customize page title. Keycloak defaults this the the realm name in use, this can be customized by updating the FTL templates as well, and should be fairly simple to achieve.

### Brand logo

Most of the IdPs will allow you to customize brand logo by replacing pre-defined image resources. For some they will allow you to add your own resources to a particular location and then reference them through CSS. IdPs that use a wizard based tool would allow you to upload images to achieve this.

### Custom background

IdPs can allow you to either provide custom background color or image either using CSS or allow you to provide them if they use a wizard based tool. This should be fairly simple to achieve.

### Custom layout

This is very specific to an IdP and how they allow you to update partial or entire layout of the screens in the flow. Also they could have limitations of how much you are allowed to customize. The reference implementation is based on Keycloak, that uses Freemarker Template Language for defining the screen layouts. The complexity for providing custom layout can range between low to moderate depdening on the IdP in use. For more information on, please refer to [custom layout](https://git.cwp.pnp-hcl.com/hclds/hclds-keycloak/blob/develop/docs/customization/oidc-customization-considerations.md#custom-layouts). How this can be achieved for Keycloak is documented in [Custom themes](https://git.cwp.pnp-hcl.com/hclds/hclds-keycloak/blob/develop/docs/customization/custom-themes.md#html-templates).

### Internationalization

Similar to how you can update the layout of existing screens, an IdP could support internationalization as well as right to left languages, but this has to be verified with IdP in use. Keycloak allows to add localization strings to custom themes and is simple. Default themes do not adapt based on right to left languages. Please refer to [Internationalization](https://git.cwp.pnp-hcl.com/hclds/hclds-keycloak/blob/develop/docs/customization/oidc-customization-considerations.md#internationalization) and for Keycloak this is documented in [Custom themes](https://git.cwp.pnp-hcl.com/hclds/hclds-keycloak/blob/develop/docs/customization/custom-themes.md#internationalization).

### Additional portlets

If you are using additional portlets on the landing or the login page, it won't be straightforward to re-use or migrate custom code to the IdP. This could be very specific to IdP and if they allow you to customize page layouts in a way that you can add custom portlets to the custom layouts, mostly by writing them from scratch. There could be some additional security implications that you should be mindful about. This could be fairly complex to achieve, or it could even mean that you won't be able to have additional portlets on the IdPs login page.

### Custom login pages for virtual portals

If your IdP allows you to customize the login pages for a particular realm/client, this could be achieved by customizing them differently for different realm/client. You could then map a particular realm/client to a vitual portal to achieve customization for different virtual portals. Keycloak does allow you to configure/set theme for a realm or a client.
