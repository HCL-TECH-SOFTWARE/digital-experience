# Buffer Pools & DB2 Self Tuning Memory Manager

One of the most important database tuning factors is bufferpool sizing. It is important to evaluate the
database's physical versus logical reads and size the bufferpools to achieve a 95% or better hit rate, if
possible.

DB2 10.1 supports automatic tuning of bufferpool sizes; we enabled this setting on the JCR database and
saw good results. We also gave DB2 an initial bufferpool size for each bufferpool to help the self-tuning
memory manager (STMM) reach appropriate sizes more quickly after benchmark rampup. This was done as
follows:
```
db2 connect to <jcrdb>
db2 alter bufferpool icmlsfreqbp4 size 1000 automatic
db2 alter bufferpool icmlsvolatilebp4 size 16000 automatic
db2 alter bufferpool icmlsmainbp32 size 16000 automatic
db2 alter bufferpool cmbmain4 size 1000 automatic
db2 -v terminate
db2 connect reset
```

Where <jcrdb> is the JCR database name. Note that the other Portal database domains used the default
settings for DB2.

More information on DB2 STMM can be found in the DB2 10.1 Info Center.

Finally, we recommend that you use DB2 in 64-bit mode to allow sufficient memory for the necessary
database objects. This is particularly important with authoring environments as this can be a very database
intensive workload. During our testing, database memory became a limiting factor with this workload and
we were able to achieve a significant increase in capacity by moving to 64-bit.

