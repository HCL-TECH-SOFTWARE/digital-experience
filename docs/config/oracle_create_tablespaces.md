# Oracle: Creating JCR table spaces \(Automatic Storage Management\)

If you configured your database with Automatic Storage Management, you might need to perform additional manual instructions to create JCR table spaces when you use the Database Transfer option in the Configuration Wizard. If you select the option to let the wizard create your database schemas and assign permissions, you must perform the steps in this topic after you run the setup database script.

1.  Create table spaces using the following commands as examples:

    **Note:**

    -   If you plan on customizing your table space names, you must ensure that the customized table space names are used during database transfer. Custom table spaces must exist prior to performing database transfer.
    -   ASM\_disk\_group\_name is the disk group name that you used to configure your Automatic Storage Management environment.
    -   Ensure that the '**.**' is included in the variables when you substitute the values of your environment with these variables.
    create tablespace ICMLFQ32 datafile '+ASM\_disk\_group\_name' size 300M reuse autoextend on next 10M maxsize UNLIMITED extent management local autoallocate;

    create tablespace ICMLNF32 datafile '+ASM\_disk\_group\_name' size 25M reuse autoextend on next 10M maxsize UNLIMITED extent management local autoallocate;

    create tablespace ICMVFQ04 datafile '+ASM\_disk\_group\_name' size 25M reuse autoextend on next 10M maxsize UNLIMITED extent management local autoallocate;

    create tablespace ICMSFQ04 datafile '+ASM\_disk\_group\_name' size 150M reuse autoextend on next 10M maxsize UNLIMITED extent management local autoallocate;

    create tablespace ICMLSNDX datafile '+ASM\_disk\_group\_name' size 10M reuse autoextend on next 10M maxsize UNLIMITED extent management local autoallocate;

    1.  Set the size, autoextend, and maxsize values according to your environment. For example, you may want to change the maxsize to a set value rather than UNLIMITED.

    2.  Consult your Database Administrator for specific guidance about creating tablespaces for your environment.

    3.  Refer to the Oracle command reference for more information about using the create tablespaces command.

2.  Ensure the database is registered with the Oracle listener. Use the tnsnames.ora file to describe this database and recycle the listener.


