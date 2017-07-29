class LoginPage implements Page {
    app : Application;
    ractive : Ractive;
    
    constructor(app : Application) {
        this.app = app;
    }
    
    onCreate() {
        this.ractive = new Ractive({
            el : '#container',
            template : '#LoginTemplate',
            showNext : () => {
                this.app.showPage('second/1234');
            },
        });
    }
}