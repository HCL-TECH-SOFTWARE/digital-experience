# Verbosegc in Java VM logs

Verbose garbage collection \(verbosegc\) logging is often required when tuning and debugging many issues, and has negligible impact on system performance.

The default HCL Digital Experience installation enables verbosegc logging and configures the following generic JVM argument:

`-Xverbosegclog:${SERVER_LOG_ROOT}/verbosegc.m%d.5/10/13M%S.%pid.txt,20,10000`

The verbosegc log file name is verbosegc.m%d.5/10/13M%S.%pid.txt. It includes a date/time stamp and the process ID \(PID\) of the HCL Portal instance.

The default HCL Digital Experience installation redirects the verbosegc output to 20 rotating historical log files, each containing 10000 garbage collection \(GC\) cycles.

For more information about configuring the JVM through WebSphere® Application Server, see the IBM® WebSphere Application Server information centers at www.ibm.com/software/webservers/appserv/was/library.

## HCLSoftware U learning materials

To learn how to monitor, troubleshoot, and contact support about issues you encounter with DX, go to [Monitoring and Troubleshooting](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3436){target="_blank”}. You can try it out using the [Monitoring and Troubleshooting Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Monitoring_and_Troubleshooting_Lab.pdf){target="_blank”} and corresponding [Monitoring and Troubleshooting Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Monitoring_and_Troubleshooting_Lab_Resources.zip){target="_blank”}.
