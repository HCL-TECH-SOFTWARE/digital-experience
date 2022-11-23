# Distinguished names

If you are using LDAP in your source environment, make sure that the wkplc.properties file is properly configured. You might have a configuration that is working, but it might not be supported after migration. Short distinguished names (DN) are not supported. Make sure that the properties files in your source environment are set with the fully qualified distinguished names.

The following excerpt from the wkplc.properties file provides some examples of using fully qualified distinguished names (DN) for the PortalAdminId parameter.

-   **PortalAdminId**

    This value is the user ID for the WebSphere® Portal administrator. The installation program sets this value that is based on user input during installation. The user ID cannot contain a space: for example, user ID. The user ID cannot be longer than 200 characters.

    (UNIX™ only) Some tasks might require you to enter the fully qualified user ID. If your fully qualified user ID contains a space; for example: cn=wpsadmin,cn=users,l=SharedLDAP,c=US,ou=Lotus,o=Software Group,dc=ibm,dc=com, then you must place the fully qualified user ID in the properties file or into a parent properties file instead of as a flag on the command line. To create a parent properties file called mysecurity.properties, enter the fully qualified user ID, and then run the following task: ./ConfigEngine.sh task\_name -DparentProperties=/opt/mysecurity.properties.

    (Windows™ only) Some tasks might require you to enter the fully qualified user ID. If your fully qualified user ID contains a space; for example: cn=wpsadmin,cn=users,l=SharedLDAP,c=US,ou=Lotus,o=Software Group,dc=ibm,dc=com, then you must place quotations around the fully qualified user ID before you run the task, for example: "cn=wpsadmin,cn=users,l=SharedLDAP,c=US,ou=Lotus,o=Software Group,dc=ibm,dc=com."

    Value: A valid user ID contains only ASCII characters and can contain the following characters:

    -   Lowercase characters {a-z} and uppercase characters {A-Z}
    -   Numbers {0-9}
    -   Exclamation point {!}, Hyphen {-}, period {.}, question mark {?}, accent grave {`}, tilde {~}
    -   Open parenthesis {(} and close parenthesis {)}
    -   Open bracket {[} and close bracket {]}
    -   Underscore {_}
    
    Examples: The following are example user IDs:

    -   Development configuration without security: PortalAdminId=uid=xyzadmin,o=defaultWIMFileBasedRealm
    -   IBM® Tivoli® Directory Server: { uid=,cn=users,dc=yourco,dc=com }
    -   IBM® Lotus® Domino®: { cn=,o=yourco.com }
    -   Novell eDirectory: { uid=,ou=people,o=yourco.com }
    -   Oracle Directory Server: { uid=,ou=people,o=yourco.com }
    -   Windows™ Active Directory: { cn=,cn=users,dc=yourco,dc=com }
    -   Windows™ Active Directory-Lightweight-Directory-Services: { cn=,cn=users,dc=yourco,dc=com }
    Default: no default



