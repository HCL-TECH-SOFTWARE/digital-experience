# Session Timeout

The default value for the session timeout is 30 minutes. Reducing this value to a lower number can help reduce memory consumption, which allows a higher user load to be sustained for longer periods of time. Reducing the value too low can interfere with the user experience as users will be forced to log in again if
their session times out.

In the base Portal performance evaluation, we use an average think time of 12 seconds between mouse clicks. That is a shorter think time than humans use when interacting with a website. To compensate for the short think time, we used a short Session Timeout of 10 minutes. This is acceptable for a performance evaluation, but is not recommended for a production environment. The proper production setting depends on business needs. Load test should be run long enough to determine the system’s behavior when the maximum number of sessions is reached.

## How to Set

In the WebSphere Integrated Solutions Console

Servers > Server Types > WebSphere application servers > WebSphere_Portal > Container Settings:
Web Container Settings > Session Management > Session Timeout > Set Timeout