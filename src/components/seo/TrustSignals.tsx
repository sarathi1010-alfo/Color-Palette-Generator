import React from 'react';

export interface TrustSignalProps {
  lastUpdated: string;
  authorName?: string;
  authorUrl?: string;
  methodology?: string;
  sources?: { name: string; url: string }[];
  limitations?: string;
}

/**
 * TrustSignals: A reusable primitive to inject EEAT (Experience, Expertise, Authoritativeness, Trust)
 * signals into tool pages. This standardizes how trust is communicated to users and crawlers.
 */
export function TrustSignals({
  lastUpdated,
  authorName = 'Alfo Team',
  authorUrl = '/about',
  methodology,
  sources,
  limitations,
}: TrustSignalProps) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-12 text-sm text-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">About This Tool</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <ul className="space-y-2">
            <li>
              <strong>Verified By:</strong>{' '}
              {authorUrl ? (
                <a href={authorUrl} className="text-blue-600 hover:underline">
                  {authorName}
                </a>
              ) : (
                authorName
              )}
            </li>
            <li>
              <strong>Last Updated:</strong>{' '}
              <time dateTime={new Date(lastUpdated).toISOString()}>{lastUpdated}</time>
            </li>
          </ul>

          {sources && sources.length > 0 && (
            <div className="mt-4">
              <strong>Sources:</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                {sources.map((source, index) => (
                  <li key={index}>
                    <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      {source.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div>
          {methodology && (
            <div className="mb-4">
              <strong>Methodology:</strong>
              <p className="mt-1">{methodology}</p>
            </div>
          )}

          {limitations && (
            <div>
              <strong>Limitations & Disclaimers:</strong>
              <p className="mt-1 text-gray-500 italic">{limitations}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}