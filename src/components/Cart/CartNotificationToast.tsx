import { useEffect, useState } from "react";
import Typography from "../ui/Typography";

interface CartNotificationToastProps {
    message: string;
    onClose: () => void;
}

export default function CartNotificationToast({
    message,
    onClose
}: CartNotificationToastProps) {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        // Trigger entry animation
        const enterTimer = setTimeout(() => setIsAnimating(true), 10);

        // Start exit animation before closing
        const exitTimer = setTimeout(() => {
            setIsAnimating(false);
        }, 3000);

        // Actually close (unmount) after animation finishes
        const closeTimer = setTimeout(() => {
            onClose();
        }, 3300);

        return () => {
            clearTimeout(enterTimer);
            clearTimeout(exitTimer);
            clearTimeout(closeTimer);
        };
    }, [onClose]);

    return (
        <div
            className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 w-[70%] bg-green-600 px-8 py-5 rounded-lg shadow-xl z-50 transition-all duration-300 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            md:w-[40%]`}
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