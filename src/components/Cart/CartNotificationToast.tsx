import { useEffect } from "react";
import Typography from "../ui/Typography";

interface CartNotificationToastProps {
    message: string;
    onClose: () => void;
}

export default function CartNotificationToast({
    message,
    onClose
}: CartNotificationToastProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose()
        }, 3000)

        return () => clearTimeout(timer)
    }, [onClose])

    return (
        <div
            className="fixed bottom-10 left-1/2 transform -translate-x-1/2 w-[70%] bg-green-600 px-8 py-5 rounded-lg shadow-xl z-50 transition-opacity duration-500"
        >
            <Typography
                variant="p"
                className="text-white"
            >
                {message}
            </Typography>
        </div>
    )
}