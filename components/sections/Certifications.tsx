"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, CircleDashed, X, ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/Primitives";
import { certifications } from "@/data/certifications";

export function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [expandedCert, setExpandedCert] = useState<string | null>(null);

  const completed = certifications.filter((c) => c.status === "completed");
  const exploring = certifications.filter((c) => c.status === "exploring");

  const toggleCertificate = (id: string) => {
    setExpandedCert((current) => (current === id ? null : id));
  };

  return (
    <>
      <SectionHeading title="Certifications" />

      <div className="min-w-0 divide-y divide-line rounded-xl border border-line bg-panel">
        {completed.map((cert) => {
          const isExpanded = expandedCert === cert.id;

          return (
            <div key={cert.id} className="px-4 py-5 sm:px-5">
              <div className="grid min-w-0 grid-cols-[auto_minmax(0,1fr)] items-start gap-x-3 gap-y-3 sm:grid-cols-[auto_minmax(0,1fr)_auto]">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-signal"
                  aria-hidden="true"
                />

                <button
                  type="button"
                  onClick={() => toggleCertificate(cert.id)}
                  className="min-w-0 flex-1 rounded-sm text-left transition-colors hover:bg-raised focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="break-words font-mono text-sm font-medium leading-6 text-cyan [overflow-wrap:anywhere]">{cert.name}</p>

                      <p className="mt-1 break-words text-xs leading-5 text-ink-muted">
                        {cert.issuer}
                      </p>
                    </div>

                    {cert.note && (
                      <ChevronDown
                        className={`mt-0.5 h-4 w-4 shrink-0 text-ink-faint transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                      isExpanded && cert.note
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      {cert.note && (
                        <p className="pt-3 break-words text-sm leading-6 text-ink-muted [overflow-wrap:anywhere]">
                          {cert.note}
                        </p>
                      )}
                    </div>
                  </div>
                </button>

                <div className="col-start-2 flex min-w-0 flex-wrap items-center gap-2 sm:col-start-3 sm:row-start-1">
                  {cert.imageUrl && (
                    <button
                      type="button"
                      onClick={() => setSelectedImage(cert.imageUrl!)}
                      className="inline-flex min-h-10 items-center justify-center rounded-md border border-line bg-void px-3 font-mono text-xs text-cyan underline-offset-4 transition-colors hover:bg-raised hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                    >
                      view
                    </button>
                  )}

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex min-h-10 items-center justify-center rounded-md border border-line bg-void px-3 font-mono text-xs text-cyan underline-offset-4 transition-colors hover:bg-raised hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                    >
                      verify
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {exploring.length > 0 && (
        <div className="mt-6">
          <p className="mb-3 font-mono text-xs text-ink-muted">
            currently exploring
          </p>

          <div className="min-w-0 divide-y divide-line rounded-xl border border-dashed border-line bg-panel">
            {exploring.map((cert) => {
              const isExpanded = expandedCert === cert.id;

              return (
                <div key={cert.id} className="px-4 py-4 sm:px-5">
                  <div className="flex items-start gap-3">
                    <CircleDashed
                      className="mt-0.5 h-4 w-4 shrink-0 text-ink-faint"
                      aria-hidden="true"
                    />

                    <button
                      type="button"
                      onClick={() => toggleCertificate(cert.id)}
                      className="min-w-0 flex-1 rounded-sm text-left transition-colors hover:bg-raised focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                      aria-expanded={isExpanded}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="break-words font-mono text-sm font-medium leading-6 text-ink [overflow-wrap:anywhere]">
                            {cert.name}
                          </p>

                          <p className="mt-1 break-words text-xs leading-5 text-ink-muted">
                            {cert.issuer}
                          </p>
                        </div>

                        {cert.note && (
                          <ChevronDown
                            className={`mt-0.5 h-4 w-4 shrink-0 text-ink-faint transition-transform duration-200 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                            aria-hidden="true"
                          />
                        )}
                      </div>

                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                          isExpanded && cert.note
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="min-h-0 overflow-hidden">
                          {cert.note && (
                            <p className="pt-3 break-words text-sm leading-6 text-ink-muted [overflow-wrap:anywhere]">
                              {cert.note}
                            </p>
                          )}
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/90 px-4 pb-4 pt-20 sm:px-6 sm:pb-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-md border border-line bg-panel text-ink transition-colors hover:bg-raised hover:text-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
            aria-label="Close certificate"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className="relative min-w-0 max-w-5xl rounded-lg border border-line bg-panel p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Certificate"
              width={1400}
              height={1000}
              className="max-h-[calc(100dvh-7rem)] w-auto max-w-full rounded-md object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}