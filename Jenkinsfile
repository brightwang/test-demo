pipeline{
    agent any
    stages{
        stage('test'){
                steps {
                     sh 'npm install'
                    sh '$(npm bin)/cypress install'
                    sh 'npm run test'
                }
        }
    }
}