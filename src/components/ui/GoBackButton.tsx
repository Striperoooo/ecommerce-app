import { useNavigate } from 'react-router-dom';

export default function GoBackButton() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <button
            onClick={handleGoBack}
            className="my-4 text-black/50 font-medium text-[0.938rem] leading-[1.563rem] tracking-[0px] cursor-pointer hover:text-d8 active:text-d8/75
            md:mt-8 md:mb-6 "
        >
            Go Back
        </button>
    );
}
