# How to send plain text or HTML encoded emails using WCM?

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

This document describe how to send emails with Web Content Manager (WCM) using a JSP file. In this case, the native java classes in the IBM WebSphere Application Server JVM are used. The HTML form is included in this document if you want to use HTML forms. Alternatively, you could code the input fields in the JSP itself without requiring the HTML form.

## Instructions

???+ info "Disclaimer of warranties"
    The following code is sample code created by HCL Corp. This sample code is provided to you solely for the purpose of assisting you in the development of your applications. The code is provided "AS IS", without warranty of any kind. HCL shall not be liable for any damages arising out of your use of the sample code, even if they have been advised of the possibility of such damages.

1. Create an html component titled `MailHTMLForm` with these contents:

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

2. Create a JSP titled `wcmmail.jsp` and place in directory `\installedApps\index\wcm.ear\ilwwcm.war\jsp\html`. Add the following content into the jsp-file:

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

3. Modify the JSP properties above to match your email server/environment.

4. Create a WCM JSP component titled `SendMailJSPComponent` with this path `/jsp/html/wcmmail.jsp`.

5. Preview the html component `MailHTMLForm` using a url similar to this:  
    `http://myPortalServer.myCompany.com:10040/wps/wcm/jsp/html/emailform.htm`

6. Fill in the fields, for example, enter this in the `content` field:

    ```text
    Please register  
    Press "Send email" > email arrives at destination in HTML encoded format.  
    ```
