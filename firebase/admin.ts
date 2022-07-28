import db from "@/db/firebase-admin";
import { getAuth } from "firebase-admin/auth";
import { NextApiRequest } from "next";


const isUserAdmin = async (token: string | null) => {
    if (!token) {
        return false;
    }
    const uid = await getAuth().verifyIdToken(token).then(function (decodedToken) {
        return decodedToken.uid;
    }).catch(function (error) {
        console.log(error);
    });

    const user = await db.collection("users").doc(uid).get();
    return user.data()?.admin;
}

const retrieveToken = (req: NextApiRequest) => req.headers.token?.toString() || null;

export { isUserAdmin, retrieveToken };
