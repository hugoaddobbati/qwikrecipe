import React, { useEffect, useState } from 'react';
import { IRoute } from "../../interfaces/routes";
import { IRecipe } from '../../interfaces/recipe';
import { useIsLoading } from '../../contexts/loading';
import { getRecipe } from '../../api';
import Chip from '../../components/Chip';
import * as S from './styles';
import Skeleton from '@material-ui/lab/Skeleton';

export interface DetailsProps extends IRoute {
    setSelectedRecipe: Function;
    selectedRecipe: string;
}

const Details: React.FunctionComponent<DetailsProps> = ({ setSelectedRecipe, selectedRecipe }) => {
    const [recipeData, setRecipeData] = useState<IRecipe>({});
    const { isLoading, setIsLoading } = useIsLoading();

    useEffect(() => {
        setIsLoading(true);
        getRecipe(selectedRecipe, setRecipeData, setIsLoading);
    }, []);

    return isLoading ?
        (<S.SkeletonBody>
            <Skeleton animation="wave" variant="rect" width={600} height={50} />
            <S.SkeletonDivider>
                <S.SkeletonContent>
                    <Skeleton animation="wave" variant="rect" width={450} height={500} />
                    <Skeleton animation="wave" variant="rect" width={450} height={100} />
                </S.SkeletonContent>
                <S.SkeletonContent>
                    <Skeleton animation="wave" variant="rect" width={450} height={450} />
                </S.SkeletonContent>
            </S.SkeletonDivider>
        </S.SkeletonBody>) :
        (
            <S.Container>
                <S.Title>
                    {recipeData.label}
                </S.Title>
                <S.HeaderInfo>
                    <S.InfoContainer>
                        <S.Image src={recipeData.image} />
                        <S.BadgeContainer>
                            {
                                recipeData.dietLabels ?
                                    recipeData.dietLabels.map((label) =>
                                        <Chip label={label} primary={true} />
                                    ) : <></>
                            }
                            {
                                recipeData.healthLabels ?
                                    recipeData.healthLabels.map((label) =>
                                        <Chip label={label} />
                                    ) : <></>
                            }
                        </S.BadgeContainer>
                    </S.InfoContainer>
                    <S.Ingredients>
                        <S.Ingredients.Title>
                            Ingredients
                        </S.Ingredients.Title>
                        {recipeData.ingredientLines &&
                            <S.Ingredients.List>
                                {recipeData.ingredientLines.map((e) =>
                                    <S.Ingredients.Ingredient>
                                        {e}
                                    </S.Ingredients.Ingredient>
                                )}
                            </S.Ingredients.List>
                        }
                        {
                            recipeData.url &&
                            <S.Link style={{ marginTop: "40px", color: "#56d556" }} onClick={() => { window.open(recipeData.url) }} variant="h4">
                                How to cook it
                            </S.Link>
                        }
                    </S.Ingredients>
                </S.HeaderInfo>
            </S.Container>
        );
}

export default Details;