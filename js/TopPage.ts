class TopPage implements Page {
    app : Application;
    ractive : Ractive;
    
    constructor(app : Application) {
        this.app = app;
    }
    
    onCreate() {
        this.ractive = new Ractive({
            el : '#container',
            template : '#topTemplate',
            data : {
                loggedIn : (KiiUser.getCurrentUser() != null),
            },
            showSignup : () => {
                this.app.showPage("newuser");
            },
            newArticle : () => {
                if (KiiUser.getCurrentUser() == null) {
                    this.app.showPage("login");
                } else {
                    this.app.showPage("post");
                }
            },
            showTrouble : () => {
                this.app.showPage("trouble");
            },
            logout : () => {
                KiiUser.logOut();
                localStorage.setItem('token', '');
                this.ractive.set('loggedIn', false);
            },
        });
    }
}