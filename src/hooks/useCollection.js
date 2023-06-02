import { useState, useEffect } from 'react';

//firebase imports
import { db } from '../firebase/config';
import { collection, onSnapshot } from 'firebase/firestore';

export const useCollection = (c) => {
  const [documents, setDoduments] = useState(null);

  useEffect(() => {
    let ref = collection(db, c);

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setDoduments(results);
    });

    return () => unsub();
  }, [c]);

  return { documents };
};
