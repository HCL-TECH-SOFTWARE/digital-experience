# Virtual environment overview

Use virtual <!-- Do you mean "virtual"? They're related but not synonymous -->environments to meet your business needs like production server consolidation, centralized management, or dynamic test environments.

You must consider special issues when you run HCL Portal in a virtual environment. Virtual machines work best when you use them to consolidate test and development servers, where multiple virtual machines can share physical machine resources. The virtual machines can even "overcommit" those resources by calculating at any given time that not all system resources are required. However, this situation does not mean that virtual machines cannot be used for production delivery.

You must establish precautions to prevent the physical machines from overcommitting vital resources. Virtual machines add an extra processing layer to the physical machines. The extra layer and the physical system's memory and CPU that handle context switching and memory management for the virtual machines can begin to degrade performance under heavy use.<!-- I broke up the preceding sentence because it was quite long. I'm not sure I captured the details correctly, but we aim for sentences of 30 words or fewer. --> Your organization must test thoroughly to understand HCL Portal's performance in your virtualized environment and to know how far to scale HCL Portal to compensate for any degradations.

For virtualized test and development environments, you can overcommit the physical resources of the machine. For production environments, ensure that there is sufficient physical CPU and memory to service each virtual machine. A good rule for memory requirement is to double the HCL Portal instance's maximum heap size and use that as the virtual machine memory configuration. Strictly avoid memory paging, both in the virtual machine and in the hypervisor because it can lead to performance degradation.


