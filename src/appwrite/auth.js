import React from 'react';
import toast from 'react-hot-toast';
import conf from '../conf/conf.js'
import { Client, Account, ID, Query } from 'appwrite'
import service from './Service.js'

export class AuthService {
    client = new Client();
    account;

    notify = (message) => { toast.success(message); }
    notifywar = (message) => { toast(message, { icon: '⚠️' }); }
    notifyer = (message) => { toast.error(message); }


    // EndPoints to connect to the right Appwrite server and project.
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name, phone }) {
        try {
            const response = await this.account.create(ID.unique(), email, password, name, {
                phone: phone
            });
            if (response) {
                console.log(response.phone);
                // await service.createUser(userAccount.$id, name,email);
                // alert("Account created successfully")
                this.notify("Account created successfully")
                return response;
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    async getAccount() {
        try {
            const response = await this.account.get();
            if (response) {
                return response;
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    async login({ email, password }) {
        try {
            const response = await this.account.createEmailSession(email, password);
            if (response) {
                this.notify("Login successful")
                return response;
            }
        } catch (error) {
            toast.error(error.message)
        }
    
    }
}


const authService = new AuthService();
export default authService;