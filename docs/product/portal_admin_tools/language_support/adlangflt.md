# How to control the behavior of the language fallback filter

You can manage the language fallback behavior of HCL Digital Experience by a built-in servlet filter. This way, you control the way by which the portal determines the language for rendering portlets.

By default, HCL Digital Experience 8.5 recognizes whether a general language code is secondary or farther down in the browser priority list. It ignores all regional variations that do not directly match a language that is defined by the portal. For example, if the browser locale list specifies `"ja-JP", "de", "ja"`, the portal ignores the entry `"ja-JP"` and falls back to the second entry of `"de"`. It recognizes that `"ja-JP"` does not have a match among the portal defined locales and that the more generic version `"ja"` of this locale is further down in the list after `"de"`. This behavior conforms to the HTTP specification.

The built-in language fallback servlet filter supports a mode that extends the language fallback behavior. If you enable this extended language fallback mode, the portal runs a fallback for all entries and removes duplicates of the fallback locales that are later in the list. In the example browser locale list of `"ja-JP", "de", "ja"` as given before, the portal recognizes that `"ja-JP"` does not match any of the portal defined locales. Therefore, it runs a fallback to the portal defined locale `"ja"`. It uses `"ja"` as the locale of choice and ignores the third entry `"ja"` from the list. The resulting locale list that the portal uses is `"ja", "de"`. This fallback mechanism bypasses strict adherence to the HTTP specification of accepting and showing languages and uses the fallback option instead. It also makes your HCL Digital Experience Version 8.5 behave the same way as earlier portal versions.

You set the extended mode in the custom properties of the WP Configuration Service Resource environment provider by adding the property `engine.enableExtendedLanguageFallback=true`. Proceed by the following steps:

1.  Open the WebSphere® Integrated Solutions Console.
2.  Select the Resource Environment Provider WP ConfigService.
3.  In the Custom Properties section, add the property `engine.enableExtendedLanguageFallback` and set it to the value `true`.
4.  Save your changes.
5.  Restart your HCL Digital Experience server for your changes to take effect.

**Example:** Assume that the browser sends the Accept-Language header `"DE_de, en"`. This combination means that the user prefers German as spoken in Germany as first priority, then English, but not German in general. In a portal scenario, these preferences would result in serving resources in `"en"`, even though `"de"` would be supported \(but is not acceptable according to the header\). The default language fallback mode adds all fallback locales to the header, preserving the relative order of the original locales in the header. The result would be `"DE_de, en, de"`, with the fallback to `"de"` showing after `"en"` to match the user preference.

In contrast, the extended language fallback mode gives fallbacks precedence over the original order of locales in the header. For `"DE_de, en"`, the filter would generate `"DE_de, de, en"`, giving all fallbacks for `"DE_de"` the same relative priority as `"DE_de"`.

You can write your own filters and apply your own locale fallback logic. HCL Digital Experience uses the value of the Accept-Language header for further processing. To replace the Language fallback servlet filter, proceed as follows:

1.  Edit the file `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/config/cells/node-name/applications/wps.ear/deployments/wps/wps.war/WEB-INF/web.xml`.
2.  Locate the following section:

    ```
    <filter>
        <filter-name>Locale Filter</filter-name>
        <filter-class>com.ibm.wps.engine.ExtendedLocaleFilter</filter-class> 
    </filter>
    ```

3.  Replace the filter class `com.ibm.wps.engine.ExtendedLocaleFilter` by the class name of your custom language filter.
4.  Save the file.
5.  Restart your HCL Digital Experience server for your changes to take effect.

**Notes:**

-   If you remove a language from the portal, both filters rely on the locales that were defined last. For example, if you remove Japanese \(`"ja-JP"`, `"ja"`\) from the locales that are defined in the portal, then the browser locale list specifies `"ja-JP,de,ja"`. In this case, the portal recognizes that `"ja-JP"` and `"ja"` do not have a match among the portal defined locales. Therefore, it ignores these entries `"ja-JP"` and `"ja"`. Instead, it falls back to the second entry named `"de"`.
-   HCL Web Content Manager does not use portlets and therefore cannot apply the filter that the portal uses for portlets. Therefore, if your portal installation includes Web Content Manager, you must set the custom filter in the Web Content Manager `web.xml` under the directory location `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/config/cells/node-name/applications/wcm.ear/deployments/wcm/ilwwcm.war/WEB-INF/`. Replace the extended filter as shown previously and restart the portal.

    If you use servlet delivery instead of portlet delivery, then you must edit `web.xml` under the directory location `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/config/cells/node-name/applications/PA_WCM_Authoring_UI.ear/deployments/PA_WCM_Authoring_UI/ilwwcm-authoring.war/WEB-INF/`.


**Parent topic:**[Language support](../admin-system/adintern.md)

**Related information**  


[XML samples for creating or removing language definitions](../admin-system/adxmlsmp_lang.md)

