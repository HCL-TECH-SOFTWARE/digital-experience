# Adding or removing the CTC modules in profiles 

To allow site designers to create pages by using the Content Template page template without having to use the CTC Content profile, run the following task to add the CTC modules to all of the Portal default profiles. There is also a task to remove the CTC modules from the Portal theme profiles.

1.  Open a command window and browse to the ConfigEngine directory:

    -   **Windows™**

        C:/IBM/WebSphere/wp\_profile/ConfigEngine

    -   **AIX®**

        /usr/IBM/WebSphere/wp\_profile/ConfigEngine

    -   **HP-UX**

        /opt/IBM/WebSphere/wp\_profile/ConfigEngine

    -   **Linux™**

        /opt/IBM/WebSphere/wp\_profile/ConfigEngine

    1.  To add the CTC modules to a single profile, run this ConfigEngine batch or script:

        -   **Windows™**

            ```
            ConfigEngine.bat add-ctc-modules-into-theme-profiles -DTargetProfile=myprofile -DTargetTheme=theme\_name
            ```

        -   **AIX®HP-UX Linux™**

            ```
            ./ConfigEngine.sh add-ctc-modules-into-theme-profiles -DTargetProfile=myprofile -DTargetTheme=theme\_name
            ```

    2.  To add CTC modules to all portal default profiles, run this ConfigEngine batch or script:

        -   **Windows™**

            ```
            ConfigEngine.bat add-ctc-modules-into-theme-profiles -DTargetProfile=all_profiles
            ```

        -   **AIX®HP-UX Linux™**

            ```
            ./ConfigEngine.sh add-ctc-modules-into-theme-profiles -DTargetProfile=all_profiles
            ```

    3.  To remove the CTC modules from a single profile, run this ConfigEngine batch or script:

        -   **Windows™**

            ```
            ConfigEngine.bat remove-ctc-modules-from-theme-profiles -DTargetProfile=myprofile -DTargetTheme=theme\_name
            ```

        -   **AIX®HP-UX Linux™**

            ```
            ./ConfigEngine.sh remove-ctc-modules-from-theme-profiles -DTargetProfile=myprofile -DTargetTheme=theme\_name
            ```

    4.  To remove CTC modules from all portal default profiles, run this ConfigEngine batch or script:

        -   **Windows™**

            ```
            ConfigEngine.bat remove-ctc-modules-from-theme-profiles -DTargetProfile=all_profiles
            ```

        -   **AIX®HP-UX Linux™**

            ```
            ./ConfigEngine.sh remove-ctc-modules-from-theme-profiles -DTargetProfile=all_profiles
            ```


**Parent topic:**[Customizing sites built with Content Template ](../ctc/ctc_design_custom.md)

