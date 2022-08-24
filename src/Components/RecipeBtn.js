import React from 'react';
import { useHistory } from 'react-router-dom';

function RecipeBtn() {
  const { progress, recipeId, url } = this.props;
  const inProgressRecipe = (checkProgress && checkProgress.length > 0);
  const progressLabel = (inProgressRecipe ? 'Continue Recipe' : 'Start Recipe');
  const history = useHistory();
  return (
    <div>
      <button
        type="button"
        data-testid={ progress ? 'finish-recipe-btn' : 'start-recipe-btn' }
        disabled={ progress && isBtnFinishDisabled } // quando finalizar 100% colocar isBtnFinishDi... como true para desabilitar o botão.
        className="footer"
        onClick={ () => {
          if (progress) {
            setProgress(false);
            // INSERIR FUNÇÃO PARA DAR PUSH NAS RECEITAS TERMINADAS
          } else {
            setProgress(true);
            history.push(`/${url}/${recipeId}/in-progress`);
          }
        } }
      >
        { progress ? 'Finish Recipe' : progressLabel }
      </button>
    </div>
  );
}

export default RecipeBtn;
