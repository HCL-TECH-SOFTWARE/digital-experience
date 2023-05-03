# Linux

## Network Tuning

For Red Hat Linux on Intel, we add the following settings to file `/etc/sysctl.conf`, then run the command:
`sysctl -p`.

To inspect current TCP parameters, run the command: `sysctl -a | grep tcp`

|Parameter|Value|
|---------|-----|
|net.ipv4.ip_forward| 0|
|net.ipv4.conf.default.rp_filter <br>| 1<br> 0|
|net.core.rmem_max<br>net.core.wmem_max| 16777216<br> 16777216|
|net.ipv4.tcp_rmem<br>net.ipv4.tcp_wmem  |4096 87380 16777216<br> 4096 65536 16777216|
|net.ipv4.tcp_fin_timeout<br>net.core.netdev_max_backlog |30<br> 3000|
|net.core.somaxconn<br>net.ipv4.tcp_keepalive_intvl| 10000<br> 15|
|net.ipv4.tcp_keepalive_probes| 5|

We added the following settings to `/etc/security/limits.conf`:
- soft nofile 65535
- hard nofile 65535

We also added the following settings to `/etc/security/limits.d/90-nproc.conf`:
- soft nproc 10240

The system will need to be rebooted for these changes to take effect.

!!! note
    The preceding Linux OS tuning guidance was for non-Kubernetes and OpenShift Linux platforms. If one is running a Linux OS image container in Kubernetes or OpenShift, the preceding tuning recommendations can be applied to the OS hosting the container as opposed to the container itself.