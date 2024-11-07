# Other Database Considerations

## Cold Start

On a cold start of Portal, when web pages are first accessed, there are some expensive JCR database calls. The results of those database calls are cached. After Portal is warmed up, there shouldn’t be any database calls that take a long time to process. It is a good practice for the Portal administrator to access a few of the common pages after a cold start, before Portal is made available for general access. After warmup, if slow database queries are encountered, the Portal Performance Troubleshooting Guide has a section that can assist with troubleshooting database performance issues.

## First Time a User Logs In

HCL Portal maintains some information about users in its database tables, which grow when a user first logs in. Because we were interested in the steady-state performance of HCL Portal, our performance benchmarks evaluate the system after all users have logged in at least once.