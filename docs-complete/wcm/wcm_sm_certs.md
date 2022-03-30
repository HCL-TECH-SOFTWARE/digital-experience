# Social media certificates 

To communicate to Facebook, LinkedIn and Twitter, your server requires the SSL certificates for these social networks to be installed.

When these certificates expire, you must refresh them on your server by removing then and adding them again.

## Viewing certificates

To view a list of current certificates for Facebook, LinkedIn and Twitter, run the following command from the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` directory:

-   **Windows™**

    ConfigEngine.bat action-list-wcm-social-certs

-   **AIX® HP-UX Linux™ Solaris**

    ./ConfigEngine.sh action-list-wcm-social-certs

-   **IBM® i**

    ConfigEngine.sh action-list-wcm-social-certs

-   **z/OS®**

    ./ConfigEngine.sh action-list-wcm-social-certs


## Removing certificates

To remove all current certificates for Facebook, LinkedIn and Twitter, run the following command from the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` directory:

-   **Windows™**

    ConfigEngine.bat action-remove-wcm-social-certs

-   **AIX® HP-UX Linux™ Solaris**

    ./ConfigEngine.sh action-remove-wcm-social-certs

-   **IBM® i**

    ConfigEngine.sh action-remove-wcm-social-certs

-   **z/OS®**

    ./ConfigEngine.sh action-remove-wcm-social-certs


## Installing certificates

To install the certificates for Facebook, LinkedIn and Twitter, run the following command from the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` directory:

-   **Windows™**

    ConfigEngine.bat action-install-wcm-social-certs

-   **AIX® HP-UX Linux™ Solaris**

    ./ConfigEngine.sh action-install-wcm-social-certs

-   **IBM® i**

    ConfigEngine.sh action-install-wcm-social-certs

-   **z/OS®**

    ./ConfigEngine.sh action-install-wcm-social-certs


**Note:** If your server is located behind a firewall, you might need to manually import these certificates. See the WebSphere® Application Server documentation for [instructions on importing certificates](http://www-01.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/tsec_ssladdsignercert.html?cp=SSAW57_8.5.5%2F3-8-2-33-4-11). The following locations are for each certificate type:

-   Facebook: graph.facebook.com

    **Note:** On z/OS systems, you must use the IP address of the Facebook certificate.

-   LinkedIn: api.linkedin.com
-   Twitter: api.twitter.com

SSL port 443 is the default SSL port for these certificates.

**Parent topic:**[Social Media Publisher ](../wcm/wcm_sm.md)

