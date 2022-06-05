import { db } from "../firebase";
import { collection, getDocs} from 'firebase/firestore/lite';

const getFirebase = async () => {
    console.log('consultando firebase')
    const DataSearch = collection(db,"digimon");
    const data = await getDocs(DataSearch);
     const arrayData = data.docs.map((item) => ({
        id: item.id,
        ...item.data(),
    })); 
    console.log(arrayData)

    return arrayData
}

export default getFirebase