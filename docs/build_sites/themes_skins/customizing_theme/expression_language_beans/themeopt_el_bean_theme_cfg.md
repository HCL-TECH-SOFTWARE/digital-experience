---
id: themeopt_el_bean_theme_cfg
title: wp.themeConfig \| HCL Digital Experience
---
import useBaseUrl from '@docusaurus/useBaseUrl';



The wp.themeConfig encapsulates the theme configuration parameter lookup process.

Attributes:

-   **get\(key\)**

    The following list shows the lookup order:

    1.  Theme metadata
    2.  The provided Resource Environment Provider.
    Example:

    ```
    <c:set var="themeModuleContextRoot" value="${wp.themeConfig['resources.modules.ibm.contextRoot']}" />
    
    ```

    Parameters:

    -   **key**

        String, the property key to look up.

    Returns: String, the property value. It can be null.


**Parent topic:**[Expression language beans for accessing programming models](themeopt_el_bean.md)

