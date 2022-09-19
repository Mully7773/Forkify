import icons from 'url:../../img/icons.svg';
import View from './View.js';

class paginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const btnPrev = `
    <button class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
      </svg>
    <span>Page ${currentPage - 1}</span>
  </button>`;

    const btnNext = `<button class="btn--inline pagination__btn--next">
  <span>Page ${currentPage + 1}</span>
  <svg class="search__icon">
    <use href="${icons}#icon-arrow-right"></use>
  </svg>
</button>`;

    // Page 1, and there are other pages
    // this.data.page is current page

    if (currentPage === 1 && numPages > 1) {
      return btnNext;
    }
    // Last page
    if (currentPage === numPages && numPages > 1) {
      return btnPrev;
    }
    //Other page
    if (currentPage < numPages) {
      return `${btnPrev}${btnNext}`;
    }
    // Page 1, and there are no pages
    return ``;
  }
}

export default new paginationView();
