# Removing HCL Commerce integration

If you have HCL Commerce integrated with HCL Digital Experience, you must remove HCL Commerce from your source portal profile before you begin migration.

Complete the following steps on your source HCL Portal profile.

1.  Run the following command:

    -   AIX® and Linux™: `./ConfigEngine.sh remove-paa -DappName=wcm.wcs.integrator.paa`
    -   Windows™: `ConfigEngine.bat remove-paa -DappName=wcm.wcs.integrator.paa`

2.  Run the following command:

    -   AIX and Linux: `./ConfigEngine.sh uninstall-paa -DappName=wcm.wcs.integrator.paa`
    -   Windows: ConfigEngine.bat uninstall-paa -DappName=wcm.wcs.integrator.paa

3.  Delete the Portal_V8_profile/paa/wcm.wcs.integrator.paa directory.


When migration is complete, you can install the 8.5 version of the PAA file.


