# Validation reports

Use the validation portlet to verify that your theme contains no errors. The validation report analyzes your theme and theme components for known issues and reports the number of errors, warnings, and informational messages. It also includes a detailed explanation about how to fix the errors that occur.

## Home screen

After the validation analyzer runs, the report includes a number badge. The badge shows the total number of messages in the report. The background color indicates the severity within the report. Red means that there is an error. Orange means that there is a warning. Green means that there are informational messages. If no badge is present, no messages were found.

![Validation report - 70 - validate your themes and their artifacts. 70 is a badge that indicates your validation report contains 70 issues.](../images/themeopt_an_badge.jpg)

## Validation report

The expanded report shows the validation report of your system in a split view. The tree view shows the messages in categories. The details view shows information about the message that is selected in the tree view. The details view also displays related information that is important for the message. These can be theme, profile, module, or skin details.

A check mark by a category means that there are no errors or warnings in that category. In the following screen capture, the Theme Optimization Analyzer portlet Validation Report includes 21 messages. The selected message, Missing a leading forward slash in context root, is described in the details section. The error code is EJPNO1000E. The explanation is Theme 'Analyzer Test Non-Optimized Theme One' is configured incorrectly. The context root is missing a leading forward slash. It also includes a User Action that tells the user how to fix the error. In this case, it is Update the configuration for theme 'Analyzer Test Non-Optimized Theme One' by prefixing the context root with a forward slash. Instead of 'analyzerTestThemeDynamic', it should be '/analyzerTestThemeDynamic'.

![The validation report contains errors, warnings, and informational messages and their details.](../images/themeopt_an_val_report.jpg)

## Possible messages

The following topics describe all of the possible messages.

-   **[EJPNO1000E error](../dev-theme/themeopt_an_EJPNO1000E_v85.md)**  
Missing a leading slash in context root.
-   **[EJPNO1001E error](../dev-theme/themeopt_an_EJPNO1001E_v85.md)**  
WebDAV directory names must not contain spaces.
-   **[EJPNO1002E error](../dev-theme/themeopt_an_EJPNO1002E_v85.md)**  
Missing default profile.
-   **[EJPNO1003W error](../dev-theme/themeopt_an_EJPNO1003W_v85.md)**  
Missing module referenced in profile.
-   **[EJPNO1004I error](../dev-theme/themeopt_an_EJPNO1004I_v85.md)**  
Duplicate modules found in profile.
-   **[EJPNO1005E error](../dev-theme/themeopt_an_EJPNO1005E_v85.md)**  
Circular dependency detected.
-   **[EJPNO1006I error](../dev-theme/themeopt_an_EJPNO1006I_v85.md)**  
Unnecessary module found within profile.
-   **[EJPNO1007W error](../dev-theme/themeopt_an_EJPNO1007W_v85.md)**  
Incorrect URI schema detected.
-   **[EJPNO1008W error](../dev-theme/themeopt_an_EJPNO1008W_v85.md)**  
Incorrect URI schema detected.
-   **[EJPNO1009W error](../dev-theme/themeopt_an_EJPNO1009W_v85.md)**  
Incorrect URI detected.
-   **[EJPNO1010W error](../dev-theme/themeopt_an_EJPNO1010W_v85.md)**  
Incorrect URI detected.
-   **[EJPNO1011I error](../dev-theme/themeopt_an_EJPNO1011I_v85.md)**  
Allow Privileged Users to change the page layout.
-   **[EJPNO1012W error](../dev-theme/themeopt_an_EJPNO1012W_v85.md)**  
Default layout template is missing from the theme configuration.
-   **[EJPNO1013E error](../dev-theme/themeopt_an_EJPNO1013E_v85.md)**  
Whitelist configuration is not set.
-   **[EJPNO1014I error](../dev-theme/themeopt_an_EJPNO1014I_v85.md)**  
Blacklist configuration is not set.
-   **[EJPNO1015E error](../dev-theme/themeopt_an_EJPNO1015E_v85.md)**  
Missing prereq detected.
-   **[EJPNO1016I error](../dev-theme/themeopt_an_EJPNO1016I_v85.md)**  
Non-modularized theme detected.
-   **[EJPNO1017W error](../dev-theme/themeopt_an_EJPNO1017W_v85.md)**  
Default skins is set to inactive.
-   **[EJPNO1018W error](../dev-theme/themeopt_an_EJPNO1018W_v85.md)**  
No active skins found for theme.
-   **[EJPNO1019W error](../dev-theme/themeopt_an_EJPNO1019W_v85.md)**  
Invalid URI detected.
-   **[EJPNO1020W error](../dev-theme/themeopt_an_EJPNO1020W_v85.md)**  
Invalid URI detected.
-   **[EJPNO1021W error](../dev-theme/themeopt_an_EJPNO1021W_v85.md)**  
Undefined contribution hierarchy in profile.
-   **[EJPNO1022E error](../dev-theme/themeopt_an_EJPNO1022E_v85.md)**  
System plug-in collision.
-   **[EJPNO1023E error](../dev-theme/themeopt_an_EJPNO1023E_v85.md)**  
System module collision.
-   **[EJPNO1024W error](../dev-theme/themeopt_an_EJPNO1024W_v85.md)**  
Themelist URL used for rendering
-   **[EJPNO1025W error](../dev-theme/themeopt_an_EJPNO1025W_v85.md)**  
Skinlist URL used for rendering.
-   **[EJPNO1026E error](../dev-theme/themeopt_an_EJPNO1026E_v85.md)**  
Theme context root not found.
-   **[EJPNO1027W error](../dev-theme/themeopt_an_EJPNO1027W_v85.md)**  
Security list configuration is not set.
-   **[EJPNO1021W error](../dev-theme/themeopt_an_EJPNO1021W_v85.md)**  
Undefined contribution hierarchy in profile.
-   **[EJPNO1022E error](../dev-theme/themeopt_an_EJPNO1022E_v85.md)**  
System plug-in collision.
-   **[EJPNO1023E error](../dev-theme/themeopt_an_EJPNO1023E_v85.md)**  
System module collision.
-   **[EJPNO1024W error](../dev-theme/themeopt_an_EJPNO1024W_v85.md)**  
Themelist URL used for rendering
-   **[EJPNO1025W error](../dev-theme/themeopt_an_EJPNO1025W_v85.md)**  
Skinlist URL used for rendering.
-   **[EJPNO1026E error](../dev-theme/themeopt_an_EJPNO1026E_v85.md)**  
Theme context root not found.
-   **[EJPNO1027W error](../dev-theme/themeopt_an_EJPNO1027W_v85.md)**  
Security list configuration is not set.

**Parent topic:**[Theme Optimization Analyzer](../dev-theme/themeopt_an_analyzer.md)

**Parent topic:**[Theme Optimization Analyzer](../dev-theme/themeopt_an_analyzer.md)

