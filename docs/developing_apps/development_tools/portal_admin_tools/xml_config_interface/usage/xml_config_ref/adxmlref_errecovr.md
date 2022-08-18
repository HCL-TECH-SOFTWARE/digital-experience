# Error recovery

If errors occur during the processing of an XML script, the XML result file contains an error message. After fixing the cause of the error, you have two options to continue.

Choose one of the following two options:

1.  Run the entire XML script once again.
2.  Remove all resources before the point where the error occurred from the XML script and run only the rest of the XML script.

If the error occurs during the validation of the XML script, and no resources have actually been processed so far, you can simply run the entire script again. You can verify this by reviewing the progress reporting comments in the XML response.

If the error occurs after some resources have actually been processed, the best option depends on several circumstances:

-   If you used the request transaction level, you must run the entire script once more, because all changes have been undone.
-   If you used the resource transaction level, the preferable option is to run only the rest of the XML script, and not to repeat changes that have already been made; otherwise you might duplicate resources that were already created. You can only use this option if the rest of the XML script does not contain references to the resources that you are removing, that is, if you do not refer to symbolic object IDs of these resources. See Symbolic object IDs and ID generating mode for more information. You can always remove resources that have already been processed from the XML script, if your script uses only hard-coded object IDs for references, because in this case all references can be resolved by looking up the object IDs in the portal database.

To make error recovery easier, use scripts that can be run again partially or completely without the possibility of duplicating resources. To do that, specify an object ID or another identifying attribute on every resource in the script and use only `update` actions. This way resources are simply overwritten with the same configuration if they have already been created. For more information about how to specify attributes, see the topic about *Mandatory and optional attributes*.

**Parent topic:**[XML configuration reference](../admin-system/adxmlref.md)

**Related information**  


[Symbolic object IDs and ID generating mode](../admin-system/adxmlref_symbl_obj_id.md)

[Mandatory and optional attributes](../admin-system/adxmlref_mandopt_attrbt.md)

