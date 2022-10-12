# User IDs and passwords

Understanding character limitations for user IDs and passwords is important because they are used throughout the system to provide access and secure content.

When a person signs up as a user or when an administrator enrolls a user, they must complete the user information form. On this form, do not enter characters that might not be supported. Regardless of what characters you are able to enter on the user information form, user ID and passwords are limited to the valid characters described here. You can specify other characters in the given name and surname fields. If your company policy is more restrictive, you can provide that information to your users in the enrollment form help or as inline help directly on the form.

!!!important
    HCL Digital Experience cannot create user IDs or passwords that contain spaces, although it fully supports any existing user IDs and passwords or those IDs created in the user repository that contain spaces.

The character limitations provided here apply to the HCL Digital Experience administrator, IBM WebSphere Application Server administrator, database administrator, LDAP server administrator, and user IDs. Database and LDAP servers can have more restrictive limitations than provided here. Therefore, check the database and LDAP server product documentation for restrictions. Failure to correctly define user IDs and passwords during the installation process can result in installation failure. In addition, your company might have more restrictive user ID and password requirements that you must also follow.

Under normal circumstances a valid user ID and password can contain the following characters:

-   Lowercase characters {a-z}
-   Uppercase characters {A-Z}
-   Numbers {0-9}
-   Exclamation point {!}
-   Open parenthesis {(}
-   Close parenthesis {)}
-   Dash {-}; this character is not supported as the first character in the user ID or password
-   Period {.}; this character is not supported as the first character in the user ID or password
-   Question mark {?}
-   Open bracket {[}
-   Close bracket {]}
-   Underscore {_}
-   Grave accent {`}
-   Tilde {~}
-   Commercial at {@}, this character is not supported when you create the HCL Portal and WebSphere® Application Server administrator during installation.

!!! important
    These characters are all ASCII characters. Non-ASCII characters are not allowed for user name or password.

!!! note 
    If you plan on using a non-ASCII-based encoding, ensure your Java™ virtual machine has the correct generic arguments specific for the non-ASCII-based encoding. For example, for UTF-8 encoding, add the following two parameters to the Java virtual machine generic arguments for HCL Portal: -Dfile.encoding=UTF-8 and -Dclient.encoding.override=UTF-8

!!! note 
    (Linux™ only) Some tasks might require you to enter the fully qualified user ID. If your fully qualified user ID contains a space; for example: cn=wpsadmin,cn=users,l=SharedLDAP,c=US,ou=Lotus,o=Software Group,dc=ibm,dc=com, you must place the fully qualified user ID in the properties file or into a parent properties file instead of as a flag on the command line. For example, create a parent properties file called mysecurity.properties, enter the fully qualified user ID, and then run the task: ./ConfigEngine.sh task_name -DparentProperties=/opt/mysecurity.properties.

!!! note
    (Windows™ only) Some tasks might require you to enter the fully qualified user ID. If your fully qualified user ID contains a space; for example: cn=wpsadmin,cn=users,l=SharedLDAP,c=US,ou=Lotus,o=Software Group,dc=ibm,dc=com, you must place quotations around the fully qualified user ID before you run the task; for example, "cn=wpsadmin,cn=users,l=SharedLDAP,c=US,ou=Lotus,o=Software Group,dc=ibm,dc=com".

The following table contains a list of the required fields on the user information form and the supported characters.

|User information|Valid characters|Unsupported characters|
|----------------|----------------|----------------------|
|User ID|Lowercase characters \{a-z\}</br>Uppercase characters \{A-Z\}</br>Numbers \{0-9\}</br>Exclamation point \{!\}</br>Open parenthesis \{\(\}</br>Close parenthesis \{\)\}</br>Dash \{-\}; this character is not supported as the first character in the user ID or password</br>Period \{.\}; this character is not supported as the first character in the user ID or password</br>Question mark \{?\}</br>Open bracket \{\[\}</br>Close bracket \{\]\}</br>Underscore \{\_\}</br>Grave accent \{\`\}</br>Tilde \{~\}</br>Commercial at \{@\}, this character is not supported when you create the HCL Portal and WebSphere Application Server administrator during installation.|Only ASCII characters are allowed.</br>**Other restrictions:** The user ID cannot contain spaces; for example, user name.</br>**Note:** User IDs cannot be longer than 200 characters.</br>If you enter any unsupported characters during the installation, you receive an error message that states which character is invalid. For example, "The special character \[@\] was found in the **administrative user ID** field. Enter the administrative user ID again."</br>**Important:** You receive a different error message if you enter any unsupported characters when you create users through the **Manage users and groups** portlet.|
|Password / Confirm password|Lowercase characters \{a-z\} </br> Uppercase characters \{A-Z\}</br>Numbers \{0-9\}</br>Exclamation point \{!\}</br>Open parenthesis \{\(\}</br>Close parenthesis \{\)\}</br>Dash \{-\}; this character is not supported as the first character in the user ID or password</br> Period \{.\}; this character is not supported as the first character in the user ID or password</br>Question mark \{?\}</br>Open bracket \{\[\}</br>Close bracket \{\]\}</br>Underscore \{\_\}</br>Grave accent \{\`\}</br>Tilde \{~\}</br>Commercial at \{@\}, this character is not supported when you create the HCL Portal and WebSphere Application Server administrator during installation.|Diacritics, such as the umlaut, and DBCS characters are not allowed.</br>**Other restrictions:** The password cannot contain spaces; for example, pass word.</br>**Note:** Passwords cannot be longer than 128 characters.</br>**Note:** Passwords cannot be longer than 8 characters and must also conform to the appropriate guidelines if you use SAF products such as RACF.</br>**Attention:** Login or ConfigEngine tasks might fail if the password contains any unsupported characters, including DBCS characters. This action happens even if a user is successfully enrolled with a password that contains DBCS characters.</br>If you enter any unsupported characters during the installation, you receive an error message that states which character is invalid. For example, "The special character \[@\] was found in the password field. Enter the password again."|
|Given name|All characters|n/a|
|Surname|All characters|n/a|

!!! note
    The previous characters are true if the user.UNIQUEID.charset parameter is set to ascii. If set to unicode, the standard Java Letter definition is used and all characters that are recognized as letter or digit by Java are allowed by default. See the **Puma Validation Service** section in the "Portal configuration services" link for information about further parameters that can be modified to affect the behavior of Portal's validation of users, groups, and passwords.


<!--- ???info:**Related information**  


[Creating new users and groups](../admin-system/adctnewu.md)

[Target environment considerations](../plan/mig_plan_targetenvironment.md) --->

