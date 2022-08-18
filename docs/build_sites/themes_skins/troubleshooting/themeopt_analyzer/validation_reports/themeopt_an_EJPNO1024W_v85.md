# EJPNO1024W error

Themelist URL used for rendering

## Explanation

The theme metadata key ''\{1\}'', which is used when rendering the theme, is set to ''\{2\}''. This is a valid URL, but is pointing to the themelist WebDAV entry point. The themelist entry point is intended for performing administrative operations with themes \(such as creating a new theme, deleting a theme, or modifying a theme\). This themelist URL should not be used for runtime rendering operations, as it adds additional overhead that is unnecessary for non-administrative rendering operations.

## User action

Update your theme metadata with the key ''\{0\}'' to point to the fs-type1 WebDAV entry point. For example: ''\{1\}''.

**Parent topic:**[Validation reports](../dev-theme/themopt_an_val_reports.md)

**Parent topic:**[Validation reports](../dev-theme/themopt_an_val_reports.md)

