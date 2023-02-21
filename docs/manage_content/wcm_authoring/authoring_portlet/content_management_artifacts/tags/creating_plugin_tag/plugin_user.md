# User plug-ins

User plug-ins are used with the current user context. This topic contain additional information for some of these plug-ins.

## Locale rendering plug-in

Use the `Locale` rendering plug-in to add locale information to your web content or to insert markup into your web content, depending on the current locale. This plug-in determines the preferred supported locale in the current context.

The `Locale` rendering plug-in uses the following attributes:

-   **acceptLanguage**

    Defines one or more preferred locales that can be selected by the portal in a specific context. Attribute values must conform to the syntax specification of the `Accept-Language` header field of the HTTP/1.1 protocol. For details on this header field, see the `Accept-Language` section of the *RFC2616 specification.*

    If the acceptLanguage attribute is not defined, the portal considers all available supported locales as equally acceptable when the preferred supported locale is determined for the selected context.

-   **pattern**

    Defines the output format for the locale that is printed by the `Locale` plug-in.

    Attribute values specify a pattern that can include the following placeholders:

    -   `{language}`: Placeholder for the lowercase, two-letter language code of a locale as defined by the ISO-639 standard.
    -   `{country}`: Placeholder for the uppercase, two-letter country code of a locale as defined by the ISO-3166 standard.
    -   `{variant}`: Placeholder for the vendor-specific or browser-specific variant of a locale.
    If the pattern attribute is not defined, the following pattern is used: `{language}-{country}-{variant}`.

-   **printLocale**

    Defines whether the preferred supported locale that is determined by the `Locale` plug-in is inserted into your web content. The attribute can have the following values:

    -   true: The preferred supported locale is written to the markup of the page.
    -   false: The preferred supported locale is not written to the markup of the page.
    By combining this attribute with the acceptLanguage attribute, users can define content to be rendered only in the following circumstances:

    -   If a specific locale is applicable in the current context
    -   If one locale of a specific set of locales is applicable in the current context
    Although the body of the `Plugin` tag is printed if an acceptable locale is supported, the preferred supported locale is not displayed when this attribute is set to false.

    If the printLocale attribute is not defined, a value of true is used.

-   **key**

    As an alternative to the attributes listed previously, you can use the key attribute to retrieve additional locale data. The supported values are:

    -   direction: Writes the base text direction for the preferred supported locale of the request to your web content. For example: "ltr".
    -   xmlLocale: Writes the string representation of the preferred supported locale of the request as defined by IETF BCP 47 to your web content. For example: "en".

If the `Locale` plug-in specifies body content, the markup between the start and end tags is rendered only if the preferred supported locale is determined. If no supported locale applies in the current context, the `Locale` plug-in does not insert markup into content.

Examples:

-   When you add the `Locale` plug-in without defining more attributes, the preferred supported locale in the current context is inserted into your web content. The default format of `{language}-{country}-{variant}` is used \(for example, `es-ES-WIN`\):

    ```
    [Plugin:Locale]
    ```

-   The pattern attribute defines the output format of the preferred supported locale. The following sample renders the locale with a custom format and omits the variant element \(for example, `es_ES`\):

    ```
    [Plugin:Locale pattern="{language}_{country}"]
    ```

-   The following sample renders the language code of the preferred supported locale in the current context \(for example, `da`\). Only languages of Nordic countries are accepted as a result. If none of the specified locales is supported in the current context, nothing is printed to your web content. For example, if the user configures the web browser or the portal user profile to use only the English language \(`en`\), the `Locale` plug-in does not return any locale.

    ```
    [Plugin:Locale acceptLanguage="da,fo;q=0.8,fi;q=0.6,is;q=0.4,no;q=0.2,sv;q=0.2" 
    pattern="{language}"]
    ```

-   You can prevent the preferred supported locale from being rendered with the printLocale attribute. This sample inserts the body of the `Plugin` tag into the web content only if the preferred supported locale matches one of the specified Nordic languages. The determined locale is not added to the web content.

    ```
    [Plugin:Locale acceptLanguage="da,fo;q=0.8,fi;q=0.6,is;q=0.4,no;q=0.2,sv;q=0.2" 
    printLocale="false"]
         <div>This markup is displayed only if the current context supports a locale 
         that represents one of the specified Nordic languages.</div>
     [/Plugin:Locale]
    ```

-   You can also combine the `Locale` plug-in with other plug-ins. The following example shows how you can use the `Matches` plug-in with the `Locale` plug-in. The markup in the body of the `Matches` plug-in is rendered in your content only if the preferred supported locale represents a Spanish language.

    ```
    [Plugin:Matches pattern="es(.*)" text="[Plugin:Locale]"] 
        <div>This markup appears only if the preferred supported locale in the 
        current context represents a Spanish language. Neither the country code 
        nor the variant are important as long as the language code of the 
        locale is "es".</div>
    [/Plugin:Matches]
    ```

-   To write the base text direction for the preferred supported locale of the request to your web content, such as "ltr", use the key attribute with the value direction:

    ```
    [Plugin:Locale key="direction"]
    ```

-   To write the the string representation of the preferred supported locale of the request as defined by IETF BCP 47 to your web content, such as "en", use the key attribute with the value xmlLocale:

    ```
    [Plugin:Locale key="xmlLocale"]
    ```


## `If Device` and `If Not Device` plug-ins

Use the `If Device` and `If Not Device` plug-ins to render content selectively, based on a user’s Portal device class. You can use these plug-ins for switching to mobile components, such as a slideshow or carousel that are optimized for mobile devices, when a user goes to the site through a smartphone or tablet.

The class attribute is defined by the device classifications for supported clients in HCL Digital Experience. Log in to HCL as an administrator and click the **Administration menu** icon in the toolbar. Then, click **Portal settings** \> **Supported clients**. Edit a selected client to see the classes that are already associated with it. You can add or remove classes through this page.

You can check that a specific device is in use with the following format:

```
[Plugin:ifDevice class="DEVICE1" class="DEVICE2"]
Text to render if current device is DEVICE1 or DEVICE2.
[/Plugin:ifDevice]
```

You can check that a specific device is not in use with the following format:

```
[Plugin:ifNotDevice class="DEVICE1" class="DEVICE2"]
Text to render if current device is not DEVICE1 or DEVICE2.
[/Plugin:ifDevice]
```

This is used to render text if no device is set:

```
[Plugin:ifDevice class=""]
Text to render if the device is not set.
[/Plugin:ifDevice]
```

To specify either one device or another device, use this syntax:

```
[Plugin:ifDevice class="DEVICE1|DEVICE2"]
Text to render if current device is DEVICE1 or DEVICE2.
[/Plugin:ifDevice]
```

To specify one device and another device, use this syntax:

```
[Plugin:ifDevice class="DEVICE1+DEVICE2"]
Text to render if current device is DEVICE1 and DEVICE2.
[/Plugin:ifDevice]
```

To specify one device but not another device, use this syntax:

```
[Plugin:ifDevice class="DEVICE1+!DEVICE2"]
Text to render if current device is DEVICE1 but not DEVICE2.
[/Plugin:ifDevice]
```

???+ info "Related information"
    - [Localized rendering](../../../../multi_lingual/using_mls/wcm_mls_rendering.md)

