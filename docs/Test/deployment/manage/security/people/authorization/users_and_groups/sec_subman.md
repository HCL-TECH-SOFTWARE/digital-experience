# Registration/Edit My Profile and Login portlets

In HCL Portal, the Registration/Edit My Profile and Login portlets reside on special pages where the anonymous user has access rights based on the User role.

The unique name wps.Login is assigned to the page holding the login portlet, and the unique name wps.Selfcare is assigned to the page holding the Registration/Edit My Profile portlet.

The Registration/Edit My Profile portlet is for subscriber management. Registration allows users to register for access and information entered during Registration can be updated in Edit My Profile. Registration is also referred to as "Sign up".

!!!note "Update with CF209 and higher"
    In the previous releases, anonymous sign-up is enabled by default. Starting with CF209, the anonymous sign-up feature is disabled by default for anonymous users. You can enable this by either adding the anonymous user to the Editor role of the virtual resource USER_SELF_ENROLLMENT or by running a configuration task enable-anonymous-sign-up.

## Registration/Edit My Profile

During registration, the user enters mandatory data, such as the user ID and first and last names. The user has the option to select the preferred language from a list of available languages. The portal uses this language in all interactions and makes this information available to all portlets so that they can adapt to the user preference. If a language is not selected, the portal determines which language to use from the users' browser settings.

|Parameter Name|Registration/Edit My Profile portlet configuration parameters|
|--------------|-------------------------------------------------------------|
|HomePageUniqueName|Use this property to identify the page that is selected when users click **Cancel**. Update this parameter to match your environment.Default: ibm.portal.Home|
|GenerateCN|Use this property to specify whether HCL Portal should generate the value of the `cn` attribute from the supplied user attributes.Default: true|
|attr\_XXX|This portlet applies special handling to a subset of user attributes. You can use the attr\_XXX parameters to match the actual attribute name to the logical name used in the portlet.<br>Attributes that receive special handling:<br> - **alternativeCalendar**<br> - cn<br> - **email**<br> - **firstDayOfWeek**<br> - **firstName**<br> - **firstWorkDayOfWeek**<br> - **lastName**<br> - **password**<br> - **preferredCalendar**<br> - **preferredLanguage**<br> - **timeZone,uid**|

## Creating new attributes for the Registration/Edit My Profile portlet

You can change information entered at registration. Administrators can determine what information appears in the profile. LDAP or member management fields determine what fields appear as potential fields for the user profile. Some fields are disabled because they are required fields in PUMA \(user management\), and cannot be removed. Optional attributes of data type string can be added using the configuration mode of the portlet. If you do not see the required attribute displayed in the configuration mode, review the information under Adapting the attribute configuration to ensure that the attribute was properly added, mapped, or both.

By default, the same portlet instance is used for Registration and for Edit My Profile. In this design, changes made with the configure link apply to both cases.

Since a separate instance of the Registration/Edit My Profile portlet exists for each virtual portal, it is possible to have different customized portlets for each virtual portal.

## Login

To access the Login portlet, click **Log In** in the banner. The Login portlet can also be placed on any page.

Since a separate instance of the Login portlet exists for each virtual portal, it is possible to have different customized portlets for each virtual portal.

The remember-me setting can be enabled to appear in the login portlet. To enable the remember-me parameter, set the ShowRememberMe and RememberMeCookieAttribute parameters for the portlet.

!!!note
    The remember-me feature must be enabled first. See the related links section for information.

|Parameter name|Login portlet configuration parameters|
|--------------|--------------------------------------|
|HomePageUniqueName|Use this property to identify the page that is selected when users click **Cancel**. Update this parameter to match your environment.<br> Default: `ibm.portal.Home`|
|RememberMeCookieAttribute|Use this property to specify which user attribute is parsed out of the Remember Me cookie information and used as the user ID in the Login portlet. The correct value for this parameter is generally the default search attribute of the user registry.<br> Default: `uid`|
|ShowRememberMe|Use this property to specify whether or not the Login portlet presents the Remember Me function. Successful configuration and enablement of the base Remember Me mechanism must be completed for this parameter to have any effect.<br> Default: `yes`|
|ShowDetailedMessages|Use this property to specify whether or not the Login portlet shows detailed error messages. Detailed messages might make it easier for unauthorized users to determine valid user credentials.<br> Default: `false`|
|ShowResumeSession|Use this property to specify whether or not the Login portlet displays the option to resume a user session, assuming the appropriate configuration to enable session resumption has been set.<br> Default: `yes`|
|ShowSignupLink|Use this property to specify whether or not the Login portlet shows the "Sign up" link. The anonymous user must also have the requisite permissions for this to be enabled.<br> Default: `yes`|
|UseSecureLoginActionUrl|Use this property to specify whether or not the Login action uses a secure connection to the Login portlet.<br>**Important:** For the Login action to use a secure connection, you must set up the appropriate configuration to accept the secure URL. When you do not correctly set up this configuration, the Login portlet cannot gain access to your portal. If this scenario occurs, you can use the automatic login URL to log into your portal and then disable this parameter until your secure configuration is correctly set up. See the related links section for information.<br>Default: `false`|


