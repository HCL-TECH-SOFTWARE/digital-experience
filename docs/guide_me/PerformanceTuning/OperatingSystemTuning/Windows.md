# Windows

## Network Tuning
Using the regedit command, the following registry settings were made in the section
`HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters`

Create a new `REG_DWORD` for each parameter below.

|Parameter|Value|
|---------|-----|
|MaxFreeTcbs| dword:00011940|
|MaxHashTableSize<br> MaxUserPort|dword:0000ffff<br> dword:0000fffe|
|TcpTimedWaitDelay<br> TcpWindowSize|dword:0000001e<br> dword:0000ffff (65535)|
|GlobalTcpWindowSize| dword:0000ffff (65535)|

!!! note
    That some of these values are no longer used in Windows 2008. More details are available from Microsoft at http://msdn.microsoft.com/en-us/windows/hardware/gg463394.