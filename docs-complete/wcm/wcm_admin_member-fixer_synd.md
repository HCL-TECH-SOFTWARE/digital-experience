# Member fixer with syndication 

You can configure your system to automatically run the member fixer tool when syndicating. The member fixer is run on the subscriber during syndication. It is run against items that have just been syndicated. Details of the member fixer operations are included in the syndication report.

To run the member fixer during syndication add or update the following properties in the `WCM WCMConfigService` service using the WebSphere® Integrated Solutions Console:

|Parameter|Details|
|---------|-------|
|deployment.fixMembers|To enable member fixer to be run during syndication, set this parameter to true.|
|syndication.memberfixer.altDn|To update references to nonexistent users or groups with custom mappings set in the memberfixer.properties file, set this parameter to update.To remove references to nonexistent users or groups, set this parameter to remove.

|
|syndication.memberfixer.invalidDn|To update references to users or groups that have invalid distinguished names with the portal administrator user distinguished name, set this parameter to update.To remove references to users or groups that have invalid distinguished names, set this parameter to remove.

|
|syndication.memberfixer.mismatchid|To fix references to users and groups with mismatched unique IDs, set this parameter to update.To remove references to users and groups with mismatched unique IDs, set this parameter to remove.

|
|syndication.memberfixer.fixCase|This parameter is used to define how to treat case differences when updating or fixing distinguished names. To leave the case unchanged, set this parameter to update.

To convert the case to lowercase, set this parameter to lower.

|
|syndication.memberfixer.realm|In a federated security environment with multiple realms, you must specify the name of the realm to run the member fixer against using this parameter.|
|syndication.memberfixer.norealmdn|In a federated security environment with multiple realms, the member fixer task can be used to check whether there are any users and groups that are referenced in items that are not under any of the base distinguished names that are defined for the realm and fix these references. To enable this, set this parameter to true.|

**Note:** The Member fixer, when run automatically via Syndication, preserves the dates of the updated items.

**Parent topic:**[The web content member fixer task ](../wcm/wcm_admin_member-fixer_overview.md)

**Related information**  


[Staging to production process](../deploy/dep_ovr.md)

