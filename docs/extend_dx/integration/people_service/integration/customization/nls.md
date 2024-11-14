!!! Abstract "Status"
    **In progress**

    - [DXQ-39455](https://jira.cwp.pnp-hcl.com/browse/DXQ-39455): Add/ Update Business card practitioner, admin docs

# NLS and localization customization

This document provides guidance on how to leverage the NLS (National Language Support) customization capabilities of our service. This service allows users to dynamically manage language translations and localization settings through environment configurations and JSON files.

## Configuration overview

### Setting up the NLS_DIRECTORY

To start using custom language translations, you must configure the `NLS_DIRECTORY` environment variable. This variable should point to a directory that the service can access. This directory will hold your JSON files containing the translation keys and values.

#### Example configuration

```yaml
extraEnvVars:
  - name: NLS_DIRECTORY
    value: "/data/people/nls"
```


### File format

Place your language-specific translation files in the NLS_DIRECTORY. These files should be named using the `<LANG>.json` format, where `<LANG>` is the ISO language code, such as en for English or de for German. See the [List of supported languages](https://opensource.hcltechsw.com/digital-experience/latest/deployment/manage/portal_admin_tools/language_support/Supporting_language/?h=languag) for the available languages and respective language codes.

#### File content structure

Each JSON file should contain key-value pairs corresponding to the translations you wish to override or add. For example:

```json
{
  "logoAltText": "Company Logo",
  "profilepage.aboutMe": "User information"
}
```

#### Identifying the translation key

In order to identify the key of the translated value you want to update, you can leverage the URL query parameter `nlsIgnore=true`, e.g. `https://customer.com/people/ui/profiles/admin?nlsIgnore=true`. This value leads to the translation initialization being suppressed and in turn will show the underlying translation keys instead of the actual translations. This allows you to identify the corresponding translation key to use as part of your provided customization.

!!! Note
    Ensure that identify the right capitalization of translation keys. Some values visible in the UI are transformed via CSS styles (e.g., `text-transform: uppercase`) and thus are displayed differently from the value that actually should be provided. If in doubt, check the HTML element for more details.


## Kubernetes configuration

Since the application runs on Kubernetes, administrators should consider using a persistent volume to store the NLS configuration files. This ensures that the translations are maintained across pod restarts and deployments.

It is suggested to reuse the existent RWX volume (`hcl-people-service-data`) or attach another custom RWO volume via the helm `customPVCs` property.

### Volume path considerations

Ensure the volume path is correctly mapped to the expected directory in your service configuration. For example, if your persistent volume is mounted at `/persistent-volume-path/people/nls`, the service should recognize this as `/data/people/nls`. Ensure the nls folder is created within your volume mount.
