import icons from 'url:../../img/icons.svg';
import View from './View.js';

class paginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const currentPage = this._data.page;
    // Page 1, and there are other pages
    // this.data.page is current page
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);
    if (currentPage === 1 && numPages > 1) {
      return ` <button class="btn--inline pagination__btn--next">
      <span>Page ${currentPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button> `;
    }
    // Last page
    if (currentPage === numPages && numPages > 1) {
      return `
      <button class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
        </svg>
      <span>Page ${currentPage - 1}</span>
    </button>`;
    }
    //Other page
    if (currentPage < numPages) {
      return `
        <button class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
          </svg>
        <span>Page ${currentPage - 1}</span>
      </button>
      <button class="btn--inline pagination__btn--next">
      <span>Page ${currentPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>`;
    }
    // Page 1, and there are no pages
    return '';
  }
}

export default new paginationView();
