# HCL Digital Experience Help Center

Visit the published site at [https://help.hcl-software.com/digital-experience/9.5/latest/](https://help.hcl-software.com/digital-experience/9.5/latest/)

## Usage
[View the documentation](https://opensource.hcltechsw.com/digital-experience/) for product features and usage information.

## Contributing

You are welcome to report bugs or provide feedback on the **product documentation** via pull requests on GitHub at https://github.com/HCL-TECH-SOFTWARE/digital-experience. This is the Digital Experience product documentation website and not the product support platform, all bug reports and pull requests shall pertain to product documentation. You are expected to update only the markdown files in the `docs` directory.

### How to contribute?

- [Create a documentation update request](#create-a-documentation-update-request)
- [Clone the repository and create a pull request](#clone-the-repository)
- [Fork the repository](#fork-the-repository)


#### Create a documentation update request

Perform the following steps to create a documentation issue request.

1. Go to the **[Issues](https://github.com/HCL-TECH-SOFTWARE/digital-experience/issues)** tab.
2. Select **New issue > Documentation Update Request**.
3. Fill the following fields:
    - **Add a title**
    - **Contact Details**
    - **Page(s) impacted**
    - **What is the issue?\***
    - **Version**
4. Select the **Reviewers** gear icon and set the following reviewers:
    - marcvincentvista
    - nads102896
5. Select **Create**.

#### Clone the repository

Perform the following steps to install mkdocs and clone the git repository to update the markdown files and create a pull request.

1. Follow the [MkDocs Installation guide](https://www.mkdocs.org/user-guide/installation/) to install [`MkDocs`](https://www.mkdocs.org/) and `pip`.
2. Install the required `mkdocs` plugins:  
    - `pip install -r requirements.txt`
3. Clone the [digital-experience repository](https://github.com/HCL-TECH-SOFTWARE/digital-experience).
4. Update the markdown files in the `docs` folder.
5. Verify the changes by building the project locally [mkdocs serve](https://www.mkdocs.org/getting-started/#creating-a-new-project).
6. Commit the changes.
7. Create and submit a [Pull Request](https://github.com/HCL-TECH-SOFTWARE/digital-experience/pulls).
8. Await the PR to be reviewed, merged, and built.

#### Fork the repository

Perform the following steps to fork of the HCL-TECH-SOFTWARE repository and create a pull request.

1. In the HCL-TECH-SOFTWARE repository page, click **Fork**.
2. Select **Create a fork**.
3. In your forked repository, go to **docs**.
4. Navigate to the page you want to edit or create a new page.
    - Edit a page
        1. Select the .md file you want to edit.
        2. Select the **Edit this file** pencil icon.
    - Create a new page
        1. Select **Add file > Create new file**.
        2. Enter a name for your file.
5. Apply your changes in markdown format then click **Commit changes...**.
6. Enter a **Commit message** and **Extended description**.
7. Select **Create a new branch for this commit and start a pull request**.
8. Enter a name for your branch.
9. Select **Propose changes**.
10. Review your changes then select **Create pull request**.
11. Fill the **Add a title** and **Add a description** fields.
12. Select **Create a pull request**.
13. Navigate to the main repository's **Pull requests** tab.
14. Select **Compare & pull request**. Ensure the branch name indicated matches the pull request you created.
15. Select the **Reviewers** gear icon and set the following reviewers:
    - marcvincentvista
    - nads102896
16. Select **Create a pull request**.
      
## Set up github email notification

Configure your email notification preferences to receive notifications.

- Go to [Notifications](https://github.com/settings/notifications)
- Under **Email notification preferences**, ensure you have a valid email address in the **Default notification email** box
- Ensure that the following three options are selected to receive updates on conversations that you’re participating in or watching:
  - Comments on Issues and Pull Requests
  - Pull Request reviews
  - Pull Request pushes

## License

The documentation is available as open source under the terms of the [Apache License 2.0](http://www.apache.org/licenses/).
