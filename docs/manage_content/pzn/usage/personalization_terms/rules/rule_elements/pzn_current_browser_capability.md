# Current Browser Capability rule

Browser Capability is an application object that allows you to profile a Web site visitor based on the attributes or capabilities of the browser being used. When applicable, it appears in the rule editor as an option when you select Resource.Attribute.

## Purpose

Browser Capability currently supports these attributes:

-   **AcceptLanguage**

    Returns the value of the header 'accept-language' from the request object.

-   **AcceptMimeTypes**

    Returns the value of the header 'accept' from the request object.

-   **Agent**

    Returns the value of the header 'user-agent' from the request object. This is a lowercase string that contains information about the client software, usually the browser name or version.

-   **BrowserType**

    Returns the browser type. Choices are available for supported browsers.

-   **FullVersion**

    Returns the version of the browser to one point of precision. For instance, 6.1 and 6.1.1 are both returned as 6.1.

-   **MajorVersion**

    Returns the first digit of the browser version. For instance, 6.0, 6.1 and 6.1.1 are all returned as 6.


**Parent topic:**[Rule elements](../pzn/pzn_rule_elements.md)

