# AIX

## Network Tuning

We changed the following network tuning parameters on all the AIX systems in our measurement
environment.

|Parameter|Value|
|---------|-----|
|tcp_sendspace|131072|
|tcp_recvspace<br> udp_sendspace|131072<br> 65536|
|udp_recvspace<br> Somaxconn|655360<br>  10000|
|tcp_nodelayack<br> rfc1323|1<br> 1|

These parameters can be set using the `no` command or through smit. In smit, the path to the change these is:

Performance & Resource Scheduling -> Tuning Kernel & Network Parameters -> Tuning Network Option
Parameters -> Change/Show Current Parameters.

To make the changes permanent, also select “Save Current Parameters for Next Boot”.

These tuning settings - particularly the `tcp_sendspace` and `tcp_recvspace` values - will allocate a significant
amount of memory for network buffers. These can cause a performance problem if the system has a
limited amount of memory. In that case, it may make sense to reduce these values.

For more discussion on AIX network performance tuning, please refer to, http://www-01.ibm.com/support/knowledgecenter/ssw_aix_71/com.ibm.aix.performance/interface_network_opts.html and http://www.ibm.com/developerworks/aix/library/au-aixoptimization-netperform3/index.html.

## Enable IOCP

On AIX, using I/O completion ports with AIO requests provides the capability for an application to capture the results of various AIO operations on a per-thread basis in a multi-threaded environment. This functionality provides threads with a method of receiving a completion status for only the AIO requests initiated by the thread.

### How to Set

You can enable IOCP on AIX by running smitty iocp.

Verify that IOCP is enabled by running lsdev -Cc iocp. The resulting output should include
iocp0 Available I/O Completion Ports.

If this message is not output, run the following commands:

1. smitty iocp
    Change/Show Characteristics of I/O Completion Ports
    Change the state from Defined to Available

2. Reboot the server

## Kernel Tuning For AIX Power 7

We set the following AIX threading parameters to handle high contention for our Power 7 system. Adding these to the /etc/environment file makes the changes permanent on reboot.

1. AIXTHREAD_MUTEX_DEBUG=OFF
2. AIXTHREAD_COND_DEBUG=OFF
3. AIXTHREAD_RWLOCK_DEBUG=OFF
4. MALLOCMULTIHEAP=considersize,heaps:4
5. SPINLOOPTIME=4000

## Hardware Prefetch

The data prefetch engines in Power processor can aid performance for some applications. However, transactional multi-user applications (like Portal) have data access patterns that will usually be unpredictable due to the large number of concurrent threads. As a result, the data that is pre-fetched by default is unlikely to be needed. This wastes system bandwidth and displaces useful data from the caches. We recommend disabling hardware prefetching on Power 7 servers.

### How to Set

Disable hardware prefetching by running `dscrctl -n -s 1`. This will disable the setting until reboot. To make is persistent, run `dscrctl -b -s 1`.

To re-enable hardware prefetching, run `dscrctl -n -s 0`.

To see the current status, run `dscrctl -q`. Output similar to the following will be displayed:

```
Current DSCR settings:
Data Streams Version = V2.06
number_of_streams = 12
platform_default_pd = 0x4 (DPFD_MEDIUM)
os_default_pd = 0x0 (DPFD_DEFAULT)
```

The `DPFD_DEFAULT` indicates that prefetch is `enabled`. When it is disabled, `DPFD_NONE` is displayed.

