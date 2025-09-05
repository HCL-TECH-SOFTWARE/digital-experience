# How to expedite the processing of asynchronous deletes in JCR database

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

When the `clearVersions` ConfigEngine task deletes versions in the Java Content Repository (JCR) database, it may leave the associated asynchronous database deletes pending. You can run the following query to track the processing speed of the deletion:

```
SELECT COUNT(1) FROM <jcr>.ICMSTJCRREMOVEHLP
```

Sometimes, the versions are deleted slower than usual. This article describes how to expedite the processing of pending deletes.

## Instructions

Use following ConfigEngine task to purge the pending deletes in much larger batches by increasing the value of the `batchSize` parameter:

```
./ConfigEngine.sh jcr-complete-asynchronous-deletes -DbatchSize=5000
```

!!! note
    - This is a database resource-intensive activity so it is recommended to run this task when server activity is low.
    - This task should only be used if the count in the `ICMSTJCRREMOVEHLP` table is high ( > 100,000) and is taking too long to process after finishing all runs of `clearVersions`.

If processing a batch takes too long,  the `jcr-complete-asynchronous-deletes` task will be stopped and the standard `AsynchronousDelete` job will resume. To prevent this from happening, you can disable the standard `AsynchronousDelete` job:

1. Login to the WebSphere Application Server (WAS) admin console and navigate to **Resources > Resource Environment > Resource Environment Providers > JCR ConfigService PortalContent > Custom properties**.
2. Click **New...**.
3. Enter the following details:

    - **Name**: `jcr.background.services`
    - **Value**: `TextSearch,BinaryCache`
    - **Type**: `java.lang.String`

4. Click **Apply**.
5. Click **Save** at the top of the console messages.
6. Restart your Portal nodes.
7. Run the following task:

    ```
    jcr-complete-asynchronous-deletes
    ```

    You can monitor the progress of this task by turning on the following trace-string in Portal:

    ```
    com.ibm.icm.da.portable.data.AsynchronousDelete=finest
    ```

    If the job completes successfully, the following SQL will return 0:

    ```
    SELECT COUNT(1) FROM JCR.ICMSTJCRREMOVEHLP
    ```

To re-enable the `AsynchronousDelete` job:

1. Navigate to **Resources > Resource Environment > Resource Environment Providers > JCR ConfigService PortalContent > Custom properties**.
2. Tick the checkbox for `jcr.background.services` then click **Delete**.
3. Click **Save** at the top of the console messages.
4. Restart your Portal nodes.
