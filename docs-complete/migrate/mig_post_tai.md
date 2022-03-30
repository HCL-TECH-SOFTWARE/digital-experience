# Disabling TAI if disabled previously 

If TAI was disabled before you began migration, and you had to enable it in order to run the migration, then you might need to disable TAI on both the source and target environments as a post-migration step.

1.  To disable TAI, complete the following task:
2.  Log in to the WebSphere® Integrated Solutions Console.

3.  Go to **Security** \> **Global security**.

4.  Select **Enable administrative security** and **Enable application security**.

5.  On the Global security page, locate the **Authentication** section and click **Web and SIP security** \> **Trust association**.

6.  Clear **Enable Trust Assocation**.

7.  Click **Apply**.

8.  Click **Save**.

9.  If you have a cluster environment, synchronize the nodes.

10. Restart the server for a stand-alone environment, and restart all servers for a cluster environment.


**Parent topic:**[Administrative tasks ](../migrate/mig_post_admintasks.md)

**Related information**  


[Verifying that WebSphere Application Server Trust Association Interceptor is enabled ](../migrate/mig_pre_src_tai.md)

