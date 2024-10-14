# Managing Web Content Syndicators and Subscribers using DXClient

The section provides information about using the DXClient process to automate the management of Web Content Manager Syndicators, Subscribers, and get-syndication reports. For more information on the process and settings of the Web Content Manager Syndicators and Subscribers, see [How to manage syndicators and subscribers](../../../../manage_content/wcm_delivery/syndication/manage_synd_subs/index.md).

## Managing syndicators

The manage-syndicator command is used to enable or disable the syndicator using the provided input.

-   **Command description**

    This command invokes the manage-syndicator tool inside the DXClient. It is used to enable or disable the syndicator.

    ```
    dxclient manage-syndicator
    ```

-   **Help command**

    This command shows the help document on the manage-syndicator command usage:

    ```
    dxclient manage-syndicator -h
    ```

-   **Command options**

    Use this attribute to specify the hostname of the target server.

    ```
    -hostname <value>
    ```

    Use this attribute to specify the protocol with which to connect to the server.

    ```
    -dxProtocol <value>
    ```

    Use this attribute to specify the port on which to connect to the server(for Kubernetes Environment dxPort is 443)

    ```
    -dxPort <value>
    ```

    Use this attribute to specify the username that is required for authenticating with the server.

    ```
    -dxUsername <value>
    ```

    Use this attribute to specify the password that is required for authenticating with the server.

    ```
    -dxPassword <value>
    ```

    Use this attribute to specify the path to the contenthandler servlet on the DX server (example: /wps/mycontenthandler).

    ```
    -contenthandlerPath <value>
    ```

    Use this attribute to specify the UUID of the syndicator instance.

    ```
    -UUID <value>
    ```

    Use true or false to enable or disable the syndicator.

    ```
    -enable <value>
    ```

    The options that are passed through the command line override the default values.

!!! example

    ```
    dxclient manage-syndicator -dxProtocol <dxProtocol> -hostname <host-name> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -contenthandlerPath <contenthandlerPath> -UUID <UUID> -enable <enable>
    ```


## Manage-syndicator get-syndication-report

The manage-syndicator get-syndication-report command is used to fetch the failed reports of the syndicator.

-   **Command description**

    This command invokes the `syndicator-faileditems` tool inside the DXClient, which is used to fetch the failed reports.

    ```
    dxclient manage-syndicator get-syndication-report
    ```

-   **Help command**

    This command shows the help document on the manage-syndicator get-syndication-report command usage:

    ```
    dxclient  manage-syndicator get-syndication-report -h
    ```

-   **Command options**

    Use this attribute to specify the hostname of the target server

    ```
    -hostname <value>
    ```

    Use this attribute to specify the protocol with which to connect to the server

    ```
    -dxProtocol <value>
    ```

    Use this attribute to specify the port on which to connect to the server (for Kubernetes Environment, dxPort is 443)

    ```
    -dxPort <value>
    ```

    Use this attribute to specify the username that is required for authenticating with the server

    ```
    -dxUsername <value>
    ```

    Use this attribute to specify the password that is required for authenticating with the server

    ```
    -dxPassword <value>
    ```

    Use this attribute to specify the path to the contenthandler servlet on the DX server (for example, /wps/mycontenthandler)

    ```
    -contenthandlerPath <value>
    ```

    Use this attribute to specify the UUID of the syndicator instance

    ```
    -UUID <value>
    ```

    The options that are passed through the command line override the default values.

-   **Example usage with UUID:**

    ```
    dxclient manage-syndicator get-syndication-report -dxProtocol <dxProtocol> -hostname <host-name> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -contenthandlerPath <contenthandlerPath> -UUID <UUID> 
    ```

-   **Example usage without UUID:**

    ```
    dxclient manage-syndicator get-syndication-report -dxProtocol <dxProtocol> -hostname <host-name> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -contenthandlerPath <contenthandlerPath>  
    ```

    !!! note 
        If UUID of a syndicator is specified, then the command provides the report for only the particular syndicator that is present in the target DX Server; otherwise, it provides the failure report for all syndicators.


## Managing subscribers

The manage-subscriber command is used to enable or disable the subscriber using the provided input.

-   **Command description**

    This command invokes the manage-subscriber tool inside the DXClient. It is used to enable/disable the subscriber.

    ```
    dxclient manage-subscriber
    ```

-   **Help command**

    This command shows the help document on the manage-syndicator command usage:

    ```
    dxclient manage-subscriber -h
    ```

-   **Command options**

    Use this attribute to specify the hostname of the target server.

    ```
    -hostname <value>
    ```

    Use this attribute to specify the protocol with which to connect to the server.

    ```
    -dxProtocol <value>
    ```

    Use this attribute to specify the port on which to connect to the server (for Kubernetes Environment dxPort is 443).

    ```
    -dxPort <value>
    ```

    Use this attribute to specify the username that is required for authenticating with the server.

    ```
    -dxUsername <value>
    ```

    Use this attribute to specify the password that is required for authenticating with the server.

    ```
    -dxPassword <value>
    ```

    Use this attribute to specify the path to the contenthandler servlet on the DX server (for example, /wps/mycontenthandler).

    ```
    -contenthandlerPath <value>
    ```

    Use this attribute to specify the UUID of the subscriber instance.

    ```
    -UUID <value>
    ```

    Use this attribute to specify the enable or disable the subscriber instance. Use true or false to enable or disable the subscriber.

    ```
    -enable <value>
    ```

    The options passed through command line overrides the default values.

!!! example

    ```
    dxclient manage-subscriber -dxProtocol <dxProtocol> -hostname <host-name> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -contenthandlerPath <contenthandlerPath> -UUID <UUID> -enable <enable>
    ```


## Create Syndication Relation

The `create-syndication-relation` command is used to create the syndication relation between syndicator and subscriber in the DX server.

-   **Command description**

    Use the `create-syndication-relation` to create syndication relation:

    ```
    dxclient create-syndication-relation
    ```

-   **Help command**

    This command shows the help information for `create-syndication-relation` command usage:

    ```
    dxclient create-syndication-relation -h
    ```

-   **Command options**

    Use this attribute to specify the protocol with which to connect to the DX server:

    ```
    -dxProtocol <value>
    ```

    Use this attribute to specify the hostname of the target DX server:

    ```
    -hostname <value>
    ```

    Use this attribute to specify the port on which to connect to the DX server (for Kubernetes Environment, dxPort is 443):

    ```
    -dxPort <value>
    ```

    Use this attribute to specify the username to authenticate with the DX server

    ```
    -dxUsername <value>
    ```

    Use this attribute to specify the password for the user in the "dxUsername" attribute

    ```
    -dxPassword <value>
    ```

    The path to the contenthandler servlet on the Script Application server:

    ```
    -contenthandlerPath <value>
    ```

    Syndicator URL of target server, for example, http(s)://host:port/wps/wcm:

    ```
    -syndicatorUrl <value>
    ```

    Use this attribute to specify the new syndicator name:

    ```
    -syndicatorName <value>
    ```

    Use this attribute to specify the new subscriber name:

    ```
    -subscriberName <value>
    ```

    Use this attribute to specify the Credential Vault Name of source server:

    ```
    -vaultSlotName <value>
    ```

    Whether the syndicator/subscriber pair is enabled on creation: isEnabled (default is true):

    ```
    -isEnabled <value>
    ```

    Whether the syndicator/subscriber pair is updateAfterCreation : updateAfterCreation (default is true):

    ```
    -updateAfterCreation <value>
    ```

    The libraries to syndicate eg. all-items,liveItems,liveProjectsItem,all-items,published-items and all-items-and-versions:

    ```
    -syndicationType <value>
    ```

    Use this attribute to specify the Libraries Name of target Server:

    ```
    -webContentLibraries <value> 
    ```

    Use this attribute to specify the Subscriber URL, for example, http(s)://host:port/wps/wcm:

    ```
    -subscriberURL <value>
    ```

    Use this attribute to specify the Syndicator/subscriber mode:

    ```
    -mode <value>
    ```

    Use this attribute to specify the Credential Vault Name:

    ```
    -syndicatorVaultSlotName <value>
    ```

    Use this attribute to specify the path to the context root on the DX server (for example, /wps):

    ```
    -dxContextRoot <value>
    ```

    Use this attribute to specify the path to the Virtual portal Context:

    ```
    -virtualPortalContext <value>
    ```

    Log files from command execution can be found in the logs directory of the DXClient installation.

!!! example

    ```
    dxclient create-syndication-relation -dxProtocol <dxProtocol> -hostname <hostname> -dxPort <dxPort> -contenthandlerPath <contenthandlerPath> -dxUsername <dxUsername> 
    -dxPassword <dxPassword> -syndicatorUrl <syndicatorUrl> -syndicatorName <syndicatorName> -subscriberName <subscriberName> -vaultSlotName <vaultSlotName>
    -isEnabled <isEnabled> -updateAfterCreation <updateAfterCreation> -syndicationType <syndicationType> -webContentLibraries <webContentLibraries> -subscriberURL <subscriberURL>
    -mode <mode> -syndicatorVaultSlotName <syndicatorVaultSlotName> -dxContextRoot <dxContextRoot> -virtualPortalContext <virtualPortalContext>
    ```

## HCLSoftware U learning materials

For an introduction and a demo on DX staging, go to [Staging for Beginners](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D505){target="_blank"}.

To learn how to use staging tools such as DXClient, Syndication, XMLAccess, ReleaseBuilder/Solution Installer, and ConfigEngine, go to [Staging for Intermediate Users](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3328){target="_blank"}. You can try it out using the [Staging Lab for Intermediate Users](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Staging_Lab.pdf){target="_blank"} and corresponding [Staging Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Staging_Lab_Resources.zip){target="_blank"}.

???+ Info "Related information"
    - [How to manage syndicators and subscribers](https://help.hcltechsw.com/digital-experience/8.5/panel_help/wcm_syndication.html)

