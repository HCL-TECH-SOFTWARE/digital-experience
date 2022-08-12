# Removing sample user names after installing

The sample content and demo site included with Content Template Catalog contain user names that will not exist in most environments and result in unresolved names appearing on the templates.

Follow these steps to remove unresolved names by running the Member Fixer task against each of the Content Template Libraries.

1.  Open a command window and navigate to the ConfigEngine directory.

    -   **Windows™**

        C:/IBM/WebSphere/wp\_profile/ConfigEngine

    -   **AIX®**

        /usr/IBM/WebSphere/wp\_profile/ConfigEngine

    -   **HP-UX**

        /opt/IBM/WebSphere/wp\_profile/ConfigEngine

    -   **Linux™**

        /opt/IBM/WebSphere/wp\_profile/ConfigEngine

2.  Run the ConfigEngine batch or script with the following arguments against the CTC Content library.

    -   **fix=true**

        Runs the task in fix mode, which modifies the content.

    -   **library=MyLibraryName**

        Specifies which library to run the task on. Replace MyLibraryName with the actual name of the library.

    -   **invalidDn=update**

        Changes unresolved user names with invalid user names to the administrator user.

    -   **altDn=update**

        Updates each unresolved user name with an alternate user name if available.

    -   **Windows™**

        ```
        ConfigEngine.bat run-wcm-admin-task-member-fixer 
        -Dfix=true -Dlibrary="CTC Content" 
        -DinvalidDn=update -DaltDn=update 
        ```

    -   **AIX®HP-UX Linux™**

        ```
        ./ConfigEngine.sh run-wcm-admin-task-member-fixer 
        -Dfix=true -Dlibrary="CTC Content" 
        -DinvalidDn=update -DaltDn=update 
        ```

3.  Run the ConfigEngine batch or script against the CTC Demo library if you installed it.

    -   **Windows™**

        ```
        ConfigEngine.bat run-wcm-admin-task-member-fixer 
        -Dfix=true -Dlibrary="CTC Demo" 
        -DinvalidDn=update -DaltDn=update 
        ```

    -   **AIX®HP-UX Linux™**

        ```
        ./ConfigEngine.sh run-wcm-admin-task-member-fixer 
        -Dfix=true -Dlibrary="CTC Demo" 
        -DinvalidDn=update -DaltDn=update 
        ```

4.  Run the ConfigEngine batch or script against the CTC Design library.

    -   **Windows™**

        ```
        ConfigEngine.bat run-wcm-admin-task-member-fixer 
        -Dfix=true -Dlibrary="CTC Design" 
        -DinvalidDn=update -DaltDn=update 
        ```

    -   **AIX®HP-UX Linux™**

        ```
        ./ConfigEngine.sh run-wcm-admin-task-member-fixer 
        -Dfix=true -Dlibrary="CTC Design" 
        -DinvalidDn=update -DaltDn=update 
        ```

5.  Run the ConfigEngine batch or script against the CTC Process library.

    -   **Windows™**

        ```
        ConfigEngine.bat run-wcm-admin-task-member-fixer 
        -Dfix=true -Dlibrary="CTC Process" 
        -DinvalidDn=update -DaltDn=update 
        ```

    -   **AIX®HP-UX Linux™**

        ```
        ./ConfigEngine.sh run-wcm-admin-task-member-fixer 
        -Dfix=true -Dlibrary="CTC Process" 
        -DinvalidDn=update -DaltDn=update 
        ```


**Parent topic:**[First-time installation of Content Template](../ctc/ctc_inst_overview.md)

