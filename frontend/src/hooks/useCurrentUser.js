import { useState, useEffect } from 'react';
import { PassageUser } from '@passageidentity/passage-elements/passage-user'

export function useCurrentUser() {
    const [result, setResult] = useState({
        isLoadiong: true,
        isAuthorized: false,
        username: ""
    })

    useEffect(() => {
        let cancelRequest = false;
        new PassageUser().userInfo().then((userInfo) => {
            if (cancelRequest) return;

            if (userInfo === undefined) {
                setResult( {
                    isLoadiong: false,
                    isAuthorized: false,
                    username: "",
                });
                return;
            }
            setResult({
                isLoadiong: false,
                isAuthorized: true,
                username: userInfo.email ? userInfo.email : userInfo.phone,
            });
        });
        return () => {
            cancelRequest = true;
        }
    }, []);

    return result;
    
}