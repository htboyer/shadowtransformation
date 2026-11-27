import { describe, expect, it } from "vitest";
import { BIDCROSSCHECK, CREDIT_PACKS, CREDIT_PACK_OFFERS, KIT_MAILTO, TRIAL_MAILTO, orderMailto } from "@/content/tools";
import { REVIEW_ASSUMPTIONS, reviewTimeValue, roundedReviewTimeValue } from "@/pages/BidCrossCheckPage";

describe("hypothèses de revue BidCrossCheck", () => {
  it("vise 3 heures par offre sur une base annuelle de 1 600 heures", () => {
    expect(REVIEW_ASSUMPTIONS.hoursPerOffer).toBe(3);
    expect(REVIEW_ASSUMPTIONS.annualHours).toBe(1600);
  });

  it("valorise 3 heures à environ 250 euros par offre sur un coût employeur annuel de 133 000 euros", () => {
    expect(REVIEW_ASSUMPTIONS.annualEmployerCost).toBe(133000);
    expect(reviewTimeValue()).toBe(249.375);
    expect(roundedReviewTimeValue()).toBe(250);
  });

  it("conserve les seuils objectifs de 99 % et strictement plus de 90 %", () => {
    expect(REVIEW_ASSUMPTIONS.arithmeticDetectionTarget).toBe(99);
    expect(REVIEW_ASSUMPTIONS.methodologicalDetectionTargetExclusive).toBe(90);
  });
});

describe("modalités BidCrossCheck", () => {
  it("propose uniquement les commandes de 1, 10, 25 ou 50 crédits", () => {
    expect(CREDIT_PACKS).toEqual([1, 10, 25, 50]);
  });

  it("associe le barème B2B HT et le droit aux mises à jour aux formules", () => {
    expect(CREDIT_PACK_OFFERS).toEqual([
      { credits: 1, priceHt: 100, unitPriceHt: 100, includesUpdates: false },
      { credits: 10, priceHt: 900, unitPriceHt: 90, includesUpdates: true },
      { credits: 25, priceHt: 1800, unitPriceHt: 72, includesUpdates: true },
      { credits: 50, priceHt: 3200, unitPriceHt: 64, includesUpdates: true },
    ]);
  });

  it("inclut le pack et son prix HT dans chaque lien mailto de demande de commande", () => {
    for (const [credits, expectedPrice] of [[1, "100 € HT"], [10, "900 € HT"], [25, "1 800 € HT"], [50, "3 200 € HT"]] as const) {
      const url = new URL(orderMailto(credits));
      expect(url.searchParams.get("subject")).toContain(expectedPrice);
      expect(url.searchParams.get("body")).toContain(expectedPrice);
    }
  });

  it("fonde l’offre sur 17 ans d’expérience métier", () => {
    expect(BIDCROSSCHECK.experienceYears).toBe(17);
  });

  it("prévoit un seul crédit d’essai", () => {
    expect(BIDCROSSCHECK.trialCredits).toBe(1);
  });

  it("prévoit un compte BE ou département et un compteur partagé", () => {
    expect(BIDCROSSCHECK.accountScopes).toEqual(["BE", "département"]);
    expect(BIDCROSSCHECK.sharedCounter).toBe(true);
  });

  it("adresse le kit, l’essai et chaque commande au contact confirmé via mailto", () => {
    [KIT_MAILTO, TRIAL_MAILTO, ...CREDIT_PACKS.map(orderMailto)].forEach((href) => {
      const url = new URL(href);
      expect(url.protocol).toBe("mailto:");
      expect(url.pathname).toBe("contact@shadowtransformation.fr");
      expect(url.searchParams.get("subject")).toBeTruthy();
      expect(url.searchParams.get("body")).toBeTruthy();
    });
  });
});