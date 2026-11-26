import { describe, expect, it } from "vitest";
import { BIDCROSSCHECK_TERMS } from "@/content/bidcrosscheck-terms";

describe("cadre du projet de CGV BidCrossCheck", () => {
  it("reste un projet professionnel daté du 26 novembre 2026", () => {
    expect(BIDCROSSCHECK_TERMS.version).toBe("2026-11-26");
    expect(BIDCROSSCHECK_TERMS.draft).toBe(true);
    expect(BIDCROSSCHECK_TERMS.professionalOnly).toBe(true);
  });
  it("prévoit un crédit d’essai", () => expect(BIDCROSSCHECK_TERMS.trialCredits).toBe(1));
  it("inclut la relance du même DAO", () => expect(BIDCROSSCHECK_TERMS.sameDaoRelaunchIncluded).toBe(true));
  it("émet les crédits payants après paiement", () => expect(BIDCROSSCHECK_TERMS.issuanceAfterPayment).toBe(true));
  it("requiert une acceptation explicite", () => expect(BIDCROSSCHECK_TERMS.explicitAcceptanceRequired).toBe(true));
  it("ne conclut aucune vente par demande ou téléchargement", () => expect(BIDCROSSCHECK_TERMS.requestOrDownloadConcludesSale).toBe(false));
});