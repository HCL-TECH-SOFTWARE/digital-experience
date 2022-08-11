# Removing unsupported composite applications

Composite applications are no longer supported. If you have a composite application in your system and you migrate to Version 8.5, the migration fails. Ensure that all composite applications are deleted before you start the migration. When you delete a composite application, you must also run the resource cleaner, otherwise pages can still exist in the database.

1.  If you own or manage an application, you can delete it. The applications catalog is the only context where you can delete an application.
2.  Use the following code sample to show the applications that you own or manage:

    ```
    AppListString = Application.listall("applications")
    if AppListString == '':
      print 'There are no composite applications.'
    else:
      AppList = AppListString.split(' ')
      for app in AppList:
        print "- " + Application.nlsget(app,"title","en") + "(" + app + ")"
    ```

3.  For each application that you want to delete, click the **Delete** icon.

4.  Click **OK** to confirm the deletion.

5.  Run the resource cleaner to ensure that no other pages exist in the database: [Scheduling the delayed cleanup of portal pages](../admin-system/adxmltsk_sked_delclnup.md).


**Parent topic:**[Preparing your source environment](../migrate/mig_t_premig_tasks.md)

**Related information**  


[Unsupported features for HCL Digital Experience 8.5 and 9.0](../reference/intr_depc.md)

