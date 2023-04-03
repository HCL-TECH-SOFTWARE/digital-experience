# Disable Friendly URLs

Friendly URLs enhance the end user’s experience by placing a meaningful name in the browser’s address
field. However, there is a cost for using friendly URLs. In our results, disabling friendly URLs improved
capacity by 2% or more depending on the theme.

If you are using Blogs, Wikis or WCM content pages, do not set friendly.enabled or
friendly.pathinfo.enabled to false. For further discussion of this see https://help.hcltechsw.com/digitalexperience/9.5/wcm/wcm_config_wcmviewer_friendlyexample.html

To fully use friendly URLs, pages must be configured with friendly names.

## How to Set
In the WebSphere Integrated Solutions Console
Resources → Resource Environment → Resource Environment Providers → WP ConfigService

Modify the following custom properties:

    • Name: friendly.enabled
        Value: false
    • Name: friendly.pathinfo.enabled
        Value: false

Setting `friendly.enabled` to `false`, turns off Portal’s use of friendly URLs. Setting `friendly.pathinfo.enabled` to
`false` turns off WCM’s use of friendly URLs. If WCM is not used in an installation, and friendly names are
used by Portal, it is still advantageous to disable `friendly.pathinfo.enabled`.