# UNIX Linux operating systems might require higher limit of open files for Portal Search to work properly

The limit for the number of open files in a UNIX/Linux operating system might be too low for Portal Search to work properly. This might result in a Portlet Unavailable error.

To resolve this problem and allow a higher number of files to be handled, raise the limit to the number of open files by issuing the following command as root administrator:

```
     ulimit -n 4096
```
