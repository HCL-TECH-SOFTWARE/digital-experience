# Localizer Service

The portal Localizer Service provides access to the configured default locale and the system default locale. It also provides a list of supported bidirectional languages. Giving the system default locale is necessary because Locale.getDefault() is set to the default.

In the WebSphere® Integrated Solutions Console, the portal Localizer Service is listed as **WP LocalizerService**.

Although the locale is set during installation time, you can later change the locale by modifying the following properties in the Localizer Service:

-   **locale.default.language**

    The language of the locale, for example, EN or PT.

-   **locale.default.country**

    The country or region code of the locale, for example, US or BR.

-   **locale.default.variant**

    The variant code of the locale.


The default language must be supported by HCL Portal. If you leave all three properties without a specified value, the system locale is used as the default locale.

All properties are case-insensitive. The ISO standard ISO-639 is used for the language codes of most languages. For Hebrew the old language code `iw` is used. The ISO standard ISO-3166 is used for the country/region codes.

???+ info "Related information"  
    -   [System event logging](../../../troubleshooting/logging_and_tracing/adsyslog.md)

