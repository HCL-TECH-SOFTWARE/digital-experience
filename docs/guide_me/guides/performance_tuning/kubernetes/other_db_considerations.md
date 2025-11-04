# Other Database Considerations

## Cold Start

On a cold start of Portal, the initial access to web pages triggers several resource-intensive JCR database calls. The results of these calls are cached, reducing the load on subsequent requests. Once the Portal is warmed up, long-running database operations should no longer occur. As a best practice, the Portal administrator should pre-load several commonly used pages after a cold start to ensure the system is warmed up before making it available to end users. After warmup, if slow database queries are encountered, the [Portal Performance Troubleshooting Guide](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0088400){target="_blank"} has a section that can assist with troubleshooting database performance issues.

## First Time a User Logs In

HCL Portal maintains some information about users in its database tables, which grow when a user first logs in. Because we were interested in the steady-state performance of HCL Portal, our performance benchmarks evaluate the system after all users have logged in at least once.