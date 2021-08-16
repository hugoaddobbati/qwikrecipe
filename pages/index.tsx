import type { AppProps /*, AppContext */ } from 'next/app'
import { useState, useEffect } from 'react';

import * as S from '../globalStyles/styles';

import RecipeCard from '../components/Card';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Routes from '../routes';

import { DataContext } from "../contexts/recipes";
import { IsLoadingContext } from "../contexts/loading";
import { APIFilters } from '../interfaces/api';
import { getRecipes, getRecipesFromUrl } from '../api';

import { IRecipe } from '../interfaces/recipe';

const DEFAULT_ROUTE = "home";

function HomePage() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<[IRecipe]>([{}]);
    const [currentRoute, setCurrentRoute] = useState(DEFAULT_ROUTE);
    const [filters, setFilters] = useState<APIFilters>({
        query: "",
        random: true
    });
    const [pagination, setPagination] = useState("");
    const [selectedRecipe, setSelectedRecipe] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const requestRecipesFromPagination = (url) => {
        const handleResponse = (recipes, link) => {
            setResults(recipes);
            setPagination(link)
        }
        getRecipesFromUrl(url, handleResponse, setIsLoading);
    }

    const setFilterQuery = (query: string) => {
        setFilters({
            ...filters,
            query
        })
    }

    const requestRecipes = (random: boolean) => {
        const options = {
            filters: random ? { ...filters, random: true } : { ...filters, random: false },
            handleResponse: (r, link) => {
                setResults(r);
                if (link) {
                    setPagination(link);
                }
                setIsLoading(false);
            },
            handleLoading: setIsLoading
        }
        getRecipes(options);
    }

    useEffect(() => {
        requestRecipes(true);
    }, []);

    return (
        <div style={{ width: "100%" }}>
            <IsLoadingContext.Provider value={{ isLoading, setIsLoading }}>
                <DataContext.Provider value={{ data: results, setState: setResults }}>
                    <S.App />
                    <Navbar
                        requestRecipes={requestRecipes}
                        setCurrentRoute={setCurrentRoute} />
                    <Routes  //would've used react-router or next.js built-in routing, but only website only has 2 pages, preferred to write logic by hand to avoid reloading.
                        requestFromUrl={requestRecipesFromPagination}
                        pagination={pagination}
                        requestRecipes={requestRecipes}
                        setFilterQuery={setFilterQuery}
                        currentRoute={currentRoute}
                        selectedRecipe={selectedRecipe}
                        setCurrentRoute={setCurrentRoute}
                        setSelectedRecipe={setSelectedRecipe} />
                </DataContext.Provider>
            </IsLoadingContext.Provider>
        </div>
    )
}

export default HomePage