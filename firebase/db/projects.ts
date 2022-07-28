import { auth } from '@/db/firebase';
import db from '@/db/firebase-admin';
import { Project } from 'common/types';

const getAllProjects = async (token?: string | null): Promise<Project[]> => {
    const snapshot = await db.collection('projects').get();

    const data: any[] = [];

    snapshot.forEach((doc: any) => {
        data.push({
            id: doc.id,
            ...doc.data()
        })
    });

    return data;
}

const addProject = async (token: string) => {
    const user = await auth.currentUser;
    console.log(user)
}

export {
    getAllProjects
};
