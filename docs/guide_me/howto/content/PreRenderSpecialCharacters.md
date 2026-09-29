# How to render or pre-render special characters in a Unix or Linux environment

## Applies to

> HCL Digital Experience v9.5 and higher  

## Introduction

The default character encoding for rich text and text elements in Web Content Manager (WCM) is UTF-8, whereas most Unix or Linux operating systems use ISO-8859-1. This discrepancy can cause issues when rendering or pre-rendering special characters on non-Windows systems. This article describes how to resolve character encoding issues when rendering or pre-rendering special characters in Unix or Linux environments.

## Instructions

To resolve character encoding issues when rendering or pre-rendering special characters, perform one of the following options:

### Converting pre-rendered files using `iconv`

Keep the operating system character encoding set to ISO-8859-1 and use a conversion utility such as iconv to convert pre-rendered files from UTF-8 to ISO-8859-1.

Run the following command:

```bash
iconv --from-code=UTF-8 --to-code=ISO-8859-1 ./oldfile.htm ./newfile.html
```

### Changing the default WCM encoding

Change the default character encoding used by WCM to ISO-8859-1.

1. Open the IBM Integrated Solutions Console (WAS admin console) in a web browser.
2. Navigate to **Resources > Resource Environment > Resource Environment Providers > WCM WCMConfigService > Custom properties**.
3. Locate the **connect.defaultencoding** property.
    - If the property is present, set its value to `ISO-8859-1`:
        1. Select the **connect.defaultencoding** property.
        2. Set its **Value** to `ISO-8859-1`.
        3. Select **Apply**.
        4. Select **Save** at the top of the console messages.

    - If the property is not present, create it and set its value to `ISO-8859-1`.
        1. Select **New...**.
        2. Enter the following details:
            1. **Name:** `connect.defaultencoding`
            2. **Value:** `ISO-8859-1`
        3. Select **Apply**.
        4. Select **Save** at the top of the console messages.

4. Restart the HCL Digital Experience (DX) server.

    !!!note
        Changing this setting modifies the character set of all content delivered through the WCM connect servlet.

### Changing your operating system encoding

Change the default character encoding of your Unix or Linux operating system to UTF-8.
