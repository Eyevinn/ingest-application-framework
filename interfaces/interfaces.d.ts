import { Readable } from "stream";
import winston from "winston";

interface IafUploadModule {
    logger: winston.Logger;
    onFileAdd(filePath: string, readStream: Readable): any;
}

interface IafFileWatchModule {
    fileInput: string;
    logger: winston.Logger;
    onAdd(callback: (filePath: string, readStream: Readable) => any);
}
