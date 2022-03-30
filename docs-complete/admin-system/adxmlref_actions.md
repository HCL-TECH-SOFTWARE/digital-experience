# Actions on portal resources 

All XML elements that represent portal resources have a required action attribute. The action attribute of XML elements determines what type of processing is applied to the portal resources.

You can specify the following actions:

|Action|Resulting processing|
|------|--------------------|
|locate|Identify the portal resource corresponding to this XML element \(usually required as a context for other actions\).|
|create|Create a new portal resource with the given attributes. A new resource is always created, even if another resource with the given name already exists.|
|update|Update the configuration of the corresponding portal resource with the given configuration data \(attributes and dependent configuration data elements\); if no corresponding portal resource can be found, it is created.|
|delete|Delete the portal resource corresponding to this XML element.|
|export|Include an XML representation of the portal resource corresponding to this element in the output of the XML command.|

Example: the following XML snippet sets the portlet named "MySpecialPortlet" to inactive status:

```
     <portlet name='MySpecialPortlet' action='update' active='false'/>

```

**Parent topic:**[Types of portal resources ](../admin-system/adxmlref_resrc_types.md)

**Related information**  


[Types of portal resources ](../admin-system/adxmlref_resrc_types.md)

