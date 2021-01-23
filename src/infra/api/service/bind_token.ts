import firebase from 'firebase/app';
import 'firebase/auth';
// import {AppError, ErrorType} from "../../../domain/model/app_error";
// import {frontEndConfig} from "../../../config/config";

// const errorCode: string = frontEndConfig.errorCodeForFrontEnd;

const getToken = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {

        // firebase.initializeApp();

        // let authUser: firebase.User | null;

        // authUser = firebase.auth().currentUser;

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              user.getIdToken(false)
                .then((token: string): void => {
                    // Devスイッチ有効時のみコンソール出力を実施
                    // if (localStorage.getItem("devConsole")) {
                    // }
                    resolve(token);
                })
                .catch((error: Error): void => {
                    reject(error);
                });
            } else {
              console.log("token ありません")
              reject("Tokenがありません");
            }
        });

        // if (authUser) {
        //     authUser.getIdToken(false)
        //         .then((token: string): void => {
        //             // Devスイッチ有効時のみコンソール出力を実施
        //             // if (localStorage.getItem("devConsole")) {
        //             // }
        //             resolve(token);
        //         })
        //         .catch((error: Error): void => {
        //             reject(error);
        //         });
        // } else {
        //     reject("Tokenがありません");
        // }
    });
};

export {getToken};
