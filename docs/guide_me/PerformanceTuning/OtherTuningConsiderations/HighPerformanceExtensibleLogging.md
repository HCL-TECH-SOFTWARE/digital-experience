# High Performance Extensible Logging (HPEL)

WebSphere 8 introduced a binary logging format known as HPEL. In some configurations, enabling HPEL
may improve performance. However, benchmark tests have also shown a 2% throughput reduction in other
configurations. Performance testing in your own environments is recommended to understand the impact
of enabling this feature.

## How to Set
In the Integrated Solutions Console
Troubleshooting -> Logs and trace

1. Select the server(s) that you want to switch to HPEL
2. Save the changes
3. Restart the application server

See http://www-01.ibm.com/support/knowledgecenter/SSEQTP_8.0.0/com.ibm.websphere.base.doc/info/aes/ae/ttrb_com
pToHPEL.html and http://www.ibm.com/developerworks/websphere/techjournal/1208_bourne/1208_bourne.html for more information.