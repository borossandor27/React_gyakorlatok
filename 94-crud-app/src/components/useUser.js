import { useEffect, useState } from 'react';
import { getUserById } from '../api';

// Saját hook: betölti az adott azonosítójú felhasználót.
// Három komponens (részletek, módosítás, törlés) is ugyanezt a lekérést használja.
export function useUser(id) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;

        getUserById(id)
            .then((response) => {
                if (!ignore) setUser(response.data);
            })
            .catch((err) => {
                if (!ignore) setError(err.message);
            });

        return () => {
            ignore = true;
        };
    }, [id]);

    return { user, error };
}
