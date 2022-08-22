# Scheduling the delayed cleanup of portal pages

You can use the example XML script Task.xml to schedule the cleanup of pages that have been marked for deletion.

**Notes:**

1.  If you delete a page with an object ID and then use the XML configuration interface to re-create the same page with the same object ID, you might receive an error message indicating the operation was canceled because it would have caused a duplicate key value.
2.  When you run the cleanup task, the XML configuration interface only schedules the task to be run in WebSphere® Application Server and returns. This does not necessarily mean that WebSphere Application Server runs the task immediately. To determine when a task started and ended, check the portal log SystemOut.log for the EJPDE0005I and JPDE0006I messages. These messages confirm that the cleanup task has successfully completed. After you have confirmed this, you can run the XML script for re-creating a page with the same object ID as it had before the deletion.


