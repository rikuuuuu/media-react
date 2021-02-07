// import firebase from "firebase";

const Config = (): any => {
    return {
        firebase: {
            apiKey: "AIzaSyBzpCWCFk3QoKkKjxAnOGAVnJgwrNf3Xtg",
            authDomain: "media-dev-303813.firebaseapp.com",
            projectId: "media-dev-303813",
            storageBucket: "media-dev-303813.appspot.com",
            messagingSenderId: "643992720036",
            appId: "1:643992720036:web:b4f0f5c641744f73154c31",
            measurementId: "G-NYZD8ELS9N"
        }
    }
}

export const firebaseConfig = Config().firebase;