import { describe, expect, it } from "vitest";
import { BIDCROSSCHECK, CREDIT_PACKS, KIT_MAILTO, TRIAL_MAILTO, orderMailto } from "@/content/tools";
import { REVIEW_ASSUMPTIONS, reviewTimeValue } from "@/pages/BidCrossCheckPage";

describe("hypothèses de revue BidCrossCheck", () => {
  it("vise 3 heures par offre sur une base annuelle de 1 600 heures", () => {
    expect(REVIEW_ASSUMPTIONS.hoursPerOffer).toBe(3);
    expect(REVIEW_ASSUMPTIONS.annualHours).toBe(1600);
  });

  it("valorise les salaires bruts de 70 000 à 100 000 euros à environ 131 à 188 euros par offre", () => {
    expect(REVIEW_ASSUMPTIONS.annualGrossSalaries).toEqual([70000, 100000]);
    expect(reviewTimeValue(70000)).toBe(131.25);
    expect(reviewTimeValue(100000)).toBe(187.5);
    expect(Math.round(reviewTimeValue(70000))).toBe(131);
    expect(Math.round(reviewTimeValue(100000))).toBe(188);
  });

  it("valorise 40 offres à 120 heures et 5 250 à 7 500 euros par an", () => {
    expect(REVIEW_ASSUMPTIONS.annualOffers).toBe(40);
    expect(REVIEW_ASSUMPTIONS.annualOffers * REVIEW_ASSUMPTIONS.hoursPerOffer).toBe(120);
    expect(reviewTimeValue(70000, 40)).toBe(5250);
    expect(reviewTimeValue(100000, 40)).toBe(7500);
  });

  it("conserve les seuils objectifs de 99 % et strictement plus de 90 %", () => {
    expect(REVIEW_ASSUMPTIONS.arithmeticDetectionTarget).toBe(99);
    expect(REVIEW_ASSUMPTIONS.methodologicalDetectionTargetExclusive).toBe(90);
  });

  it("identifie les trois écarts de recette de 300 euros, 0,5 jour et 1 jour", () => {
    expect(REVIEW_ASSUMPTIONS.acceptanceDiscrepancies).toEqual({ euros: 300, overloadDays: 0.5, planningBudgetDays: 1 });
  });
});

describe("modalités BidCrossCheck", () => {
  it("propose uniquement les commandes de 1, 10, 25 ou 50 crédits", () => {
    expect(CREDIT_PACKS).toEqual([1, 10, 25, 50]);
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