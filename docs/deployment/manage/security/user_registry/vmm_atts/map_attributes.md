# Mapping attributes

Map the attributes between HCL Digital Experience and your LDAP user registries.

1.  Use a text editor to open the wkplc.properties file in the wp_profile_root/ConfigEngine/properties directory.

2.  Enter values for the following set of parameters to identify your LDAP server:

    The following parameters are found in the VMM Federated repository properties heading:

    !!!note
        Go to the properties file for specific information about the parameters.

    -   federated.ldap.id
    -   federated.ldap.host
    -   federated.ldap.port
    -   federated.ldap.sslEnabled
    -   federated.ldap.bindDN
    -   federated.ldap.bindPassword
    -   federated.ldap.baseDN
    
    !!!note
        Make sure you use the same values that you used to configure your LDAP server.

3.  Run the following task to check that all defined attributes that are available in the configured LDAP user registry:

    -   AIX® and Linux™: `./ConfigEngine.sh wp-validate-federated-ldap-attribute-config -DWasPassword=password`
    -   Windows™: `ConfigEngine.bat wp-validate-federated-ldap-attribute-config -DWasPassword=password`

4.  Open the ConfigTrace.log file, in the wp_profile_root\log directory. Review the following output for the PersonAccount and Group entity type:

    -   **The following attributes are defined in HCL Portal but not in the LDAP server**

        This list contains all attributes that are defined in HCL Portal but not available in the LDAP. Flag attributes that you do not plan to use in HCL Portal as unsupported. Map the attributes that you plan to use to the attributes that exist in the LDAP; you must also map the uid, cn, firstName, sn, preferredLanguage, and ibm-primaryEmail attributes if they are contained in the list.

    -   **The following attributes are flagged as required in the LDAP server but not in HCL Portal**

        This list contains all attributes that are defined as "must" in the LDAP server but not as required in HCL Portal. Flag these attributes as required within HCL Portal; go to the next step to flag an attribute as either unsupported or required.

    -   **The following attributes have a different type in HCL Portal and in the LDAP server**

        This list contains all attributes that HCL Portal might ignore because the data type within HCL Portal and within the LDAP server do not match.

5.  Use a text editor to open the wkplc.properties file

6.  Enter a value for the following set of parameters in the wkplc.properties file to correct any issues that are found in the configuration trace file:

    The following parameters are found in the VMM Federated repository properties heading:

    -   federated.ldap.attributes.nonSupported
    -   federated.ldap.attributes.nonSupported.delete
    -   federated.ldap.attributes.mapping.ldapName
    -   federated.ldap.attributes.mapping.portalName
    -   federated.ldap.attributes.mapping.entityTypes

    The following values flag certificate and members as unsupported attributes and maps ibm-primaryEmail to mail and ibm-jobTitle to title for the PersonAccount entityTypes:

    ```
    federated.ldap.attributes.nonSupported=certificate, members
    federated.ldap.attributes.nonSupported.delete=
    
    federated.ldap.attributes.mapping.ldapName=mail, title
    federated.ldap.attributes.mapping.portalName=ibm-primaryEmail, ibm-jobTitle
    federated.ldap.attributes.mapping.entityTypes=PersonAccount
    
    ```

    If you want to map attributes for your groups instead of users, set the entityTypes to Group.

    ```
    federated.ldap.attributes.mapping.entityTypes=Group
    ```

7.  Save your changes to the wkplc.properties file.

8.  Run the following task to update the LDAP user registry configuration with the following items:

    -   A list of unsupported attributes
    -   The correct mapping between HCL Portal and the LDAP user registry
    -   AIX and Linux: `./ConfigEngine.sh wp-update-federated-ldap-attribute-config -DWasPassword=password`
    -   Windows: `ConfigEngine.bat wp-update-federated-ldap-attribute-config -DWasPassword=password`

9.  Stop and restart the appropriate servers to propagate the changes. For specific instructions, go to [Starting and stopping servers, deployment managers, and node agents](../../../../manage/stopstart.md).

10. Complete the following steps to flag an attribute as either unsupported or required for the entire HCL Portal environment instead of just for the specified LDAP:

    1.  Enter a value for the following required parameters in the wkplc.properties file:

        !!!note
            Go to the properties file for specific information about the parameters.

        -   user.attributes.required
        -   user.attributes.nonsupported
    2.  Save your changes to the wkplc.properties file.

    3.  Run the following task:

        -   AIX and Linux: `./ConfigEngine.sh wp-update-attribute-config -DWasPassword=password`
        -   Windows: `ConfigEngine.bat wp-update-attribute-config -DWasPassword=password`

    4.  Stop and restart all necessary servers to propagate your changes.


