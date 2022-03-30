# Configuring logout handling 

When a user logs out of HCL Digital Experience, a log out from SAP NetWeaver Portal needs to be performed as well. Otherwise, the user session on the SAP NetWeaver Portal remains open until it times out.

You can configure automatic log out from SAP NetWeaver Portal when a user logs out of HCL Digital Experience. To perform this configuration, insert the following JavaScript function into your theme and call it on click of the logout link. Replace `your\_sap\_portal\_host` and `port` with the values for your SAP NetWeaver Portal host and port.

```
function logoffFinalCall() {

   if (document.cookie.length>0) {
      isCookieExisting=document.cookie.indexOf("MYSAPSSO2")
      if (isCookieExisting != -1) {
         var lnDotPos = document.domain.indexOf( "." ); 
         if(lnDotPos>=0)document.domain = document.domain.substr(lnDotPos+1);
   
         var logoffForm = document.createElement("form");

         var logoffParam = document.createElement("input");
         logoffParam.name = "Command";
         logoffParam.value = "LOGOFF";
         logoffForm.appendChild(logoffParam);

         var logoffParam2 = document.createElement("input");
         logoffParam2.name = "Autoclose";
         logoffParam2.value = "1000";
         logoffForm.appendChild(logoffParam2);      
   
   //This component logs the user out of SAP NetWeaver portal.
      logoffForm.action = 
      "http://**your\_sap\_portal\_host:port**/irj/servlet/prt/portal/prtroot/com.sap.portal.dsm.Terminator";
   
         logoffForm.method = "post";
         logoffForm.target = "_blank";
         document.body.appendChild(logoffForm);   
   
         logoffForm.submit();
     }
   }   
}

```

Replace the variables as follows:

-   **MYSAPSSO2**

    Replace this variable with the name of the SSO cookie for your SAP NetWeaver Portal.

-   **your\_sap\_portal\_host**

    Replace this variable with the fully qualified URL to your SAP NetWeaver Portal.

-   **port**

    Replace this variable with the port of your SAP NetWeaver Portal.


**Parent topic:**[Configuring Integrator for SAP ](../admin-system/sap_int_cfg.md)

**Related information**  


[Configuring Tivoli Federated Identity Manager with SAML for single sign-on to SAP NetWeaver Portal ](../admin-system/sap_int_cfg_tfimsaml_sso.md)

[Completing the configuration ](../admin-system/sap_int_cfg_cmplt.md)

