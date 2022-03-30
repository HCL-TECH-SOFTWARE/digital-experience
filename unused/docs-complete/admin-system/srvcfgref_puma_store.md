# Puma Store Service 

The portal Puma Store Service contains the configuration properties for the Portal User Management \(PUMA\).

In the WebSphere® Integrated Solutions Console, the portal Puma Store Service is listed as **WP PumaStoreService**.

## Properties for both the Portal User Management and the PUMA SPI

The following properties configure both the Portal User Management and the PUMA SPI:

-   **store.puma\_default.user.fbadefault.filter =**

    Defines the default search attribute for users. Usually this is the same as the Relative Distinguished Name \(RDN\) attribute of the LDAP. Depending on your environment, it might be a different attribute. The value for this property should correspond to the value of one of the following properties in wkplc.properties, depending on your security configuration:

    -   federated.ldap.loginProperties
    -   standalone.ldap.loginProperties
-   **store.puma\_default.group.fbadefault.filter =**

    Defines the default search attribute for groups. Usually this is the same as the RDN attribute of the LDAP. Depending on your environment, it might be a different attribute. The value for this property should correspond to the value of one of the following properties in wkplc.properties, depending on your security configuration:

    -   federated.ldap.loginProperties
    -   standalone.ldap.loginProperties
-   **store.puma\_default.user.base.attributes =**

    Defines the attribute subset that portal loads during direct user lookups, for example at Login. Attributes that are not defined in this list are loaded by a separate request to the backend user store.

-   **store.puma\_default.user.minimum.attributes =**

    Defines the attribute subset that portal loads during attribute searches for users. Attributes that are not defined in this list are loaded by a separate request to the backend user store.

-   **store.puma\_default.group.minimum.attributes =**

    Defines the attribute subset that portal loads during attribute searches for groups. Attributes that are not defined in this list are loaded by a separate request to the backend user store.

-   **store.puma\_default.userManagement.cacheMode = \(true\)**

    Defines whether Puma uses a cache or not. The default for this property is `true`.

-   **store.puma\_default.logDuplicateKeyExceptions = \(true\)**

    Use this property to determine whether the Data Store component writes DuplicateKeyException error messages out to the portal log or not. This does not influence the error handling: With either setting, the exceptions are handled without an error to the portal system.

    -   **true**

        This is the default. If this property is set to true or if the property is not set at all, the exception error messages are written to the log. The exceptions are handled without error to the portal.

    -   **false**

        If you set this property to false, the error messages are **not** written out to the log. The exceptions are handled without error to the portal.


## Properties for the Portal User Management only, but not the PUMA SPI

The following properties configure only the Portal User Management, but not the PUMA SPI:

-   **store.puma\_default.puma.commonname = \( \{0\} \{1\} \)**

    The **Registration / Edit My Profile** portlet can generate the common name \(CN\) of a user automatically. This property defines how the CN is generated. You can define dynamic and static parts. Dynamic parts are added by using `{*X*}`, where `*X*` stands as a reference number to the `puma.commonname.X` that defines the attribute that you want to place here. Dynamic parts can only be user attributes that are available and valid. The default is `{0} {1}`.

-   **store.puma\_default.puma.commonname.parts =**

    Defines the number of dynamic parts in the common name.

-   **store.puma\_default.puma.commonname.X =**

    The user attribute for dynamic part `*X*`. `*X*` must be between `0` and `puma.commonname.parts -1`. The default is `puma.commonname.0 = givenname` and `puma.commonname.1 = sn`.


**Parent topic:**[Puma Store and Validation Services ](../admin-system/srvcfgref_puma.md)

