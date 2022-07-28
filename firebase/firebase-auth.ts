import { doc, getDoc } from "firebase/firestore"
import { firestore } from "./firebase"

const isAdminClient = async (uid: string) => {
    const userFirestore = await getDoc(doc(firestore, "users", uid));
    const user = userFirestore.data();
    return user?.admin;
}

export { isAdminClient }