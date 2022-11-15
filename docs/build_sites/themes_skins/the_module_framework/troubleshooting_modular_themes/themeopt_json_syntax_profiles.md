# Syntax in modules and profile definitions

If your theme is not behaving as it should, it could be because there are syntax problems within the module or profile files.

Several types of problems could occur, including invalid elements or attributes, invalid element child relationships, invalid attribute values, or invalid attribute value combinations. Some elements and attributes are required, and some must not appear more than once. For more information, see *Theme modules*.

The modules and profiles are validated at runtime when the theme is first loaded. The runtime checks are sometimes able to detect problems that can slip through the schema validations. Perform the schema validations before deploying the JSON files. When syntax errors are encountered at runtime, they are written as warnings in the SystemOut.log file. These warnings begin with message identifier prefix EJPNK so searching for that string can help you locate them quickly. For example

```
EJPNK0060W: The attribute "version" in module test_analyzer_module_invalidsyntax_1 is not a valid attribute of element "prereq". Valid attributes for "prereq" are [id, minVersion, type]
```

All syntax warnings are also included in the Theme Optimization Analyzer Validation Report.


???+ info "Related information:"
    - [Module schema definition](../writing_module/themeopt_mod_global.md)

