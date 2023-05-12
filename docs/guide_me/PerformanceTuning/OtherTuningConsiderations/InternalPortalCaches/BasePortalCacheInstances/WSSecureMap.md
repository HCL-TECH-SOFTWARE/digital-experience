# WSSecureMap

Default size: 2000, default lifetime: (Same as ltpaToken timeout. Cache entries also go away when user is
logged out), usage pattern: regular.

The WSSecureMap cache stores security attributes used to recreate user credential. It scales with the
number of users who log in.

In the WAS Knowledge Center, it is documented as "Security cache" in the diagram at
http://www-01.ibm.com/support/knowledgecenter/SS7JFU_8.0.0/com.ibm.websphere.express.doc/info/exp/ae/csec_secattributeprop.html?cp=SS7JFU_8.0.0%2F1-8-32-2-10&lang=en.

## How to Set

In the WebSphere Integrated Solutions Console
Security --> Global Secuirty --> Custom properties --> New

Create both of these security custom properties:
Name: `com.ibm.ws.security.WSSecureMapInitAtStartup`
Value: `true`
Name: `com.ibm.ws.security.WSSecureMapSize`
Value: `<integer 100 or greater>`