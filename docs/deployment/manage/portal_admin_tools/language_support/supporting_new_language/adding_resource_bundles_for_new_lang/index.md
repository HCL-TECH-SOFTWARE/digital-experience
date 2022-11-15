# Adding resource bundles for a new language

To allow your portal users to work in an extra language, you add resource bundles for that language. Resource bundles are used to store text that is displayed in JSPs or text that is used in Java code.

In HCL Digital Experience, resource bundles are in the JAR file `wp.ui.jar` in the nls directory inside the file.

The JAR file wp.ui.jar is in the following directory:

-   AIX®: PortalServer_root/ui/wp.ui/shared/app
-   Linux™: PortalServer_root/ui/wp.ui/shared/app
-   Windows™: PortalServer_root\ui\wp.ui\shared\app

If you want to add new resource bundles for extra languages, place them in the following directory:

-   AIX: wp_profile_root/PortalServer/config/nls
-   Linux: wp_profile_root/PortalServer/config/nls
-   Windows: wp_profile_root\PortalServer\config\nls

The naming convention for resource bundles is [bundle]_[language]_[country]_[variant].properties. The ISO standard ISO-639 is used for the language codes of most languages. For Hebrew, the old language code `iw` is used. The ISO standard ISO-3166 is used for the country/region codes. HCL Digital Experience supports the use of [variant], although resource bundles that are supplied with the portal do not use it.

!!!note:
    If your portal configuration includes Lotus Collaborative Services, add a CSRes_language.properties file for each additional language to the following directory:
        -   AIX: wp_profile_root/PortalServer/config/nls
        -   Linux: wp_profile_root/PortalServer/config/nls
        -   Windows: wp_profile_root\PortalServer\config\nls

HCL Digital Experience uses properties files that are called by the Java class java.util.ResourceBundle to store text that is rendered in JSPs. The Java mechanism searches for the resource bundles in the following order:

1.  [bundle]_[language]_[country]_[variant].properties
2.  [bundle]_[language]_[country].properties
3.  [bundle]_[language].properties
4.  [bundle].properties

In HCL Digital Experience, the default bundles [bundle].properties are in English.

All languages that are defined for HCL Digital Experience need to have resource bundles that are defined as well for the themes to function correctly. After you install a new language, complete the following steps to add and process the resource bundles in the wp.ui.jar file:

1.  Copy all existing resource bundles into wp_profile_root/PortalServer/config/nls directory.

2.  Name the resource bundles according to the naming convention for resource bundles with locale code for the languages installed.

3.  Convert the resource bundle files.

4.  Convert them into Unicode with the Native-to-ASCII converter `native2ascii` that comes as part of JDK. For more detail about `native2ascii`, go to the Java documentation *native2ascii - Native-to-ASCII Converter*.

5.  Restart your HCL Digital Experience so that it recognizes the new resource bundles.


???+ info "Related information" 
    -   [Native-to-ASCII Converter](http://docs.oracle.com/javase/7/docs/technotes/tools/solaris/native2ascii.html)

