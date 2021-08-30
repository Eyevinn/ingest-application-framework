import { Readable } from "stream";
import winston from "winston";

interface IafUploadModule {
    logger: winston.Logger;
    onFileAdd(filePath: string, readStream: Readable): any;
    uploader?: Uploader;
    dispatcher?: TranscodeDispatcher;
}

interface Uploader {
    destination: string;
    logger: winston.Logger;
    upload(fileStream: Readable, fileName: string);
}

interface TranscodeDispatcher {
    encodeParams: any,
    inputLocation: string;
    outputDestination: string;
    logger: winston.Logger;
    dispatch(fileName: string): Promise<any>;

}

interface IafFileWathModule {
    fileInput: string;
    logger: winston.Logger;
    onAdd(callback: (filePath: string, readStream: Readable) => any);
}
