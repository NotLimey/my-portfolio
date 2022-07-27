import { Project } from 'common/types';
import db from '../firebase-admin';

const getAllProjects = async (): Promise<Project[]> => {
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

export {
    getAllProjects
}