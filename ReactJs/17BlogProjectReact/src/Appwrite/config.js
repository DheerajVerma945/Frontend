import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appWriteURL)
            .setProject(conf.ppWriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appWriteDbId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Error in create Post:", error)
        }
    }
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appWriteDbId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Error in updatePost:", error)
        }
    }
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appWriteDbId,
                conf.appWriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Error in deletePost:", error);
            return false;
        }
    }
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appWriteCollectionId,
                conf.appWriteDbId,
                slug
            )
        } catch (error) {
            console.log("Error in getpost :", error)
            return false;
        }
    }
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appWriteCollectionId,
                conf.appWriteDbId,
                queries
            )
        } catch (error) {
            console.log("Error in getPosts:", error);
        }
    }
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Error in uploadFile:", error);
            return false;
        }
    }
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appWriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Error in deleteFile:", error);
            return false;
        }
    }
    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appWriteBucketId,
            fileId
        )
    }
}

const service = new Service()
export default service
