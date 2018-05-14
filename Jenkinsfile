node() {
  MAIL_TO = "dev@xxx.me"

  // get ready node - for npm
  env.NODEJS_HOME = "${tool 'Node 9'}"
  env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"

  try {
    stage('Checkout') {
      checkout scm
    }

    stage('Update') {
      sh 'npm install'
    }

    stage('Build') {
      sh 'npm run build'
    }

    stage('Deploy') {
      if("${env.BUILD_TYPE}" == "prod") {
        sh 'make deploy-prod'
      } else {
        sh 'make deploy-beta'
      }
    }

    stage('Notify') {
      mail (
        to: MAIL_TO,
        subject: "[Jenkins] ✔ ${env.JOB_NAME} - build#${env.BUILD_NUMBER}: SUCCESS",
        body: "Checkout details at: ${env.BUILD_URL}");
    }
  } catch (err) {
      mail (
        to: MAIL_TO,
        subject: "[Jenkins] ✘ ${env.JOB_NAME} - build#${env.BUILD_NUMBER}: FAILED",
        body: "Checkout details at: ${env.BUILD_URL}");
      throw err;
  }
}
