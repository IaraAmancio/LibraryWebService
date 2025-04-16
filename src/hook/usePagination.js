import { useState, useEffect } from "react";

export const UsePagination = (dados, itensPorPage) => {

    const [actualPage, setActualPage] = useState(1);
    const totalPages = Math.ceil(dados.length / itensPorPage);

 

    const handleBackPage = () => {
        setActualPage((prevState) => prevState - 1);
    }

    const handleNextPage = () => {
        setActualPage((prevState) => prevState + 1);
    }

    const getItensPage = () => {
        const firstItem = (actualPage-1) * itensPorPage;
        const lastItem =  actualPage * itensPorPage;

        return dados.slice(firstItem, lastItem);
    }

    return {
        actualPage,
        totalPages,
        handleBackPage,
        handleNextPage,
        getItensPage,
    }
}

