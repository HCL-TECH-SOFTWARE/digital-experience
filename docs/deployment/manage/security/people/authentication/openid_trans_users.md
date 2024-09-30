# Configuring transient users

In addition to the basic OpenID authentication option, you can give users, who are trusted and verified from an identity provider, access to HCL Digital Experience. These trusted and verified users do not require a local, registered Portal user account.

Facebook and Google users can authenticate with the HCL Digital Experience server instance with their identity provider credentials. These users are granted access to certain data within HCL Digital Experience without having a local account. You can grant the same access to all identity providers or you can configure different access rights that are based on the identity provider. With this option, you can provide a personalized view to unregistered users while still providing benefits to fully registered users.

Follow the steps below to configure transient users.

1. **For Remote Dmgr only**: Copy this JAR file from the Portal server `<PortalServer_root>/base/wp.user.impl/lib/wp.user.connections.jar to the <AppServer_root>/lib` directory of the remote Dmgr.

2. Run the following task from the `wp_profile_root\ConfigEngine` directory with the appropriate parameters. Complete this step only on the **primary node**.

    - **AIX®**: `./ConfigEngine.sh enable-transient-user -DWasUserId=username -DWasPassword=password`
    - **HP-UX**: `./ConfigEngine.sh enable-transient-user -DWasUserId=username -DWasPassword=password`
    - **IBM® i**: `ConfigEngine.sh enable-transient-user -DWasUserId=username -DWasPassword=password`
    - **Linux™**: `./ConfigEngine.sh enable-transient-user -DWasUserId=username -DWasPassword=password`
    - **Solaris**: `./ConfigEngine.sh enable-transient-user -DWasUserId=username -DWasPassword=password`
    - **Windows™**: `ConfigEngine.bat enable-transient-user -DWasUserId=username -DWasPassword=password`

3. Add the following parameters to customize the task for your business requirements.
    1. `-Dtransparent.suffix`

        Set this value to a **dn** suffix that is used for transient users. The suffix must NOT match your current suffixes for fully registered users. The default value is `o=transparent`.

    2. `-Dtransparent.prefix`

        Set this value to a prefix that is used for transient users. For example, if you want to set the RDN attribute, set this value to `cn`.

4. **Optional**: Complete the following steps if you entered the wrong value in the **transparent.suffix** parameter.

    1. Log on to WebSphere® Integrated Solutions Console as the administrator.
    2. Go to **Security > Global Security**.
    3. Go to **User account repository > Available realm definitions** and select **Federatedrepositories**.
    4. Click **Configure**.
    5. Go to **Repositories in the realm** and click the link in the Base Entry column for the **transientidp** repository identifier, for example, `o=transparent`.
    6. Replace the value in the following fields with the new value:
        1. **Distinguished name of a base entry that uniquely identifies this set of entries in the realm**. For example, `o=transparent`.
        2. **Distinguished name of a base entry in this repository**. For example, `o=transparent`.
    7. Click **OK**.
    8. Save your changes.
    9. Stop and restart the HCL Portal server.

5. **Optional**: Complete the following steps to create group objects for external providers to assign different access rights.

    !!!important
        After you run the `enable-transient-user` task, all identified users are identified with the all authenticated group and do not have explicit groups.

    1. Log on to WebSphere® Integrated Solutions Console as the administrator.
    2. Go to **Security > Global Security**.
    3. Go to **User account repository > Available realm definitions** and select **Federatedrepositories**.
    4. Click **Configure**.
    5. Go to **Repositories in the realm** and click **transientidp** in the **Repository Identifier** column.
    6. Click New and add the following information:
        - **Name**: `buildgroupsfor`
        - **Value**: Enter the list of supported Identity Providers that you want to build groups for. For example: `facebook Google`. The items in the list must be separated by a space. The Identity Providers are case-sensitive and must match what you entered for the **idp.providerlist** and **openid.servicenames** parameters.
    7. Click **OK**.
    8. Save your changes.
    9. Stop and restart the HCL Portal server.

6. **Optional**: Complete the following steps to mark transient identity provider users as external.

    !!!information
         After you run the `enable-transient-user task`, the system builds internal groups for each identity provider. You can use these groups in the **Resource Permissions** portlet in the **Portal Administration** menu. Use the Resource Permissions portlet to build a set of pages and portlets that transient users can see and use.

        You can also combine transient users with the external user feature in HCL Digital Experience. You can identify a group of external or transient users with a database suffix. All external and transient users are then granted a special virtual principle in the access control. Use this virtual principle to grant a general set of access rights to these users.

    1. Log on to WebSphere® Integrated Solutions Console as the administrator.
    2. Go to **Resources > Resource Environment > Resource Environment providers**.
    3. Search for WP PumaStoreService then click **Custom properties**.
    4. Add the `parentDN.externalUsers` property with value you entered for **transparent.suffix.** If you did not enter a value in **transparent.suffix**, enter `o=transparent`.
    5. Save your changes.
    6. Stop and restart the HCL Portal server.

7. Complete the following steps to load user attributes during authentication.

    !!!note
        Transient users do not have attributes that are stored locally so it is helpful to load attributes from the Identity Provider during authentication.

        If you want to allow transient users to create or modify pages, you must map a short name to the users. The attribute used for the short name is the User default search attribute. If you do not know the attribute name, you can find it defined in the PumaStoreService Resource Environment provider. The most common values are `uid` and `cn`.

    1. Log on to WebSphere® Integrated Solutions Console as the administrator.
    2. Go to **Security > Global security > Web and SIP Security > Trust association > Interceptors**.
    3. Select **com.ibm.portal.auth.tai.OpenidTAI**.
    4. Add the following new properties for OpenID. Each property must be entered as **one line**.
        - `provider.openid.loadattributes=provider|method;provider2|method`

        !!!note
            `method` can either be `openid.sreg` or `openid.ax` depending on the type of OpenID your Identity Provider supports.

        - `provider.openid.loadattributes.provider=portalattributename|`
          `idpattributename;portalattributename2|idpattributename2`
        - `provider.openid.loadattributes.provider2=portalattributename|`
          `idpattributename;portalattributename2|idpattributename2`

        For example, you might add the following new properties for OpenID:

        - `provider.openid.loadattributes=google|openid.ax;yahoo|openid.ax`
        - `provider.openid.loadattributes.google=cn|http://axschema.org/namePerson/first;sn|`
          `http://axschema.org/namePerson/last ibm-primaryEmail|http://axschema.org/contact/email`

    5. Add the following new property for Facebook. The property must be entered as one line.
        - `provider.facebook.loadattributes=portalattributename|`
          `idpattributename;portalattributename2|idpattributename2`

        For example, you might add the following new property for Facebook:

        - `provider.facebook.loadattributes=sn|first_name;cn|last_name;uid|name`

    6. Save your changes.
    7. Stop and restart the HCL Portal server.

8. **Optional**: Complete the following steps to allow attribute requests for transient users.

    !!!important
        Some portal components, such as Web Content Manager, might need attributes of the current user to work as designed. The **uid** attribute is typically one of the necessary attributes.

    1. Log on to WebSphere® Integrated Solutions Console as the administrator.
    2. Go to **Resources > Resource Environment > Resource Environment Providers**.
    3. Select the **WP_PumaStoreService** resource environment provider.
    4. Select **Custom properties**.
    5. If the property does not exist, click **New** to create it. Otherwise, edit the **store.puma_default.filter.TransparentUserFilter.classname** property.
    6. Set the **Value** to `com.ibm.wps.um.TransparentUserFilter`.
    7. Save your changes.
    8. If the property does not exist, click **New** to create it. Otherwise, edit the **store.puma_default.filter.TransparentUserFilter.position** property.
    9. Set the **Value** to `-10`.
    10. Save your changes.
    11. Click **Apply**.
    12. Click **Save** to save the changes to the master configuration.
    13. Stop and restart the HCL Portal server.
