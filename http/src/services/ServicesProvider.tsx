import { ReactNode, createContext, useContext } from "react";
import UserService from "./UserService";

type servicesType = { UserService: UserService }
type ServicesProviderProps = { children: ReactNode };

const services: servicesType = {
    UserService: new UserService()
}

// Contexto
const ServicesContext = createContext<servicesType | null>(null);
export const useServicesContext = () => {
    return useContext(ServicesContext);
}

const ServicesProvider = ({ children }: ServicesProviderProps) => {

    return <ServicesContext.Provider value={services}>
        {children}
    </ServicesContext.Provider>
}

export default ServicesProvider;