import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import BidCrossCheckPage from "@/pages/BidCrossCheckPage";
import { BIDCROSSCHECK_CGV_PATH, BIDCROSSCHECK_TERMS_CONFIDENTIALITY_ANCHOR } from "@/content/bidcrosscheck-terms";

const renderPage = () =>
  render(
    <MemoryRouter>
      <BidCrossCheckPage />
    </MemoryRouter>,
  );

describe("fiche produit BidCrossCheck", () => {
  it("annonce l’analyse sur le serveur interne dès l’introduction", () => {
    renderPage();
    expect(screen.getByText("Vos dossiers sont analysés sur votre serveur interne.")).toBeInTheDocument();
  });

  it("place l’explication DSI et son lien sous le titre de la section L’analyse chez vous", () => {
    const { container } = renderPage();
    const title = screen.getByRole("heading", { name: "L’analyse chez vous. La décision vous appartient." });
    const section = title.closest("section");
    const explanations = screen.getAllByText(/Votre DSI installe BidCrossCheck sur le serveur du bureau d’études/);
    const explanation = explanations[0];
    const confidentialityLink = screen.getByRole("link", { name: /Confidentialité et sécurité des données/ });
    const download = container.querySelector('a[download="BidCrossCheck_0.39_Client.zip"]');

    expect(section).not.toBeNull();
    expect(explanations).toHaveLength(1);
    expect(section).toContainElement(explanation);
    expect(section).toContainElement(confidentialityLink);
    expect(title.compareDocumentPosition(explanation) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(download).not.toBeNull();
  });

  it("relie discrètement la clause confidentialité et sécurité des CGV", () => {
    renderPage();
    const link = screen.getByRole("link", { name: /Confidentialité et sécurité des données/ });
    expect(link).toHaveAttribute("href", `${BIDCROSSCHECK_CGV_PATH}#${BIDCROSSCHECK_TERMS_CONFIDENTIALITY_ANCHOR}`);
  });

  it("nomme la valeur du temps libéré sans répéter le coût employeur, qui reste dans la note", () => {
    renderPage();
    expect(screen.getByText("Valeur du temps de direction libéré par offre")).toBeInTheDocument();
    expect(screen.queryByText(/au coût employeur/)).not.toBeInTheDocument();
    expect(screen.getByText(/coût employeur annuel moyen estimé à 133 000 €/)).toBeInTheDocument();
  });

  it("affiche les deux notes italiques un cran sous la taille du texte courant", () => {
    const { container } = renderPage();
    for (const id of ["gains-note", "performance-note"]) {
      const note = container.querySelector(`#${id}`);
      expect(note).not.toBeNull();
      expect(note!.className).toContain("text-[11px]");
      expect(note!.className).not.toContain("text-xs");
      expect(note!.className).toContain("italic");
    }
  });
});
