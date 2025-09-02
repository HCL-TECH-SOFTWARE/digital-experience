# Availability

Choose a topology that meets your business requirements for the availability of your application. Ensure that backup and recovery processes are in place to restore the application, if any catastrophe occurs.

## Recommended actions and considerations

- On-premise solutions should consider implementing [multiple clusters](https://help.hcltechsw.com/digital-experience/8.5/install/rm_production_mult_clusters.html) in separate data centers.

- For systems with a [containerized architecture](https://help.hcltechsw.com/digital-experience/9.5/containerization/overview.html), replica sets ensure a stable number of pods.

- Backup and recovery procedures depend on the topology:

    - [On-premise](https://help.hcltechsw.com/digital-experience/8.5/admin-system/i_wadm_c_bkup_restr_winlinux.html)

    - [Container](https://opensource.hcltechsw.com/digital-experience/CF210/deployment/install/container/operator-migration/operator_backup_and_recovery_procedures/)

- Backup and recovery procedures should address:

    - File systems

    - Databases ([online/offline](https://help.hcltechsw.com/digital-experience/8.5/admin-system/i_wadm_c_bkup_db2_basics.html))

    - User repositories
    
    - Downtime