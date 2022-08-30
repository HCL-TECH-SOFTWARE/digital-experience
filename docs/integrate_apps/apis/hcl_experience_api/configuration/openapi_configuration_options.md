# Configuration options \| HCL Experience API

The HCL Experience API comes with a set of default configurations. The build package also includes this information, along with the installation steps.

## Configuration options for HCL Experience API

These default configurations will be sufficient for most implementers such as administrators and developers:

-   `PORTAL_HOST=0.0.0.0`
-   `PORTAL_PORT=30015`
-   `PORTAL_SSL_ENABLED=false`
-   `CORS_ORIGIN="http://localhost:3002"`
-   `CORS_ALLOWED_HEADERS="Content-Type, Authorization, Accept, Cookie, Connection, Host"`
-   `CORS_EXPOSED_HEADERS="Content-Range, X-Content-Range, set-cookie, Content-Type, Date, Content-Length, Connection"`
-   `CORS_METHODS="GET,HEAD,PUT,PATCH,POST,DELETE"`
-   `CORS_PREFLIGHT_CONTINUE=false`
-   `CORS_OPTIONS_SUCCESS_STATUS=200`
-   `CORS_MAX_AGE=86400`
-   `CORS_CREDENTIALS=true`
-   `NODE_TLS_REJECT_UNAUTHORIZED=0 // To access https HCL Portal instance from http EXPERIENCE API`

Nevertheless, the following configuration parameters always have to be changed:

-   `PORTAL_HOST`, `PORTAL_PORT` should be changed to HCL Digital Experience hostname and port number.
-   If the HCL Experience API is accessed from a web application \(e.g. Sample Content UI application\), `CORS_ORIGIN` should point to the URL where the web application is accessible.


