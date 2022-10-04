# Encrypting sensitive data

When you create a new content source using the Manage Search portlet, some secured content sources require that you enter sensitive data. For example, this can be the user ID and password of the crawler user ID required for accessing the secured content source. When you later export the configuration of the search collection, you might want to protect the sensitive data. You can encrypt such sensitive data so that it is not stored as plain text on the hard drive. If you do not encrypt such data, the data is not included in the export.

For example, consider the case of content sources in the form of secured portal sites or HTTP sites that require a user ID and password. This sensitive data is stored on the portal server hard drive in plain text unless you choose to encrypt it. In order to ensure that such sensitive data is encrypted, perform the following procedure after portal installation:

1.  Copy the file searchsecret.xml to a temporary directory temp .

    The original file is located in the following directory:

    -   For UNIX™Linux™: `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/search/wp.search.admin/bin`
    -   For z/OS®: `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/search/wp.search.admin/bin`
    -   For IBM® i: `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/search/wp.search.admin/bin`
    -   For Windows™: `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)\search\wp.search.admin\bin`

2.  Open the copied file searchsecret.xml with an editor.

    Open the copied file searchsecret.xml with an ASCII editor.

3.  Replace the string CHANGE TO YOUR SECRET KEY  with a random string of your choice.

4.  Run the updated file searchsecret.xml by using the XML configuration interface command:

    ```
    xmlaccess.sh|bat -in searchsecret.xml -out results.xml 
                     -user wpsadmin -pwd wpsadmin 
                     -url http://local\_host:local\_port/wps/config 
    ```

    1.  Specify the file name using the -in option.

    2.  Specify a result file using the -out option.

    3.  Check the result file to make sure that the XML request was executed successfully.

    The script creates a slot called `search.secret` in the credential vault. Portal search uses this slot to encrypt the passwords configured for crawlers. If this slot does not exist, the password is saved as clear text on the portal server hard drive.

    The file xmlaccess.sh\|bat is located in the directory `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/bin`. Example of the full command syntax for running the script searchsecret.xml:

    ```
    [PortalServer\_root](../reference/wpsdirstr.md#wp_root)/bin/xmlaccess.sh|bat -in temp/searchsearchsecret.xml 
         -user wpsadmin -password wpsadmin -url http://localhost:10039/wps/config
    ```

    For more details about how to use the XML configuration interface, refer to the topics about the XML configuration interface, especially about Working with the XML configuration interface.

5.  Delete the copied file searchsecret.xml that contains your encryption key.

???+ info "Related information"
    -   [Working with the XML configuration interface](../../../../extend_dx/development_tools/portal_admin_tools/xml_config_interface/index.md)