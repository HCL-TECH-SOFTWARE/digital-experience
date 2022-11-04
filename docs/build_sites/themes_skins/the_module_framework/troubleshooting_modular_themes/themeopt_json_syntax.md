# Verifying JSON file Syntax

If a JSON file is not formatted correctly it cannot be processed by the server, and is not loaded into your theme.

A correctly formatted JSON file is both syntactically correct JSON. It also contains only syntactically correct HCL Portal Theme Optimization Framework Module definitions, theme profile definitions, or JSON menu Framework menu definitions.

To avoid problems, verify both the basic JSON syntax, and the specific HCL Portal syntax of your JSON file before you deploy it to your HCL Portal environment.

To validate the basic JSON syntax, use a tool such as JSONLint. For more information, see the JSONLint link.HCL Portal was extended to allow comments in the JSON file. A strict JSON validator such as JSONLint flags these comments as incorrect syntax. Remove any such comments before you pass the JSON to a validating parser.

To validate the HCL Portal specific definition syntax, you can use a JSON schema validator, which takes as input two JSON files. It compares the input to be validated, and a schema against which to validate. JSON schema files are available for module definitions, profiles, and menu definitions.


???+ info "Related information:"
    - [JSONLint - The JSON Validator](https://jsonlint.com)

