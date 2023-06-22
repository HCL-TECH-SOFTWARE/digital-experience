# Warming Up Portal Before Opening for Business

The first time Portal is accessed JSPs get compiled. That can be a slow process. Therefore, after starting
Portal, but before ‘going live’ it is a good idea to access a few pages to get common JSPs compiled.

!!! important
    Recording Last Login Time for UsersBy default, WebSphere Portal will record the time a user logs in. This is used for reporting the number of users who have logged in recently; it is also needed for session resumption support. If neither of these features is needed, then it is possible to disable recording the user’s last login time.

Disabling the last login time will eliminate an insert or update operation on the USER_DESC table for each user login. This will reduce IO on the database server, but will probably not significantly reduce CPU utilization.

More information about user session persistence is given https://help.hcltechsw.com/digitalexperience/8.5/admin-system/adcfgpss.html?query=session%20persistence

## How to Set

In the Integrated Solutions Console
Resources -> Resource Environment -> Resource Environment Providers -> WP ConfigService -> Custom Properties -> New

Add the following properties:
    Name: timeout.resume.session
    Value: true
    Name: persistent.session.level
    Value: 0
    Name: record.lastlogin
    Value: false