// import firebase from "firebase";

const Config = (): any => {
    return {
        firebase: {
            apiKey: "AIzaSyCzOYhcpHK1MIFKpQc1a-_CNQ3RMdW8L2A",
            authDomain: "mediago-290515.firebaseapp.com",
            databaseURL: "https://mediago-290515.firebaseio.com",
            projectId: "mediago-290515",
            storageBucket: "mediago-290515.appspot.com",
            messagingSenderId: "385233038",
            appId: "1:385233038:web:eeb70e72d0033446cf19df",
            measurementId: "G-7SXFM7X383"
        }
    }
}

export const firebaseConfig = Config().firebase;