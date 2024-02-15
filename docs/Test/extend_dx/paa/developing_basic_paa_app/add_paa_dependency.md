# PAA dependencies for deployment and removal

The deployment and removal of a Portal Application Archive \(PAA\) file might depend on deployment of other PAA applications. You can specify the PAA dependencies for a PAA file in the assembly level sdd.xml file.

## Add PAA dependencies for deploying a PAA file

The deployment of a PAA file might depend on deployment of other PAA applications. You can specify the PAA dependencies for deploying a PAA file in the assembly level sdd.xml file.

To define the PAA dependencies for a PAA file, you must edit the assembly level sdd.xml file in the PAA directory. Open the sdd.xml file and search for the `<rootIU>` tag. Add the `<paaDependencies>` tag to the `<rootIU>` tag. Also, add the `<paaDependency>` tag for each PAA dependency in the `<paaDependencies>` tag. The `<paaDependency>` tag has the following attributes:

-   **name**

    This attribute is required. Set the value to the name of the PAA dependency.

-   **lowerVersion**

    This attribute is optional. Only one PAA dependency version value is acceptable for this attribute.

-   **higherVersion**

    This attribute is optional. Only one PAA dependency version value is acceptable for this attribute.

-   **versions**

    This attribute is optional. You can add multiple PAA dependency version value for this attribute as a comma-separated list.


You can specify more than one `<paaDependency>` tag in the `<paaDependencies>` tag. For example, you might add the following information to your sdd.xml file:

```
<paaDependencies> 
	<paaDependency name="Dependency1" lowerVersion="8.0.0.0" higherVersion="8.0.0.1" versions="8.5.0.0" /> 
	<paaDependency name="Dependency2" lowerVersion="8.0.0.0" higherVersion="8.0.0.1" versions="8.5.0.0" /> 
</paaDependencies> 
```

All the PAA dependencies that are specified in the `<paaDependencies>` tag must be deployed on the Portal server. The version of each PAA dependency must match the values that are specified in `<paaDependencies>` tag. Then, the PAA file can be deployed into the Portal server.

The Solution Installer uses the following rules to determine whether a PAA file can be deployed:

-   The Solution Installer assumes the PAA dependency requirement is satisfied in the following situations:
    -   If the `<paaDependency>` tag is not found in the assembly level sdd.xml file
    -   If the `<paaDependency>` tag exists but has no attributes that are defined
-   All the PAA dependencies that are specified in the `<paaDependencies>` tag satisfy the requirement. The requirement is, for each of the PAA dependencies that are specified in a `<paaDependency>` tag, at least one of the following is true:
    -   The PAA dependency is deployed. The lowerVersion attribute is set and the value is equal to or greater than the current version of PAA dependency.
    -   The PAA dependency is deployed. The higherVersion attribute is set and the current version of PAA dependency is less than or equal to its value.
    -   The PAA dependency is deployed. The versions attribute is set and the current version of PAA dependency matches one of the values.

## Add PAA dependencies for removing a PAA file

The removal of a PAA file might depend on removal of other PAA applications. You can specify the PAA dependency for removing a PAA file in the assembly level sdd.xml file.

To define the PAA dependencies for a PAA file, you must edit the assembly level sdd.xml file in the PAA directory. Open the sdd.xml file and search for the `<rootIU>` tag. Add the `<paaDependencies>` tag to the `<rootIU>` tag. And add `<removePaaDependency>` tag for each PAA dependency in the `<paaDependencies>` tag. The `<removePaaDependency>` tag has the following attributes:

-   **name**

    This attribute is required. Set the value to the name of the PAA dependency.

-   **lowerVersion**

    This attribute is optional. Only one PAA dependency version value is acceptable for this attribute.

-   **higherVersion**

    This attribute is optional. Only one PAA dependency version value is acceptable for this attribute.

-   **versions**

    This attribute is optional. You can add multiple PAA dependency version value for this attribute as a comma-separated list.


You can specify more than one `<paaDependency>` tag in the `<paaDependencies>` tag. For example, you might add the following information to your sdd.xml file:

```
<paaDependencies> 
	<removePaaDependency name="Dependency1" lowerVersion="8.0.0.0" higherVersion="8.0.0.1" versions="8.5.0.0" /> 
	<removePaaDependency name="Dependency2" lowerVersion="8.0.0.0" higherVersion="8.0.0.1" versions="8.5.0.0" /> 
</paaDependencies> 
```

The Solution Installer uses the following rules to determine whether a PAA file can be removed:

-   The Solution Installer assumes the PAA dependency requirement is satisfied in the following situations:
    -   If the `<removePaaDependency>` tag is not found in the assembly level sdd.xml file
    -   If the `<removePaaDependency>` tag exists but has no attributes that are defined
    
-   All the PAA dependencies satisfy the requirement. The requirement is, for each of the PAA dependencies that are specified in a `<removePaaDependency>` tag, the PAA dependency is not deployed, or not any of the following is true:
    -   The PAA dependency is deployed. The lowerVersion attribute is set and the value is less than the current version of PAA dependency.
    -   The PAA dependency is deployed. The higherVersion attribute is set and the value is greater than the current version of PAA dependency.
    -   The PAA dependency is deployed. The versions attribute is set and the current version of PAA dependency matches any one of the values.


