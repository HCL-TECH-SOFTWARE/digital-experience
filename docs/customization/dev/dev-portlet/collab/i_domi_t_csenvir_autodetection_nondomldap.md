# Supporting automatic mail detection with an LDAP directory other than Domino

If the LDAP directory configured for the portal and for Lotus Collaborative Services is not IBM Domino, and you want the automatic mail detection feature in Domino messaging portlets, you can modify the CSenvironment.properties file to support the feature.

1.  Modify the `CSEnvironment.properties` file.

2.  Enable the lines under the Mail server and Mail File Queries section.

    The following example shows the syntax with comments.

    ```
    # Mail server and Mail File Queries: 
    #CS_SERVER_DOMINO_DIRECTORY_1.mailfileserver_objectclass=person
    #CS_SERVER_DOMINO_DIRECTORY_1.mailserver_attrib=mailserver 
    #CS_SERVER_DOMINO_DIRECTORY_1.mailfile_attrib=mailfile
    # Email Address query
    CS_SERVER_DOMINO_DIRECTORY_1.email_objectclass=person
    CS_SERVER_DOMINO_DIRECTORY_1.email_attrib=internetaddress
    
    ```

    **Note:** If adding the mailserver attribute to a non-Domino LDAP server and Lotus® Collaborative Services is configured with this server, make sure that this attribute is in the fully qualified distinguished name my.server.com format.

3.  To enable the `CS_SERVER_DOMINO_DIRECTORY_1.mailserver_attrib` and `CS_SERVER_DOMINO_DIRECTORY_1.mailfile_attrib` attributes for the primary non-Domino® LDAP directory that is configured for your portal site, add the following entry:

    ```
    CS_SERVER_DOMINO_DIRECTORY_1.primary_ldap_custom_attribute_enabled=true
    ```

    **Note:** By default, these attributes are used only if your portal configuration uses a custom LDAP directory, but adding the previous command line allows them to be used for a non-Domino LDAP.

4.  Enable the following section in the file, specify your Domino LDAP for `CS_SERVER_DOMINO_DIRECTORY_1.hostname`, and make sure that there is no return character after the equal sign on that line:

    ```
    ##############################################################
    #
    # DOMINO DIRECTORY properties
    # (LDAP server)
    # Important: 
    # Should always point to a Domino Server.
    # Leave enabled flag as true.
    # Use the custom_ldap_* settings to point to any LDAP Server to 
    # get user information.
    ##############################################################
    
    CS_SERVER_DOMINO_DIRECTORY.enabled=true
    CS_SERVER_DOMINO_DIRECTORY_1.hostname=yourserver.yourdomain.com
    CS_SERVER_DOMINO_DIRECTORY_1.port=389
    CS_SERVER_DOMINO_DIRECTORY_1.ssl=false
    CS_SERVER_DOMINO_DIRECTORY_1.anonymous=true 
    
    ```

5.  Copy and paste the following section into the file directly following the section in the previous step, and enable it. If there are return characters that follow the equal signs or anywhere else in the middle of each statement, remove them.

    ```
    ###########################################################
    # dual directory settings
    ##########################################################
    
    CS_SERVER_DOMINO_DIRECTORY_1.searchBase=O=DominoPortal
    
    # In the following queries
    #   %c = common name
    #   %d = ldap dn
    #  %n = fq notes name
    #  %v = the first item in the id like "cn=jane doe" or "uid=jdoe"
    
    #CS_SERVER_DOMINO_DIRECTORY_1.query_base_search=(objectclass=*)
    
    #CS_SERVER_DOMINO_DIRECTORY_1.query_distinguished_name=(& (objectclass=person) (|(uid=%c)(cn=%c)))
    #CS_SERVER_DOMINO_DIRECTORY_1.query_distinguished_name_attrib=cn
        
    #CS_SERVER_DOMINO_DIRECTORY_1.query_domino_servers=(&(objectclass=dominoServer)(http-hostname=*))
    #CS_SERVER_DOMINO_DIRECTORY_1.query_domino_servers_attrib=http-hostname
    
    #CS_SERVER_DOMINO_DIRECTORY_1.query_http_host_name=(| (& (objectclass=server)(%v) ) (& (objectclass=dominoServer)(%v) ) )
    #CS_SERVER_DOMINO_DIRECTORY_1.query_http_host_name_attrib=http-hostname
     
    #CS_SERVER_DOMINO_DIRECTORY_1.query_last_resort=(| (& (objectclass=person)(%v) ) (& (objectclass=groupOfNames)(%v) )(& (objectclass=server)(%v) )(& (objectclass=dominoServer)(%v) ))
    
    CS_SERVER_DOMINO_DIRECTORY_1.query_user_emailaddr=(&(objectclass=person)(cn=%c))
    #CS_SERVER_DOMINO_DIRECTORY_1.query_user_emailaddr_attrib=internetaddress
    
    CS_SERVER_DOMINO_DIRECTORY_1.query_user_mailserverfile=(&(objectclass=person)(cn=%c))
    #CS_SERVER_DOMINO_DIRECTORY_1.query_user_mailserverfile_attrib=mailserver,mailfile
    
    #  %l = login name 
    #  %a = wmm attribute use with CS_SERVER_DOMINO_DIRECTORY_1.other_lookup_attribute 
    
    CS_SERVER_DOMINO_DIRECTORY_1.allow_dn_search=false 
    CS_SERVER_DOMINO_DIRECTORY_1.other_lookup_attribute=ibm-primaryEmail
    CS_SERVER_DOMINO_DIRECTORY_1.query_user=(&(objectclass=person)(mail=%a)) 
    
    ```

6.  Save the properties file.


**Parent topic:**[Collaborative Services environment properties](../collab/i_domi_c_csenvironment_props_intro.md)

