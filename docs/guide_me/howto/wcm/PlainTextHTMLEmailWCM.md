# How to send plain text or HTML encoded emails using WCM

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

You can configure Web Content Manager (WCM) to send plain text or HTML encoded emails by integrating Java Server Pages (JSP) with native JavaMail classes in the IBM WebSphere Application Server (WAS) Java Virtual Machine (JVM). You can collect user inputs through an HTML form component or code input fields directly within the JSP. This article describes how to send plain text or HTML encoded emails using Web Content Manager (WCM) in HCL Digital Experience (DX).

## Instructions

To send plain text or HTML encoded emails, perform the following steps:

???+ info "Disclaimer of warranties"
    The following code is sample code created by HCL Corp. This sample code is provided to you solely for the purpose of assisting you in the development of your applications. The code is provided "AS IS", without warranty of any kind. HCL shall not be liable for any damages arising out of your use of the sample code, even if they have been advised of the possibility of such damages.

### Creating the HTML form component

1. Log in to HCL DX as an administrator.
2. Navigate to **Open applications menu > Web Content > Authoring** and select your target web content library.
3. Select **New > Component > HTML**.
4. Enter a **Name** for the component (for example, `MailHTMLForm`).
5. In the **HTML Markup** box, add HTML code similar to the following:

    ```html
    <HTML>
        <BODY>
            <FORM METHOD=POST ACTION="wcmmail.jsp">
                Enter your name: <INPUT TYPE=TEXT NAME=username SIZE=20><BR>
                Enter your email address: <INPUT TYPE=TEXT NAME=email SIZE=20><BR>
                Enter comments: <INPUT TYPE=TEXT NAME=content SIZE=50><BR>
                <P>
                <INPUT TYPE=SUBMIT VALUE="Send email">
            </FORM>
        </BODY>
    </HTML>
    ```
    
    This code block creates an input form that prompts users for their name, email address, and message content, and then submits the input data to `wcmmail.jsp`.

6. Select **Save and Close**.

### Creating and deploying the JSP file

1. Create a JSP file named `wcmmail.jsp`.
2. In the JSP file, add content similar to the following:

    !!!note
        Modify the server properties in the JSP file to match your specific Simple Mail Transfer Protocol (SMTP) mail server configuration.

    ```html
    //START JSP CONTENTS
    <%@ page import="java.io.*, java.net.*, javax.mail.*, javax.mail.internet.*, java.util.Properties" %>
    <HTML>
        <BODY>
            <% String email = request.getParameter( "email" );
               String content = request.getParameter( "content" );
            %>
            <%if ( email == null || email.equals( "" )) { %>                
                        Please press back button and enter an email address.
            <% } else {
                        Properties emailProperties = new Properties();
                        emailProperties.setProperty("mail.transport.protocol", "smtp");
                        emailProperties.setProperty("mail.host", "myMailServer.mycompany.com");
                        emailProperties.setProperty("mail.from", email);
                        Session mailSession = Session.getDefaultInstance(emailProperties, null);
                        Transport transport = mailSession.getTransport();
                        MimeMessage message = new MimeMessage(mailSession);
                        message.setSubject("WCM Javamail");
                        message.setContent( content , "text/html");
                        message.addRecipient(Message.RecipientType.TO, new InternetAddress(email));
                        message.setFrom(new InternetAddress(email));
                        transport.connect();
                        transport.sendMessage(message, message.getRecipients(Message.RecipientType.TO));
                        transport.close();%>
                        <br/>
                        This name will be registered <%= request.getParameter( "username" ) %>
                        <br/>
                        Your email has been sent to <%= email %> with this timestamp <%= new java.util.Date() %> 
                    <% } %>
        </BODY>
    </HTML>
    //END JSP CONTENTS
    ```
    
    This code block imports JavaMail classes, extracts input parameters from the HTML form request, configures SMTP properties, constructs an HTML email message, and sends the message using the JVM JavaMail Transport API.

3. Place the file in the WCM web application JSP directory similar to the following:

    ```text
    \installedApps\index\wcm.ear\ilwwcm.war\jsp\html
    ```

### Creating the JSP component

1. In the **Library Explorer**, select **New > Component > JSP**.
2. Enter a **Name** for the component (for example, `SendMailJSPComponent`).
3. In the **Path** box, enter `/jsp/html/wcmmail.jsp`.
4. Select **Save and Close**.

### Testing the email form

1. Preview the `MailHTMLForm` component by navigating to a URL similar to the following:

    `http://myPortalServer.myCompany.com:10040/wps/wcm/jsp/html/emailform.htm`

2. Enter the required information in the fields. For example, in the `content` field:

    ```text
    Please register  
    Press "Send email" > email arrives at destination in HTML encoded format.  
    ```

3. Select **Send email**.
