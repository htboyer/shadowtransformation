import { describe, expect, it } from "vitest";
import { BIDCROSSCHECK_TERMS, BIDCROSSCHECK_TERMS_SECTIONS, BIDCROSSCHECK_TERMS_CONFIDENTIALITY_ANCHOR } from "@/content/bidcrosscheck-terms";

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
  it("reste concis et sans chiffres marketing, barèmes ni exemples de recette", () => {
    const text = BIDCROSSCHECK_TERMS_SECTIONS.flatMap((s) => [s.title, ...s.paragraphs]).join(" ");
    expect(BIDCROSSCHECK_TERMS_SECTIONS).toHaveLength(5);
    for (const forbidden of ["99 %", "90 %", "131", "188", "190", "272", "250 €", "133 000", "101 500", "145 000", "45 %", "300 €", "0,5", "40 offres", "1 600", "70 000", "10, 25"]) {
      expect(text).not.toContain(forbidden);
    }
  });
  it("expose une ancre stable pour la clause confidentialité", () => {
    expect(BIDCROSSCHECK_TERMS_CONFIDENTIALITY_ANCHOR).toBe("5-confidentialite-et-securite-des-donnees");
  });
  it("précise la confidentialité et la sécurité locale sans promesse excessive", () => {
    const clause = BIDCROSSCHECK_TERMS_SECTIONS.find((s) => s.title.includes("Confidentialité et sécurité des données"));
    expect(clause).toBeDefined();
    const text = clause!.paragraphs.join(" ");
    expect(text).toContain("serveur interne du client");
    expect(text).toContain("purge relève de la DSI");
    expect(text).toContain("contact@shadowtransformation.fr");
    expect(text).not.toMatch(/chiffrement au repos|conformité RGPD garantie/i);
  });
});