# Email administration

View the steps you need to complete before your run time server can send personalized email.

Before your run time server can send personalized email:

-   Verify that the pznscheduler.ear is as an Enterprise Application.
-   Have a properly configured and operating SMTP email server.

    JavaMail provides the SMTP required to send email. You can manage email responses from customers and outgoing error conditions \(such as an unknown email address\) using a standard email client.

-   Configure a Mail Provider using the WebSphere® Integrated Solutions Console.

    1.  Click **Resources** \> **Mail** \> **Mail Providers**.
    2.  Create a mail session to use with Personalization. By default, Personalization looks for a mail session in mail/personalizationMailSession/jndi. The JNDI name used is configurable in the PersonalizationService.properties file if you want to use Personalization with an existing mail session you have configured. If you are creating a new mail session, you must specify a Mail Transport Host. This is the mail server Personalization uses to send email. If your mail server is secured, you must specify a Mail Transport User ID and Mail Transport Password.
    3.  Restart the server on which the email rules execute for the changes to take effect.

-   Additional configuration is available through the PersonalizationService.properties file. Using this file, you configure how often Personalization checks for rule events that run scheduled or repeating emails. You can specify what port an email rule will try to connect to when retrieving the bodyuri of the rule. You can also configure the mail session being used.


???+ info "Related information"
    - [Example: Simple email action](../rules/actions/pzn_example_simple_email_action.md)

