# Properties file: wkplc.properties

**Parent topic:**[Reference: Configuration properties ](../properties/properties.md)

## About the properties file

When specifying values:

-   Do NOT enclose any value in quotes. This will cause a failure in the configuration tasks.
-   Windows paths must use a forward slash \(/\) instead of a backward slash. A backward slash is an escaped character. C
-   Windows long paths are acceptable.
-   Properties are immutable. Once set, they cannot be changed when a configuration task is running.
-   Property values can be defined in three ways: on the command line, in this property file, and in a build file. The configuration task uses the following order to determine the property value:
    -   First the task checks the command line values, so specifying \(-DMyNode=somenode\) takes precedence.
    -   Second, the task checks the property file values.
    -   Third, the task checks the build file property values.

-   **WasSoapPort**

    -   **Description**

        The port used to connect to the WebSphere Application Server with remote connections.

    -   **Default value**

        10005

    -   **Examples**

        None available

-   **WasRemoteHostName**

    -   **Description**

        The host name of the remote server that connects to WebSphere Application Server. Enter the host name including the domain, such as my\_host\_name.mydomain.com

    -   **Default value**

        @your\_host\_name@

    -   **Examples**

        :

-   **RegistrySynchronized**

    -   **Description**

        Tells the system if the registry is synchronized or not. This value should never be modified unless a forced synchronization is necessary.

    -   **Valid values**

        true

        false

    -   **Default value**

        true

    -   **Examples**

        None available


## General properties

### 2.1. WebSphere Application Server properties

Provide information about the WebSphere Application Server used in the WebSphere Portal stack.

-   **VirtualHostName**

    -   **Description**

        The name of the WebSphere Application Server virtual host.

    -   **Default value**

        default\_host

    -   **Examples**

        None available

-   **WasUserid**

    -   **Description**

        User ID that is used for WebSphere Application Server security authentication. Type the value in lower case, regardless of the case used in the distinguished name \(DN\).

        For an LDAP configuration:

        -   The ID cannot contain spaces
        -   The ID is the fully qualified distinguished name \(DN\) of a current administrative user for the WebSphere Application Server.
        For a configuration using a Virtual Manager User Registry database, the short version of the distinguished name must be used.

    -   **Default value**

        wpsadmin

    -   **Examples**

        None available

-   **WasPassword**

    -   **Description**

        The password for the user ID specified for WebSphere Application Server security authentication. If you use the command line interface, the password can be specified in this file or you can provide the password using the -DWasPassword parameter.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **WasHome**

    -   **Description**

        Type the directory path to where WebSphere Application Server product files are installed. You must use forward slashes \(/\) to delimit elements in the path.

    -   **Default value**

        @was.root@

    -   **Examples**

        AIX: /usr/IBM/WebSphere/AppServer

        HP-UX: /opt/IBM/WebSphere/AppServer

        IBM i: /QIBM/ProdData/WebSphere/AppServer/V85/ND

        Linux: /opt/IBM/WebSphere/AppServer

        Solaris: /opt/IBM/WebSphere/AppServer

        Windows: c:/Program\_Files/IBM/WebSphere/AppServer

-   **WasUserHome**

    -   **Description**

        The directory where WebSphere Application Server user data \(profile\) is created. The installation program sets this value based on user information that is provided during installation. You must use forward slashes \(/\) to delimit elements in the path.

    -   **Default value**

        @was.user.root@

    -   **Examples**

        AIX: /usr/WebSphere/wp\_profile

        HP-UX: /opt/WebSphere/wp\_profile

        IBM i: /QIBM/UserData/WebSphere/AppServer/V8/ND/profiles/wp\_profile

        Linux: /opt/WebSphere/wp\_profile

        Solaris: /opt/WebSphere/wp\_profile

        Windows: c:/WebSphere/wp\_profile

-   **CellName**

    -   **Description**

        The name of the WebSphere Application Server cell where the application server is located.

    -   **Default value**

        @CellName@

    -   **Examples**

        None available

-   **NodeName**

    -   **Description**

        The node within the WebSphere Application Server cell where the WebSphere Application Server is located. This value must be unique among other node names in the same cell. Typically this value is the same as the host name for the computer.

    -   **Default value**

        @NodeName@

    -   **Examples**

        None available

-   **ServerName**

    -   **Description**

        The name of the application server where the HCL Portal application is deployed. This value must be unique among other application server names in the same cell.

    -   **Default value**

        WebSphere\_Portal

    -   **Examples**

        None available

-   **WasAdminServer**

    -   **Description**

        The name of the application server for administration. For IBM i, if your WebSphere Application Server profile was created with a different WebSphere Application Server administrative server name, you should change this value to reflect that.

    -   **Default value**

        server1

    -   **Examples**

        : server1

-   **LTPAPassword**

    -   **Description**

        This value specifies the password to encrypt and decrypt the LTPA keys.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **wasJvmBitType**

    -   **Description**

        This value is a Solaris specific property that specifies whether to use the 64 bit or 32 bit JVM.

    -   **Default value**

        sparc32

    -   **Examples**

        32bit JVM: sparc32, x86, or ia32

        64 bit JVM: sparc64 or x64


### 2.2. HCL Portal configuration properties

Provide basic information about HCL Portal, such as installation directory, ports numbers, user IDs and passwords, and more.

-   **WpsInstallLocation**

    -   **Description**

        The directory where HCL Portal is installed. You must use forward slashes \(/\) to delimit elements in the path.

    -   **Default value**

        /usr/IBM/WebSphere/PortalServer

        /opt/IBM/WebSphere/PortalServer

        /QIBM/ProdData/WebSphere/PortalServer/V85/Server

        /QIBM/ProdData/WebSphere/PortalServer/V85/Express

        /opt/IBM/WebSphere/PortalServer

        /opt/IBM/WebSphere/PortalServer

        c:/IBM/WebSphere/PortalServer

        Otherwise: c:/IBM/WebSphere/Portal

    -   **Examples**

        AIX: /usr/IBM/WebSphere/PortalServer

        IBM i \(Server, Enable, or Extend offerings\): /QIBM/ProdData/WebSphere/PortalServer/V85/Server

        IBM i \(Express offering\): /QIBM/ProdData/WebSphere/PortalServer/V85/Express

        Linux: /opt/IBM/WebSphere/PortalServer

        Solaris: /opt/IBM/WebSphere/PortalServer

        Windows: c:/IBM/WebSphere/PortalServer

-   **WpsHostName**

    -   **Description**

        The fully qualified HCL Portal host name. This value is set by the installation program based on user input during installation.

    -   **Default value**

        localhost

    -   **Examples**

        :

-   **WpsHostPort**

    -   **Description**

        The transport port number used to access the host machine identified by the WpsHostName property.

    -   **Default value**

        80

    -   **Examples**

        The port is 80:

-   **PortalAdminId**

    -   **Description**

        This ID is the short name for the initial HCL Portal administrator user account. This name is used to create a full Distinguished Name \(DN\), which is used to create an account in the VMM file-based repository. If the ID includes spaces, then you must take extra steps to enter it on the command line by using the -D parameter.

        \(UNIX only\)For command line tasks, if you provide the ID by using the -D parameter, some tasks require that you enter the fully qualified user DN. If your fully qualified user DN contains a space, you cannot provide the DN using the -D parameter. For example, if your DN is `cn=wpsadmin,cn=users,o=Software Group,dc=yourco,dc=com,` then you must place the DN in the properties file or a parent properties file. If you create a parent properties file named mysecurity.properties, they you would run the following command: ./ConfigEngine.sh task\_name -DparentProperties=/opt/mysecurity.properties.

        \(Windows only\)For command prompt tasks, if you provide the ID by using the -D parameter, some tasks require that you enter the fully qualified DN. If your fully qualified user DN contains a space, then you must place quotations around the fully qualified user DN in the command. An example of a DN with spaces is: `cn=wpsadmin,cn=users,o=Software Group,dc=yourco,dc=com,` An example of the DN provided using the -D parameter is: ConfigEngine.bat task\_name -DuserID="cn=wpsadmin,cn=users,o=Software Group,dc=yourco,dc=com"

        A valid user ID contains only ASCII characters and can contain the following characters:

        -   Lowercase characters \{a-z\} and uppercase characters \{A-Z\}
        -   Numbers \{0-9\}
        -   Exclamation point \{!\}, Hyphen \{-\}, period \{.\}, question mark \{?\}, accent grave \{\`\}, tilde \{~\} Open parenthesis \{\(\}, and
        -   close parenthesis \{\)\}
        -   Open bracket \{\[\} and close bracket \{\]\}
        -   Underscore \{\_\}, which is the only special character that is allowed in IBM i
    -   **Default value**

        wpsadmin

    -   **Examples**

        None available

-   **PortalAdminPwd**

    -   **Description**

        The initial password for the HCL Portal administrator ID. The password cannot contain spaces. The password cannot be longer than 128 characters.

        A valid password contains only ASCII characters and can contain the following characters:

        -   Lowercase characters \{a-z\} and uppercase characters \{A-Z\}
        -   Numbers \{0-9\}
        -   Exclamation point \{!\}, Hyphen \{-\}, period \{.\}, question mark \{?\}, accent grave \{\`\}, tilde \{~\} Open parenthesis \{\(\}, and
        -   close parenthesis \{\)\}
        -   Open bracket \{\[\} and close bracket \{\]\}
        -   Underscore \{\_\}, which is the only special character that is allowed in IBM i
    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **PortalAdminGroupId**

    -   **Description**

        The fully qualified Distinguished Name \(DN\) for the HCL Portal Administrator group. Type the value in lowercase, regardless of the case that is used in the DN.

    -   **Default value**

        wpsadmins

    -   **Examples**

        Windows Active Directory: cn=,cn=groups,dc=yourco,dc=com

        Windows Active Directory-Lightweight-Directory-Services: cn=,cn=groups,dc=yourco,dc=com

        Custom user registry: cn=wpsadmins,o=default organization

        IBM Tivoli Directory Server: cn=,cn=groups,dc=yourco,dc=com

        HCL Domino: cn=

        Oracle Directory Server: cn=,ou=groups,o=yourco.com

        Novell eDirectory: cn=,ou=groups,o=yourco.com

        Development configuration without security: wpsadmins

-   **PortalUniqueID**

    -   **Description**

        The value is used for the object ID creation mechanism and must be different for each node. The ID is 12 hex digits that are unique to this HCL Portal instance. It is usually a MAC address from a communications adapter on this node. Only nodes that run in one server can have the same PortalUniqeID.

    -   **Default value**

        00054E48AA0C

    -   **Examples**

        None available

-   **WpsContextRoot**

    -   **Description**

        The value of this property is part of the URL that is used to access HCL Portal from a browser. Valid characters are alphabetic and numeric including underscore, forward slash, and dash. The value entered may contain forward slashes but may not start with a forward slash. Leave the Context root and Default home fields blank to remove the context root information. Or, modify the fields by adding a new context root and default home. Example URL if the context root is wps: `http://localhost:80/wps/portal`

    -   **Default value**

        wps

    -   **Examples**

        Context root: : wps

-   **WpsHostBasePort**

    -   **Description**

        Required for IBM i only. Specify the port block to use for HCL Portal Server.

    -   **Default value**

        10000

    -   **Examples**

        None available

-   **SMFLibrary**

    -   **Description**

        Required for z/OS only. The library where the ifaedjreg.jar file resides

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **SMFNativeLibrary**

    -   **Description**

        Required for z/OS only. The library where the SMF DLLs reside.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **ServerShortName**

    -   **Description**

        Required for z/OS only. The server's jobname, as specified in the MVS START command JOBNAME parameter. JOBNAME is the name of the task or script that runs when the server is running. MVS \(Multiple Virtual Storage\) is the name of the operating system that runs on the mainframe. The value is passed as a parameter to the server's start procedures to specify the location of the server's configuration files and identify the server to certain WebSphere for z/OS- exploited z/OS facilities \(for example, SAF\). The name must be seven or fewer characters and all uppercase.

    -   **Default value**

        BBOS002

    -   **Examples**

        : SAF

-   **ClusterTransitionName**

    -   **Description**

        Required for z/OS only. The cluster transition name of the WLM APPLENV \(WLM application environment\) name for this server. The name must be eight or fewer characters and all uppercase.

    -   **Default value**

        BBOC002

    -   **Examples**

        None available

-   **WpsSMPEHomeDirectory**

    -   **Description**

        Required for z/OS only. The location of the SMP/E installation image for the HCL Portal SMP/E package.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **TransferDomainList**

    -   **Description**

        Required for database transfer The list of database 'domains' that will be transferred by the database-transfer process. This value should not be altered unless you want to include or exclude specific domains from the transfer process. If you need to enter multiple values, use a comma to separate each value, for example "value1,value2".

    -   **Valid values**

        release

        community

        customization

        jcr

        feedback

        likeminds

    -   **Default value**

        release,community,customization,jcr,feedback,likeminds

    -   **Examples**

        None available


## HCL Portal cluster properties

The following properties are used if you have a clustered environment.

-   **ClusterName**

    -   **Description**

        Type a name for your cluster. Do not use spaces or special characters in the cluster name.

    -   **Default value**

        PortalCluster

    -   **Examples**

        None available

-   **PushFrequency**

    -   **Description**

        Specify the time, in seconds, to wait before pushing new or modified cache entries to other servers. Enter a value of 1 or greater.

    -   **Default value**

        1

    -   **Examples**

        None available

-   **ReplicationType**

    -   **Description**

        Set the global sharing policy for this application server. Type NONE if you do not want to share cache among different application servers. Only invalidation events are shared among servers in the replication domain. NONE is the equivalent of NOT\_SHARED in the WebSphere Application Server Integrated Solutions Console.

        Type PUSH to share cache. Cache insertions, both the cache ID and the content, are distributed to other nodes in the cluster as they are inserted into the cache on any node.

        Type PUSH\_PULL to share the cache ID but not the cache content. Cache content is pulled by other servers as needed.

    -   **Valid values**

        NONE

        PUSH

        PUSH\_PULL

    -   **Default value**

        NONE

    -   **Examples**

        None available

-   **PrimaryNode**

    -   **Description**

        Set the value to true if you are on the primary node and to run tasks on the primary node. Set the value to false if you are on a secondary node and to run tasks on secondary nodes.

    -   **Valid values**

        true

        false

    -   **Default value**

        true

    -   **Examples**

        None available


## Step-up authentication properties

Step-up authentication allows for different types of authentication, with different trust levels or "strength of authentication". Different pages and portlets can be configured to require different trust levels in order to access those pages and portlets.

-   **sua\_user**

    -   **Description**

        The key that is used to encrypt the Cookie information. The value does not need to match to a real user.

    -   **Default value**

        No default value

    -   **Examples**

        : myname

-   **sua\_serversecret\_password**

    -   **Description**

        The encryption key for the information used in the RememberMe cookie, which is part of the step-up authentication. This does not need to be an existing password. For example, you can use mypassword as the value.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **enable\_rememberme**

    -   **Description**

        This value defines if the Remember me cookie should be enabled when the enable-stepup-authentication task is run.

    -   **Valid values**

        true

        false

    -   **Default value**

        true

    -   **Examples**

        None available

-   **disable\_rememberme**

    -   **Description**

        This value defines if the Remember me cookie should be disabled when the disable-stepup-authentication task is run.

    -   **Valid values**

        true

        false

    -   **Default value**

        true

    -   **Examples**

        None available


## Virtual portal configuration properties

Configuration tasks that use the virtual portal configuration properties include: create-virtual-portal, delete-virtual-portal, modify-virtual-portal, list-all-virtual-portals

-   **VirtualPortalTitle**

    -   **Description**

        If you are creating a virtual portal, enter the name of the new virtual portal. If you are deleting or modifying a virtual portal, enter the name of virtual portal to delete or modify.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **VirtualPortalRealm**

    -   **Description**

        Type the realm to use for the virtual portal that you defined for the VirtualPortalTitle property.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **VirtualPortalHostName**

    -   **Description**

        Type the DNS of the virtual portal. The virtual portal can be referenced by the DNS name instead of the URL prefix. When the value is left blank, a virtual portal uses the common DNS name for all portals.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **VirtualPortalContext**

    -   **Description**

        Type the unique portal context that must be provided for the Virtual Portal. If you set the host name parameter \(VirtualPortalHostName\), the portal context is ignored. A virtual portal can either be accessed by a DNS/Host name or a URL prefix. When both a DNS/Host name and URL prefix are provided, the DNS/Host name is used for VirtualPortalContext.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **VirtualPortalNlsFile**

    -   **Description**

        Optional: Create a globalization file to specify titles and descriptions in other languages for your virtual portal. If you do not specify a globalization file, the system creates the virtual portal with the title that you specified for the VirtualPortalTitle parameter. Titles and descriptions are not created for other languages. Type the path and filename of an NLS file which contains language specific information for the Virtual Portal.

        The virtual portal title that is defined in the in the national language support \(NLS\) file, also called globalization file, overrides the value that you provide for the VirtualPortalTitle property. If you want to create a description for the virtual portal, you must specify it in the globalization file.

        If you want to modify the title or description of the Virtual Portal, you have to add the new title and description to the globalization file.

        Do not use prefixes in that globalization file.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **VirtualPortalObjectId**

    -   **Description**

        The object ID of the virtual portal. The object ID is required to modify and delete virtual portals. To determine object ID, run the following task: list-all-virtual-portals. Do not delete the default virtual portal. The object ID for the default Virtual Portal ends with \_0.

    -   **Default value**

        No default value

    -   **Examples**

        None available


## General security properties

-   **ignoreDuplicateIDs**

    -   **Description**

        Set this value to true to recover from an incomplete LDAP repository creation if the repository cannot be deleted.

    -   **Valid values**

        true

        false

    -   **Default value**

        false

    -   **Examples**

        None available

-   **trimSpaces**

    -   **Description**

        Set this value to false and add the attribute to the security ANT target in order to contain trailing spaces of attributes defined in this file. Set the value to true and the system will remove spaces in any of the values you have specified.

    -   **Valid values**

        true

        false

    -   **Default value**

        true

    -   **Examples**

        None available


## Federated security properties

### 7.1. Add or update an LDAP

Use the properties in this section to create \(wp-create-ldap\) or update \(wp-update-federated-ldap\) the LDAP configuration in virtual member manager \(VMM\). If you are updating the LDAP configuration, the federated.ldap.id and federated.ldap.host must match the repository that you want to update.

-   **federated.ldap.id**

    -   **Description**

        Specify a unique identifier for the repository within the cell. For the task wp-create-ldap, the ID can be an arbitrary string to name the new repository definition. For the task wp-update-federated-ldap, the ID must be the ID of the existing repository definition that you want to update.

        Characters that are not allowed in normal XML strings cannot be used in the repository ID. The ID can contain only the following characters: Alphanumeric \(a-z, A-Z, 0-9\), dash \(-\), and underscore \(\_\). It cannot start or end with a dash \(-\) or an underscore \(\_\), and must be a minimum of 3 characters and a maximum of 36 characters in length.

    -   **Default value**

        No default value

    -   **Examples**

        : myldapid

-   **federated.ldap.host**

    -   **Description**

        Specify the host name of the primary LDAP server. Type either an IP address or a domain name service \(DNS\) name. If multiple load-balanced LDAP servers are in use, enter the host name of the load balancer. During an update, the value of federated.ldap.host must match the LDAP host name of the existing repository that is named by the federated.ldap.id property NOTE: It is not possible to use the wp-update-federated-ldap task to change the host name of an existing LDAP repository definition. To do that, you must delete the old repository definition and add a repository definition by running the wp-create-ldap task again.

    -   **Default value**

        No default value

    -   **Examples**

        : ..com

-   **federated.ldap.port**

    -   **Description**

        Type the LDAP server port. Typically, port values for the LDAP protocol are 389 for non-encrypted traffic, and 636 for encrypted traffic.

    -   **Default value**

        federated.ldap.sslEnabled=false: 389

        federated.ldap.sslEnabled=true: 636

        Otherwise: 389

    -   **Examples**

        None available

-   **federated.ldap.bindDN**

    -   **Description**
    -   **Default value**

        No default value

    -   **Examples**

        Windows Active Directory: cn=administrator,cn=users,dc=domain,dc=yourco,dc=com

        Windows Active Directory-Lightweight-Directory-Services: cn=administrator,cn=users,dc=domain,dc=yourco,dc=com

        Custom: cn=user,dc=yourco,dc=com or uid=user,dc=yourco,dc=com

        IBM Tivoli Directory Server: cn=root

        Domino LDAP: cn=username

        Oracle Directory Server: cn=Directory Manager

        Novell eDirectory: cn=administrator,ou=yourorganization,o=yourco

        IBM Directory Server: uid=wpsadmin,cn=users,dc=yourco,dc=com

-   **federated.ldap.bindPassword**

    -   **Description**

        Type the password for the federated.ldap.bindDN user account.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **federated.ldap.ldapServerType**

    -   **Description**

        Type the value for the LDAP server to integrate with.

    -   **Valid values**

        AD

        ADAM

        CUSTOM

        DOMINO

        IDS6

        ZOSDS

        NDS

        SUNONE

    -   **Default value**

        IDS6

    -   **Examples**

        Microsoft Active Directory: AD

        Microsoft Active Directory - Lightweight Directory Services: ADAM

        Custom: CUSTOM

        HCL Domino: DOMINO

        IBM Tivoli Directory Server: IDS6

        IBM Tivoli Directory Server for z/OS: ZOSDS

        Novell eDirectory: NDS

        Oracle Directory Server or SunOne: SUNONE

-   **federated.ldap.baseDN**

    -   **Description**

        Specify the point in the LDAP directory information tree \(DIT\) that serves as the "root" of the portal server's view. HCL Portal has visibility only of users and groups that are descendant's of this point in the DIT.

    -   **Default value**

        No default value

    -   **Examples**

        : dc=yourco,dc=com


### 7.1.1. Group and PersonAccount entity types

This section contains properties that tell VMM and Portal about the objectclasses and other LDAP attributes of the entity types. The supported entity types for Portal are Group and PersonAccount. VMM supports additional entity types, but Portal does not make use of them. The properties that are important for the 2 entity types are:

-   Group entity type:
    -   default objectClasses = groupOfNames
    -   default objectClassesForCreate = groupOfNames
    -   default searchFilter =<empty\>
    -   default searchBases = <empty\>
-   PersonAccount entity type:
    -   default objectClasses = inetOrgPerson
    -   default objectClassesForCreate = inetOrgPerson
    -   default searchFilter = <empty\>
    -   default searchBases = <empty\>

### 7.1.2. LDAP properties for Group member attributes

Provide information used to add or update your federated LDAP Group entity type.

-   **federated.ldap.et.group.objectClasses**

    -   **Description**

        Specify one or more object classes for the group entity type. Separate multiple object classes with a semicolon\(;\). Use object classes that are unique to groups only. If there are both users and groups with an objectclass of 'top', then you cannot use the object class 'top' here.

    -   **Default value**

        federated.ldap.ldapServerType=IDS6: groupOfUniqueNames

        federated.ldap.ldapServerType=AD: group

        federated.ldap.ldapServerType=ADAM: group

        federated.ldap.ldapServerType=DOMINO: dominoGroup

        federated.ldap.ldapServerType=SUNONE: groupOfUniqueNames

        federated.ldap.ldapServerType=SUNONE: groupOfUniqueNames

        federated.ldap.ldapServerType=NDS: groupOfNames

        Otherwise: groupOfUniqueNames

    -   **Examples**

        IBM Tivoli Directory Server: groupOfUniqueNames

        Microsoft Active Directory: group

        Microsoft Active Directory - Lightweight Directory Services: group

        HCL Domino: dominoGroup

        Oracle Directory Server: groupOfUniqueNames

        SunOne: groupOfUniqueNames

        Novell eDirectory: groupOfNames

-   **federated.ldap.et.group.objectClassesForCreate**

    -   **Description**

        Type one or more object classes to use when an entity type is created. Separate multiple object classes with a semicolon\(;\). If the value of this property is the same as the federated.ldap.et.group.objectClasses property, then you do not need to type a value for this property. If your LDAP is read-only, meaning portal is not allowed to write to it, then you do not need to type a value for this property.

        Type one or more object classes to use when an entity type is created. Separate multiple object classes with a semicolon\(;\).

        If the value of this field is the same as the **LDAP group objectclasses**, then leave this field empty.

        If your LDAP is read-only, meaning portal is not allowed to write to it, then leave this field empty.

    -   **Default value**

        No default value

    -   **Examples**

        \(Multiple group objectClasses\): groupOfUniqueNames;myPortalObjectClass

-   **federated.ldap.et.group.searchFilter**

    -   **Description**

        VMM uses this filter during search requests for groups to your LDAP Server. Leave this property value blank, unless your LDAP group definitions are unusually complex. If the property value is blank, VMM dynamically formulates the filter that is based on the directory type and the objectclasses set for the entity type.

        For example, if the objectclass of the group entity is "groupOfUniqueNames" and the naming attribute for a group is "cn", then the default filter would be: `(&(cn=*)(objectClass=groupOfUniqueNames))`

        If you do need to specify the search filter for VMM to use to search for groups, the syntax is like a standard LDAP search filter.

    -   **Default value**

        No default value

    -   **Examples**

        : \(&\(cn=\*\)\(objectClass=myCustomGroupObjectClass\)\)

-   **federated.ldap.et.group.searchBases**

    -   **Description**

        VMM performs a search operation for each search base that you enter, which affects performance. Minimize the number of search bases. Leave the value blank and VMM uses the baseEntries as the search bases that are configured for this repository. Specify one or more search bases if you need to limit where VMM searches for groups to the portion of the subtree below the baseEntries. For example, if the baseEntries are high up in the LDAP tree and a search returns results that should not be included. Separate multiple search bases with a semicolon \(;\).

        If you use the portal configuration tools, it is only possible to create one base entry as specified by the federated.ldap.baseDN property. However, WebSphere Application Server allows multiple base entries per repository definition.

        For multiple virtual portal environment, the realm definition of the virtual portal overwrites the searchBase for the objectType. To ensure that virtual portals without realm assignments remain functional, keep the search base in sync with the nodes where you want the search to start.

    -   **Default value**

        No default value

    -   **Examples**

        Multiple group search bases: "cn=groups1,dc=yourco,dc=com;cn=groups2,dc=yourco,dc=com"

-   **federated.ldap.et.personaccount.objectClasses**

    -   **Description**

        Type one or more object classes for the entity type. Use object classes that are unique to users. If there are both users and groups with an objectclass of 'top', then you cannot use the object class 'top' here. Separate multiple object classes with a semicolon \(;\).

    -   **Default value**

        federated.ldap.ldapServerType=IDS6: inetOrgPerson

        federated.ldap.ldapServerType=AD: user

        federated.ldap.ldapServerType=ADAM: user

        federated.ldap.ldapServerType=DOMINO: dominoPerson

        federated.ldap.ldapServerType=SUNONE: inetOrgPerson

        federated.ldap.ldapServerType=SUNONE: inetOrgPerson

        federated.ldap.ldapServerType=NDS: inetOrgPerson

        Otherwise: inetorgperson

    -   **Examples**

        IBM Tivoli Directory Server: inetOrgPerson

        Microsoft Active Directory: user

        Microsoft Active Directory - Lightweight Directory Services: user

        HCL Domino: dominoPerson

        Oracle Directory Server: inetOrgPerson

        SunOne: inetOrgPerson

        Novell eDirectory: inetOrgPerson

-   **federated.ldap.et.personaccount.objectClassesForCreate**

    -   **Description**

        Specify one or more object classes to use when an entity type is created. If the value of this property is the same as the federated.ldap.et.personaccount.objectClasses property, leave this value blank. If your LDAP is read-only, meaning portal is not allowed to it, leave this value blank. Separate multiple object classes with a semicolon\(;\).

    -   **Default value**

        No default value

    -   **Examples**

        Multiple PersonAccount objectClasses: inetOrgPerson;myPortalObjectClass

-   **federated.ldap.et.personaccount.searchFilter**

    -   **Description**

        VMM uses this filter during search requests for groups to your LDAP Server. Leave this property value blank, unless your LDAP group definitions are unusually complex. If the property value is blank, VMM dynamically formulates the filter that is based on the directory type and the objectclasses set for the entity type.

        For example, if the objectclass of the PersonAccount entity is "inetOrgPerson" and the naming attribute for a user is "uid" then the default filter would be: `(&(uid=*)(objectClass=inetOrgPerson))`

        If you do need to specify the search filter for VMM to use to search for groups, the syntax is like a standard LDAP search filter.

    -   **Default value**

        No default value

    -   **Examples**

        : \(&\(cn=\*\)\(objectClass=myCustomPersonAccountObjectClass\)\)

-   **federated.ldap.et.personaccount.searchBases**

    -   **Description**

        VMM performs a search operation for each search base that you enter, which affects performance. Minimize the number of search bases. Leave the value blank and VMM uses the baseEntries as the search bases that are configured for this repository. Specify one or more search bases if you need to limit where VMM searches for groups to the portion of the subtree below the baseEntries. For example, if the baseEntries are high up in the LDAP tree and a search returns results that should not be included. Separate multiple search bases with a semicolon \(;\).

        If you use the portal configuration tools, it is only possible to create one base entry as specified by the federated.ldap.baseDN property. However, WebSphere Application Server allows multiple base entries per repository definition.

        For multiple virtual portal environment, the realm definition of the virtual portal overwrites the searchBase for the objectType. To ensure that virtual portals without realm assignments remain functional, keep the search base in sync with the nodes where you want the search to start.

    -   **Default value**

        No default value

    -   **Examples**

        Multiple PersonAccount search bases: "cn=users1,dc=yourco,dc=com;cn=users2,dc=yourco,dc=com"

-   **federated.ldap.gm.groupMemberName**

    -   **Description**

        Type the LDAP attribute that is used as the group member attribute. This is the attribute within the group object that lists the members of that group.

    -   **Default value**

        federated.ldap.ldapServerType=AD: member

        federated.ldap.ldapServerType=ADAM: member

        Otherwise: uniqueMember

    -   **Examples**

        For groups of objectclass groupOfUniqueNames: uniqueMember

        For groups of objectclass groupOfNames: member

-   **federated.ldap.gm.objectClass**

    -   **Description**

        Type the group object class that contains the member attribute. If you do not enter a group object class, the member attribute applies to all group object classes.

    -   **Default value**

        federated.ldap.ldapServerType=AD: group

        federated.ldap.ldapServerType=ADAM: group

        Otherwise: groupOfUniqueNames

    -   **Examples**

        : groupOfNames

        : groupOfUniqueNames

        : group

-   **federated.ldap.gm.scope**

    -   **Description**

        Set the scope of the member attribute. This is similar to the scope setting for the membership attribute \(which is the attribute on the user object that tells what groups the user is a member of\), but in this case it tells VMM about the scope of the member record in the group object that tells what users are members of the group. Set the value to direct if the LDAP member attribute in your LDAP server's group objects contains direct members only. Set the value to nested if the LDAP member attribute in your LDAP server's group objects contains direct members and nested members. Note: It is very unusual for this to be anything other than "direct".

    -   **Valid values**

        direct

        nested

    -   **Default value**

        direct

    -   **Examples**

        None available

-   **federated.ldap.gm.dummyMember**

    -   **Description**

        Many directory servers do not allow the creation of an empty group, meaning a group with no members. A dummy member enables group creation without requiring the creator to specify the first group member at the same time. When a group is created, a dummy member is created to satisfy the directory requirement. For Novell eDirectory, Oracle Directory Server, and Windows Active Directory the dummy member must be empty or point to an existing entry in the LDAP.

    -   **Default value**

        federated.ldap.ldapServerType=AD:

        federated.ldap.ldapServerType=ADAM:

        federated.ldap.ldapServerType=SUNONE:

        federated.ldap.ldapServerType=NDS:

        Otherwise: uid=dummy

    -   **Examples**

        None available


### 7.1.3. Advanced properties for Group configuration

Provide information that is used to add or update your federated LDAP user registry. The properties in this section are not always needed, depending on how your LDAP user registry is set up and your particular use cases. The federated.ldap.gc.name, federated.ldap.gc.updateGroupMembership, and federated.ldap.gc.scope properties can be set before you run the wp-create-ldap task initially. Or, the group configuration can be added to an existing registry instance by setting the gc.ldap.id, gc.name, gc.scope, and gc.updateGroupMembership properties and running the wp-create-ldap-groupconfig task.

-   **federated.ldap.gc.name**

    -   **Description**

        A membership attribute is an alternative way of getting group membership information from the LDAP user registry. Leave the field empty if your LDAP does not support the group membership attribute.

        Type the LDAP name of an attribute or virtual attribute in a user object that lists the groups of which that user is a member.

        A membership attribute is an attribute within the user object that contains the list of groups that the user is a member of. Many LDAP registries support the group memebership attribute. Also, each user registry implements the group membership attribute differently.

        In some cases, the membership attribute is not persisted with the user record. Instead, it is calculated on demand.

        In some cases, the membership attribute includes all groups, such as nested groups, dynamic groups, and static groups. If your LDAP implementation includes all groups memberships, then it is more efficient to use a membership attribute instead of manually requesting the information from a client. For more information about when to use the attribute, see the federated.ldap.gc.scope property.

        You do not need to use nested or dynamic groups to use a membership attribute. If your directory uses only non-nested, static group memberships, use the standard group membership query method.

    -   **Default value**

        federated.ldap.ldapServerType=IDS6: ibm-allGroups

        federated.ldap.ldapServerType=AD: memberOf

        federated.ldap.ldapServerType=ADAM: memberOf

        federated.ldap.ldapServerType=DOMINO: dominoAccessGroups

        federated.ldap.ldapServerType=SUNONE: isMemberOf

        federated.ldap.ldapServerType=NDS: groupMembership

        federated.ldap.ldapServerType=ZOSDS: ibm-allGroups

    -   **Examples**

        IBM Tivoli Directory Server: ibm-allGroups

        Microsoft Active Directory: memberOf

        Microsoft Active Directory - Lightweight Directory Services: memberOf

        HCL Domino: dominoAccessGroups

        Oracle Directory Server: isMemberOf

        SunOne \(versions prior to 6.3\): nsrole

        Novell eDirectory: groupMembership

-   **federated.ldap.gc.updateGroupMembership**

    -   **Description**

        Updates the group membership if the member is deleted or renamed. Some LDAP servers, such as HCL Domino, do not clean up the membership of the user when a user is deleted or renamed. If you choose an LDAP server that does not clean up memberships, then the value of this property is set to true to enable membership cleanup.

    -   **Valid values**

        true

        false

    -   **Default value**

        false

    -   **Examples**

        None available

-   **federated.ldap.gc.scope**

    -   **Description**

        This property tells VMM how much information the LDAP server returns when portal requests the group membership attribute value for a user object.

        Set the value to all if the membership attribute contains a complete list of all possible group memberships for a user, already including consideration for group nesting, dynamic memberships, and static direct group memberships.

        Set the value to direct if the membership attribute contains only direct static group memberships, but not dynamic or nested group memberships.

        Set the value to nested if the membership attribute contains both direct static memberships and memberships from groups that are nested within other groups. Dynamic group memberships are not included. You can configure VMM to additionally resolve dynamic group memberships. To configure dynamic group support, you must use the Integrated Solutions Console.

        The Virtual Member Manager \(VMM\) component within WebSphere Application Server uses this setting to determine what it needs to do to build a sufficiently complete list of group memberships for a user. Setting this parameter to accurately reflect your LDAP registry is important for both performance and correct operation. If your LDAP provides a complete set of group memberships, including nested groups, dynamic groups, and static direct groups, set the scope attribute to all. Otherwise, VMM redundantly resolves the nested group memberships.

        Conversely, if your registry provides only direct group memberships, but group nesting is used in your application and directory, then set the scope property to direct. Otherwise, VMM fails to do the required work that is needed to complete the group membership list. As a result the full set of groups necessary for the application to operate correctly is not available.

        Portal asks VMM to retrieve nested group membership information from the LDAP registry. If your security policy and LDAP registry are not set up to use nested groups, then set accessControlDataManagement.enableNestedGroups to false in the Access Control Data Management Service.

    -   **Valid values**

        all

        direct

        nested

    -   **Default value**

        direct

    -   **Examples**

        None available

-   **federated.ldap.adapterClassName**

    -   **Description**

        The implementation class name for the repository adapter.

    -   **Default value**

        com.ibm.ws.wim.adapter.ldap.LdapAdapter

    -   **Examples**

        None available

-   **federated.ldap.supportSorting**

    -   **Description**

        This value indicates if sorting is supported or not.

    -   **Valid values**

        true

        false

    -   **Default value**

        false

    -   **Examples**

        None available

-   **federated.ldap.supportTransactions**

    -   **Description**

        This value indicates if transactions are supported or not.

    -   **Valid values**

        true

        false

    -   **Default value**

        false

    -   **Examples**

        None available

-   **federated.ldap.isExtIdUnique**

    -   **Description**

        Specify if the external ID is unique.

    -   **Valid values**

        true

        false

    -   **Default value**

        true

    -   **Examples**

        None available

-   **federated.ldap.supportExternalName**

    -   **Description**

        Specifies if external names are supported or not.

    -   **Valid values**

        true

        false

    -   **Default value**

        false

    -   **Examples**

        None available

-   **federated.ldap.sslEnabled**

    -   **Description**

        Specify whether secure socket communication is enabled to the LDAP server. If you set the value to true, SSL settings for LDAP are used.

    -   **Valid values**

        true

        false

    -   **Default value**

        false

    -   **Examples**

        None available

-   **federated.ldap.sslConfiguration**

    -   **Description**

        If you choose to use SSL for your LDAP server connection, you can use this field to specify a WebSphere Application Server security configuration other than the default, for the encryption setup. To find SSL configuration names open the Integrated Solutions Console and go to Security-\>SSL certificate and key management, and under Related Items, select SSL configurations. If you leave the value blank, then the default SSL configuration set in WebSphere Application Server is used.

    -   **Default value**

        No default value

    -   **Examples**

        : mySSLconfig

-   **federated.ldap.certificateMapMode**

    -   **Description**

        Specify the certificate map mode to use if client certificate authentication is used for HCL Portal. Select whether to map X.509 certificates into an LDAP directory by exact DN or certificate filter. If you set the value as CERTIFICATE\_FILTER, then you must also specify the filter mapping in the federated.ldap.certificateFilter property. If you select EXACT\_DN, then the DN in the certificate must exactly match the user entry in the LDAP server, including case and spaces.

    -   **Valid values**

        EXACT\_DN

        CERTIFICATE\_FILTER

    -   **Default value**

        EXACT\_DN

    -   **Examples**

        None available

-   **federated.ldap.certificateFilter**

    -   **Description**

        Specifies the filter certificate mapping property for the LDAP filter if client certificate authentication is used for HCL Portal. The filter is used to map attributes in the client certificate to entries within the LDAP repository. To use this filter, the value for federated.ldap.certificateMapMode must be set to CERTIFICATE\_FILTER. Filter syntax: $\{Client certificate attribute\}

    -   **Default value**

        No default value

    -   **Examples**

        : uid=$\{SubjectCN\}

-   **federated.ldap.supportPaging**

    -   **Description**

        This value indicates if paging is supported or not.

    -   **Valid values**

        true

        false

    -   **Default value**

        false

    -   **Examples**

        None available

-   **federated.ldap.authentication**

    -   **Description**

        Select the authentication method to use. This corresponds to the "bind method" used by VMM to validate the password for a user during log in. NOTE: VMM currently only supports the Simple method.

    -   **Default value**

        simple

    -   **Examples**

        None available

-   **federated.ldap.loginProperties**

    -   **Description**

        The property name that is used to log in. Usually the login property is the first RDN of the user object DN, such as "uid" or "cn". However, it is possible to log in with some other LDAP attribute. For example, it is possible use an email address to log in, even if the email address is not part of the DN of the user. The only requirement is that any property used here is defined in the PersonAccount entity schema, and if necessary, is mapped to the corresponding underlying LDAP server attribute. It is possible to specify multiple login attributes by delimiting the entries with a semi-colon, for example "uid;mail". When you specify multiple properties, users can log in using any of the listed attributes.

    -   **Default value**

        uid

    -   **Examples**

        Common Name: : cn

        Unique ID: : uid

-   **federated.ldap.referral**

    -   **Description**

        A referral occurs when the information requested from your LDAP server is stored in another LDAP server. When a referral occurs, you can select to ignore it or to retrieve the information from the other LDAP. Select **Follow** if the LDAP should attempt to retrieve the information.

    -   **Valid values**

        ignore

        follow

    -   **Default value**

        follow

    -   **Examples**

        None available

-   **federated.ldap.derefAliases**

    -   **Description**

        This value is required if "federated.ldap.referral=follow". An alias occurs when the information requested from your LDAP is stored in another LDAP. The returned value is an alias for the information that is stored in the other LDAP. You can select to retrieve the actual value, instead of the alias. Retrieval the actual value is referred to as dereferencing the alias. Select the dereferencing method that you would like to use.

        -   Set the value to never and the alias entries that are encountered during the search operation are processed as 'normal' entries. The alias entries are returned if they match the search filter.
        -   Set the value to always and the alias entries that are encountered during the search operation, in both the search base and entries within the scope of the search, are dereferenced.
        -   Set the value to finding and the LDAP dereference the search base entry but does not dereference any other alias entries within the search scope. Alias entries within the search scope of the dereferenced base are processed as 'normal' entries and are returned if they match the search filter.
        -   Set the value to searching and the LDAP dereferences alias entries within the scope of the search but does not dereference the search base entry \(if it contains an alias\). The search base is processed as a 'normal' entry \(even if it is an alias entry\). It is returned if it matches the search filter and is in the search scope.
    -   **Valid values**

        never

        always

        finding

        searching

    -   **Default value**

        always

    -   **Examples**

        None available

-   **federated.ldap.connectTimeout**

    -   **Description**

        The connection timeout measured in seconds.

    -   **Default value**

        0

    -   **Examples**

        None available

-   **federated.ldap.primaryServerQueryTimeInterval**

    -   **Description**

        The polling interval for testing the primary server availability. The value is specified in minutes.

    -   **Default value**

        15

    -   **Examples**

        None available

-   **federated.ldap.returnToPrimaryServer**

    -   **Description**

        Indicates to return to the primary LDAP server when it is available.

    -   **Valid values**

        true

        false

    -   **Default value**

        true

    -   **Examples**

        None available

-   **federated.ldap.searchPageSize**

    -   **Description**

        The search page size, which represents the number of entries per page.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **federated.ldap.searchCountLimit**

    -   **Description**

        The search count limit.

    -   **Default value**

        500

    -   **Examples**

        None available

-   **federated.ldap.searchTimeLimit**

    -   **Description**

        The search time limit measured in milliseconds.

    -   **Default value**

        120000

    -   **Examples**

        None available

-   **federated.ldap.translateRDN**

    -   **Description**

        This value indicates whether to translate RDN or not.

    -   **Valid values**

        true

        false

    -   **Default value**

        false

    -   **Examples**

        None available

-   **federated.ldap.cp.maxPoolSize**

    -   **Description**

        The maximum number of context instances that can be maintained concurrently by the context pool for this LDAP server by VMM. Specifying a value of 0 allows the pool to grow without bound. This is the only context pooling property that can be set by the initial LDAP repository setup ConfigEngine task \(wp-create-ldap\). See the Portal Tuning Guide for recommendations on setting on up context pooling in VMM under Portal. You can set other "cp.\*" properties and run the wp-update-ldap-contextpool task to completely configure VMM context pooling. VMM uses the maximum pool size per node in the cluster. Therefore the total number of connections that might be made to the LDAP server is the maximum context pool size value multiplied by the number of nodes in the cluster.

    -   **Default value**

        20

    -   **Examples**

        None available


### 7.2. Add or update database

The following properties are used for creating or updating a database user registry configuration. Database modification tasks of VMM need a connection to a running server instance. Your server must be running before you running the following tasks: `wp-create-db` or `wp-update-db`

-   **federated.db.DataSourceName**

    -   **Description**

        The name of the data source to be used for this VMM database domain. It must comply with the WebSphere Application Server requirements. You cannot use the reserved names releaseDS, communityDS, customizationDS, jcrDS, lmdbDS, and feedback. You can use the same name for all portal database domains that are sharing user ID, password, and JDBC database URL.

    -   **Default value**

        vmmfeddbDS

    -   **Examples**

        None available

-   **federated.db.DbType**

    -   **Description**

        Database management software to use for the VMM Federated database domain.

    -   **Valid values**

        derby

        db2

        db2\_iseries

        db2\_zos

        oracle

        sqlserver2005

    -   **Default value**

        db2

    -   **Examples**

        None available

-   **federated.db.DbUrl**

    -   **Description**

        The JDBC database URL to be used to connect with the database of this portal database domain. It must comply with your JDBC Driver software requirements. This property that is combined with the properties database name and schema name must be unique for the portal database domains release, community, customization, and JCR.

    -   **Default value**

        jdbc:db2:vmmfeddb

    -   **Examples**

        Apache Derby: jdbc:derby:wpsdb;create=true

        IBM DB2 with type 2 drivers: jdbc:db2:wpsdb

        IBM DB2 with type 4 drivers, Linux: jdbc:db2://:50001/wpsdb:returnAlias=0;

        IBM DB2 with type 4 drivers, Windows: jdbc:db2://:50000/wpsdb:returnAlias=0;

        IBM DB2 for i with type 2 drivers: jdbc:db2:\*LOCAL/wpsdb;metadata source=1

        IBM DB2 for i with type 4 drivers: jdbc:as400://wpsdb;metadata source=1

        Remote IBM DB2 for i with type 4 drivers: jdbc:as400://wpsdb;metadata source=1;prompt=false

        DB2 for z/OS: jdbc:db2:

        Remote DB2 for z/OS with type 2 drivers: jdbc:db2:wpsdb

        Remote DB2 for z/OS with type 4 drivers: jdbc:db2://:/

        Oracle Database with type 4 drivers and thin client: jdbc:oracle:thin:@//:1521/

        Oracle Database with type 2 drivers and thick client: jdbc:oracle:oci:@//:1521/

        Microsoft SQL Server: jdbc:sqlserver://:1433;SelectMethod=cursor;DatabaseName=wpsdb

-   **federated.db.DbName**

    -   **Description**

        The name of the database \(location name of the DB2 for z/OS subsystem\) to be used for this portal database domain. It must comply with your database management software requirements. This property that is combined with the properties schema name and JDBC database URL must be unique for the portal database domains release, community, customization, and JCR.

    -   **Default value**

        federated.db.DbType=db2: WPVMM

        federated.db.DbType=db2\_iseries:

        federated.db.DbType=db2\_zos:

        federated.db.DbType=oracle:

        federated.db.DbType=sqlserver2005: WPVMM

        Otherwise: vmmfeddb

    -   **Examples**

        Apache Derby: vmmfeddb

        IBM DB2: WPVMM

        IBM DB2 for i: /WPSDB

        DB2 for z/OS:

        Oracle Database: vmmfeddb

        Microsoft SQL Server: WPVMM

-   **federated.db.id**

    -   **Description**

        Specify a unique identifier for the repository within the cell. Characters that are not allowed in normal XML strings \( &amp; &lt; \> " ' \) cannot be used in the repository ID.

    -   **Default value**

        vmmDb

    -   **Examples**

        None available

-   **federated.db.baseDN**

    -   **Description**

        The database base entry. This is the start point where all DB entities will be stored under. Verify the uniqueness of this string.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **federated.db.DbUser**

    -   **Description**

        The database user ID used to configure the database objects of this federated database domain. It must comply with your database management software requirements. It is also used by the data source to connect with the database, unless you specify a runtime database user.

    -   **Default value**

        db2admin

    -   **Examples**

        None available

-   **federated.db.DbPassword**

    -   **Description**

        The password of the database user ID used to configure the database objects of the federated database domain. It must comply with your database management software requirements. It is also used by the data source to connect with the database, unless you specify a runtime database user.

    -   **Default value**

        No default value

    -   **Examples**

        None available


### 7.2.1. Advanced database properties

-   **federated.db.JdbcProviderName**

    -   **Description**

        The name of JDBC provider to be used for the VMM database user registry. Note that the la.JdbcProviderName can be the same as this value, or different. The la.JdbcProviderName is the JDBC provider for the property extension database. This federated.db.JdbcProviderName is the JDBC provider for the VMM database user registry. Both of these databases can be in the same database provider, or in different providers. If they are in the same database, then the same provider name can be used. If they are in different databases, then different appropriate JDBC provider names must be used.

    -   **Default value**

        vmmdbJDBC

    -   **Examples**

        None available

-   **federated.db.DbSchema**

    -   **Description**

        The name to be used to qualify database objects of this VMM database domain. It must comply with your database management software requirements. This property that is combined with the properties database name and JDBC database URL must be unique for the portal database domains release, community, customization, and JCR.

    -   **Default value**

        federate

    -   **Examples**

        None available

-   **federated.db.DbNameOnZos**

    -   **Description**

        The name of the database to be used for this portal database domain. It must comply with your database management software requirements.

    -   **Default value**

        WPSTST02

    -   **Examples**

        None available

-   **federated.db.XDbName**

    -   **Description**

        The database alias used to create the database for this portal database domain. It must comply with your database management software requirements. Required for IBM DB2 that runs on Linux and UNIX operating systems. Also required for IBM DB2 that runs on a Microsoft Windows operating system that uses type 2 JDBC drivers and is running on the same server as HCL Portal.

    -   **Default value**

        wps6TCP

    -   **Examples**

        Release, Community, Customization, VMM, and JCR: wps6TCP

        Feedback: fdbk6TCP

        LikeMinds: lmdb6TCP

-   **federated.db.DbNode**

    -   **Description**

        The name of the database node that is used to create the database for this portal database domain. It must comply with your database management software requirements. Required for IBM DB2 that run on Linux and UNIX operating systems.

    -   **Default value**

        wpsNode

    -   **Examples**

        Release, Community, Customization, JCR, and VMM: wpsNode

        Feedback and LikeMinds: pznNode

-   **federated.db.DbStorageGroup**

    -   **Description**

        The name of the DB2 for z/OS storage group to be used for this portal database domain.

    -   **Default value**

        WPSSG

    -   **Examples**

        None available

-   **federated.db.DbVolumes**

    -   **Description**

        Defines the volumes of the DB2 for z/OS storage group used for this portal database domain.

    -   **Default value**

        \*

    -   **Examples**

        None available

-   **federated.db.DbVcat**

    -   **Description**

        Identifies the integrated catalog facility catalog \(VCAT\) for the DB2 for z/OS storage group that is used for this portal database domain.

    -   **Default value**

        DSN910

    -   **Examples**

        None available

-   **federated.db.Db4KBufferPoolName**

    -   **Description**

        The name of the DB2 for z/OS 4 K buffer pool to be used for this portal database domain.

    -   **Default value**

        BP0

    -   **Examples**

        None available

-   **federated.db.Db32KBufferPoolName**

    -   **Description**

        The name of the DB2 for z/OS 32 K buffer pool to be used for this portal database domain.

    -   **Default value**

        BP32K

    -   **Examples**

        None available


### 7.2.2. Setting up database tables

Provide information that is needed to configure tables for your federated database.

-   **federated.db.reportSqlError**

    -   **Description**

        Specify whether to report SQL errors while setting up the VMM federated database.

    -   **Valid values**

        true

        false

    -   **Default value**

        true

    -   **Examples**

        None available

-   **federated.db.saltLength**

    -   **Description**

        The length of the salt that is used when the system hashes passwords stored in the Member Manager database repository.

    -   **Default value**

        12

    -   **Examples**

        None available

-   **federated.db.encryptionKey**

    -   **Description**

        The encryption key to encrypt the database user registry.

    -   **Default value**

        rZ15ws0ely9yHk3zCs3sTMv/ho8fY17s

    -   **Examples**

        : rZ15ws0ely9yHk3zCs3sTMv/ho8fY17s

-   **federated.db.adapterClassName**

    -   **Description**

        The implementation class name for the repository adapter.

    -   **Default value**

        com.ibm.ws.wim.adapter.db.DBAdapter

    -   **Examples**

        None available

-   **federated.db.supportSorting**

    -   **Description**

        This value indicates whether sorting is supported or not.

    -   **Valid values**

        true

        false

    -   **Default value**

        false

    -   **Examples**

        None available

-   **federated.db.supportTransactions**

    -   **Description**

        This value indicates if transactions are supported or not.

    -   **Valid values**

        true

        false

    -   **Default value**

        false

    -   **Examples**

        None available

-   **federated.db.isExtIdUnique**

    -   **Description**

        This value specifies if the external ID is unique.

    -   **Valid values**

        true

        false

    -   **Default value**

        true

    -   **Examples**

        None available

-   **federated.db.supportExternalName**

    -   **Description**

        This value indicates if external names are supported or not.

    -   **Valid values**

        true

        false

    -   **Default value**

        false

    -   **Examples**

        None available

-   **federated.db.entityRetrievalLimit**

    -   **Description**

        This value specifies the maximum number of entities that the system can retrieve from the database with a single database query.

    -   **Default value**

        50

    -   **Examples**

        None available


### 7.3. Custom user registry properties

The following properties are used to create or updated a custom user registry \(CUR\) in a federated security configuration. The properties are referenced when the following tasks are run: wp-create-cur and wp-update-federated-cur

-   **federated.cur.id**

    -   **Description**

        This ID specifies a unique identifier for the repository within the cell. Characters that are not allowed in normal XML strings \( &amp; &lt; \> " ' \) cannot be used in the repository ID.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **federated.cur.adapterClassName**

    -   **Description**

        The implementation class name for the repository adapter.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **federated.cur.baseDN**

    -   **Description**

        The CUR base entry.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **federated.cur.isExtIdUnique**

    -   **Description**

        This value specifies whether the external ID is unique.

    -   **Valid values**

        true

        false

    -   **Default value**

        true

    -   **Examples**

        None available

-   **federated.cur.supportExternalName**

    -   **Description**

        This value indicates whether external names are supported or not.

    -   **Valid values**

        true

        false

    -   **Default value**

        false

    -   **Examples**

        None available

-   **federated.cur.supportPaging**

    -   **Description**

        This value indicates whether paging is supported or not.

    -   **Valid values**

        true

        false

    -   **Default value**

        false

    -   **Examples**

        None available

-   **federated.cur.supportSorting**

    -   **Description**

        This value indicates whether sorting is supported or not.

    -   **Valid values**

        true

        false

    -   **Default value**

        false

    -   **Examples**

        None available

-   **federated.cur.supportTransactions**

    -   **Description**

        This value indicates whether transactions are supported or not.

    -   **Valid values**

        true

        false

    -   **Default value**

        false

    -   **Examples**

        None available


### 7.3.1. Federated custom user registry \(CUR\) custom properties

The following properties and values are used to create a custom property using the wp-create-cur-custom-property task.

-   **cur.id**

    -   **Description**

        The ID of the repository, where the custom property will be created.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **cur.name**

    -   **Description**

        The name of the custom property.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **cur.value**

    -   **Description**

        Value of the custom property:

    -   **Default value**

        No default value

    -   **Examples**

        None available


### 7.4. Enable federated repository

The following properties are used when you run the wp-modify-federated-security task. The task enables a federated repository and the existing default realm is renamed.

-   **federated.primaryAdminId**

    -   **Description**

        Type the ID of the WebSphere Application Server administrative user. The ID must exist in a user repository.

    -   **Default value**

        No default value

    -   **Examples**

        Windows Active Directory: cn=,cn=users,dc=yourco,dc=com

        Windows Active Directory Lightweight-Directory-Services:

        Custom User Registry:

        IBM Tivoli Directory Server: uid=,cn=users,dc=yourco,dc=com

        HCL Domino: cn=,o=yourco.com

        Novell eDirectory: uid=,ou=people,o=yourco.com

        Oracle Directory Server: uid=,ou=people,o=yourco.com

-   **federated.realm**

    -   **Description**

        Specify the realm name to use. The existing default realm is renamed.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **federated.serverId**

    -   **Description**

        Specify a user ID in the repository that is used for internal process communication.

    -   **Default value**

        No default value

    -   **Examples**

        Windows Active Directory: cn=,cn=users,dc=yourco,dc=com

        Windows Active Directory-Lightweight-Directory-Services:

        Custom User Registry:

        IBM Tivoli Directory Server: uid=,cn=users,dc=yourco,dc=com

        HCL Domino: cn=,o=yourco.com

        Novell eDirectory: uid=,ou=people,o=yourco.com

        Oracle Directory Server: uid=,ou=people,o=yourco.com

-   **federated.serverPassword**

    -   **Description**

        Specify a password for the user ID in the repository that is used for internal process communication.

    -   **Default value**

        No default value

    -   **Examples**

        None available


### 7.4.1. Advanced federated repository properties

-   **federated.registryClassName**

    -   **Description**

        The registry class name.

    -   **Default value**

        com.ibm.ws.wim.registry.WIMUserRegistry

    -   **Examples**

        None available

-   **federated.ignoreCase**

    -   **Description**

        This value specifies whether the query matches case sensitivity. This value is not used during node federation to the deployment manager with WebSphere Application Server when LDAP security is enabled.

    -   **Valid values**

        true

        false

    -   **Default value**

        true

    -   **Examples**

        None available


### 7.5. LDAP attribute configuration validation

The following properties are used with the `wp-validate-federated-ldap-attribute-config` and `wp-update-federated-ldap-attribute-config` tasks.

-   **federated.ldap.attributes.nonSupported**

    -   **Description**

        This value is a comma-separated list of attributes that are added/removed from the list of nonsupported attributes

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **federated.ldap.attributes.nonSupported.delete**

    -   **Description**

        If true, then the attributes in federated.ldap.nonSupported are deleted from the list of nonsupported attributes, else they are added.

    -   **Valid values**

        true

        false

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **federated.ldap.attributes.mapping.ldapName**

    -   **Description**

        The name of the attribute in LDAP.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **federated.ldap.attributes.mapping.portalName**

    -   **Description**

        The name of the attribute in portal.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **federated.ldap.attributes.mapping.entityTypes**

    -   **Description**

        The list of entityTypes that the mapping applies to.

    -   **Valid values**

        PersonAccount

        Group

    -   **Default value**

        PersonAccount

    -   **Examples**

        None available


### 7.6. Delete federated repository properties

The following properties are used the `wp-delete-repository` task.

-   **federated.delete.baseentry**

    -   **Description**

        The name of the base entry to be deleted from the default realm. If the base entry exists in other realms, it must be deleted manually first. Leave the value empty only if you want to delete the property extension repository.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **federated.delete.id**

    -   **Description**

        The ID of the repository to be deleted from the VMM configuration. This parameter must be set to LA if you want to delete the property extension repository.

    -   **Default value**

        No default value

    -   **Examples**

        None available


## VMM property extension database properties

Property extension database was previously called the lookaside database. The property extension database stores more attributes that cannot be stored in the LDAP user registry. Database modification tasks of VMM need a connection to a running server instance. Make sure that your server is running. The properties are used with the following tasks: wp-configure-la-complete and wp-add-la-property

-   **la.JdbcProviderName**

    -   **Description**

        The name of JDBC provider for the VMM property extension database. Note that the federated.db.JdbcProviderName can be the same as this value, or different. The federated.db.JdbcProviderName is the JDBC provider for the VMM database user registry. This la.JdbcProviderName is the JDBC provider for the VMM property extension database. Both of these databases can be in the same database provider, or in different providers. If they are in the same database, then the same provider name can be used. If they are in different databases, then different appropriate JDBC provider names must be used.

    -   **Default value**

        vmmdbJDBC

    -   **Examples**

        None available

-   **la.DbType**

    -   **Description**

        Database management software to be use for the property extension domain.

    -   **Valid values**

        db2

        db2\_iseries

        db2\_zos

        derby

        oracle

        sqlserver2005

    -   **Default value**

        db2

    -   **Examples**

        None available

-   **la.DbUrl**

    -   **Description**

        The JDBC database URL to be used to connect with the database of the property extension database domain. It must comply with your JDBC Driver software requirements. This property that is combined with the properties database name and schema name must be unique for the portal database domains release, community, customization, and JCR.

    -   **Default value**

        jdbc:db2:vmmladb

    -   **Examples**

        None available

-   **la.DbName**

    -   **Description**

        The name of the database \(location name of the DB2 for z/OS subsystem\) to be used for the property extension database domain. Use the property extension domain store more properties outside of the user registry. It must comply with your database management software requirements. This property that is combined with the properties schema name and JDBC database URL must be unique for the portal database domains release, community, customization, and JCR.

        If you change the name of the HCL Portal data source due to a database migration, you must manually update the la.DbName property in the wpconfig\_dbdomain.properties file. The file is located here: portal\_server\_root/config/wpconfig\_dbdomain.properties

    -   **Default value**

        la.DbType=db2: VMMLADB

        la.DbType=db2\_iseries:

        la.DbType=db2\_zos:

        la.DbType=oracle:

        la.DbType=sqlserver2005: VMMLADB

        Otherwise: vmmladb

    -   **Examples**

        Apache Derby: vmmladb

        IBM DB2: VMMLADB

        IBM DB2 for i: /VMMLADB

        DB2 for z/OS:

        Oracle Database: vmmladb

        Microsoft SQL Server: VMMLADB

-   **la.DataSourceName**

    -   **Description**

        The name of the data source to be used for property extension database domain. It must comply with the WebSphere Application Server requirements. You cannot use the reserved names releaseDS, communityDS, customizationDS, jcrDS, lmdbDS, and feedback. You can use the same name for all portal database domains that are sharing user ID, password, and JDBC database URL.

    -   **Default value**

        vmmladbDS

    -   **Examples**

        None available

-   **la.DbUser**

    -   **Description**

        The database user ID used to configure the database objects of the property extension database domain. It must comply with your database management software requirements. It is also used by the data source to connect with the database, unless you specify a runtime database user.

    -   **Default value**

        db2admin

    -   **Examples**

        None available

-   **la.DbPassword**

    -   **Description**

        Password for the property extension database administrator user ID. The password must comply with the database management software requirements. The ConfigEngine cannot validate that the password complies with the software requirements.

    -   **Default value**

        No default value

    -   **Examples**

        None available


### 8.1. Advanced properties

-   **la.DbNameOnZos**

    -   **Description**

        The name of the database to be used for this portal database domain. It must comply with your database management software requirements.

    -   **Default value**

        WPSTST02

    -   **Examples**

        None available

-   **la.XDbName**

    -   **Description**

        The database alias used to create the database for this portal database domain. It must comply with your database management software requirements. Required for IBM DB2 that runs on Linux and UNIX operating systems. Also required for IBM DB2 that runs on a Microsoft Windows operating system that uses type 2 JDBC drivers and is running on the same server as HCL Portal.

    -   **Default value**

        wps6TCP

    -   **Examples**

        None available

-   **la.DbNode**

    -   **Description**

        The name of the database node that is used to create the database for this portal database domain. It must comply with your database management software requirements. Required for IBM DB2 that run on Linux and UNIX operating systems.

    -   **Default value**

        wpsNode

    -   **Examples**

        None available

-   **la.DbSchema**

    -   **Description**

        The name to be used to qualify database objects of property extension database domain. It must comply with your database management software requirements. This property that is combined with the properties database name and JDBC database URL must be unique for the portal database domains release, community, customization, and JCR.

    -   **Default value**

        federate

    -   **Examples**

        None available


### 8.2. Create property extension tables

-   **la.reportSqlError**

    -   **Description**

        Specify whether to report SQL errors that occur while you are setting up databases.

    -   **Valid values**

        true

        false

    -   **Default value**

        true

    -   **Examples**

        None available

-   **la.entityRetrievalLimit**

    -   **Description**

        This value specifies the maximum number of entities that the system can retrieve from the database with a single database query.

    -   **Default value**

        50

    -   **Examples**

        None available


### 8.3. Add a property

The following properties are used by wp-add-la-property and wp-add-property configuration tasks. Use wp-add-la-property if you are defining a new property to store in VMM property extension database. Use wp-add-property if you are defining a new property that maps to an attribute in LDAP or a custom registry. These tasks use a secured connection to WebSphere Application Server. Check the wp\_profile/properties/sas.client.props file and verify the following setting: com.ibm.CORBA.securityEnabled=true If you are using a remote telnet connection, set `com.ibm.CORBA.loginSource` to stdin or properties.

-   **la.providerURL**

    -   **Description**

        The remote endpoint where your portal server or deployment manager installation is available. Check the value for hostname:port. The port points to the BOOTSTRAP\_ADDRESS port of either the WebSphere\_Portal server or the deployment manager. The deployment manager is used in a clustered environment.

    -   **Default value**

        corbaloc:iiop:localhost:10020

    -   **Examples**

        Stand-alone Server example: corbaloc:iiop:localhost:10020

        Clustered example: corbaloc:iiop:dmgr.example.com:9809

-   **la.propertyName**

    -   **Description**

        The name of the property that you are adding.

    -   **Default value**

        No default value

    -   **Examples**

        : email, dept

-   **la.deployfile**

    -   **Description**

        Use this property when you want to create multiple properties by using a single ConfigEngine operation. Specify the path and name of the XML file that contains the properties that you want to add. You can specify a path that is relative to the ConfigEngine directory or the fully qualified file system path. If you specify a value for this property, do not specify a value for la.propertyName, la.dataType, or la.Multivalued.

        The following is a sample of an XML deploy file that is used to add three properties.

        ```
        
        						<wplc-add-property>
        						   <resource propertyName="attribute_name_1" dataType="Int" entityTypes="Group" multiValued="true" />
        						   <resource propertyName="attribute_name_2" dataType="String" entityTypes="PersonAccount" multiValued="true" />
        						   <resource propertyName="attribute_name_3" dataType="Base64Binary" entityTypes="Group,PersonAccount" multiValued="false" />
        						</wplc-add-property>
        						
        ```

        The resource tag includes attributes that are specific for the property: propertyName, dataType, entityType, and multiValued.

    -   **Default value**

        No default value

    -   **Examples**

        : deploy.xml

-   **la.entityTypes**

    -   **Description**

        This value is a list of entity types that the new property is applicable to. If you need to enter multiple values, use a comma to separate each value, for example "value1,value2".

    -   **Valid values**

        Group

        PersonAccount

    -   **Default value**

        No default value

    -   **Examples**

        : Group,PersonAccount

-   **la.dataType**

    -   **Description**

        Defines the type of data that is stored in the attribute that is being created. If this attribute is mapped to LDAP, this data type must match the corresponding attribute type in LDAP. Consult your LDAP administrator if you are unsure of the data types in LDAP. If this attribute is stored in the VMM property extension database, the data type must match the corresponding attribute type as defined in VMM's database.

        While it is possible to add attributes of different types to VMM, the Registration/Edit My Profile Portlet is only capable of working with attributes of type String and Int. If you need UI support for other types, you would need your own custom form or portlet that can process those types. Portal does not have a UI that reads or updates group attributes. The one exception is the UI that is used to create a group.

    -   **Valid values**

        String

        Int

        DateTime

        Base64Binary

        IdentifierType

        Boolean

        Long

        Double

        Short

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **la.multiValued**

    -   **Description**

        Defines if the property can contain multiple values or not.

    -   **Valid values**

        true

        false

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **repositoryId**

    -   **Description**

        This value is only used for the `wp-add-property` task. Adding a property to VMM configuration of a repository does not add the property to the LDAP system. List of repositories that the new property is added to. The list of repositories must be separated by a comma. Leave the value blank to add the property to all repositories.

    -   **Default value**

        No default value

    -   **Examples**

        None available


## VMM LDAP entity type configuration

Provide values for the following properties if you need to create, delete, or add an LDAP entity type configuration. The properties are used with the following configuration tasks: wp-create-ldap-entitytype , wp-delete-ldap-entitytype , and wp-add-ldap-entitytype-rdn .

-   **et.ldap.id**

    -   **Description**

        This value specifies the LDAP server ID.

    -   **Default value**

        No default value

    -   **Examples**

        : myLDAPServer

-   **et.entityTypeName**

    -   **Description**

        Specifies the name of the entity type to create, update, or delete.

    -   **Valid values**

        PersonAccount

        Group

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **et.objectClass**

    -   **Description**

        This value specifies a semi-colon \(;\) delimited list of object classes to be added.

    -   **Default value**

        No default value

    -   **Examples**

        : groupOfUniqueNames

-   **et.searchFilter**

    -   **Description**

        This value specifies the search filter that you want to use to search the entity type. A filter like departmentNumber=1234 would allow only objects with this department number to be a valid search result.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **et.objectClassesForCreate**

    -   **Description**

        This value specifies a semi-colon \(;\) delimited list of object classes to use when an entity type is created. If the value of this parameter is the same as the objectClass parameter, you do not need to specify this parameter.

    -   **Default value**

        No default value

    -   **Examples**

        : groupOfUniqueNames

-   **et.searchBases**

    -   **Description**

        This value specifies the search base or bases to use while the system searches the entity type.

    -   **Default value**

        No default value

    -   **Examples**

        : o=foo,o=bar

-   **et.rdnName**

    -   **Description**

        This value specifies more attributes for the `wp-add-ldap-entitytype-rdn` task. This attribute name is used to build the relative distinguished name \(RDN\) for the entity type. It is unusual for there to be more than one for a PersonAccount or Group entity type.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **et.ldap.referral**

    -   **Description**

        This value specifies more attributes for the `wp-add-ldap-entitytype-rdn` task. The value indicates how the LDAP server handles referrals to other LDAP servers. If you type **ignore**, the LDAP ignores referrals to other LDAP servers. If you type **follow**, the LDAP follows the redirect to other LDAP servers.

    -   **Valid values**

        ignore

        follow

    -   **Default value**

        follow

    -   **Examples**

        None available

-   **et.ldap.host**

    -   **Description**
    -   **Default value**

        No default value

    -   **Examples**

        None available


## VMM supported entity types configuration

The `wp-update-entitytype` task updates the entity type 'entityTypeName' with the value of defaultParent and adds the RDN attribute to the existing list. The `wp-set-entitytype` task updates the entity type 'entityTypeName' with the value of defaultParent. It also resets the rdnProperties list to contain only rdnProperties entries for the value \(or values, if a semicolon-delimited list is supplied\) of the RDN attribute name property.

-   **entityTypeName**

    -   **Description**

        This value specifies the name of the entity type. This should be either PersonAccount or Group.

    -   **Valid values**

        PersonAccount

        Group

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **defaultParent**

    -   **Description**

        Specify the base entry name that is used as default parent for the entity type.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **rdnProperties**

    -   **Description**

        This value specifies the RDN attribute name for the supported entity type in the entity domain name. The RDN attribute is the first attribute in the Distinguished Name. Usually the attribute is "uid" or "cn", but it depends on how the DNs in your LDAP server are set up.

    -   **Default value**

        cn

    -   **Examples**

        None available

-   **updatePumaSearchBase**

    -   **Description**

        Define whether the default search attribute for users and groups in PUMA Store Service is also updated.

    -   **Valid values**

        true

        false

    -   **Default value**

        false

    -   **Examples**

        None available


### 10.1. Update the defaultParent of the entity types Group and PersonAccount

The wp-update-entitytypes task updates the defaultParent of the entity types Group and PersonAccount and adds the RDN attributes to the existing list. The wp-set-entitytypes task updates the defaultParent of the entity types Group and PersonAccount and adds the RDN attributes as only entry in the RDN list.

-   **personAccountParent**

    -   **Description**

        Type the default parent of the entity type PersonAccount. VMM creates new users as a child of the parent when no other explicit parent is specified. This value must be a descendant of the baseDN of the LDAP server and it must be a fully specified DN of the container, including the baseDN value. For example, if federated.ldap.baseDN=dc=yourco,dc=com then the parent might be personAccountParent=cn=users,dc=yourco,dc=com. It might also be personAccountParent=cn=users,ou=newPeopleGoHere,dc=yourco,dc=com.

    -   **Default value**

        No default value

    -   **Examples**

        If the base DN is dc=yourco,dc=com: cn=users,dc=yourco,dc=com

-   **groupParent**

    -   **Description**

        Type the default parent of the entity type Group. When an explicit parent is not specified for a new group, VMM uses the default parent that is specified here. The parent must be a descendant of the base DN of the LDAP server. It also must be a fully specified DN of the container, including the base DN value.

    -   **Default value**

        No default value

    -   **Examples**

        If base DN is dc=yourco,dc=com: cn=groups,dc=yourco,dc=com

        Another example, for base DN is dc=yourco,dc=com: cn=groups,ou=newGroupsGoHere,dc=yourco,dc=com

-   **personAccountRdnProperties**

    -   **Description**

        The RDN attribute is the first attribute in the Distinguished Name. Usually the attribute is "uid" or "cn", but it depends on how the DNs in your LDAP server are set up. It is possible to specify multiple attribute names that are separated by semicolons, but this is highly unusual. Do not leave this property blank. This property is primarily used when you create a new user through VMM. In combination with the default parent for the entity type, the attribute tells VMM how to create the DN for the new entry. The value \(or values, if multiple values are specified in a semicolon-delimited list\) is set as rdnProperties entries with the supportedEntityType stanza in VMM's wimconfig.xml configuration file.

    -   **Default value**

        uid

    -   **Examples**

        : uid

-   **groupRdnProperties**

    -   **Description**

        The RDN attribute is the first attribute in the Distinguished Name. Usually the attribute is "cn" for the Group entity type, but it depends on how the DNs in your LDAP server are set up. It is possible to specify multiple attribute names that are separated by semicolons, but this is highly unusual. Do not leave this property blank. This property is primarily used when you are creating a new group through VMM. In combination with the default parent for the entity type, the attribute tells VMM how to create the DN for the new entry. The value \(or values, if multiple values are specified in a semicolon-delimited list\) is set as rdnProperties entries with the supportedEntityType stanza in VMM's wimconfig.xml configuration file.

    -   **Default value**

        cn

    -   **Examples**

        : cn


### 10.2. Group member attribute configuration

If the group member attribute does not exist, it will be created. The following properties are used with the `wp-update-ldap-groupmember` and `wp-delete-ldap-groupmember` tasks.

-   **gm.ldap.id**

    -   **Description**

        The ID of the LDAP repository definition within which the group definition is updated. The ID is an arbitrary ID that was specified when the repository definition was created.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **gm.groupMemberName**

    -   **Description**

        The name of the LDAP attribute that is used as the group member attribute.

    -   **Default value**

        No default value

    -   **Examples**

        For groupOfUniquNames: uniqueMember

        For groupOfNames: Member

-   **gm.objectClass**

    -   **Description**

        The group object class that contains the member attribute. If you do not define this parameter, the member attribute applies to all group object classes

    -   **Default value**

        No default value

    -   **Examples**

        : groupOfNames

        : groupOfUniqueNames

-   **gm.scope**

    -   **Description**

        Type the scope of the member attribute. This is the attribute within the group objects that lists the members of the group. NOTE: It is unusual for this to be any value other than "direct". Type **nested** if the LDAP member attribute includes direct and nested members. Type **direct** if the LDAP member attribute includes direct members only.

    -   **Valid values**

        nested

        direct

    -   **Default value**

        direct

    -   **Examples**

        None available

-   **gm.dummyMember**

    -   **Description**

        If you create a group without specifying a member, a dummy member will be filled in to avoid creating an exception about missing a mandatory attribute. For Novell eDirectory servers, Oracle Directory Server and Windows Active Directory, the value has to be empty or point to an existing entry in the LDAP directory.

    -   **Default value**

        No default value

    -   **Examples**

        None available


### 10.3. Create group member configuration

The following properties are used with the `wp-create-ldap-groupconfig` task.

-   **gc.ldap.id**

    -   **Description**

        This value specifies a unique identifier for an existing repository within the cell. This value must match the ID of the repository to be updated.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **gc.name**

    -   **Description**

        A membership attribute is an alternative way of getting group membership information from the LDAP user registry. Leave the field empty if your LDAP does not support the group membership attribute.

        Type the LDAP name of an attribute or virtual attribute in a user object that lists the groups of which that user is a member.

        A membership attribute is an attribute within the user object that contains the list of groups that the user is a member of. Many LDAP registries support the group memebership attribute. Also, each user registry implements the group membership attribute differently.

        In some cases, the membership attribute is not persisted with the user record. Instead, it is calculated on demand.

        In some cases, the membership attribute includes all groups, such as nested groups, dynamic groups, and static groups. If your LDAP implementation includes all groups memberships, then it is more efficient to use a membership attribute instead of manually requesting the information from a client. For more information about when to use the attribute, see the federated.ldap.gc.scope property.

        You do not need to use nested or dynamic groups to use a membership attribute. If your directory uses only non-nested, static group memberships, use the standard group membership query method.

    -   **Default value**

        federated.ldap.ldapServerType=IDS6: ibm-allGroups

        federated.ldap.ldapServerType=AD: memberOf

        federated.ldap.ldapServerType=ADAM: memberOf

        federated.ldap.ldapServerType=DOMINO: dominoAccessGroups

        federated.ldap.ldapServerType=SUNONE: isMemberOf

        federated.ldap.ldapServerType=SUNONE: nsrole

        federated.ldap.ldapServerType=NDS: groupMembership

    -   **Examples**

        IBM Tivoli Directory Server: ibm-allGroups

        Microsoft Active Directory: memberOf

        Microsoft Active Directory - Lightweight Directory Services: memberOf

        HCL Domino: dominoAccessGroups

        Oracle Directory Server: isMemberOf

        SunOne \(versions prior to 6.3\): nsrole

        Novell eDirectory: groupMembership

-   **gc.updateGroupMembership**

    -   **Description**

        Updates the group membership if the member is deleted or renamed. Some LDAP servers, such as HCL Domino, do not clean up the membership of the user when a user is deleted or renamed. If you choose an LDAP server that does not clean up memberships, then the value of this property is set to true to enable membership cleanup.

    -   **Valid values**

        true

        false

    -   **Default value**

        false

    -   **Examples**

        None available

-   **gc.scope**

    -   **Description**

        Tells VMM how much information your LDAP server returns when VMM requests the group membership attribute value for a user object. The group membership attribute is an attribute on the user object that contains the list of groups of which the user is a member. This scope property describes to VMM how complete the list is. For example, the list might include only static groups of which the user is a direct member or it might include dynamic memberships, or the results of resolving any nested group relationships.

        -   Set the value to all if the membership attribute includes a complete list of all possible group memberships for a user, including nested, dynamic, and direct group memberships.
        -   Set the value to direct if the membership attribute includes only direct memberships.
        -   Set the value to nested if the membership attribute included both direct and nested memberships, but it does not include dynamic memberships. Nested refers to groups within other groups.
        Select the option that reflects your LDAP registry configuration. If your selection does not match the LDAP configuration, poor performance and failures might occur.

        If the group membership attribute for the user objects within your LDAP returns only direct membership information and you select nested, when your application requests nested group information the operation will return incomplete results. Based on your selection, VMM expects the LDAP to return the nested group information. It does not do the additional work to determine the nested group information.

        If your LDAP returns nested group information and VMM is configured to support dynamic groups, VMM tries to resolve the dynamic group membership information that is requested by an application. You must use the Integrated Solutions Console to configure dynamic groups in VMM.

        If your LDAP provides a complete set of group memberships, including nested groups, dynamic groups, and static direct groups, and you set the scope attribute to direct, VMM redundantly tries to resolve the nested group memberships.

        Portal asks VMM to retrieve nested group membership information from the LDAP registry. If your security policy and LDAP registry are not set up to use nested groups, then set accessControlDataManagement.enableNestedGroups to false in the Access Control Data Management Service.

    -   **Valid values**

        all

        direct

        nested

    -   **Default value**

        direct

    -   **Examples**

        None available


### 10.4. Context pool

The following properties are used with the `wp-update-ldap-contextpool` task.

-   **cp.ldap.id**

    -   **Description**

        The name of the LDAP repository configuration for which the context pool settings are to be updated.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **cp.maxPoolSize**

    -   **Description**

        This value specifies the maximum number of context instances that can be maintained concurrently in the context pool for this LDAP server by VMM. This value must be greater than or equal to the preferred context pool size. However, specifying a value of 0 allows the pool to grow without bound. VMM uses the buffer pool size per node in the cluster. Therefore the total number of connections that might be made to the LDAP server is the maximum context pool size value multiplied by the number of nodes in the cluster.

    -   **Default value**

        20

    -   **Examples**

        None available

-   **cp.initPoolSize**

    -   **Description**

        This value specifies the initial \(minimum\) size of the context pool for this LDAP server in VMM. This value must be less than or equal to the preferred context pool size.

    -   **Default value**

        1

    -   **Examples**

        None available

-   **cp.prefPoolSize**

    -   **Description**

        Specify the preferred size of the context pool for this LDAP server in VMM. The size must be greater than or equal to the initial context pool size, and less than or equal to the maximum context pool size, unless the maximum size is set to 0. If this value is less than the maximum size \(or if the maximum size is set to 0\) and the pool grows larger than the preferred size due to transient high load conditions, the pool shrinks back to the preferred size when the high load condition subsides. The preferred size value is treated as a "hint" which VMM gives a best effort to maintain, not a hard limit that is strictly enforced always.

    -   **Default value**

        3

    -   **Examples**

        None available

-   **cp.poolTimeout**

    -   **Description**

        This value specifies the maximum lifetime of a context instance. Specify the lesser of your LDAP server or firewall connection time-out, if applicable. A value of 0 means a context will never time out. This value is specified in seconds.

    -   **Default value**

        2700

    -   **Examples**

        None available

-   **cp.poolWaitTime**

    -   **Description**

        This value specifies the time that a thread waits for a context to become available. The timeout applies only when maximum size of the pool is reached \(so that no more contexts can be allocated\) but all existing context instances are busy. This value, which is specified in milliseconds, must not be more than a few seconds.

    -   **Default value**

        3000

    -   **Examples**

        None available


### 10.5. Realm configuration

The following properties are used to in multiple realm configuration tasks. If no realm name is specified, the default realm is updated.updated. The `wp-create-realm` tasks uses the following properties: realmName, addBaseEntry, securityUse, and delimiter The `wp-update-realm` task uses the following properties: realmName, securityUse, and delimiter The `wp-delete-realm` task uses the following property: deleteRealmName The `wp-default-realm` task uses the following property: defaultRealmName The `wp-add-realm-baseentry` task uses the following properties: realmName and addBaseEntry The `wp-delete-realm-baseentry` task uses the following properties: realmName and deleteBaseEntry The `wp-query-realm-baseentry` task uses the following property: realmName The `wp-modify-realm-defaultparents` task uses the following properties: realmName, realm.personAccountParent, realm.groupParent, and realm.orgContainerParent The `wp-modify-realm-enable-dn-login` task uses the following property: realmName The `wp-modify-realm-disable-dn-login` task uses the following property: realmName

-   **realmName**

    -   **Description**

        Specify the name of the realm to create or update. If no realm name is provided, the default realm is updated.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **addBaseEntry**

    -   **Description**

        This value specifies the name of base entry to be added to the realm.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **securityUse**

    -   **Description**

        Indicates whether a virtual realm within the VMM configuration is actively in use currently in the security setup of the server; or is not currently in use but is eligible to be used; or is not eligible for use at all. The default is "active".

    -   **Valid values**

        active

        inactive

        nonSelectable

    -   **Default value**

        active

    -   **Examples**

        None available

-   **delimiter**

    -   **Description**

        This value specifies the delimiter that is used for this realm.

    -   **Default value**

        /

    -   **Examples**

        None available

-   **defaultRealmName**

    -   **Description**

        This value specifies the name of the new default realm.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **deleteBaseEntry**

    -   **Description**

        This value specifies the name of the base entry to be deleted from the realm.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **realm.personAccountParent**

    -   **Description**

        This value specifies the default parents to be set for the entity type PersonAccount. The realm that is entered in realmName is used to make the change.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **realm.groupParent**

    -   **Description**

        This value specifies the default parents to be set for the entity type Group. The realm that is entered in realmName is used to make the change.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **realm.orgContainerParent**

    -   **Description**

        This value specifies the default parents to be set for the entity type OrgContainer. The realm that is entered in realmName is used to make the change.

    -   **Default value**

        No default value

    -   **Examples**

        None available


### 10.6. Base entry configuration

The following properties are used by the `wp-create-base-entry` , `wp-update-base-entry` , and `wp-delete-base-entry`. When you run the `wp-update-base-entry` task, if the base entry does not exist, the task creates the entry.

-   **id**

    -   **Description**

        The ID of the repository, where the base entry is created, updated, or deleted. When a base entry is created, it is automatically added to the default realm.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **baseDN**

    -   **Description**

        This value specifies the name of the base entry to create, update, or delete.

    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **nameInRepository**

    -   **Description**

        The distinguished name \(DN\) in the repository that uniquely identifies the base entry name. In most cases, the name is not the same value as the base DN.

    -   **Default value**

        No default value

    -   **Examples**

        None available


### 10.7. Change administrative users

The following properties are used by the `wp-change-was-admin-user` and `wp-change-portal-admin-user` tasks. The `wp-change-portal-admin-user` task also changes the admin group if the ID is set.

-   **newAdminId**

    -   **Description**

        Type the fully qualified DN that exists in your LDAP registry that you want to use as the Portal Administrator account. The short login name for this administrator account must not be identical to the original administrative user ID short login name. If the DN includes spaces, then you must take extra steps to enter it on the command line by using the -D parameter.

        \(UNIX only\)For command line tasks, if you provide the DN by using the -D parameter, some tasks require that you enter the fully qualified DN. If your fully qualified DN contains a space, you cannot provide the ID by using the -D parameter. For example, if your DN is `cn=someuser,cn=users,o=Software Group,dc=yourco,dc=com,` then you must place the DN in the properties file or a parent properties file. If you create a parent properties file named mysecurity.properties, your command is: ./ConfigEngine.sh task\_name -DparentProperties=/opt/mysecurity.properties.

        \(Windows only\)For command prompt tasks, if you provide the DN by using the -D parameter, some tasks require that you enter the fully qualified user DN. If your fully qualified DN contains a space, then you must place quotations around the fully qualified DN in the command. An example of a DN with spaces is: `cn=someuser,cn=users,o=Software Group,dc=yourco,dc=com,` An example of the DN provided using the -D parameter is: ConfigEngine.bat task\_name -DuserID="cn=someuser,cn=users,o=Software Group,dc=yourco,dc=com"

        A valid user DN can contain the following characters:

        -   Lowercase characters \{a-z\} and upper case characters \{A-Z\}
        -   Numbers \{0-9\}
        -   Exclamation point \{!\}, hyphen \{-\}, period \{.\}, question mark \{?\}, accent grave \{\`\}, tilde \{~\}
        -   Open parenthesis \{\(\} and close parenthesis \{\)\}
        -   Open bracket \{\[\} and close bracket \{\]\}
        -   Underscore \{\_\}, which is the only special character allowed in IBM i
        -   Must be less than 200 characters
    -   **Default value**

        No default value

    -   **Examples**

        Windows Active Directory: cn=,cn=users,dc=yourco,dc=com

        Windows Active Directory 2003: cn=,cn=users,dc=yourco,dc=com

        Windows Active Directory-Lightweight-Directory-Services: cn=,cn=users,dc=yourco,dc=com

        IBM Tivoli Directory Server: uid=,cn=users,dc=yourco,dc=com

        IBM Tivoli Directory Server for z/OS: uid=,cn=users,dc=yourco,dc=com

        HCL Domino: cn=,o=yourco.com

        Novell eDirectory: uid=,ou=people,o=yourco.com

        Oracle Directory Server: uid=,ou=people,o=yourco.com

        Custom: uid=,cn=users,dc=yourco,dc=com

-   **newAdminPw**

    -   **Description**

        Type the password for the DN that already exists in the user registry. Valid passwords contains only ASCII characters and the following characters:

        -   Lowercase letter \{a-z\} and uppercase letters \{A-Z\}
        -   Numbers \{0-9\}
        -   Exclamation point \{!\}, hyphen \{-\}, period \{.\}, question mark \{?\}, accent grave \{\`\}, and tilde \{~\}
        -   Open parenthesis \{\(\} and close parenthesis \{\)\}
        -   Open bracket \{\[\} and close bracket \{\]\}
        -   Underscore \{\_\}, which is the only special character that is allowed in IBM i
        -   The password cannot contain a space
        -   Must be 128 characters or less
    -   **Default value**

        No default value

    -   **Examples**

        None available

-   **newAdminGroupId**

    -   **Description**

        Type the DN of the existing group from LDAP that you want to use as the portal administrative group.

    -   **Default value**

        No default value

    -   **Examples**

        Windows Active Directory: cn=,cn=groups,dc=yourco,dc=com

        Windows Active Directory-Lightweight-Directory-Services: cn=,cn=groups,dc=yourco,dc=com

        IBM Tivoli Directory Server: cn=,cn=groups,dc=yourco,dc=com

        HCL Domino: cn=,o=yourco.com

        Novell eDirectory: cn=,ou=groups,o=yourco.com

        Oracle Directory Server: cn=,ou=groups,o=yourco.com


### 10.8. Change attribute configuration

The `wp-update-attribute-config` task sets the overall required and unsupported properties.

-   **user.attributes.required**

    -   **Description**

        This value specifies the new \(comma separated\) list of attributes that are required for user creation

    -   **Default value**

        sn

    -   **Examples**

        None available

-   **user.attributes.nonsupported**

    -   **Description**

        This value specifies the new \(comma separated\) list of attributes that are ignored by portal.

    -   **Default value**

        certificate,identifier

    -   **Examples**

        None available


### 10.9. Restore VMM security

The following properties are used with the `wp-restore-default-repository-configuration` task.

-   **restore.file.realm**

    -   **Description**

        This value specifies the realm name to be used. A realm with this name is created .

    -   **Default value**

        federatedRealm

    -   **Examples**

        None available

-   **restore.file.delimiter**

    -   **Description**

        This value specifies the delimiter that is used for this realm. Enter any value but do not leave this field blank.

    -   **Default value**

        /

    -   **Examples**

        None available

-   **restore.file.primaryAdminId**

    -   **Description**

        This value specifies the ID \(short name\) of the WebSphere Application Server administrative user. The ID must exist in a user repository.

    -   **Default value**

        adminUID

    -   **Examples**

        None available

-   **restore.file.primaryAdminPassword**

    -   **Description**

        This value specifies the password \(short name\) of the WebSphere Application Server administrative user.

    -   **Default value**

        adminPWD

    -   **Examples**

        None available

-   **restore.file.primaryPortalAdminGroup**

    -   **Description**

        The user group \(short name\) with administrative permission in portal. The group must exist in the LDAP server.

    -   **Default value**

        adminGroupCN

    -   **Examples**

        None available


### 10.10. Community Isolation and external users

The following properties are used with the `wp-configure-community-isolation` and `wp-configure-external-users` task.

-   **communityIsolation.enabled**

    -   **Description**

        This value specifies whether the Boolean flag enables community isolation \(peer groups\).

    -   **Valid values**

        true

        false

    -   **Default value**

        false

    -   **Examples**

        None available

-   **externalUsers.enabled**

    -   **Description**

        This value specifies whether the Boolean flag enables or disables external users.

    -   **Valid values**

        true

        false

    -   **Default value**

        false

    -   **Examples**

        None available

-   **externalUsers.parentDN**

    -   **Description**

        The parent distinguished name \(DN\) for new external users.

    -   **Default value**

        No default value

    -   **Examples**

        : ou=externalUsers,o=defaultWIMFileBasedRealm


## More properties for internal use only

-   **AdditionalPropertiesToFilter**

    -   **Description**

        Do not change the value of this attribute unless directed to do so by IBM Support

    -   **Default value**

        newAdminPw

    -   **Examples**

        None available

-   **wps.userdir**

    -   **Description**

        Do not change the value of this attribute unless directed to do so by IBM Support.

    -   **Default value**

        PortalServer

    -   **Examples**

        None available


