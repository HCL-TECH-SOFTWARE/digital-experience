# Cloning data

These procedures describe how to clone web content data from one system to another.

1.  On the source system:

    1.  Disable all syndicators

    2.  Stop the Portal server

    3.  Back up the data of JCR database name that is specified by "`jcr.DbName`" parameter in the wkplc\_dbdomain.properties file:

        |System|Location|
        |------|--------|
        |Windows™|[wp\_profile\_root](../../../../../guide_me/wpsdirstr.md)\\ConfigEngine\\properties directory.|
        |UNIX™Linux™|[wp\_profile\_root](../../../../../guide_me/wpsdirstr.md)/ConfigEngine/properties directory.|
        |IBM® i|[wp\_profile\_root](../../../../../guide_me/wpsdirstr.md)/ConfigEngine/properties|

        Refer to the documentation for your database for specific backup instructions.

    4.  Restart the Portal server.

    5.  Re-enable any syndicators that do not syndicate to the target server.

2.  On the target system:

    1.  Stop the Portal server.

    2.  If the SOURCE and TARGET systems share the same JCR database/schema names, rename the existing JCR database/schema in TARGET.

    3.  Create a new database, and restore the source system database backup. Refer to the documentation for your database for specific instructions.

    4.  Restart the Portal server.

    5.  Delete all syndicators and subscribers as they are not valid for the target system.

    6.  If the target system is using a different LDAP run the member fixer tool to fix member information to match the new LDAP. First run the module in report mode to see what member information requires fixing and then run the tool in fix mode to fix various potential member information mismatches.

    7.  If you are cloning from an authoring system to a delivery system, run the clear versions tool to remove any versions from the delivery system.

    8.  Set up syndication:

        -   Create subscribers and syndicators for this system.
        -   If the target system is a syndicator to the original source system, leave that syndicator disabled for now. All other Syndicators can be enabled
3.  On source system:

    1.  If the target system is a subscriber to the source system, update the syndicator with the new target subscriber ID and enable syndication.

    2.  If the target system is a syndicator to the source system, update the subscriber with the new target syndicator ID

4.  On target system:

    1.  If the target system is a syndicator to the source system, enable syndication.


When you finish cloning your web content data:

-   Validate that the web content data on the target environment is rendering correctly.
-   Validate access control settings for both rendering and authoring are set as expected, and working correctly for a selection of users.
-   Validate updates are being syndication into and from the target environment as expected.


???+ info "Related information:"
    - [Clearing version history](../wcm_admin_clear_versions.md)

