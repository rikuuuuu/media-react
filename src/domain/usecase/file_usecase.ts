import firebase from 'firebase/app';

const baseURL = "gs://mediago-290515.appspot.com";

interface IFileUseCase {
    createArticleThumbnail(uploadFile: File): Promise<string>;
}

class FileUseCase implements IFileUseCase {
    public createArticleThumbnail = (uploadFile: File): Promise<string> => {
        let fileName: string;

        return new Promise<string>((resolve, reject) => {
            fileName = `${this.getUniqueStr()}.${this.getExtention(uploadFile.name)}`;
            const refURL: string = `${baseURL}/article/${fileName}`;
            return firebase.storage().refFromURL(refURL).put(uploadFile)
                .then((snapshot: firebase.storage.UploadTaskSnapshot) => {
                    snapshot.ref.getDownloadURL().then((url) => {
                        resolve(url);
                    })
                }).catch((error) => {
                    reject(this.firbaseStorageErrorHandle(error));
                });
        })
    };

    private getUniqueStr = (myStrong?: number): string => {
        let strong = 1000;
        if (myStrong) {
            strong = myStrong;
        }
        return new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16)
    };

    private getExtention = (filename: string): string => {
        const f = filename.split('.');
        return f[f.length - 1].toLowerCase();

    };

    private firbaseStorageErrorHandle = (error: any): string => {
        return `${error.code}:${error.message}`
    };
}

const createFileUsecase = (): IFileUseCase => {
    return new FileUseCase();
};

export { createFileUsecase };
export type { IFileUseCase };
