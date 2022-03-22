# Troubleshooting: Enable federated security option

Enabling federated security is part of many environment setups. If you encounter a failure during the configuration process, determine whether you can run the step again, skip the step, or if you must clean up the step. For some failed steps, learn how to correct the issue and recover from the failure.

Each potential step in the configuration is included. Because the steps vary depending on your selections, the steps are not numbered. Find the step that failed to learn more about correcting and recovering from the failure. If you need to change a value that you entered in the wizard, then you must run the configuration again.

**Tip:** If you must go through the wizard again, download the wizard selections that you made to save time. Then, cancel the configuration. Start the process over and upload your saved selections. Correct or enter values for the parameters that caused the failure.

**Attention:** The Enable Federated Security option modifies the wimconfig.xml file. Make a backup copy of this file before you run any of the configuration tasks.

```
[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/config/cells/CellName/wim/config/wimconfig.xml
```

# Manual Step: Retrieve the SSL certificate from the SSL port

|Actions|Notes|
|-------|-----|
|Run the step again|Not applicable|
|Skip the step|Yes, if you completed this manual step successfully, you can skip the step in subsequent configuration attempts|
|Clean up step|None required|

# Create a backup of the HCL Portal profile before modifying cell security

|Actions|Notes|
|-------|-----|
|Run step again|You can run the step repeatedly without causing any harm.|
|Skip step|If this step is successful, you can skip it if you run the configuration process again.|
|Clean up step|None required|

# Validate your LDAP server settings

During this step, the wizard attempts to connect to your LDAP server and authenticate by using the provided credentials and LDAP information.

|Actions|Notes|
|-------|-----|
|Run step again|You can run the step repeatedly without causing any harm.|
|Skip step|If this step is successful, you can skip it if you run the configuration process again.|
|Clean up step|None required|

1.  Verify that the values used to connect with the LDAP were entered correctly. Click **View Step Command** to see which values are used.


# Add an LDAP user registry to the default federated repository

During this step, the wizard attempts to add your LDAP to the federated repository. This step uses the same parameters as the step that validates the LDAP server settings.

|Actions|Notes|
|-------|-----|
|Run step again|You can run the step repeatedly without causing any harm.|
|Skip step|If this step is successful, you can skip it if you run the configuration process again.|
|Clean up step|Complete the following steps from the WebSphere® Integrated Solutions Console to remove the configured repository:1.  Go to **Security** \> **Global Security** \> **Configure**.
2.  Remove the repository from the realm.
3.  Go to **Manage repositories** and delete the repository configuration.

|

# Register the WebSphere Application Server scheduler tasks

|Actions|Notes|
|-------|-----|
|Run step again|You can run this step again after you clean up the issue.|
|Skip step|If this step is successful, you can skip it if you run the configuration process again.|
|Clean up step|Log in to the WebSphere Integrated Solutions Console. Go to **Resources** \> **Schedulers** and delete the **WPSTaskScheduler**.If this task fails because of the administrator ID, change the federated.ldap.bindDN and optionally the newAdminId value. These values must be unique. Then, rerun this task. If this action does not resolve the issue, run the wp-change-portal-admin-user and wp-change-was-admin-user tasks. These tasks change the PortalAdminId and WasUserId so that the file system administrators are different from the LDAP users.

|

# Replace the file-based HCL Portal and WebSphere Application Server users and groups with users and groups from your LDAP server

During this step, the wizard attempts to configure the portal to use the administrative user and user group that is stored in your LDAP server. The administrative ID and group must exist in your LDAP server. If the ID and group do not exist, create them and try the step again.

|Actions|Notes|
|-------|-----|
|Run step again|You can run the step repeatedly without causing any harm.|
|Skip step|If this step is successful, you can skip it if you run the configuration process again.|
|Clean up step|You can log in to the WebSphere Integrated Solutions Console. However, the portal administrative user does not work as expected. You do not need to deactivate security with the file-based repository.If the WebSphere Application Server administrative user is not functional, it is likely that the WebSphere Integrated Solutions Console is not accessible. If you cannot log in to the WebSphere Integrated Solutions Console, disable security in the security.xml file in the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/config/cells/cellname directory. Restart WebSphere Application Server and log in. Then, complete the following steps:

1.  Go to **Users and Groups** \> **Administrative user roles**.
2.  Validate the current administrative user ID or set a new user.
3.  Go to **Resources** \> **Resource Environment** \> **Resource Environment Providers** \> **WP AccessControlDataManagementService** \> **Custom properties**.
4.  Validate the values for the administrative users and groups of the different domains. If necessary, update the values to a valid user.

**Valid users:** To find valid users, go to **Users and Groups** \> **Manage Users** to search for valid users.


|

# Update the user registry where new users and groups are stored

|Actions|Notes|
|-------|-----|
|Run step again|You can run the step repeatedly without causing any harm.|
|Skip step|If the current user repository is correct for new users and groups, you can skip this step.|
|Clean up step|Complete the following steps from the WebSphere Integrated Solutions Console to change the repository:1.  Go to **Security** \> **Global Security** \> **Federated repositories** \> **Supported entity types**.
2.  Click one of the following options to edit the **Base Entry for the Default Parent** to the specific Base Entry for your target repository:
    -   **Group**
    -   **OrgContainer**
    -   **PersonAccount**

|

# Recycle the servers after a security change

During this step, the wizard stops and starts the portal server.

|Actions|Notes|
|-------|-----|
|Run step again|Yes, run this step again under the following conditions. -   If this step fails, run the step again.
-   If you are running the configuration again.

|
|Skip step|If you are running the configuration again, you can skip this step only if you skipped all the previous steps.|
|Clean up step|None required|

# Update the search administration user

The wizard updates the user ID that is used to manage the search collections.

|Actions|Notes|
|-------|-----|
|Run step again|Yes, run this step again under the following conditions.

-   If this step fails, run the step again.
-   If you are running the configuration again.

|
|Skip step|If you are running the configuration again, you can skip this step only if you skipped all the previous steps.|
|Clean up step|Log in to the WebSphere Integrated Solutions Console. Go to **Security** \> **Global security** \> **Java Authentication and Authorization Service** \> **J2C authentication data**. Change the user ID and password for the **SearchAdminUser** and the alias.|

# After you change the security model, the servers need to be restarted

During this step, the wizard stops and starts the portal server.

|Actions|Notes|
|-------|-----|
|Run step again|Yes, run this step again under the following conditions. -   If this step fails, run the step again.
-   If you are running the configuration again.

|
|Skip step|If you are running the configuration again, you can skip this step only if you skipped all the previous steps.|
|Clean up step|None required|

# Verify that all defined attributes are available in the configured LDAP user registry

|Actions|Notes|
|-------|-----|
|Run step again|Yes, run this step again under the following conditions: -   If this step fails, run the step again.
-   If you are running the configuration again.

|
|Skip step|If you are running the configuration again, you can skip this step if both of the following conditions are true: -   The step completed successfully before
-   You did not change any attributes when you corrected other failures

|
|Clean up step|None required|

# Manual Step: Update the appropriate MemberFixerModule.properties file with the values for your LDAP users

|Actions|Notes|
|-------|-----|
|Run step again|Not applicable|
|Skip step|Yes, if you previously modified the properties file, you can skip this step.|
|Clean up step|None required|

# Run the member fixer tool

During this step, the wizard runs the member fixer tool to clean up the entries in the portal server.

|Actions|Notes|
|-------|-----|
|Run step again|Yes, run this step again under the following conditions. -   If this step fails, run the step again.
-   If you are running the configuration again.

|
|Skip step|If you are running the configuration again, you can skip this step only if you skipped all the previous steps.|
|Clean up step|None required|

# Manual Step: Map attributes to ensure proper communication between HCL Portal and the LDAP server

|Actions|Notes|
|-------|-----|
|Run step again|Not applicable|
|Skip step|If you successfully completed the step before, then skip this step.|
|Clean up step|None required|

