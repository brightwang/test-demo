pipeline{
    agent any
    stages{
        stage('test'){
        agent {
                    docker {
                        image 'cypress/browsers:chrome67'
                        args '-v ${WORKSPACE}/:/app:rw,z -u root:root -v npm-cache:~/.npm  -v cypress-cache:~/.cache'
                        reuseNode true
                    }
                }
                steps {
                     sh 'npm install'
                    sh '$(npm bin)/cypress install'
                    sh 'npm run test'
                }
        }
    }
}