import { Readable } from "stream";
import winston from "winston";

interface IafUploadModule {
    logger: winston.Logger;
    playlistName: string;
    onFileAdd(filePath: string, readStream: Readable, contentType?: string): any;
    progressDelegate: Function;
    fileUploadedDelegate: Function;
}

interface IafFileWatchModule {
    fileInput: string;
    logger: winston.Logger;
    onAdd(callback: (filePath: string, readStream: Readable, contentType?: string) => any);
}
