import React from 'react';
import styles from './FounderCredit.module.css';

export interface FounderCreditProps {
  photoSrc?: string;
  photoAlt?: string;
  className?: string;
}

/**
 * FounderCredit — Signatur-Stil Komponente
 *
 * Kompakte, 2-zeilige Darstellung des Gründer-Profils ohne verschachtelte Hierarchie.
 * Bewusst KEIN Foto-Platzhalter/Initialen-Circle wenn kein echtes Foto vorhanden.
 *
 * Zeile 1: Name · Credentials · Erfahrung (inline, darf natürlich umbrechen)
 * Zeile 2: Co-Creation Signal (dezent, 13px, text-tertiary)
 *
 * @param photoSrc - Optionales echtes Foto (40×40px), KEIN Fallback-Avatar
 * @param photoAlt - Alt-Text für das Foto
 * @param className - Optionale zusätzliche CSS-Klasse
 */
export const FounderCredit: React.FC<FounderCreditProps> = ({
  photoSrc,
  photoAlt = 'Florian Derwein',
  className,
}) => {
  return (
    <address className={`${styles.founderCredit} ${className || ''}`}>
      <div className={styles.container}>
        {photoSrc && (
          <img
            src={photoSrc}
            alt={photoAlt}
            className={styles.photo}
            loading="lazy"
          />
        )}

        <div className={styles.content}>
          <div className={styles.identity}>
            <span className={styles.name}>Florian Derwein</span>
            <span className={styles.separator} aria-hidden="true"> · </span>
            <span className={styles.credentials}>
              Industriemechaniker & angehender Maschinenbautechniker
            </span>
            <span className={styles.separator} aria-hidden="true"> · </span>
            <span className={styles.credentials}>13 Jahre Fertigungserfahrung</span>
          </div>

          <div className={styles.coCreation}>
            Entwickelt mit Beschichtungsbetrieben.
          </div>
        </div>
      </div>
    </address>
  );
};

export default FounderCredit;
