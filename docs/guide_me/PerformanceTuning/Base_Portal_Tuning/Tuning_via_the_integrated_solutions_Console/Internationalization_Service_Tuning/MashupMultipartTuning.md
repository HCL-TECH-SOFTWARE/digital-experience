# Mashup Multipart Tuning

The Portal 8.5 theme multipart downloading can be disabled to improve performance. Be aware that
disabling this may cause performance issues on client side aggregation themes from earlier Portal releases.

## How to Set

In the WebSphere Integrated Solutions Console
Resources → Resource Environment → Resource Environment Providers → WP CommonComponentConfigService → Custom properties

Modify the following custom properties:

    • Name: cc.multipart.enabled
        Value: false (the default)

    • Name: cc.multipart.correlatehosts
        Value: false