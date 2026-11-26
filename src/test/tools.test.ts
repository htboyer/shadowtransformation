import { describe, expect, it } from "vitest";
import { BIDCROSSCHECK, CREDIT_PACKS, KIT_MAILTO, TRIAL_MAILTO, orderMailto } from "@/content/tools";

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