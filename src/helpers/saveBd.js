import { db } from "../firebase";
import { collection,addDoc} from 'firebase/firestore/lite';


export const saveBd = async (busq={}) => {

    
    const DataSearch = collection(db, "digimon");
    const docRef = await addDoc(DataSearch,busq);
    return docRef.id

}