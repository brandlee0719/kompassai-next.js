import { AuthenticationDetails, CognitoUser, CognitoUserAttribute, CognitoUserPool } from 'amazon-cognito-identity-js'

// const userPoolId = process.env.COGNITO_USERPOOL_ID
// const clientId = process.env.COGNITO_PUBLIC_CLIENT_ID

const userPoolId = 'us-east-1_U94Z3C3bH'
const clientId = '7l48iqc7obdo3ctgkalc7fjq60'

// console.log(`userpool id=${userPoolId}`)
// console.log(`client id=${clientId}`)

const poolData = {
  UserPoolId: `${userPoolId}`,
  ClientId: `${clientId}`,
}

const userPool = new CognitoUserPool(poolData)

let currentUser = userPool.getCurrentUser()

export function getCurrentUser() {
  return currentUser
}

function getCognitoUser(email) {
  const userData = {
    Username: email,
    Pool: userPool,
  }
  const cognitoUser = new CognitoUser(userData)
  return cognitoUser
}

export async function getSession() {
  if (!currentUser) {
    currentUser = userPool.getCurrentUser();
  }

  return new Promise(function (resolve, reject) {
    currentUser.getSession(function (err, session) {
      if (err) {
        reject(err)
      } else {
        resolve(session)
      }
    })
  }).catch((err) => {
    throw err
  })
}

export async function signUpUserWithEmail(email, password, customData, validationData) {

  return new Promise(function (resolve, reject) {
    const attributeList = [
      new CognitoUserAttribute({
        Name: 'email',
        Value: email,
      }),
      new CognitoUserAttribute({
        Name: 'custom:password',
        Value: password,
      }),
      new CognitoUserAttribute({
        Name: 'custom:userName',
        Value: customData.userName,
      }),
      new CognitoUserAttribute({
        Name: 'custom:companyName',
        Value: customData.companyName,
      }),
      new CognitoUserAttribute({
        Name: 'custom:mobile',
        Value: customData.mobile,
      }),
    ]

    const validateList = [
      new CognitoUserAttribute({
        Name: 'captcha',
        Value: validationData.captcha,
      })
    ]

    userPool.signUp(email, password, attributeList, validateList, function (err, res) {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  }).catch((err) => {
    throw err
  })
}

export async function verifyCode(email, code) {
  return new Promise(function (resolve, reject) {
    const cognitoUser = getCognitoUser(email)

    cognitoUser.confirmRegistration(code, true, function (err, result) {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  }).catch((err) => {
    throw err
  })
}

export async function signInWithEmail(email, password, validationData = null) {
  return new Promise(function (resolve, reject) {
    const authenticationData = {
      Username: email,
      Password: password,
      ValidationData: validationData,
    }
    const authenticationDetails = new AuthenticationDetails(authenticationData)

    currentUser = getCognitoUser(email);
    currentUser.authenticateUser(authenticationDetails, {
      onSuccess: function (res) {
        resolve(res)
      },
      onFailure: function (err) {
        reject(err)
      },
    })
  }).catch((err) => {
    throw err
  })
}

export function signOut() {
  if (currentUser) {
    currentUser.signOut()
  }
}

export async function getAttributes() {
  return new Promise(function (resolve, reject) {
    currentUser.getUserAttributes(function (err, attributes) {
      if (err) {
        reject(err)
      } else {
        resolve(attributes)
      }
    })
  }).catch((err) => {
    throw err
  })
}

export async function setAttribute(attribute) {
  return new Promise(function (resolve, reject) {
    const attributeList = []
    const res = new CognitoUserAttribute(attribute)
    attributeList.push(res)

    currentUser.updateAttributes(attributeList, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  }).catch((err) => {
    throw err
  })
}

export async function sendCode(email) {
  return new Promise(function (resolve, reject) {
    const cognitoUser = getCognitoUser(email)
    if (!cognitoUser) {
      reject(`could not find ${email}`)
      return
    }

    cognitoUser.forgotPassword({
      onSuccess: function (res) {
        resolve(res)
      },
      onFailure: function (err) {
        reject(err)
      },
      inputVerificationCode: function(data) {
        resolve(data)
      }
    })
  }).catch((err) => {
    throw err
  })
}

export async function resendCode(email) {
  return new Promise(function (resolve, reject) {
    const cognitoUser = getCognitoUser(email)
    if (!cognitoUser) {
      reject(`could not find ${email}`)
      return
    }

    cognitoUser.resendConfirmationCode((err) => {
      resolve(err);
    })
  }).catch((err) => {
    throw err
  })
}

export async function forgotPassword(email, code, password) {
  return new Promise(function (resolve, reject) {
    const cognitoUser = getCognitoUser(email)

    if (!cognitoUser) {
      reject(`could not find ${email}`)
      return
    }

    cognitoUser.confirmPassword(code, password, {
      onSuccess: function () {
        resolve('password updated')
      },
      onFailure: function (err) {
        reject(err)
      },
    })
  })
}

export async function changePassword(oldPassword, newPassword) {
  return new Promise(function (resolve, reject) {
    currentUser.changePassword(oldPassword, newPassword, function (err, res) {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}