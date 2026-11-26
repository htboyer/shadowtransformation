import { describe, expect, it } from "vitest";
import { BIDCROSSCHECK, CREDIT_PACKS, KIT_MAILTO, TRIAL_MAILTO, orderMailto } from "@/content/tools";
import { REVIEW_ASSUMPTIONS, annualEmployerCost, reviewTimeValue } from "@/pages/BidCrossCheckPage";

describe("hypothèses de revue BidCrossCheck", () => {
  it("vise 3 heures par offre sur une base annuelle de 1 600 heures", () => {
    expect(REVIEW_ASSUMPTIONS.hoursPerOffer).toBe(3);
    expect(REVIEW_ASSUMPTIONS.annualHours).toBe(1600);
  });

  it("valorise 3 heures au coût employeur (+45 % par hypothèse) de 190 à 272 euros par offre", () => {
    expect(REVIEW_ASSUMPTIONS.annualGrossSalaries).toEqual([70000, 100000]);
    expect(REVIEW_ASSUMPTIONS.employerContributionRate).toBe(0.45);
    expect(annualEmployerCost(70000)).toBe(101500);
    expect(annualEmployerCost(100000)).toBe(145000);
    expect(reviewTimeValue(70000)).toBe(190.3125);
    expect(reviewTimeValue(100000)).toBe(271.875);
    expect(Math.round(reviewTimeValue(70000))).toBe(190);
    expect(Math.round(reviewTimeValue(100000))).toBe(272);
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