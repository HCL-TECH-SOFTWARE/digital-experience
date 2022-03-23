# EJPNO1021W error 

Undefined contribution hierarchy in profile.

## Explanation

The profile has multiple modules defining the same dynamic content spot ID without a hierarchy or order between them.

## User action

A hierarchy or order should be defined between the modules that define the same dynamic content spot ID.  To define the dynamic content spot overlay, the module with the dynamic content spot ID definition that should be used needs to list all other modules with the same dynamic content spot ID definition as prereqs.

**Parent topic:**[Validation reports ](../dev-theme/themopt_an_val_reports.md)

**Parent topic:**[Validation reports ](../dev-theme/themopt_an_val_reports.md)

