---
title: Update Existing Application from CLI
---

# Updating an existing Script Application instance with the command line push application

You can use the Script Application push function to update an existing application on a portal page or to update an application in an HCL DX site area.

For details about how to create or update a Script Application instance in a site area, read *Creating and updating Script Applications with command line push support*.

To update a Script Application instance that was added to a portal page from the Application toolbar, which is not associated with a site area, complete the following steps.

1.  Turn on **Edit mode** on the portal page on which you want to update the Script Application instance.

2.  In the Script Application instance that you want to update, click **Actions** \> **Export Config**.

    The sp-config.json downloads to the location you set for downloads in your browser.

3.  Copy the sp-config.json file that you downloaded to the location where your Script Application instance is stored. Make sure the sp-config.json file is named exactly that and not as a copy

    For example: sp-config\(1\).json.

4.  Run the sp push command from the application root folder or by specifying that application root folder with the -contentRoot argument.

5.  For use with an unsecured development server, you can add an entry for `portalPassword` to avoid being prompted each time that you push an update. Do not store a password for any secure server, because the configuration file is stored as clear text on the file system.



