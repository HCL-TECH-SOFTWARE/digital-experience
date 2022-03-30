# Enabling two-phase rendering for a portlet 

By default, two-phase rendering is turned off. To enable two-phase rendering for a portlet, you must update the `portlet.xml` deployment descriptor for the portlet.

1.  Edit the `portlet.xml` file for the portlet.

    Add the following entry to the file:

    ```
    <portlet>
        ...
        <container-runtime-option>
            <name>javax.portlet.renderHeaders</name>
            <value>true</value>
        </container-runtime-option>
    </portlet>
    ```


**Parent topic:**[Using two-phase rendering with JSR 286 portlets ](../dev-portlet/jsr2phase_overview.md)

