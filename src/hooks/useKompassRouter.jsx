import { useNavigate } from "react-router-dom";

const useKompassRouter = () => {
    
    const navigate = useNavigate();

    const kompassNavigate = (path) => {
        navigate(path);
    }

    return {
        kompassNavigate,
    };
}

export default useKompassRouter;