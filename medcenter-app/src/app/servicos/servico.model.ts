export interface ServicoModel{
    title: string;
    icon: string;
    searchLabel: string;
    type: string;
}
export interface ServicoResponse{
    id: number;
    name: string;
    price: number;
    isSchedulable: boolean;
}

export interface ServicoRequest{
    name: string;
    price: number;
    type: string;
    isSchedulable: boolean;
}