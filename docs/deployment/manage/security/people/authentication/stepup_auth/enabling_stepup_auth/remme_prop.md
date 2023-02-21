# Remember me properties

After you enable the Remember me cookie, you might need to adjust the settings to fit your business needs. You can use the WebSphere Integrated Solutions Console to create new properties, if necessary, or update existing properties.

The following list shows all the properties that apply to the appropriate portal configuration service, namely **WP RememberMeConfigService**.

To access these properties, log in to WebSphere® Integrated Solutions Console and then go to **Resources** \> **Resource Environment Providers** \> **WP RememberMeConfigService** \> **Custom properties**.

!!!note
    All property changes require that you restarted the HCL Portal server in order for the changes to take effect.

-   **rememberMeCookie.enable**

    Use this property to enable and disable the **Remember me cookie** function.

    !!!note
        Use the provided configuration tasks because they automatically set certain values.

    Default: false

    Type: java.lang.Boolean

-   **j2eeAuthenticate**

    Use this property to specify whether a user who presents a valid **Remember me cookie** should be logged in to the protected portal area. If this option is enabled, the user is not asked to provide any other proof of identity to enter the protected portal area. If the requested resource has a higher authentication level requirement, then extra proof of identity is required.

    !!!note
        To prevent an insecure portal setup, this option is disregarded if step-up authentication is disabled. As a result, logging in to a protected portal area with a **Remember me cookie** is only allowed with an active step-up authentication engine, which forces a higher authentication level.

    Default: false

    Type: java.lang.Boolean

-   **name**

    Use this property to specify the name of the **Remember me cookie**.

    Default: com.ibm.portal.RememberMe

    Type: java.lang.String

-   **path**

    Use this property to specify the path for which a client browser should return the cookie. Using this property, you can limit the visibility of the **Remember me cookie** to certain hosts within your domain.

    Default: /

    Type: java.lang.String

-   **expiration**

    Use this property to specify the expiration time of the **Remember me cookie**. The assigned value is interpreted in seconds.

    The default value is 0. Setting the value to -1 means that the **Remember me cookie** persists until the web browser session ends.

    Default: 86400 (one day)

    Type: java.lang.Integer

-   **secure**

    Use this property to specify whether the **Remember me cookie** should be returned only from a client browser to the portal server that uses a secure protocol.

    Default: true

    Type: java.lang.Boolean

-   **handler**

    Use this property to specify the fully qualified name of the class that implements the **com.ibm.portal.auth.rememberme.spi.RememberMeCookieHandler** SPI.

    Default: com.ibm.wps.auth.rememberme.impl.RememberMeCookieHandlerImpl

    Type: java.lang.String

-   **handler.properties.property\_name**

    Use properties with the handler.properties.property\_name scheme to specify properties that are passed on to the initialization method of the **Remember me cookie** handler implementation. The properties that are received by the handler then have the name property\_name and the prefix **handler.properties** is omitted.

    Default: -

    Type: java.lang.String

-   **handler.properties.encryptionAlg**

    Use this property to specify the encryption algorithm that should be used to encrypt and decrypt the **Remember me cookie**.

    !!!note
        This property is specific to the default **Remember me cookie** handler.

    Default: AES

    Type: java.lang.String

-   **handler.properties.keyLength**

    Use this property to specify the length of the key that should be used to encrypt and decrypt the **Remember me cookie**. The assigned value is interpreted in bytes.

    !!!note
        This property is specific to the default **Remember me cookie** handler.

    Default: 128

    Type: java.lang.Integer

-   **handler.properties.saltLength**

    Use this property to specify the length of the random salt that is part of the encrypted **Remember me cookie** content. The assigned value is interpreted in bytes.

    !!!note
        This property is specific to the default **Remember me cookie** handler.

    Default: 20

    Type: java.lang.Integer

-   **handler.properties.internalExpiration**

    Use this property to specify the lifetime of the **Remember me cookie** that is part of the encrypted **Remember me cookie** content. Unlike the property expiration, this property is used by the default **Remember me cookie** handler to check the validity of a **Remember me cookie** that is received by portal. Thus, it is transparent to the client. The assigned value is interpreted in seconds.

    !!!note
        This property is specific to the default **Remember me cookie** handler.

    Default: 86400 (one day)

    Type: java.lang.Integer

-   **handler.properties.serverSecretAlias**

    Use this property to specify the J2C authentication data alias that holds the passphrase that is used to encrypt and decrypt the **Remember me cookie**.

    !!!note
        This property is specific to the default **Remember me cookie** handler.

    Default: SUAServerSecret

    Type: java.lang.String



