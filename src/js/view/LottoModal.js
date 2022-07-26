class LottoModal {
  constructor(modal, modalDataPlaceSet, revenueRate) {
    this.modal = modal;
    this.modalDataPlaceSet = modalDataPlaceSet;
    this.revenueRate = revenueRate;
  }

  openModal() {
    this.modal.classList.add('open');
  }

  closeModal() {
    this.modal.classList.remove('open');
  }

  renderModalContents(lotto) {
    const lottoRanking = lotto.getLottoRankingObject();

    this.modalDataPlaceSet.forEach((element) => {
      const { place } = element.dataset;
      const winningRankCount = lottoRanking[place] ?? 0;
      element.textContent = `${winningRankCount}개`;
    });

    this.revenueRate.textContent = lotto.getRevenueRate();
  }
}

export default LottoModal;
