# Configuring contact information on person links 

When users click a person link, the Person card displays contact information for the selected person. You configure this information by modifying custom properties in the WebSphere Integrated Solutions Console, specifying the Member Manager attributes that correspond to the fields you want to display in the contact information and the order in which you want the information to appear.

1.  Select the appropriate console, depending on your environment:

    -   If you are running stand-alone, use the local WebSphere® Integrated Solutions Console.
    -   If you are running in a cluster, use the console of the Deployment Manager.
2.  Start the WebSphere Integrated Solutions Console by entering the URL in the location field of a web browser:

    http://example.com:admin\_port/ibm/console

    where example.com is the name of your server and admin\_port is the port that is assigned to the WebSphere Integrated Solutions Console.

3.  In the navigation, click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

4.  Locate and click the resource **WP PeopleService**.

5.  Under Additional Properties, click **Custom Properties**.

6.  Locate the custom properties **collapsedBCardItems** and **expandedBCardItems** and set each property's value to the Member Manager attributes that you want to display. The order in which you specify the attributes determines the order in which the corresponding information displays.

    -   ****collapsedBCardItems****

        Identifies the items that the Person card displays when business card details are hidden from view. For example: `ibm-jobTitle`, `telephoneNumber`

    -   ****expandedBCardItems****

        Identifies the items that the Person card displays when business card details are visible. For example: `ibm-primaryEmail`, `homePostalAddress`, `stateOrProvinceName`, `postalCode`, `countryName`

    The following Member Manager attributes are valid for specifying person link contact information:

    -   businessCategory
    -   carLicense
    -   cn
    -   countryName
    -   departmentNumber
    -   description
    -   displayName
    -   employeeNumber
    -   employeeType
    -   facsimileTelephoneNumber
    -   givenName
    -   homePostalAddress
    -   ibm-gender
    -   ibm-hobby
    -   ibm-jobTitle
    -   ibm-otherEmail
    -   ibm-personalTitle
    -   ibm-primaryEmail
    -   ibm-regionalLocale
    -   ibm-timeZone
    -   Initials
    -   localityName
    -   manager
    -   mobile
    -   pager
    -   postalAddress
    -   postalCode
    -   preferredLanguage
    -   roomNumber
    -   secretary
    -   seeAlso
    -   sn
    -   stateOrProvinceName
    -   street
    -   telephoneNumber
    -   uid
7.  Click **Apply** and then save the settings.

8.  Restart the portal server.


**Parent topic:**[People awareness ](../collab/i_coll_c_people_aw.md)

