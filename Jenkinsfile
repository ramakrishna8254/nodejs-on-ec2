node
{
	environment {
    NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
}
    stage('CheckOutcode'){
        git 'https://github.com/ramakrishna8254/nodejs-on-ec2.git'
    }
    stage('Build'){
        nodejs(nodeJSInstallationName: 'nodejs16.19.0'){
	sh "sudo killall -9 node"
        sh "sudo npm install"
	sh "sudo nohup npm start &"
    }
    }
 	stage('ExecuteSonarQubeReport'){
        nodejs(nodeJSInstallationName: 'nodejs16.19.0'){
        sh "npm run sonar"
    }
    }
}
