# Checking server dependency

When you install a Portal Application Archive \(PAA\) file, you must verify that the file is compatible with the current version of HCL Digital Experience.

The Solution Installer uses the following two methods to check for dependencies:

-   **Dependency checking for PAA files**

    The Solution Installer can check dependencies for the PAA file. To define the dependencies for a PAA file, you must edit the assembly level sdd.xml file in the PAA directory. Open the sdd.xml file and search for the `<rootIU>` tag. Add the `<serverVersionDependency>` tag to the `<rootIU>` tag with the following attributes:

    -   name: This attribute must be set to PortalServer
    -   lowerVersion: This attribute is optional. Only one HCL Portal version value is acceptable for this attribute.
    -   higherVersion: This attribute is optional. Only one HCL Portal version value is acceptable for this attribute.
    -   versions: This attribute is optional. You can add multiple HCL Portal version values for this attribute as a comma-separated list.
    For example, you might add the following information to your sdd.xml file:

    ```
    <serverVersionDependency name="PortalServer" lowerVersion="6.0.0.0" 
                             higherVersion="8.5.0.0" versions="7.0.0.1,7.0.0.2" />
    ```

    If you want to add dependencies for a specific fix level, you must add the following attributes to the `<server>` subelement within the `<serverVersionDependency>` element:

    -   version: This value is the version of HCL Portal where you want to set the level restriction.
    -   fixlevel: This attribute is optional. This attribute is compared against the current installation fix level to determine any dependencies. If the attribute is not set, then it is ignored.
    -   lower: This attribute is optional. Set this value to true if the fixlevel is the lowest version for the current server.
    -   higher: This attribute is optional. Set this value to true if the fixlevel is the highest version for the current server.
    For example, you might add the following information to your sdd.xml file:

    ```
    <serverVersionDependency name="PortalServer" lowerVersion="" 
                             higherVersion="" versions="" >
    <server version="8.5.0.0" fixlevel="CF02" lower="true"
    					higher="false" />
    </serverVersionDependency>
    ```

    The Solution Installer uses the following rules to determine whether a PAA file is compatible with the current HCL Portal version:

    -   The Solution Installer assumes that the file is compatible in the following situations:
        -   If the `<serverVersionDependency>` tag is not found in the assembly level sdd.xml file
        -   If the `<serverVersionDependency>` tag exists but has no attributes that are defined
    -   The Solution Installer installs the PAA file if the following information is true:
        -   The lowerVersion attribute is set and the value is equal to or greater than the current version of HCL Portal.
        -   The higherVersion attribute is set and the current version of HCL Portal is less than or equal to its value.
    -   If the versions attribute is set, the Solution Installer installs the PAA file if the current HCL Portal matches one of the values.
    -   If a `<server>` element is included, the PAA file is installed if the following information is true:
        -   If version and fixlevel are equal to the current server information
        -   If lower is true, any fix pack level that is greater than fixlevel
        -   If higher is true, any fix pack level that is less than or equal to fixlevel
-   **Black list to block deploying PAA files that must not be deployed**

    The Solution Installer checks the blacklist.txt file in the /WebSphere/PortalServer/solutioninstaller/wp.si directory. The blacklist.txt file contains a list of PAA files that HCL Portal cannot deploy. The format for the blacklist.txt file is assemblyname: version\_number. Multiple versions are allowed as a semicolon-separated list; for example: assemblyname: version\_number1;version\_number2.

    When you install a PAA file, the Solution Installer reads the assembly name and version from the assembly level sdd.xml file. The Solution Installer then looks for the matching information in the blacklist.txt file. If the Solution Installer finds a match in the blacklist.txt file, the PAA file is not installed.



