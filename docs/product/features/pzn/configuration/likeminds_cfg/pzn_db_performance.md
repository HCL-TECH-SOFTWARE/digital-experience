# Database performance \| LikeMinds configuration

View some guidelines for performance optimization in your LikeMinds database.

How you configure your database during installation has a significant impact on performance. Use the following guidelines to achieve the maximum performance in your LikeMinds database:

-   **Hardware setup**: Ideally, you should have one machine \(with two CPUs\), preferably the fastest, dedicated to the database, and the HCL Portal software on a separate machine. See the system requirements in the HCL Portal product documentation for more information.
-   **load distribution**: You can install the LikeMinds utilities onto separate machines to distribute load. Refer to the documentation for information about installing utilities to multiple machines.
-   **sifter configuration**: You can configure the `sifter` to accommodate heavy loads or busy sites. Be aware that the `sifter` has heavy memory usage.
-   **accumulator configuration:** As with the `sifter`, the `accumulator` has heavy memory usage, so you should schedule it to run during off-peak hours.

**Parent topic:**[Configuring LikeMinds](../pzn/pzn_configure_likemind_servers.md)

**Parent topic:**[Configuring LikeMinds](../pzn/pzn_configure_likemind_servers.md)

