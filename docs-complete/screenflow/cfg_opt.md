# Configuration options 

To change the overall behavior of the HCL UX Screen Flow Manager, several configuration options are available. You specify the options as Resource Environment Provider \(REP\) properties.

You can enable or disable the Screen Flow Manager by using a single configuration switch. The switch can be found in the REP WP\_ConfigService for the portal configuration service

Property: `com.ibm.wps.pcm.enabled`  
 Values: `true, false`  
 Default: `true`  
 Description: If you set this property to `true`, the Screen Flow Manager is enabled. If you set this property to `false`, the Screen Flow Manager is disabled.

You can find all other properties that are listed here in the resource environment provider WP\_PCMConfig.

Property: `com.ibm.wps.pcm.dialog.default.return.uniquename`   
 Value: A valid unique name of a page or portlet window  
 Default: None. Specify a unique name.   
 Description: Use this property to specify the default return target to which a user is redirected after a dialog instance ends. For more information, go to *Start transitions and special events.*

Property: `com.ibm.wps.pcm.dialog.default.priority`   
 Value: `preserve, suspend`  
 Default: `suspend`  
 Description: Determines which default dialog execution priority is used if no priority is explicitly set as part of a particular dialog definition. For more information, go to *Execution Priority*.  
 The default execution priority implicitly suspends the active dialog, if a matching start transition can be found as part of the entire set of dialogs available.

Property: `com.ibm.wps.pcm.dialog.default.dialogstep.display.endtransition`  
 Values: `true, false`  
 Default: `true`  
 Description: Use this property to determine whether the end transition is part of the set of dialog steps that is revealed by the dialog state display \(DSD\) \(`true`\) or not \(`false`\).

Property: `com.ibm.wps.pcm.dcx.jaxb.serialization.mode`  
 Values: `on, off, auto`  
 Default: `auto`  
 Description: Use this property to determine the JAXB marshalling mode of objects that are put into the DCX by using the DCX API. Use one of the following values:

-   The value `on` means that data to be stored in the DCX is always JAXB marshaled.
-   The value `auto` means that the data is JAXB marshaled only if required. The decision is computed by analyzing the class loader hierarchy.
-   The value `off` means that the data is never JAXB marshaled. For more information, read *Packaging of event mappers and JAXB serialization.*

**Parent topic:**[HCL UX Screen Flow Manager](../screenflow/screenflow_intro.md)

**Related information**  


[Other special transitions ](../screenflow/othr_spl_trnstns.md)

[Execution priority ](../screenflow/exe_priority.md)

[Packaging of event mappers and JAXB serialization ](../screenflow/pkg_evntmpr_jaxb_srlztn.md)

[Start transitions and special events](../screenflow/strt_trnstn_spl_evnt.md)

