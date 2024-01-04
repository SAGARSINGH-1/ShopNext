import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import conf from '../conf/conf.js'
import { Client, Account, ID, Query } from 'appwrite'
import service from './Service.js'

export class AuthService {
    client = new Client();
    account;

    notify = (message) => { toast.success(message, { position: "bottom-right", autoClose: 2000, }); }
    notifywar = (message) => { toast.console.warn(); (message, { position: "bottom-right", autoClose: 2000, }); }
    notifyer = (message) => { toast.error(message, { position: "bottom-right", autoClose: 2000, }); }


    // EndPoints to connect to the right Appwrite server and project.
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}) {
        console.log(email, password, name);
        try {
            const response = await this.account.create(ID.unique(),email, password, name)
            if (response) {
                // await service.createUser(userAccount.$id, name,email);
                this.notify("Account created successfully")
                return response
            }
        } catch (error) {
            this.notifyer(error)
        }
    }
}


const authService = new AuthService();
export default authService;