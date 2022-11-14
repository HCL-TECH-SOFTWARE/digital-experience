# Customize common name generation

By default, HCL Digital Experience generates common names that consists of the user's first name followed by the last name. You can change the order that common names are generated.

To change the order of common names modify the following three configuration properties, located in the Puma Store Service. See the related links section for information:

-   puma.commonname: This property defines how the common name is generated. You can define dynamic and static parts. Dynamic parts are added using X, where X stands as a reference number. Dynamic parts can only be available and valid user attributes. By default \{0\} \{1\} is used.
-   puma.commonname.parts: This property defines the amount of dynamic parts in the common name.
-   puma.commonname.X: This property defines the user attribute for dynamic part X. X must be between 0 and puma.commonname.parts-1.


**Related information**  


[Setting service configuration properties](../admin-system/adsetcfg.md)

