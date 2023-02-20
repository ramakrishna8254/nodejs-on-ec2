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
	sh "echo 'The following command terminates the "npm start" process using its PID'"
	sh "echo '(written to ".pidfile"), all of which were conducted when "deliver.sh"'"
	sh "echo 'was executed.'"
	sh "set -x"
	sh "kill -9 $(cat .pidfile)"
        sh "npm install"
	sh "nohup npm start &"
    }
    }
}
