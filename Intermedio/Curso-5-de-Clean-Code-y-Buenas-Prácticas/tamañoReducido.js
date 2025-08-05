class UserAuth {
    constructor(user) {
        this.user = user
    }
    verifyCredentials(){
        return true
    }
}


class UserSettings extends UserAuth{
    constructor(user, settings) {
        super(user)
        this.settings = settings
    }
    
    changeSttings(settings) {
        if (this.verifyCredentials()) {
            console.log('Puede modificar su configuracion')
        }
        console.log('no tienes acceso')
    }
}

const newAccess = new UserSettings('Jesus', 'pastrana')
newAccess.changeSttings()