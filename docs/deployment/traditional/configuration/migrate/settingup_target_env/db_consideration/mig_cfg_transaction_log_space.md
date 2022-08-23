# Configuring transaction logging space

When you migrate from earlier versions of Portal, certain portions of the actual database migration use database transactions that can contain large volumes of data change. In order for the database to accommodate these transaction changes, the amount of space available to the database transaction logs might need to be increased.

There are certain database platforms that allow for the temporary usage of unlimited database transaction log space. It is advisable to enable that option during the migration to avoid any possible issues that are related to exhausting available transaction log space.

On platforms or environments where unlimited transaction logging is not an option, the following formula can be used to determine the amount of transaction log space that is required to complete the migration. Note that several of these queries can be long running \(several minutes\) depending on the amount of data in the Portal database.

Before you run the SQL commands, you need to replace the following references according to your environment.

-   <schema\> replace this token with the schema used in the JCR Domain database.
-   <ROOT\_WSID\> replace this token with the result of `SELECT WSID FROM <schema\>.ICMSTJCRWS WHERE WSNAME = 'ROOTWORKSPACE'`
-   <VER\_WSID\> replace this token with the result of `SELECT WSID FROM <schema\>.ICMSTJCRWS WHERE WSNAME = 'jcr:versioning'`

As you run the following steps, save the result as you need to do some computation to calculate the correct numbers for setting the transaction logging space.

Steps \#1 - \#8 are for calculating the space that is required to migrate hierarchy information for HCL Portal data that is stored in the JCR excluding all version information.

Steps \#9 - \#16 are for calculating the space that is required to migrate hierarchy information for version information of HCL Portal data.

1.  `SELECT COUNT(LID) FROM <schema\>.ICMSTJCRLINKS WHERE WSID = <ROOT\_WSID\> AND INLEAFTREEFLAG = 1 AND SIID IN ( SELECT TIID FROM <schema\>.ICMSTJCRLINKS WHERE INLEAFTREEFLAG = 0 AND WSID = <ROOT\_WSID\> )`

2.  `SELECT COUNT(LID) FROM <schema\>.ICMSTJCRLINKS WHERE WSID = <ROOT\_WSID\> AND INLEAFTREEFLAG = 1 AND SIID IN ( SELECT TIID FROM <schema>.ICMSTJCRLINKS WHERE WSID = <ROOT_WSID> AND INLEAFTREEFLAG = 1 AND SIID IN ( SELECT TIID FROM <schema>.ICMSTJCRLINKS WHERE INLEAFTREEFLAG = 0 AND WSID = <ROOT\_WSID\> ) )`

3.  `SELECT COUNT(LID) FROM <schema\>.ICMSTJCRLINKS WHERE WSID = <ROOT\_WSID\> AND INLEAFTREEFLAG = 1`

4.  Run the following commands depending on your database

    -   DB2® and SQL Server
        -   `WITH PATH ( WSID , SIID, TIID, LVL) AS ( (SELECT WSID, SIID, TIID, 1 AS LVL FROM <schema\>.ICMSTJCRLINKS WHERE INLEAFTREEFLAG=1 AND WSID = <ROOT_WSID> AND SIID IN ( SELECT TIID FROM <schema>.ICMSTJCRLINKS WHERE INLEAFTREEFLAG = 0 AND WSID = <ROOT\_WSID\> )) UNION ALL (SELECT L.WSID, L.SIID, L.TIID, P.LVL + 1 FROM PATH P, <schema\>.ICMSTJCRLINKS L WHERE P.SIID = L.TIID AND P.LVL < 1000000 AND INLEAFTREEFLAG = 0 AND L.WSID = <ROOT\_WSID\>)) SELECT SUM(P1.LVL) FROM PATH P1, <schema\>.ICMSTJCRWS WS WHERE P1.WSID = <ROOT\_WSID\> AND WS.WSID = <ROOT\_WSID\> AND P1.SIID = WS.ROOTIID`
    -   Oracle
        -   `SELECT SUM(LEV) FROM ( SELECT WSID, SIID, TIID, LEVEL LEV FROM JCRPRODWCM.ICMSTJCRLINKS LINKS WHERE WSID = <ROOT\_WSID\> START WITH INLEAFTREEFLAG = 1 AND SIID IN ( SELECT TIID FROM <schema\>.ICMSTJCRLINKS WHERE INLEAFTREEFLAG = 0 AND WSID = <ROOT\_WSID\> ) CONNECT BY PRIOR SIID = TIID AND INLEAFTREEFLAG = 0 ) P1, JCRPRODWCM.ICMSTJCRWS WS WHERE P1.WSID = <ROOT\_WSID\> AND WS.WSID = <ROOT\_WSID\> AND P1.SIID = WS.ROOTIID`
5.  Divide the value that is obtained in step \#4 by the value of step \#1 round up to nearest whole value and save that number.

6.  Subtract the values that are obtained from steps \#3, \#2 and \#1 and save that number.

7.  Perform the following equation with the values previously calculated: \(\(value of \#5 + 1\) \* value of \#2\) + \(\(value of \#5 + 2\) \* value of \#6\) + value of \#4

8.  Multiply the value that is obtained in the previous step \#7 by 700

9.  `SELECT COUNT(LID) FROM <schema\>.ICMSTJCRLINKS WHERE WSID = <VER\_WSID\> AND INLEAFTREEFLAG = 1 AND SIID IN ( SELECT TIID FROM <schema\>.ICMSTJCRLINKS WHERE INLEAFTREEFLAG = 0 AND WSID = <VER\_WSID\> )`

10. `SELECT COUNT(LID) FROM <schema\>.ICMSTJCRLINKS WHERE WSID = <VER\_WSID\> AND INLEAFTREEFLAG = 1 AND SIID IN ( SELECT TIID FROM <schema\>.ICMSTJCRLINKS WHERE WSID = <VER\_WSID\> AND INLEAFTREEFLAG = 1 AND SIID IN ( SELECT TIID FROM <schema\>.ICMSTJCRLINKS WHERE INLEAFTREEFLAG = 0 AND WSID = <VER\_WSID\> ) )`

11. `SELECT COUNT(LID) FROM <schema\>.ICMSTJCRLINKS WHERE WSID = <VER\_WSID\> AND INLEAFTREEFLAG = 1`

12. Run the following commands depending on your database

    -   DB2 and SQL Server
        -   `WITH PATH ( WSID , SIID, TIID, LVL) AS ( (SELECT WSID, SIID, TIID, 1 AS LVL FROM <schema\>.ICMSTJCRLINKS WHERE INLEAFTREEFLAG=1 AND WSID = <VER\_WSID\> AND SIID IN ( SELECT TIID FROM <schema\>.ICMSTJCRLINKS WHERE INLEAFTREEFLAG = 0 AND WSID = <VER\_WSID\> )) UNION ALL (SELECT L.WSID, L.SIID, L.TIID, P.LVL + 1 FROM PATH P, <schema\>.ICMSTJCRLINKS L WHERE P.SIID = L.TIID AND P.LVL < 1000000 AND INLEAFTREEFLAG = 0 AND L.WSID = <VER\_WSID\>) ) SELECT SUM(P1.LVL) FROM PATH P1, <schema\>.ICMSTJCRWS WS WHERE P1.WSID = <VER\_WSID\> AND WS.WSID = <VER\_WSID\> AND P1.SIID = WS.ROOTIID`
    -   Oracle
        -   `SELECT SUM(LEV) FROM ( SELECT WSID, SIID, TIID, LEVEL LEV FROM JCRPRODWCM.ICMSTJCRLINKS LINKS WHERE WSID = <VER\_WSID\> START WITH INLEAFTREEFLAG = 1 AND SIID IN ( SELECT TIID FROM <schema\>.ICMSTJCRLINKS WHERE INLEAFTREEFLAG = 0 AND WSID = <VER_WSID> ) CONNECT BY PRIOR SIID = TIID AND INLEAFTREEFLAG = 0 ) P1, JCRPRODWCM.ICMSTJCRWS WS WHERE P1.WSID = <VER\_WSID\> AND WS.WSID = <VER\_WSID\> AND P1.SIID = WS.ROOTIID`
13. Divide the value that is obtained in step \#12 by the value of \#9 round up to nearest whole value and save that number.

14. Subtract the values that are obtained from steps \#11, \#10 and \#9 and save that number.

15. Perform the following equation with the values previously calculated: \(\(value of \#13 + 1\) \* value of \#10\) + \(\(value of \#13 + 2\) \* value of \#14\) + value of \#12

16. Multiply the value that is obtained in the previous step \#15 by 700


The estimated amount of database transaction log file space necessary in bytes is the greater of the two values that are determined in steps \#8 and \#16.


