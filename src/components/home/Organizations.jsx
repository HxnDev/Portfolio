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
                    <img
                      src={'/logos/' + org.file}
                      alt={org.name}
                      width="140"
                      height="64"
                      loading="lazy"
                    />
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
