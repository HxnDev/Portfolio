import { useId } from 'react';

const organizations = [
  { name: 'AICA', file: 'aica-supplied.png', relation: 'Employer' },
  { name: 'EPFL', file: 'epfl.svg', relation: 'Employer' },
  { name: 'GBDI', file: 'gbdi.png', relation: 'Research initiative' },
  { name: 'IBM', file: 'ibm.svg', relation: 'Employer' },
  { name: 'Vodacom', file: 'vodacom.svg', relation: 'Client collaboration' },
  { name: 'Think Vision', file: 'think-vision.png', relation: 'Employer' },
  { name: 'Zixel', file: 'zixel.jpeg', relation: 'Employer' },
  { name: 'FAST–NUCES', file: 'fast-transparent.png', relation: 'Education' },
];

// Inverted luminance removes baked white backgrounds while preserving logo shapes.
function OrganizationLogo({ org }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg
      className="organization-logo"
      viewBox="0 0 140 64"
      width="140"
      height="64"
      role="img"
      aria-label={org.name}
    >
      <defs>
        <filter id={id + '-ink'} colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="-0.2126 -0.7152 -0.0722 0 1 -0.2126 -0.7152 -0.0722 0 1 -0.2126 -0.7152 -0.0722 0 1 0 0 0 1 0"
          />
        </filter>
        <mask
          id={id + '-mask'}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="140"
          height="64"
          style={{ maskType: 'luminance' }}
        >
          <image
            href={'/logos/' + org.file}
            width="140"
            height="64"
            preserveAspectRatio="xMidYMid meet"
            filter={'url(#' + id + '-ink)'}
          />
        </mask>
      </defs>
      <rect width="140" height="64" fill="currentColor" mask={'url(#' + id + '-mask)'} />
    </svg>
  );
}

export default function Organizations() {
  return (
    <div className="organizations-slider" role="region" aria-label="Organizations and affiliations">
      <div
        className="organizations-window"
        tabIndex={0}
        aria-label="Organization slider. Focus or hover to pause."
      >
        <div className="organizations-track">
          {[0, 1].map(copy => (
            <div
              className="organizations-group"
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
            >
              {organizations.map(org => (
                <div className="organization-slide" key={org.name}>
                  <div
                    className={
                      'organization-panel mark-' + org.name.toLowerCase().replace(/[^a-z]/g, '')
                    }
                  >
                    <OrganizationLogo org={org} />
                  </div>
                  <strong>{org.name}</strong>
                  <span>{org.relation}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
