# NLS and localization customization

HCL People Service enables dynamic management of language translations and localization settings through environment configurations and JSON files. In this page, you will learn how to set up and customize the National Language Support (NLS) features of HCL People Service.

## Setting up and customizing NLS for People Service

Follow these steps to set up and customize the NLS features of People Service:

1. Configure the `NLS_DIRECTORY` environment variable to point to a directory that the service can access. This directory will hold your JSON files containing the translation keys and values.

    See the sample `NLS_DIRECTORY` configuration below.

    ```yaml
    extraEnvVars:
      - name: NLS_DIRECTORY
        value: "/data/people/nls"
    ```

2. Configure your language-specific JSON files to contain key-value pairs corresponding to the translations you wish to override or add. For example:

    ```json
    {
      "logoAltText": "Company Logo",
      "profilepage.aboutMe": "User information"
    }
    ```

3. Name the JSON files using `<LANG>.json` format, where `<LANG>` refers to the ISO language code, such as **en** for English or **de** for German. Refer to the list of [Supported Languages](../../../../../deployment/manage/portal_admin_tools/language_support/Supporting_language.md) for the available languages and their respective language codes.

4. Place your JSON files in the `NLS_DIRECTORY`.

5. Use the URL query parameter `nlsIgnore=true` to identify the key of a specific translated value you want to update. This parameter suppresses the translation initialization and displays the underlying translation keys instead of the actual translations, allowing you to easily identify the key for your customization needs. For example, `https://customer.com/people/ui/profiles/admin?nlsIgnore=true`.

    !!! Note
        Ensure that your translation keys use the correct lettercase. Some UI values may appear differently after editing their CSS styles (for example, `text-transform: uppercase`). Check the HTML element for the original value if you are unsure.

## Kubernetes configuration

Administrators should consider using a persistent volume to store the NLS configuration files to ensure translations are maintained across pod restarts and deployments. Administrators can reuse the existing ReadWriteMany (RWX) volume (`hcl-people-service-data`) or attach another custom ReadWriteOnce (RWO) volume through the Helm `customPVCs` property.

## Volume path considerations

- Ensure the volume path is correctly mapped to the expected directory in your service configuration. For example, if your persistent volume is mounted at `/persistent-volume-path/people/nls`, the service should recognize this as `/data/people/nls`. 
- Ensure that the NLS folder is created within your volume mount.
