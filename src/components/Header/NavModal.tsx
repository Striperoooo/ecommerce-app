import { useEffect, useState } from "react";
import CategoryButton from "../Home/CategoryButtons/CategoryButton";
import headphone from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speaker from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphone from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import { Link } from "react-router-dom";

interface NavModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface NavCategoryButtonProps {
    name: string,
    image: string,
    to: string,
    onClose: () => void
}

function NavCategoryButton({
    name,
    image,
    to,
    onClose
}: NavCategoryButtonProps) {

    return (
        <Link to={to} onClick={onClose} className="w-full">
            <CategoryButton name={name} image={image} to={to} />
        </Link>
    )
}


export default function NavModal({ isOpen, onClose }: NavModalProps) {
    const [isMounted, setIsMounted] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            const timer = setTimeout(() => setIsAnimating(true), 10);
            return () => clearTimeout(timer);
        } else {
            setIsAnimating(false);
            const timer = setTimeout(() => setIsMounted(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-19" aria-modal="true">
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
                onClick={onClose}
            ></div>

            {/* Scrolling Container */}
            <div className="relative h-full overflow-y-auto" onClick={onClose}>
                {/* Positioning Container */}
                <div className="relative pt-[90px] pb-25">
                    {/* Modal Panel */}
                    <div
                        className={`bg-white pt-20 pb-8 px-6 rounded-b-lg shadow-lg transition-all duration-300 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="flex flex-col items-center gap-y-[68px] md:flex-row md:gap-x-2.5 md:justify-center">
                            <NavCategoryButton name="HEADPHONES" image={headphone} to="/category/headphones" onClose={onClose} />
                            <NavCategoryButton name="SPEAKERS" image={speaker} to="/category/speakers" onClose={onClose} />
                            <NavCategoryButton name="EARPHONES" image={earphone} to="/category/earphones" onClose={onClose} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}