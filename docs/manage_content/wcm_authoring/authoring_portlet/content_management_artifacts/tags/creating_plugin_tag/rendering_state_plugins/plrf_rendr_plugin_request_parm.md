---
id: plrf_rendr_plugin_request_parm
title: Request parameter plug-in
---




Use the `RequestParameter` to print out a specified request parameter.

-   Format is `[Plugin:RequestParameter key='key' defaultValue='defaultValue']`.
-   To set a value in a request parameter, use the value parameter. The format is `[Plugin:RequestParameter key='key' value='value']`.
-   To delete a parameter without returning the previous value, use the "mode" parameter with a value set to "delete". The format is `[Plugin:RequestParameter key='key' mode='delete']`.
-   To remove a parameter and return the previously set value, use the "mode" parameter with the value "remove". The format is `[Plugin:RequestParameter key='key' mode='remove']`.

!!! note
    Always delete or remove request parameters when you no longer need them.

