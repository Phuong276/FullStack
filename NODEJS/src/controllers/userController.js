import userService from "../services/userService"

let handleLogin = async (req, res) => {
    let email = req.body.email
    let password = req.body.password

    if(!email || !password) {
        return res.status(500).json( {
            errCode: 1,
            message: 'Missing inputs parameter!'
        })
    }

    let userData = await userService.handleUserLogin(email, password)

    return res.status(200).json( {
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user
    })
}

let handleGetAllUsers = async (req, res) => {
    let id = req.query.id;
    let users = await userService.getAllUsers(id);

    if(!id) {
        return res.status(200).json( {
            errCode: 1,
            errMessage: 'Missing required parameters',
            users: []
        })
    }

    return res.status(200).json( {
        errCode: 0,
        errMessage: 'Ok',
        users
    })
}

let handleCreateNewUser = async (req, res) => {
    let message = await userService.createNewUser(req.body)
    return res.status(200).json( {
        errMessage: message
    })
}

let handleDeletetUser = async (req, res) => {
    if(!req.body.id) {
        return res.status(200).json( {
            errCode: 1,
            errMessage: "Missing requid parameters"
        })
    }
    let message = await userService.deleteUser(req.body.id)
    return res.status(200).json( {
        errMessage: message
    })
}

let handleEditUser = async (req, res) => {

}

module.exports = {
    handleLogin: handleLogin,
    handleGetAllUsers: handleGetAllUsers,
    handleCreateNewUser: handleCreateNewUser,
    handleEditUser: handleEditUser,
    handleDeletetUser: handleDeletetUser,
}