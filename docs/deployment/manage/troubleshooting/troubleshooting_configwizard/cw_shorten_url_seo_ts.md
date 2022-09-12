---
title: Modify site URLs for SEO
---

# Troubleshooting: Modify site URLs for search engine optimization

Shorten your HCL Digital Experience site URLs for search engine optimization.

!!!note
    If you encounter a failure during the configuration process, determine whether you can run the step again, skip the step, or if you must clean up the step. For some failed steps, learn how to correct the issue and recover from the failure.

Each potential step in the configuration is included. Because the steps vary depending on your selections, the steps are not numbered. Find the step that failed to learn more about correcting and recovering from the failure. If you need to change a value that you entered in the wizard, then you must run the configuration again.

!!!note "Tip"
    If you must go through the wizard again, download the wizard selections that you made to save time. Then, cancel the configuration. Start the process over and upload your saved selections. Correct or enter values for the parameters that caused the failure.

## Validate the context root value selected

**About this task:**

|Actions|Notes|
|-------|-----|
|Run the step again|You can run this step again if you changed some of the input values and want to re-validate the new values.|
|Skip the step|Not recommended, but you can skip this step if do not want to validate the new values that define the context path of your site.|
|Clean up step|None required.|

## Stop the portal server

**About this task:**

|Actions|Notes|
|-------|-----|
|Run the step again|Run the step again, if it did not complete successfully before.|
|Skip the step|Do not skip this step.|
|Clean up step|None required.|

## Modify the servlet paths for all applications and portlets

**About this task:**

|Actions|Notes|
|-------|-----|
|Run the step again|Run the step again, if it did not complete successfully before.|
|Skip the step|If you successfully completed the step before, or if you do not want to change the context path of your portal site, skip this step.|
|Clean up step|None required.|

## Add navigational state information to your friendly URL

**About this task:**

|Actions|Notes|
|-------|-----|
|Run the step again|Run the step again, if it did not complete successfully before.|
|Skip the step|If you successfully completed the step, or of if you already have a configuration that ensures that navigational state information in URLs, then skip this step.|
|Clean up step|None required.|

## Remove navigational state information from your friendly URL

**About this task:**

|Actions|Notes|
|-------|-----|
|Run the step again|Run the step again, if it did not complete successfully before.|
|Skip the step|If you successfully completed the step, or of if you already have a configuration that ensures that navigational state information is removed from URLs, skip this step.|
|Clean up step|None required.|

## Manual step: Configure your external web server

**About this task:**

|Actions|Notes|
|-------|-----|
|Run the step again|Run the step again, if it did not complete successfully before.|
|Skip the step|Skip the step if you do not use an external web server.|
|Clean up step|None required.|

**Known issue:** If you do not have a web server, you must resynchronize the nodes and restart the cluster before you can change the jsp components in the Web Resources library.

## Manual step: Change the JSP components in the Web Resources v70 Library

**About this task:**

|Actions|Notes|
|-------|-----|
|Run the step again|You can do this manual step again.|
|Skip the step|Skip the step if you do not use WCM JSP components in the Web Resources v70 Library.|
|Clean up step|None required.|

## Optional manual step: If your custom themes use Dojo, update your themes to reference the correct Dojo context root

**About this task:**

|Actions|Notes|
|-------|-----|
|Run the step again|You can do this manual step again.|
|Skip the step|You can skip this step if the theme you are using does not contain coded references to Dojo.|
|Clean up step|None required.|

## Manual step: Refresh your search c1ection and regather documents

**About this task:**

|Actions|Notes|
|-------|-----|
|Run the step again|Run the step again, if it did not complete successfully before.|
|Skip the step|You can skip this step only if you are not using Portal search.|
|Clean up step|None required.|

## Manual step: Resynchronize the nodes and restart the cluster

**About this task:**

|Actions|Notes|
|-------|-----|
|Run the step again|Run the step again, if it did not complete successfully before.|
|Skip the step|Do not skip this step.|
|Clean up step|None required.|

## Optional manual step: Update syndicator and subscriber servers that reference your modified site URL. If you do not use syndication, skip this step

**About this task:**

|Actions|Notes|
|-------|-----|
|Run the step again|You can do this manual step again.|
|Skip the step|You can skip this step if you are not using WCM syndication.|
|Clean up step|None required.|

## Optional manual step: Disable friendly URL redirects

**About this task:**

|Actions|Notes|
|-------|-----|
|Run the step again|You can do this manual step again.|
|Skip the step|Only run this step if you do not want a URL redirect to add navigational state information to your site URL.|
|Clean up step|None required.|

## Optional manual step: Update the personalization publishing server with the new site URL

**About this task:**

|Actions|Notes|
|-------|-----|
|Run the step again|You can do this manual step again.|
|Skip the step|You can skip this step if you are not using a personalization publishing server.|
|Clean up step|None required.|


