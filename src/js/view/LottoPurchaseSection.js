import { INITIAL_PURCHASE_TEXT_LABEL, VIEW_CONDITION } from '../constants.js';

class LottoPurchaseSection {
  constructor(lottoPurchaseSection, lottoPurchaseTextLabel) {
    this.lottoPurchaseSection = lottoPurchaseSection;
    this.lottoPurchaseTextLabel = lottoPurchaseTextLabel;
  }

  isAlreadyExistList() {
    return this.lottoPurchaseSection.classList.contains(VIEW_CONDITION);
  }

  renderPurchasedCount(dividedLottoCount) {
    this.lottoPurchaseSection.classList.add(VIEW_CONDITION);
    this.lottoPurchaseTextLabel.textContent = `총 ${dividedLottoCount}개를 구매하였습니다.`;
  }

  resetPurchasedCount() {
    this.lottoPurchaseSection.classList.remove(VIEW_CONDITION);
    this.lottoPurchaseTextLabel.textContent = INITIAL_PURCHASE_TEXT_LABEL;
  }
}

export default LottoPurchaseSection;
