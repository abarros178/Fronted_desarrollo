import { db } from "../firebase";
import { deleteDoc,doc,} from 'firebase/firestore/lite';


export const borrarDB = async (id) => {
    
    await deleteDoc(doc(db,'digimon',id))
}