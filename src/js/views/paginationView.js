import icons from 'url:../../img/icons.svg';
import View from './view.js';

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');

  addHandlerClick(handlerF) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const gotoPage = +btn.dataset.goto;
      handlerF(gotoPage);
    });
  }

  _generateMarkup() {
    const currPageNum = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // Page 1 + other pages
    if (currPageNum === 1 && numPages > 1) {
      return `
        <button data-goto="${
          currPageNum + 1
        }" class="btn--inline pagination__btn--next">
            <span>Page ${currPageNum + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
        `;
    }

    // Last page
    if (currPageNum === numPages && numPages > 1) {
      return `
        <button data-goto="${
          currPageNum - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currPageNum - 1}</span>
        </button>
          `;
    }
    // Other page
    if (currPageNum < numPages) {
      return `
       <button data-goto="${
         currPageNum - 1
       }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currPageNum - 1}</span>
        </button>
        <button data-goto="${
          currPageNum + 1
        }" class="btn--inline pagination__btn--next">
            <span>Page ${currPageNum + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </button>
        `;
    }
    // Page 1 + no other pages
    return '';
  }
}

export default new PaginationView();
