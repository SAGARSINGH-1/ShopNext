import conf from '../conf/conf.js'
import { Client, ID, Databases, Storage, Query } from 'appwrite'
import toast from 'react-hot-toast';

export class Service {
    client = new Client();
    databases;

    // 
    notify = (message) => { toast.success(message, { position: "bottom-right", autoClose: 2000, }); }
    notifywar = (message) => { toast.console.warn(); (message, { position: "bottom-right", autoClose: 2000, }); }
    notifyer = (message) => { toast.error(message, { position: "bottom-right", autoClose: 2000, }); }

    // EndPoints to connect to the right Appwrite server and project.
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client);
    }

    async createUser(userid, name, email) {
        try {
            const result = await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId_1,
                userid,
                {
                    userid,
                    name,
                    email,
                }
            );
            if (result) {
                this.notify("User added");
            }
        } catch (error) {
            throw error;
        }
    }

}


const service = new Service();

export default service;