# NLS and localization customization

HCL People Service enables dynamic management of language translations and localization settings through environment configurations and JSON files. In this page, you will learn how to customize the National Language Support (NLS) features of People Service.

## Configuration overview

Follow these steps to set up and customize NLS for People Service:

### Step 1: Configure the NLS_DIRECTORY Environment Variable

Configure the `NLS_DIRECTORY` environment variable to point to a directory that the service can access. This directory will hold your JSON files containing the translation keys and values.

#### Example configuration

```yaml
extraEnvVars:
  - name: NLS_DIRECTORY
    value: "/data/people/nls"
```

### Step 2: Place Language-Specific Translation Files in the NLS_DIRECTORY

Place your language-specific translation files in the NLS_DIRECTORY. These files should be named using the `<LANG>.json` format, where `<LANG>` is the ISO language code, such as *en* for English or *de* for German. See the [List of Supported Languages](https://opensource.hcltechsw.com/digital-experience/latest/deployment/manage/portal_admin_tools/language_support/Supporting_language/?h=languag) for the available languages and respective language codes.

#### File content structure

Each JSON file should contain key-value pairs corresponding to the translations you wish to override or add. For example:

```json
{
  "logoAltText": "Company Logo",
  "profilepage.aboutMe": "User information"
}
```

### Step 3: Identify Translation Keys

To identify the key of a specific translated value you want to update, use the URL query parameter `nlsIgnore=true`. For example, `https://customer.com/people/ui/profiles/admin?nlsIgnore=true`. This parameter suppresses translation initialization, displaying the underlying translation keys instead of the actual translations. This allows you to easily identify the key for your customization needs.

!!! Note
        Ensure that you have the right capitalization of translation keys. Some UI values may appear differently after transformation via CSS styles (for example, `text-transform: uppercase`). If in doubt, check the HTML element for the original value.


## Kubernetes configuration

Administrators should consider using a persistent volume to store the NLS configuration files to ensure translations are maintained across pod restarts and deployments.

Administrators can reuse the existing ReadWriteMany (RWX) volume (`hcl-people-service-data`) or attach another custom ReadWriteOnce (RWO) volume through the Helm `customPVCs` property.

## Volume path considerations

Ensure the volume path is correctly mapped to the expected directory in your service configuration. For example, if your persistent volume is mounted at `/persistent-volume-path/people/nls`, the service should recognize this as `/data/people/nls`. Ensure that the NLS folder is created within your volume mount.
