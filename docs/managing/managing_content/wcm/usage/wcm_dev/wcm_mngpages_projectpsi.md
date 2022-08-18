# Portal Scripting Interface and project support

With the Portal Scripting Interface, you can create Jacl or Jython scripts to automate the management of projects.

Using the Project bean with the Portal Scripting Interface, you can perform the following actions on projects:

-   List all available projects
-   Create and delete projects
-   Set an active project
-   Retrieve information about a specific project
-   Retrieve locale-specific attributes for projects
-   Submit a project for review
-   Withdraw a project from review.
-   Approve projects
-   Decline a project
-   Approve all documents of a project, that is all Web Content Manager items that are parts of a workflow
-   Decline all documents of a project, that is all Web Content Manager items that are parts of a workflow
-   Publish projects

To run commands with the Project bean, you can use the Portal bean to set a project as the context for subsequent commands.

## List projects

To retrieve a list of projects, use the listall method. This method returns the names of the projects.

-   Jacl syntax: `$Project listall`
-   Jython syntax: `Project.listall()`

-   **Jacl example:**

    ```
    wsadmin>$Project listall
    '"TestProject1" "TestProject2"'
    ```

-   **Jython example:**

    ```
    wsadmin>Project.listall()
    '"TestProject1" "TestProject2"'
    ```


## Create projects

To create a project, use the create method.

-   Jacl syntax: `$Project create "project\_name"`
-   Jython syntax: `Project.create("project\_name")`

-   **Jacl example:**

    ```
    wsadmin>$Project create "TestProject1"
    TestProject1
    ```

-   **Jython example:**

    ```
    Project.create("TestProject1")
    'TestProject1'
    ```


**Note:** If you create a project with the Portal Scripting Interface, the project is not listed with the recent projects in the project menu.

## Delete projects

To delete a project, use the delete method.

-   Jacl syntax: `$Project delete "project\_name"`
-   Jython syntax: `Project.delete("project\_name")`

-   **Jacl example:**

    ```
    wsadmin>$Project delete "TestProject1"
    ```

-   **Jython example:**

    ```
    wsadmin>Project.delete("TestProject1")
    ```


## Set active project

For commands that you want to run within a project, use the setproject method of the Portal bean to specify the project. When invoking the setproject method, you identify the active project with the name of the project. If you invoke the setproject method without specifying a project name, the active project is cleared. When you set the project during a session, the project is active immediately.

To set the active project, you must establish a user session with the portal by using the login command of the Portal bean.

-   Jacl syntax: `$Project setproject "project\_name"`
-   Jython syntax: `Portal.setproject("project\_name")`

-   **Jacl example:**

    ```
    wsadmin>$Portal setproject "TestProject1"
    ```

-   **Jython example:**

    ```
    wsadmin>Portal.setproject("TestProject1")
    ```


## Retrieve project details

Retrieve project details with the details method. This method returns the following information about the project:

-   Universally Unique Identifier \(UUID\)
-   State
-   Name
-   Title
-   Approvers
-   Outstanding approvals
-   Approval mode, that is whether all approvers need to approve or only one approver needs to approve
-   History, that is which actions have been performed on the project before.

Syntax:

-   Jacl syntax: `$Project details "project\_name"`
-   Jython syntax: `Project.details("project\_name")`

-   **Jacl example:**

    ```
    wsadmin>$Project details "TestProject2"
    uuid                 : 47c7f3bd-b004-4b94-a6b5-397272d69eb7
    state                : ACTIVE
    name                 : TestProject2
    title                : TestProject2
    approvers            : wpsadmins
    outstanding approvals: wpsadmins
    approval mode        : all
    history              : 9/24/13 1:02 PM: Document created by wpsadmin
                           9/24/13 1:06 PM: Submitted for review by wpsadmin
                           9/24/13 1:06 PM: Project state changed to Review
                           9/24/13 6:34 PM: Rejected by wpsadmin
                           9/24/13 6:34 PM: Project state changed to Rejected
                           9/24/13 6:34 PM: Project state changed to Active
                           9/24/13 6:35 PM: Submitted for review by wpsadmin
                           9/24/13 6:35 PM: Project state changed to Review
                           9/24/13 6:35 PM: Rejected by wpsadmin
                           9/24/13 6:35 PM: Rework project with more detail.
                           9/24/13 6:35 PM: Project state changed to Rejected
                           9/24/13 6:35 PM: Project state changed to Active
    items:
      testpagep2 (draft / new / publish pending)
    
    ```

-   **Jython example:**

    ```
    wsadmin>print Project.details("TestProject2")
    uuid                 : 47c7f3bd-b004-4b94-a6b5-397272d69eb7
    state                : ACTIVE
    name                 : TestProject2
    title                : TestProject2
    approvers            : wpsadmins
    outstanding approvals: wpsadmins
    approval mode        : all
    history              : 9/24/13 1:02 PM: Document created by wpsadmin
                           9/24/13 1:06 PM: Submitted for review by wpsadmin
                           9/24/13 1:06 PM: Project state changed to Review
                           9/24/13 6:34 PM: Rejected by wpsadmin
                           9/24/13 6:34 PM: Project state changed to Rejected
                           9/24/13 6:34 PM: Project state changed to Active
                           9/24/13 6:35 PM: Submitted for review by wpsadmin
                           9/24/13 6:35 PM: Project state changed to Review
                           9/24/13 6:35 PM: Rejected by wpsadmin
                           9/24/13 6:35 PM: Rework project with more detail.
                           9/24/13 6:35 PM: Project state changed to Rejected
                           9/24/13 6:35 PM: Project state changed to Active
    items:
      testpagep2 (draft / new / publish pending)
    
    ```


## Retrieve translated attributes

If any project attributes are translated, such as the title or description, you can retrieve those attributes with the nlsget method. Specify the attribute with one of the following parameters:

-   Title: title or t
-   Description: description, descr, or d

Syntax:

-   Jacl syntax: `$Project nlsget "project\_name" attribute\_parameter [locale]`
-   Jython syntax: `Project.nlsget("project\_name","attribute\_parameter"[,"locale"])`

-   **Jacl example:**

    ```
    wsadmin>$Project nlsget "TestProject1" descr en
    This is the description for TestProject1.
    ```

-   **Jython example:**

    ```
    wsadmin>print Project.nlsget("TestProject1", "descr", "en")
    This is the description for TestProject1.
    ```


If you do not specify a value for the locale parameter, the currently selected locale is used.

## Submit a project for review

To submit a project for review, use the submitforreview method. The project needs to be in active state, and all contained documents need to be in publish, pending, or deleted state. When you submit a project for review, the project moves into the review state.

-   Jacl syntax: `$Project submitforreview "project_name"`
-   Jython syntax: `Project.submitforreview("project\_name")`

-   **Jacl example:**

    ```
    wsadmin>$Project submitforreview TestProject
    
    wsadmin>$Project details TestProject
    uuid                 : 035c4488-973f-44a4-aa8e-92b9f36e2412
    state                : REVIEW
    name                 : TestProject
    title                : TestProject
    approvers            : wpsadmins
    outstanding approvals: wpsadmins
    approval mode        : single
    history              : 10/16/13 6:23 PM: Document created by wpsadmin
                           10/16/13 6:26 PM: Submitted for review by wpsadmin
                           10/16/13 6:26 PM: Project state changed to Review
    items:
      testpage (draft / new / publish pending)
    
    ```

-   **Jython example:**

    ```
    wsadmin>Project.submitforreview("TestProject")
    
    wsadmin>print Project.details("TestProject")
    uuid                 : 035c4488-973f-44a4-aa8e-92b9f36e2412
    state                : REVIEW
    name                 : TestProject
    title                : TestProject
    approvers            : wpsadmins
    outstanding approvals: wpsadmins
    approval mode        : single
    history              : 10/16/13 6:23 PM: Document created by wpsadmin
                           10/16/13 6:26 PM: Submitted for review by wpsadmin
                           10/16/13 6:26 PM: Project state changed to Review
    items:
      testpage (draft / new / publish pending)
    
    ```


## Withdraw a project from review

To withdraw a project from review, use the withdrawfromreview method. The project needs to be in review state. When you withdraw a project from review, the project moves into the active state.

-   Jacl syntax: `$Project withdrawfromreview "project_name"`
-   Jython syntax: `Project.withdrawfromreview("project\_name")`

-   **Jacl example:**

    ```
    wsadmin>$Project withdrawfromreview TestProject
    
    wsadmin>$Project details TestProject
    uuid                 : 035c4488-973f-44a4-aa8e-92b9f36e2412
    state                : ACTIVE
    name                 : TestProject
    title                : TestProject
    approvers            : wpsadmins
    outstanding approvals: wpsadmins
    approval mode        : single
    history              : 10/16/13 6:23 PM: Document created by wpsadmin
                           10/16/13 6:26 PM: Submitted for review by wpsadmin
                           10/16/13 6:26 PM: Project state changed to Review
                           10/16/13 6:26 PM: Rejected by wpsadmin
                           10/16/13 6:26 PM: needs rework
                           10/16/13 6:26 PM: Project state changed to Rejected
                           10/16/13 6:26 PM: Project state changed to Active
                           10/16/13 6:27 PM: Submitted for review by wpsadmin
                           10/16/13 6:27 PM: Project state changed to Review
                           10/16/13 6:28 PM: Withdrawn from review by wpsadmin
                           10/16/13 6:28 PM: Project state changed to Active
    items:
      testpage (draft / new / publish pending)
    
    ```

-   **Jython example:**

    ```
    wsadmin>Project.withdrawfromreview("TestProject")
    
    wsadmin>print Project.details("TestProject")
    uuid                 : 035c4488-973f-44a4-aa8e-92b9f36e2412
    state                : ACTIVE
    name                 : TestProject
    title                : TestProject
    approvers            : wpsadmins
    outstanding approvals: wpsadmins
    approval mode        : single
    history              : 10/16/13 6:23 PM: Document created by wpsadmin
                           10/16/13 6:26 PM: Submitted for review by wpsadmin
                           10/16/13 6:26 PM: Project state changed to Review
                           10/16/13 6:26 PM: Rejected by wpsadmin
                           10/16/13 6:26 PM: needs rework
                           10/16/13 6:26 PM: Project state changed to Rejected
                           10/16/13 6:26 PM: Project state changed to Active
                           10/16/13 6:27 PM: Submitted for review by wpsadmin
                           10/16/13 6:27 PM: Project state changed to Review
                           10/16/13 6:28 PM: Withdrawn from review by wpsadmin
                           10/16/13 6:28 PM: Project state changed to Active
    items:
      testpage (draft / new / publish pending)
    
    ```


## Approve projects

To approve the drafts in a project, use the approve method. Additional to the project, you can add a comment as a second parameter. If the project setup requires a comment, the comment is mandatory. If not, the comment is optional.

The command approves only the project. The drafts in the project need to be approved separately, for example by using the `approvedocuments` method. Before you can approve a project, all of its documents must be in publish, pending, or deleted state.

-   Jacl syntax:

    ```
    $Project approve "project\_name"
    $Project approve "project\_name" "comment"
    ```

-   Jython syntax:

    ```
    Project.approve("project\_name")
    Project.approve("project\_name", "comment")
    ```


-   **Jacl example:**

    ```
    wsadmin>$Project approve TestProject "ok"
    
    wsadmin>$Project details TestProject
    uuid                 : 035c4488-973f-44a4-aa8e-92b9f36e2412
    state                : PENDING
    name                 : TestProject
    title                : TestProject
    approvers            : wpsadmins
    outstanding approvals: 
    approval mode        : single
    history              : 10/16/13 6:23 PM: Document created by wpsadmin
                           10/16/13 6:26 PM: Submitted for review by wpsadmin
                           10/16/13 6:26 PM: Project state changed to Review
                           10/16/13 6:26 PM: Rejected by wpsadmin
                           10/16/13 6:26 PM: needs rework
                           10/16/13 6:26 PM: Project state changed to Rejected
                           10/16/13 6:26 PM: Project state changed to Active
                           10/16/13 6:27 PM: Submitted for review by wpsadmin
                           10/16/13 6:27 PM: Project state changed to Review
                           10/16/13 6:28 PM: Withdrawn from review by wpsadmin
                           10/16/13 6:28 PM: Project state changed to Active
                           10/16/13 6:28 PM: Submitted for review by wpsadmin
                           10/16/13 6:28 PM: Project state changed to Review
                           10/16/13 6:28 PM: Approved by wpsadmin
                           10/16/13 6:28 PM: ok
                           10/16/13 6:28 PM: Project state changed to Pending
    items:
      testpage (draft / new / publish pending)
    
    ```

-   **Jython example:**

    ```
    wsadmin>Project.approve("TestProject1")
    wsadmin>print Project.details("TestProject1")
    uuid                 : 035c4488-973f-44a4-aa8e-92b9f36e2412
    state                : PENDING
    name                 : TestProject
    title                : TestProject
    approvers            : wpsadmins
    outstanding approvals: 
    approval mode        : single
    history              : 10/16/13 6:23 PM: Document created by wpsadmin
                           10/16/13 6:26 PM: Submitted for review by wpsadmin
                           10/16/13 6:26 PM: Project state changed to Review
                           10/16/13 6:26 PM: Rejected by wpsadmin
                           10/16/13 6:26 PM: needs rework
                           10/16/13 6:26 PM: Project state changed to Rejected
                           10/16/13 6:26 PM: Project state changed to Active
                           10/16/13 6:27 PM: Submitted for review by wpsadmin
                           10/16/13 6:27 PM: Project state changed to Review
                           10/16/13 6:28 PM: Withdrawn from review by wpsadmin
                           10/16/13 6:28 PM: Project state changed to Active
                           10/16/13 6:28 PM: Submitted for review by wpsadmin
                           10/16/13 6:28 PM: Project state changed to Review
                           10/16/13 6:28 PM: Approved by wpsadmin
                           10/16/13 6:28 PM: ok
                           10/16/13 6:28 PM: Project state changed to Pending
    items:
      testpage (draft / new / publish pending)
    
    ```


## Decline projects

To decline the drafts in a project, use the decline method. Additional to the project, you can add a comment as a second parameter. If the project setup requires a comment, the comment is mandatory. If not, the comment is optional. The command only declines the project. The drafts in the project remain in their current state. For a project to be declined, the project needs to be in review state.

-   Jacl syntax:

    ```
    $Project decline "project\_name"
    $Project decline "project\_name" "comment"
    ```

-   Jython syntax:

    ```
    Project.decline("project\_name")
    Project.decline("project\_name", "comment")
    ```


-   **Jacl example:**

    ```
    wsadmin>$Project decline TestProject "needs rework"
    
    wsadmin>$Project details TestProject
    uuid                 : 035c4488-973f-44a4-aa8e-92b9f36e2412
    state                : ACTIVE
    name                 : TestProject
    title                : TestProject
    approvers            : wpsadmins
    outstanding approvals: wpsadmins
    approval mode        : single
    history              : 10/16/13 6:23 PM: Document created by wpsadmin
                           10/16/13 6:26 PM: Submitted for review by wpsadmin
                           10/16/13 6:26 PM: Project state changed to Review
                           10/16/13 6:26 PM: Rejected by wpsadmin
                           10/16/13 6:26 PM: needs rework
                           10/16/13 6:26 PM: Project state changed to Rejected
                           10/16/13 6:26 PM: Project state changed to Active
    items:
      testpage (draft / new / publish pending)
    
    ```

-   **Jython example:**

    ```
    wsadmin>Project.decline("TestProject1")
    wsadmin>print Project.details("TestProject1")
    uuid                 : 035c4488-973f-44a4-aa8e-92b9f36e2412
    state                : ACTIVE
    name                 : TestProject
    title                : TestProject
    approvers            : wpsadmins
    outstanding approvals: wpsadmins
    approval mode        : single
    history              : 10/16/13 6:23 PM: Document created by wpsadmin
                           10/16/13 6:26 PM: Submitted for review by wpsadmin
                           10/16/13 6:26 PM: Project state changed to Review
                           10/16/13 6:26 PM: Rejected by wpsadmin
                           10/16/13 6:26 PM: needs rework
                           10/16/13 6:26 PM: Project state changed to Rejected
                           10/16/13 6:26 PM: Project state changed to Active
    items:
      testpage (draft / new / publish pending)
    
    ```


## Approve all documents of a project

To approve all documents of a project, use the approvedocuments method. It approves all Web Content Manager items that are parts of a workflow.

-   Jacl syntax: `$Project approvedocuments project\_name`
-   Jython syntax: `Project.approvedocuments("project\_name")`

-   **Jacl example:**

    ```
    wsadmin>$Project approvedocuments TestProject
    
    wsadmin>$Project details TestProject
    uuid                 : 5dffe3e4-59d1-4abf-8697-3e62a29a0cbf
    state                : PENDING
    name                 : TestProject
    title                : TestProject
    approvers            : 
    outstanding approvals: 
    approval mode        : single
    history              : 10/16/13 6:14 PM: Document created by wpsadmin
                           10/16/13 6:16 PM: Project state changed to Pending
    items:
      testpage (draft / new / publish pending)
    
    ```

-   **Jython example:**

    ```
    wsadmin>Project.approvedocuments("TestProject")
    
    wsadmin>Project.details("TestProject")
    uuid                 : 5dffe3e4-59d1-4abf-8697-3e62a29a0cbf
    state                : PENDING
    name                 : TestProject
    title                : TestProject
    approvers            : 
    outstanding approvals: 
    approval mode        : single
    history              : 10/16/13 6:14 PM: Document created by wpsadmin
                           10/16/13 6:16 PM: Project state changed to Pending
    items:
      testpage (draft / new / publish pending)
    
    ```


## Decline all documents of a project

To decline all documents of a project, use the declinedocuments method. This method declines all Web Content Manager items that are parts of a workflow.

-   Jacl syntax: `$Project declinedocuments project\_name`
-   Jython syntax: `Project.declinedocuments("project\_name")`

-   **Jacl example:**

    ```
    wsadmin>$Project declinedocuments TestProject
    wsadmin>$Project details TestProject
    uuid                 : 5dffe3e4-59d1-4abf-8697-3e62a29a0cbf
    state                : ACTIVE
    name                 : TestProject
    title                : TestProject
    approvers            : 
    outstanding approvals: 
    approval mode        : single
    history              : 10/16/13 6:14 PM: Document created by wpsadmin
                           10/16/13 6:16 PM: Project state changed to Pending
                           10/16/13 6:18 PM: Project state changed to Active
    items:
      testpage (draft / new)
    ```

-   **Jython example:**

    ```
    wsadmin>$Project.declinedocuments("TestProject")
    wsadmin>$Project.details("TestProject")
    uuid                 : 5dffe3e4-59d1-4abf-8697-3e62a29a0cbf
    state                : ACTIVE
    name                 : TestProject
    title                : TestProject
    approvers            : 
    outstanding approvals: 
    approval mode        : single
    history              : 10/16/13 6:14 PM: Document created by wpsadmin
                           10/16/13 6:16 PM: Project state changed to Pending
                           10/16/13 6:18 PM: Project state changed to Active
    items:
      testpage (draft / new)
    ```


## Publish projects

To publish a project, use the publish method. Before you can publish a project, all items in the project must be approved and the project needs to be in publish pending state.

-   Jacl syntax: `$Project publish "project\_name"`
-   Jython syntax: `Project.publish("project\_name")`

-   **Jacl example:**

    ```
    wsadmin>$Project publish TestProject
    
    wsadmin>$Project details TestProject
    uuid                 : 035c4488-973f-44a4-aa8e-92b9f36e2412
    state                : PUBLISHED
    name                 : TestProject
    title                : TestProject
    approvers            : wpsadmins
    outstanding approvals: 
    approval mode        : single
    history              : 10/16/13 6:23 PM: Document created by wpsadmin
                           10/16/13 6:26 PM: Submitted for review by wpsadmin
                           10/16/13 6:26 PM: Project state changed to Review
                           10/16/13 6:26 PM: Rejected by wpsadmin
                           10/16/13 6:26 PM: needs rework
                           10/16/13 6:26 PM: Project state changed to Rejected
                           10/16/13 6:26 PM: Project state changed to Active
                           10/16/13 6:27 PM: Submitted for review by wpsadmin
                           10/16/13 6:27 PM: Project state changed to Review
                           10/16/13 6:28 PM: Withdrawn from review by wpsadmin
                           10/16/13 6:28 PM: Project state changed to Active
                           10/16/13 6:28 PM: Submitted for review by wpsadmin
                           10/16/13 6:28 PM: Project state changed to Review
                           10/16/13 6:28 PM: Approved by wpsadmin
                           10/16/13 6:28 PM: ok
                           10/16/13 6:28 PM: Project state changed to Pending
                           10/16/13 6:29 PM: Project state changed to Publishing
                           10/16/13 6:29 PM: Project state changed to Published
    items:
      testpage (published)
    ```

-   **Jython example:**

    ```
    wsadmin>Project.publish("TestProject1")
    wsadmin>print Project.details("TestProject1")
    uuid                 : 035c4488-973f-44a4-aa8e-92b9f36e2412
    state                : PUBLISHED
    name                 : TestProject
    title                : TestProject
    approvers            : wpsadmins
    outstanding approvals: 
    approval mode        : single
    history              : 10/16/13 6:23 PM: Document created by wpsadmin
                           10/16/13 6:26 PM: Submitted for review by wpsadmin
                           10/16/13 6:26 PM: Project state changed to Review
                           10/16/13 6:26 PM: Rejected by wpsadmin
                           10/16/13 6:26 PM: needs rework
                           10/16/13 6:26 PM: Project state changed to Rejected
                           10/16/13 6:26 PM: Project state changed to Active
                           10/16/13 6:27 PM: Submitted for review by wpsadmin
                           10/16/13 6:27 PM: Project state changed to Review
                           10/16/13 6:28 PM: Withdrawn from review by wpsadmin
                           10/16/13 6:28 PM: Project state changed to Active
                           10/16/13 6:28 PM: Submitted for review by wpsadmin
                           10/16/13 6:28 PM: Project state changed to Review
                           10/16/13 6:28 PM: Approved by wpsadmin
                           10/16/13 6:28 PM: ok
                           10/16/13 6:28 PM: Project state changed to Pending
                           10/16/13 6:29 PM: Project state changed to Publishing
                           10/16/13 6:29 PM: Project state changed to Published
    items:
      testpage (published)
    ```


## Examples

These examples demonstrate a typical command sequence to create a page within a specific project. Each example script performs the following operations:

-   Establishes a user session.
-   Creates a project \(`myproject`\).
-   Retrieves the details for the `myproject` project.
-   Sets the active project to the `myproject` project.
-   Locates the `Home` page in the portal.
-   Creates the `testpage1` page as a child page of the `Home` page. This operation takes place within the context of the active project.
-   Clears the active project.
-   Terminates the user session.

-   **Jacl example:**

    ```
    $Portal login
    set myproject [$Project create "My new project"
    $Project details $myproject
    $Portal setproject $myproject
    $Content find any un ibm.portal.Home select
    $Content create page testpage1 html shared public
    $Portal setproject
    $Portal logout
    ```

-   **Jython example:**

    ```
    Portal.login()
    myproject = Project.create("My new project")
    Project.details(myproject)
    Portal.setproject(myproject)
    Content.find("any", "un", "ibm.portal.Home", "select")
    Content.create("page","testpage1","html", "shared", "public")
    Portal.setproject()
    Portal.logout()
    ```


**Parent topic:**[Administering managed pages](../wcm/wcm_mngpages_advadmin.md)

**Related information**  


[Command reference for the Portal Scripting Interface](../admin-system/adpsicrf.md)

