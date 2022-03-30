# Database setup 

You must create the database table manually before you can use rule based user groups.

The rule-based user groups feature stores the definitions of the rule-based user groups in a database table. This includes the name, rule, and description of the group. Use one of the following SQL statements to create the table, using a database and schema of your choice. Replace schema\_name in the scripts with the schema name of your choice.

-   **Syntax for DB2 and Derby databases:**

    ```
    CREATE TABLE schema\_name.SOFTGROUPS
    (ID INT NOT NULL GENERATED ALWAYS AS IDENTITY,
     GROUPNAME VARCHAR(128) NOT NULL,
     RULE VARCHAR(300) NOT NULL,
     DESCRIPTION VARCHAR(512),
     LASTMODIFIED TIMESTAMP,
     PRIMARY KEY (ID),
     UNIQUE (GROUPNAME));
    
    CREATE INDEX schema\_name.SOFTGROUPSIX1 ON 
    schema\_name.SOFTGROUPS (LASTMODIFIED DESC);
    ```

-   **Syntax for SQL databases:**

    ```
    CREATE TABLE schema\_name.SOFTGROUPS
    (ID INT NOT NULL IDENTITY PRIMARY KEY,
    GROUPNAME VARCHAR(128) NOT NULL UNIQUE,
    "RULE" VARCHAR(300) NOT NULL,
    DESCRIPTION VARCHAR(512),
    LASTMODIFIED DATETIME);
    
    CREATE INDEX SOFTGROUPSIX1 ON 
    schema\_name.SOFTGROUPS(LASTMODIFIED DESC);
    sp_indexoption 'schema\_name.SOFTGROUPS', 
    'disallowpagelocks', TRUE;
    ```

-   **Syntax for Oracle databases:**

    ```
    CREATE TABLE schema\_name.SOFTGROUPS
      (
         ID           INT,
         GROUPNAME    VARCHAR(128) NOT NULL,
         RULE         VARCHAR(300) NOT NULL,
         DESCRIPTION  VARCHAR(512),
         LASTMODIFIED TIMESTAMP,
         PRIMARY KEY  (ID),
         UNIQUE (GROUPNAME)  
      );
    
    CREATE INDEX schema\_name.SOFTGROUPSIX1 ON 
    schema\_name.SOFTGROUPS  (LASTMODIFIED DESC);
    
    CREATE SEQUENCE softgroups_seq;
    
    CREATE TRIGGER softgroups_seq_trigger
      before INSERT ON schema\_name.SOFTGROUPS
      FOR each ROW
    BEGIN
        IF ( :new.id IS NULL ) THEN
          SELECT softgroups_seq.nextval
          INTO   :new.id
          FROM   dual;
        END IF;
    END;
    /
    ```

    Oracle does not support auto-increment or identity feature directly as part of the ID column definition. You must create a sequence and a trigger. For easy submission of the statement, make sure to add the final slash character \(`/`\). You can submit the statement by pressing the Enter key.


**Parent topic:**[Configuring the rule-based user groups adapter](../admin-system/rbug_instl.md)

