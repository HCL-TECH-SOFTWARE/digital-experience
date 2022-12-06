# Troubleshooting WSRP

You can troubleshoot WSRP by using different methods such as logging and tracing, debugging, and monitoring.

-   [Setting traces and using the portal run time log file for WSRP diagnosis](wsrpr_trbl.md#setting-traces-and-using-the-portal-run-time-log-file-for-wsrp-diagnosis)
-   [Debugging and monitoring the WSRP protocol flow](wsrpr_trbl.md#debugging-and-monitoring-the-wsrp-protocol-flow)
-   [Monitoring WSRP messages between the Consumer and Producer by using TCPMon](wsrpr_trbl.md#monitoring-wsrp-messages-between-the-consumer-and-producer-by-using-tcpmon)

## Setting traces and using the portal run time log file for WSRP diagnosis

You can diagnose problems that might occur during the use of WSRP. To do so, you set WSRP-specific traces and enable run time logs for the Consumer, Producer, and administration components of the WSRP implementation. Use the administration portlet Enable Tracing.

You can enable the following trace loggers for the WSRP implementation:

|Component|Trace string|
|---------|------------|
|Administration|com.ibm.wps.command.wsrp.\*=all com.ibm.wps.wsrp.cmd.\*=allcom.ibm.wps.wsrp.common.\*=allcom.ibm.ws.websvcs.trace.MessageTrace=all|
|Consumer|com.ibm.wps.wsrp.consumer.\*=allcom.ibm.wps.wsrp.common.\*=allcom.ibm.ws.websvcs.trace.MessageTrace=all|
|Producer|com.ibm.wps.wsrp.producer.\*=allcom.ibm.wps.wsrp.common.\*=allcom.ibm.ws.websvcs.trace.MessageTrace=all|
|XMLAccess|com.ibm.wps.command.xml.\*=allcom.ibm.wps.wsrp.common.\*=allcom.ibm.ws.websvcs.trace.MessageTrace=all|

## Debugging and monitoring the WSRP protocol flow

You can trace SOAP messages that are exchanged between a WSRP Consumer and a WSRP Producer. To do so, you use a monitor or sniffer application to capture network traffic between the two points. You can use the utility **TCPMon** that is shipped with the WebSphere Application Server. As an alternative, most AIX® or Linux™ operating systems provide suitable utilities, for example, tcpdump. You can run tcpdump on either side and record network traffic that is captured by a network interface. There are also free tools available.

## Monitoring WSRP messages between the Consumer and Producer by using TCPMon

You can use the TCPMon tool to monitor the WSRP messages between the Consumer and Producer. For information about how to do so, read the WebSphere® Application Server Information Center topic about Tracing web services messages. The TCPMon application uses the man-in-the-middle approach. TCPMon listens on a TCP port, logs the HTTP or SOAP traffic, and forwards the request to the designated server and TCP port. Therefore, you must redirect the communication from the Consumer to the TCPMon application and have TCPMon forward the request to the WSRP Producer.

If you already have a Producer configuration on your Consumer portal, you can modify the host and port for each WSRP end point address URL that you want to monitor. You can change the WSRP endpoint address URLs that the Consumer uses to communicate with the integrated Producer. To do so, you can use either the portal administration user interface or the XML configuration interface.

Alternatively, to debug a certain scenario, you can also create a new Producer definition on the Consumer with a WSDL that contains WSRP endpoint address URLs that point to the TCPMon host and port.

In HCL Portal, you can manipulate the WSDL contents by adding URL parameters to the WSDL URL.

After you redirect the traffic, configure the TCPMon tool to listen on the port that you specified on the Consumer side to communicate with the Producer portal. Also, set the target port to the actual port values of the Producer WSRP interfaces. For the HCL Portal Producer, these target ports are the ports that the WSDL file contains when you request the WSDL file without the port parameter.

To run the TCPMonitor tool, follow the instructions that are given in the WebSphere Application Server Help Center under *Tracing SOAP messages with tcpmon*.


