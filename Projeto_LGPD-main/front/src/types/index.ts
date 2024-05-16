export const initialValuesProdutos = {
    prodTitle: "",
    prodDescription: "",
    prodPrice: "",
}

export const initialValuesUsuarios = {
    userName: "",
    userEmail: "",
    userCpf: "",
    userAddress: "",
}

export interface Products {
    id: number;
    prodTitle: string;
    prodDescription: string;
    prodPrice: string;

}

export interface User {
    userId: number;
    userName: string;
    userEmail: string;
    userCpf: string;
    userAddress: string;
}
