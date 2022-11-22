# Dynamically changing the language during the user session

Allow users to change the language while they are logged in to the portal.

If you want your users to be able to change the language during the session, use the following command provided by HCL Digital Experience:

```
<portal-navigation:url command="ChangeLanguage">
   <portal-navigation:urlParam name="locale" value="language"/>
</portal-navigation:url>
```

where language is the two character code for the required language, such as en, de, or fr. For a list of the available languages and their two character codes read *Language support*.

For users to be able to dynamically change the language for the session, add a link to the portal theme with the following text and link reference:

-   The text displayed with the link specifies the language to which the user can change.
-   The link reference calls the command described previously with the locale parameter corresponding to the specified language.

Users can then click this link to change to the language specified by the locale parameter with the command. If you want to make more than one language available to users, you create a separate link for each language.

**Example:** 
To create links for English and German, add the lines shown in the following example to the banner area of your theme:

```
<!-- add these lines -->
<a href="<portal-navigation:url command="ChangeLanguage"><portal-navigation:urlParam name="locale" 
     value="en"/></portal-navigation:url>">English</a>
<a href="<portal-navigation:url command="ChangeLanguage"><portal-navigation:urlParam name="locale" 
     value="de"/></portal-navigation:url>">Deutsch</a>

<%-- logout button --%>

```

The banner area can be defined in different files, depending on the different themes. Themes in recent portal versions commonly define the banner area within the Default.jsp, whereas older themes can include a separate JSP, such as banner_toolbar.jsp. For more information about locating the files for your themes refer to the topic about the Location of theme resources.

!!!note "Notes"
     -   The changed setting applies only for the duration of the current session. When the user logs out and back in again, the portal applies the default language as determined by the steps described under Selecting and changing the language.
     -   The previous examples use the `portal:` prefix to designate JSP tags from the portal tag library in portal.tld. Your custom JSPs might use a different tag prefix. Refer to Tags used by the portal JSPs for more information.
     -   Important for every operating system: Touch the Default.jsp file after editing any JSP files and before any restart. This updates the timestamp on the file to the current time and will signal a recompile of Default.jsp to incorporate the edit changes from other JSP files. Enter: `touch Default.jsp`.<br><br> An alternative is to edit (open and save) Default.jsp, which has the same effect as the touch command. After updating theme JSPs, you must restart HCL Digital Experience unless JSP reloading is enabled.


???+ info "Related information"  
     -    [Selecting and changing the language](../../portal_admin_tools/language_support/adsuplang.md)
     -    [Understanding the Portal 8.5 modularized theme](../../../../build_sites/create_sites/website_building_blocks/themes_profiles_skins/themeopt_defaultparts.md)
     -    [Tags used by the portal JSPs](../../../../build_sites/themes_skins/customizing_theme/portal_jsp_tag/index.md)

