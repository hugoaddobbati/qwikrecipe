import { APIParams } from "../interfaces/api";

const randomRecipes = ["pasta", "tomato", "lettuce", "chicken", "meat", "beef", "barbecue", "sweet", "salty", "potato", "fish", "sushi", "bread", "sandwhich"];

export const getRecipesFromUrl = async (url: string, handleResponse: Function, handleLoading: Function) => {
    handleLoading(true);
    fetch(url)
    .then(r => r.json())
    .then(r => { 
       handleResponse(r.hits.map((recipe => recipe.recipe)), r._links.next.href); 
       handleLoading(false);
    });
}

export const getRecipes = async (options: APIParams) => {
    options.handleLoading(true);
    let url = `https://api.edamam.com/api/recipes/v2?app_key=f4c691dcffb100fe37adcbaca0dddcb4&_cont=CHcVQBtNNQphDmgVQntAEX4BYldtBAEFQmNBA2MTZFFxBQsPUXlSB2AXZVJzUgIAEWFGBDcbZFclUQoBSm1FBmUVZ1MhAgAVLnlSVSBMPkd5BgMbUSYRVTdgMgksRlpSAAcRXTVGcV84SU4%3D&type=public&app_id=250e6d02`;
    const randomQuery = `&random=${options.filters.random}`;
    if(options.filters.random){
        url += randomQuery;
        url += `&q=${randomRecipes[Math.floor(Math.random() * 14)]}`
    }
    const searchQuery = `&q=${options.filters.query}`;
    if(options.filters.query){
        url += searchQuery;
    }
    fetch(url)
        .then(r => r.json())
        .then(r => { 
            console.log(r);
            options.handleResponse(r.hits.map(recipe => recipe.recipe), r._links.next ? r._links.next.href : ""); 
            options.handleLoading(false);
        });
}

export const getRecipe = async (id: string, handleResponse: Function, handleLoading: Function) => {
    handleLoading(true);
    let url = `https://api.edamam.com/api/recipes/v2/${id}?app_key=f4c691dcffb100fe37adcbaca0dddcb4&_cont=CHcVQBtNNQphDmgVQntAEX4BYldtBAEFQmNBA2MTZFFxBQsPUXlSB2AXZVJzUgIAEWFGBDcbZFclUQoBSm1FBmUVZ1MhAgAVLnlSVSBMPkd5BgMbUSYRVTdgMgksRlpSAAcRXTVGcV84SU4%3D&type=public&app_id=250e6d02`
    fetch(url)
    .then(r => r.json())
    .then(r => { 
       handleResponse(r.recipe); 
       handleLoading(false);
    });
}