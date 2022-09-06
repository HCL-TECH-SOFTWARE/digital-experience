/*
 ********************************************************************
 * Licensed Materials - Property of HCL                             *
 *                                                                  *
 * Copyright HCL Technologies Ltd. 2022. All Rights Reserved.       *
 *                                                                  *
 * Note to US Government Users Restricted Rights:                   *
 *                                                                  *
 * Use, duplication or disclosure restricted by GSA ADP Schedule    *
 ********************************************************************
 */

// Use our DX shared library
@Library("dx-shared-library") _

pipeline {
    agent {
        label 'build_docu'
    }


    stages {
        stage("Prepare settings") {
            steps {
                script {

                // For manual testing we assign a default variable, will be automatically assigned during PR runs
                    if (!env.ghprbActualCommit) {
                        env.ghprbActualCommit = 'pr-checks'
                    }
                
                // Enable pipeline to accept Strict as a variable
                    if (!env.STRICT_BUILD) {
                      env.STRICT_BUILD = "false"
                    }

                }
            }
        }

        stage("Build Doc") {
            steps {
                withCredentials([sshUserPrivateKey(credentialsId: "jenkins-git", keyFileVariable: 'SSH_KEY')]) {
                    // We run a dedicated docker container which will perform all python and mkdocs actions
                    // The SSH Key is passed into the container for git checkout
                    // The script 02-pr-checks.sh is called and performs all steps
                    sh """
                        docker run -d --name doc-pr-check quintana-docker.artifactory.cwp.pnp-hcl.com/dxubi:v1.0.0_8.5-204 /bin/bash -c "mkdir /build && mkdir /root/.ssh && tail -f /dev/null"
                        docker cp ${SSH_KEY} doc-pr-check:/root/.ssh/id_rsa
                        docker cp ${WORKSPACE}/jenkins/helpers/01-publish-doc.sh doc-pr-check:/build
                        docker exec doc-pr-check /bin/bash /build/01-publish-doc.sh --branch ${ghprbActualCommit} --strict ${STRICT_BUILD}
                    """
                }
            }
        }
    }

    post {
        cleanup {
            sh """
                docker stop doc-pr-check || true
                docker rm doc-pr-check || true
            """
            dxWorkspaceDirectoriesCleanup()
        }
    }
}