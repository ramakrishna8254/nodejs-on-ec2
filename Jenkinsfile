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
        sh "npm install"
	sh "nohup npm start &"
    }
    }
}
