# MKDocs build pipeline

This pipeline will publish the documentation into gh-pages.

## Directory structure

```text
jenkins/
  helpers/                           # Contains all helper scripts
  Jenkinsfile/                       # Main pipeline execution code
  README.md/                         # This file
```

## Pipeline output

The pipeline will push the documentation build into the `gh-pages` branch of this repository.

## Pipeline flow

This pipeline is very simple:

- Launching a container using Docker that will use the UBI base image and keeps running until stopped (container name is `doc-builder`)
- Copy over SSH key and helper scripts into the running container
- Execute the main script `01-publish-doc.sh` inside the container
  - The script will install python, git and mkdocs and perform a checkout of the `default` branch of this repository. Then it will use `mkdocs` to build the `gh-pages`
- Remove the container

### Configuration of Jenkins Job

#### Target Agent

Note down which type of agent is used, identified by the `build_docu` you define in the pipeline code. 

#### Parameters

This pipeline does **not** support any parameters.

#### Used credentials

Create a list of credentials that is used by this pipeline, also describe which stage of the pipeline uses it:

| Credential ID | Used ENV vars | Description | Affected Pipeline Stage |
| -- | -- | -- | -- |
| jenkins-git | `SSH_KEY` | Used to access the GitHub repository | `Publish doc` |

#### Pipeline definition configuration

Configure the Job to use a `Pipeline script from SCM` with the target SCM being `Git`. Use the repository URL `git.cwp.pnp-hcl.com:CWPdoc/dx-mkdocs.git` and a fitting git credential, e.g. `git-ssh-access-key`.

As Branch, specify what you need, default would be `develop`.

For the `Script Path` use `jenkins/Jenkinsfile`
