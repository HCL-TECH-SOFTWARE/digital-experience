# Using the XML configuration interface to create a Producer definition

You can use the XML configuration interface to create a Producer definition online or offline.

The main tag to specify when you use the XML configuration interface to create a Producer is the wsrp-producer tag. The following table lists possible **subtags** that you can specify with the wsrp-producer tag:

|Possible subtag for the wsrp-producer tag|Description|
|-----------------------------------------|-----------|
|wsdl-url|This subtag describes the URL to the Producer's WSDL document. This subtag is the only tag that is required for creating a Producer when you use an online connection. The other URLs are extracted from this WSDL file.|
|port-type|Each of the Producer ports \(Service Description, Markup, Portlet Management, and Registration\) can be described by one tag. These tags are required for offline creation.|
|parameter|This subtag is used for registration properties.|
|preferences|This subtag is used for user attributes.|
|localedata|This subtag is used to specify globalization names and titles.|
|access-control|This subtag is used to specify access control.|

The following table lists possible attributes that you can specify with the wsrp-producer tag:

|Possible attributes for the wsrp-producer tag|Possible values|Description|
|---------------------------------------------|---------------|-----------|
|registration-required|true\|false|This attribute indicates whether the Producer requires registration.|
|force|true\|false|This attribute forces creation of the Producer.|
|default|true\|false|Set this attribute to true if this Producer is the default Producer.|

Use the following subtags to specify the Producer ports.

|Subtag|Description|
|------|-----------|
|secure-url|Specifies the secure URL of the port \(HTTPs\).|
|unsecure-url|Specifies the unsecure URL of the port \(HTTP\).|
|ws-security-profile|Specifies the Web Service Security token type or service reference that is assigned to the port. The value of the subtag must refer to a defined WSRP service or to one of the defined token types.|

Use the following attributes to specify the Producer ports.

|Attribute|Possible values|Description|
|---------|---------------|-----------|
|type|Specify one of the following values:-   service-description
-   markup
-   portlet-management
-   registration

|Defines the port to which the tag applies.|
|defaultbinding|Specify one of the following values:-   secure
-   unsecure
-   onrequest
-   undefined

|Defines whether to use the secure or unsecure URL. The value onrequest applies to the Markup port only.|

The following attributes are listed for the sake of completeness only. Do not change them.

|Possible attribute for the wsrp-producer tag|Possible values|Description|
|--------------------------------------------|---------------|-----------|
|state|\(binary data\)|The Producer's state. This attribute is specified as Base64 encoded binary data. It is only used during export and update by the XML configuration interface.|
|cookiepolicy|One of: none per\_user per\_group undefined|The Producer's cookie policy. The policy and possible values are defined in the WSRP specification.|
|wsrpversion|V1 \| V2|This attribute indicates the WSRP protocol version that is used for communication between consumer and producer.|

-   **[XML samples for creating Producer definitions](../admin-system/wsrpr_cons_crtprd_samp1.md)**  
You can modify use these XML samples and use them to create Producer definitions,

**Parent topic:**[Using the XML configuration interface to work with Producer definitions](../admin-system/wsrpt_cons_wrkprd_xml.md)

