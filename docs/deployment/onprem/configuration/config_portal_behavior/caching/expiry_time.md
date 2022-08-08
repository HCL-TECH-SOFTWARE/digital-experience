# Expiry time

The expiry time determines how long the page is stored in a cache.

HCL Portal allows three options for specifying expiry time:

-   **Cache always expires**

    The content is never cached in either a shared or a private cache; set the remote cache expiry to **0**.

-   **Cache never expires**

    The content can be stored indefinitely in either a shared or a private cache; set the remote cache expiry to **-1**.

-   **Cache expires after this many seconds**

    The content is stored for the number of seconds specified in either a shared or a private cache; set the remote cache expiry to a positive integer up to 2^31 -1.


**Parent topic:**[Caching](../security/tune_cache.md)

