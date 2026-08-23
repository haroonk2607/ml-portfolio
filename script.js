(() => {
  const form = document.querySelector("#score-form");
  if (!form) return;

  const impressionsInput = document.querySelector("#impressions");
  const ctrInput = document.querySelector("#ctr");
  const positionInput = document.querySelector("#position");
  const scoreValue = document.querySelector("#score-value");
  const scoreAction = document.querySelector("#score-action");
  const scoreReason = document.querySelector("#score-reason");
  const scoreMeter = document.querySelector(".score-meter");
  const scoreMeterFill = document.querySelector("#score-meter-fill");

  const clamp = (value, minimum, maximum) =>
    Math.min(Math.max(value, minimum), maximum);

  const ctrReferenceForPosition = (position) => {
    if (position <= 3) return 0.423;
    if (position <= 10) return 0.339;
    return 0.325;
  };

  const actionForScore = (score) => {
    if (score >= 50) return "Review snippet now";
    if (score >= 25) return "Add to the review queue";
    return "Monitor";
  };

  const calculate = () => {
    const impressions = Number(impressionsInput.value);
    const ctr = Number(ctrInput.value);
    const position = Number(positionInput.value);

    if (
      !Number.isFinite(impressions) ||
      !Number.isFinite(ctr) ||
      !Number.isFinite(position) ||
      impressions < 1 ||
      ctr < 0 ||
      position < 1 ||
      position > 20
    ) {
      scoreValue.value = "--";
      scoreAction.textContent = "Check the input values";
      scoreReason.textContent =
        "Use positive impressions, a non-negative CTR, and a position from 1 to 20.";
      scoreMeter.setAttribute("aria-valuenow", "0");
      scoreMeterFill.style.width = "0%";
      return;
    }

    const ctrReference = ctrReferenceForPosition(position);
    const ctrDeficit = clamp(
      (ctrReference - ctr) / ctrReference,
      0,
      1,
    );
    const volumeWeight = clamp(
      Math.log1p(impressions) / Math.log1p(100000),
      0,
      1,
    );
    const score = Math.round(100 * ctrDeficit * volumeWeight);

    scoreValue.value = String(score);
    scoreAction.textContent = actionForScore(score);
    scoreReason.textContent =
      "Observed CTR " +
      ctr.toFixed(2) +
      "% versus a " +
      ctrReference.toFixed(3) +
      "% position-tier reference, weighted by " +
      impressions.toLocaleString() +
      " impressions.";
    scoreMeter.setAttribute("aria-valuenow", String(score));
    scoreMeterFill.style.width = score + "%";
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    calculate();
  });
  form.addEventListener("input", calculate);

  calculate();
})();
