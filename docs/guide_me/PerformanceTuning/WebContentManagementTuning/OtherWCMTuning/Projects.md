# Projects

WCM and Portal page management authoring environments involves constant database updates.
Therefore, the best practice should be to delete unused published projects and update the database
statistics on a regular basis (runstats).

## How to Delete Published Projects

1. Log into Portal as a WCM Administrator
2. Navigate to the WCM Authoring Portlet
    Applications -> Content -> Web Content Management
3. In the authoring portlet navigate to
    Project Views -> Projects -> Published
4. Delete any unused projects
5. Run runstats on the database as specified in the DB2 Tuning section.