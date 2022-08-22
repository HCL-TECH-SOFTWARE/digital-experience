# EJPNO1025W error

Skinlist URL used for rendering.

## Explanation

The skin metadata key ''\{1\}'', which is used when rendering the skin, is set to ''\{2\}''. This is a valid URL, but is pointing to the skinlist WebDAV entry point. The skinlist entry point is intended for performing administrative operations with skins \(such as creating a new skin, deleting a skin, or modifying a skin\). This skinlist URL should not be used for runtime rendering operations, as it adds additional overhead that is unnecessary for non-administrative rendering operations.

## User action

Update your skin metadata with the key ''\{0\}'' to point to the fs-type1 WebDAV entry point. For example: dav:fs-type1/themes/custom theme/skins/custom skin/.


