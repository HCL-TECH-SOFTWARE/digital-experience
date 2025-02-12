# How to speed up the processing of asynchronous deletes in JCR database after running clearVersions ?

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

When the clearVersions task deletes a lot of versions, it may leave the associated asynchronous database deletes pending. Periodically running this query will tell how fast the deletes are being processed:

`SELECT COUNT(1) FROM <jcr>.ICMSTJCRREMOVEHLP`

If the count is coming down too slowly, how to speed it up?

## Instructions

This Config Engine task will purge the pending deletes in much larger batches:

`./ConfigEngine.sh jcr-complete-asynchronous-deletes -DbatchSize=5000`

This is a database resource intensive activity. It is recommended to run this task at a time of low server activity.

If a bigger batch size is required, these steps are highly recommended to insure that it completes.

If it takes too long to process a batch, the standard AsynchronousDelete job will resume and stop the `jcr-complete-asynchronous-deletes` task.  To prevent this from happening, the user can disable the standard AsynchronousDelete job by doing the following:

1. Login to the Integrated Solutions Console (WebSphere Application Server console), navigate to `Resource environment providers > JCR ConfigService PortalContent > Custom properties`

2. add the following property:

    ```log
    Property: jcr.background.services
    Type: String
    Value: TextSearch,BinaryCache
    ```

3. A Portal server restart is required. This must be done on all of the Portal Nodes.

4. After the restart, run the task: `jcr-complete-asynchronous-deletes`

Progress can be monitored by turning on the following trace-string in Portal:

   `com.ibm.icm.da.portable.data.AsynchronousDelete=finest`

If the job completes successfully, then this SQL will return 0:  
   `SELECT COUNT(1) FROM JCR.ICMSTJCRREMOVEHLP`

To re-enable the background delete, simply delete the property from the Custom Properties and restart the Portal nodes.

Note this should be performed only after finishing all runs of clearVersions and only then if the count in the `ICMSTJCRREMOVEHLP` table is high ( > 100,000) and that it is taking to long to come down.
