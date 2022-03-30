# Set up predefined HCL Connection servers 

Configuring integration with files is similar to configuring other federated documents. You must specify the remote server URL, a display name, and the supported interface type of the remote server.

To specify the values, you must add custom properties. Each property includes a suffix. The value of the suffix is used to group related properties for each server. Use the same suffix value for properties that are related to the same server. The suffix can be any value if it is unique across the property keys.

1.  Log on to the WebSphere® Integrated Solutions Console.

2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

3.  Click **WP FederatedDocumentsService**.

4.  Under **Additional Properties**, click **Custom Properties**.

5.  Register the CMIS service document with the federated documents feature.

    1.  Click **New** and add this property and value: wp.federated.documents.ic\_personalized\_sc.url=https://www.example.com:9444/files/basic/cmis/my/servicedoc

        Replace https://www.example.com:9444/files/basic/cmis/my/servicedoc with your service document location.

    2.  Click **New** and add this property and value: wp.federated.documents.ic\_personalized\_sc.title.default=Your Documents on HCL Connections

6.  Specify the interface type.

    1.  Click **New** and add this property: wp.federated.documents.suffix.type

    2.  For the value, specify: CMIS

    You can also add more properties, such as:

    -   **wp.federated.documents.ic\_personalized\_sc.nls.resources**

        Value: The name of the resource bundle that contains the translated title and description used to identify this source server in the user interface. If this property is not defined, the default title is used. If no default title and no resource bundle are defined, the value of the wp.federated.documents.ic\_personalized\_sc.url property is used in the user interface.

    -   **wp.federated.documents.ic\_personalized\_sc.vault.slot**

        Value: The name of the credential vault slot that stores the credentials used for authentication with the remote server. Credential vault slots are set up and managed by the portal administrator. This property defines the default credential vault slot that is predefined in the user interface, although the user can also select a different slot if one is available. If this property is not defined, the user interface does not display a default credential vault slot, but you can still select a slot from the available list. This property is optional.

        **Note:** The credential vault slot must contain the credentials that are required for authentication with the remote server.

    -   **wp.federated.documents.ic\_personalized\_sc.override.authentication.enabled**

        Value: true or false. When set to true, the user can change the authentication method for the server in the user interface. When set to false, the user interface does not display the field to change the authentication method. The default value is true.


**Parent topic:**[Integrating HCL Connections files ](../collab/i_coll_t_enable_lcfiles.md)

