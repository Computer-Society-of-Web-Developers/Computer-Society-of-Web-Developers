
import { useEffect, useState } from "react";
import NetworkError from "./NetworkError"
import { NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY } from "@/utils/config";

export default function NetworkSecure({ element }: { element: React.ReactNode }) {
    const [status, setStatus] = useState(true)

    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
        }

        function updateOnlineStatus() {
            if (navigator.onLine) {
                setStatus(true);
            } else {
                setStatus(false);
            }
        }

        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);

        updateOnlineStatus();

        return () => {
            window.removeEventListener('online', updateOnlineStatus);
            window.removeEventListener('offline', updateOnlineStatus);
        }
    }, []);
    return (
        <>
            {status ? element : <NetworkError />}
        </>
    )
}
