# Create and run a Config Engine task for out-of-the-box Content Security Policy resource environment parameters

The out-of-the-box \(OOB\) Content Security Policy \(CSP\) resource environment parameters can be set by creating and running a Config Engine task. In future updates post-Container Update CF192, this configuration task will be provided. If CSP support is implemented using CF192, the DX administrator must create a file containing the task and put in on the DX server to run the task. Alternatively, the parameters can be created individually in the WebSphere Application \(WAS\) Administration console under the WP\_ConfigService resource environment provider custom properties.

## Steps to create and run the Config Engine task

1.  Create a file \(i.e. csp.custom.properties.xml\) and copy the contents below into the file.

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <target name="csp-custom-properties">
        <wplc-create-res-env-custom-property
            cell="${CellName}"
            node="${NodeName}"
            server="${ServerName}"
            wasuser="${WasUserid}"
            waspassword="${WasPassword}"
            providerName="WP ConfigService"
            name="csp-enabled"
            value="false"
            description="CSP enabled"/>
        <wplc-create-res-env-custom-property
            cell="${CellName}"
            node="${NodeName}"
            server="${ServerName}"
            wasuser="${WasUserid}"
            waspassword="${WasPassword}"
            providerName="WP ConfigService"
            name="csp-report-enabled"
            value="true"
            description="CSP report enabled"/>
        <wplc-create-res-env-custom-property
            cell="${CellName}"
            node="${NodeName}"
            server="${ServerName}"
            wasuser="${WasUserid}"
            waspassword="${WasPassword}"
            providerName="WP ConfigService"
            name="csp-header"
            value="default-src 'self'; script-src 'self' 'nonce-default'; img-src 'self' data:; style-src 'self' 'nonce-default';"
            description="CSP header"/>  
        <wplc-create-res-env-custom-property
            cell="${CellName}"
            node="${NodeName}"
            server="${ServerName}"
            wasuser="${WasUserid}"
            waspassword="${WasPassword}"
            providerName="WP ConfigService"
            name="csp-header-report"
            value="default-src 'self'; script-src 'self' 'nonce-default'; img-src 'self' data:; style-src 'self' 'nonce-default';"
            description="CSP report header"/>
        <wplc-create-res-env-custom-property
            cell="${CellName}"
            node="${NodeName}"
            server="${ServerName}"
            wasuser="${WasUserid}"
            waspassword="${WasPassword}"
            providerName="WP ConfigService"
            name="csp-replace-string.1"
            value="&lt;style @&lt;style nonce=\&quot;nonceID\&quot;"
            description="Add nonce to all style tags"/>  
        <wplc-create-res-env-custom-property
            cell="${CellName}"
            node="${NodeName}"
            server="${ServerName}"
            wasuser="${WasUserid}"
            waspassword="${WasPassword}"
            providerName="WP ConfigService"
            name="csp-replace-string.2"
            value="display:none;?=wpthemeDisplayNone"        
            description="Change display:none; to class"/> 
        <wplc-create-res-env-custom-property
            cell="${CellName}"
            node="${NodeName}"
            server="${ServerName}"
            wasuser="${WasUserid}"
            waspassword="${WasPassword}"
            providerName="WP ConfigService"
            name="csp-replace-string.3"
            value="clear:both;?=wpthemeClear"
            description="Change clear:both to class"/>                  
    </target>
    ```

2.  Put the file on to the server in the following directory:

    ```
    /opt/HCL or WebSphere/ConfigEngine/config/includes
    ```

3.  Run the ConfigEngine task from the /opt/HCL or WebSphere/wp\_profile/ConfigEngine directory \(adjust the Portal and Was admin passwords appropriately\).

    ```
    ./ConfigEngine.sh csp-custom-properties -DPortalAdminPwd=wpsadmin -DWasPassword=wpsadmin 
    ```

4.  Restart the server.

**Parent topic:**[Configuring Content Security Policy](../security/configuring_content_security_policy.md)

