import icons from 'url:../../img/icons.svg';
import View from './view.js';

class ResultsView extends View {
  _parentEl = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query. Please try again';
  _message = '';

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(rec) {
    return `
    <li class="preview">
        <a class="preview__link" href="#${rec.id}">
            <figure class="preview__fig">
                <img src="${rec.image}" alt="${rec.title}" />
            </figure>
            <div class="preview__data">
                <h4 class="preview__title">${rec.title}</h4>
                <p class="preview__publisher">${rec.publisher}</p>
            </div>
        </a>
    </li>`;
  }
}

export default new ResultsView();
