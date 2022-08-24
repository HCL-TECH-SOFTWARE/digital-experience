# Removing HCL Commerce integration

If you have HCL Commerce integrated with HCL Digital Experience, you must remove HCL Commerce from your source portal profile before you begin migration.

Complete the following steps on your source HCL Portal profile.

1.  Run the following command:

    -   AIX® HP-UX Linux™ Solaris : ./ConfigEngine.sh remove-paa -DappName=wcm.wcs.integrator.paa
    -   IBM® i: ConfigEngine.sh remove-paa -DappName=wcm.wcs.integrator.paa
    -   Windows™: ConfigEngine.bat remove-paa -DappName=wcm.wcs.integrator.paa
    -   z/OS®: ./ConfigEngine.sh remove-paa -DappName=wcm.wcs.integrator.paa
2.  Run the following command:

    -   AIX HP-UX Linux Solaris: ./ConfigEngine.sh uninstall-paa -DappName=wcm.wcs.integrator.paa
    -   IBM i: ConfigEngine.sh uninstall-paa -DappName=wcm.wcs.integrator.paa
    -   Windows: ConfigEngine.bat uninstall-paa -DappName=wcm.wcs.integrator.paa
    -   z/OS: ./ConfigEngine.sh uninstall-paa -DappName=wcm.wcs.integrator.paa
3.  Delete the Portal\_V8\_profile/paa/wcm.wcs.integrator.paa directory.


When migration is complete, you can install the 8.5 version of the PAA file.


