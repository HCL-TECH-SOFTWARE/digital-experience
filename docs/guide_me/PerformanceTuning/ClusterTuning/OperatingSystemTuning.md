# Operating System Tuning

## AIX Kernel

In addition to the tuning documented for the base Portal AIX kernel, we set the threading parameter, `AIXTHREAD_SCOPE=S`, to handle high contention for our Power 7 system. This setting can be made permanent across reboots by adding it to the `/etc/environment` file.

## AIX Network

To avoid a socket timeout exception, multiple TCP settings were changed using the chdev command.

## How to Set

`chdev -l en0 -a tcp_sendspace=262144 -a tcp_recvspace=131072 -a rfc1323=0 -a tcp_nodelay=1 -amtu_bypass=on`

!!! note 
    `en0` is the network serving Portal HTTP traffic.

See the AIX Network Tuning section for more information on tcp_nodelay.

!!! note
    `tcp_nodelay` was set to 0 when using DB Session replication on each of the IHS servers and Portal servers. This provides an increase in replication performance.