import type { CompanyTechnologies } from '@/types/company';
import { DataSection, TagList, NoDataMessage } from './TabComponents';

interface TechnologyTabProps {
  technologies?: CompanyTechnologies;
}

export function TechnologyTab({ technologies }: TechnologyTabProps) {
  if (!technologies) {
    return <NoDataMessage />;
  }

  return (
    <div className="space-y-6">
      {technologies.tech_stack && (
        <DataSection title="Tech Stack">
          <TagList items={technologies.tech_stack} />
        </DataSection>
      )}

      {technologies.primary_languages && (
        <DataSection title="Primary Languages">
          <TagList items={technologies.primary_languages} />
        </DataSection>
      )}

      {technologies.frameworks && (
        <DataSection title="Frameworks">
          <TagList items={technologies.frameworks} />
        </DataSection>
      )}

      {technologies.cloud_providers && (
        <DataSection title="Cloud Providers">
          <TagList items={technologies.cloud_providers} />
        </DataSection>
      )}

      {technologies.tools && (
        <DataSection title="Tools">
          <TagList items={technologies.tools} />
        </DataSection>
      )}

      {technologies.engineering_practices && (
        <DataSection title="Engineering Practices">
          <TagList items={technologies.engineering_practices} />
        </DataSection>
      )}
    </div>
  );
}
