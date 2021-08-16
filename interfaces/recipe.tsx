interface IRecipe {
    label?: string;
    image?: string;
    url?: string;
    dietLabels?: [string];
    healthLabels?: [string];
    cautions?: [string];
    ingredientLines?: [string];
    ingredients?: [IIngredients];
    calories?: number;
    totalWeight?: number;
    totalTime?: number;
    
}

interface IIngredients{
    text?: string;
    weight?: number;
    foodCategory?: string;
    foodId?: string;
    image?: string;
}

export type { IRecipe };