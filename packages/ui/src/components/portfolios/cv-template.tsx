import type React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import type { DeveloperProfile } from "@workspace/shared/types";

const formatDate = (dateString: string) => {
  if (!dateString || dateString === "Present") return "Present";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
};

const formatDateRange = (startDate: string, endDate: string) => {
  if (!startDate && !endDate) return null;
  const start = startDate ? formatDate(startDate) : "Present";
  const end = endDate ? formatDate(endDate) : "Present";
  return `${start} - ${end}`;
};

const groupSkillsByCategory = (
  skills: { name: string; level: number; category?: string }[]
) => {
  const grouped = skills.reduce(
    (acc, skill) => {
      const category = skill.category || "Other";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(skill);
      return acc;
    },
    {} as Record<string, { name: string; level: number; category?: string }[]>
  );

  return grouped;
};

export const CVTemplate: React.FC<{
  profile: DeveloperProfile;
  style: string;
}> = ({ profile, style }) => {
  const getLayoutClass = () => {
    switch (style) {
      case "modern":
        return "grid md:grid-cols-3 gap-8";
      case "classic":
      case "ats-friendly":
        return "max-w-4xl mx-auto space-y-8";
      default:
        return "max-w-4xl mx-auto space-y-8";
    }
  };

  const getSectionClass = () => {
    switch (style) {
      case "minimal":
        return "space-y-6 border-b border-border pb-6 last:border-b-0";
      case "creative":
        return "space-y-6 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg";
      default:
        return "space-y-6";
    }
  };

  if (style === "modern") {
    return (
      <div className="bg-background text-foreground p-8">
        <div className={getLayoutClass()}>
          {/* Sidebar */}
          <div className="space-y-8">
            {/* Header without picture */}
            <div className="text-center">
              <h1 className="text-2xl font-bold text-foreground">
                {profile.personalInfo.name}
              </h1>
              <p className="text-primary font-medium">
                {profile.personalInfo.title}
              </p>
            </div>

            <div className={getSectionClass()}>
              <h2 className="text-lg font-semibold text-foreground border-b border-primary pb-2">
                Contact
              </h2>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">
                    {profile.personalInfo.email}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">
                    {profile.personalInfo.phone}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">
                    {profile.personalInfo.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Custom CV Order */}
          <div className="md:col-span-2 space-y-8">
            {/* 1. Professional Summary */}
            <div className={getSectionClass()}>
              <h2 className="text-lg font-semibold text-foreground border-b border-primary pb-2">
                Professional Summary
              </h2>
              <p className="text-muted-foreground">
                {profile.personalInfo.bio}
              </p>
            </div>

            {/* 2. Skills */}
            <div className={getSectionClass()}>
              <h2 className="text-lg font-semibold text-foreground border-b border-primary pb-2">
                Skills
              </h2>
              <div className="space-y-6">
                {Object.entries(groupSkillsByCategory(profile.skills)).map(
                  ([category, skills]) => (
                    <div key={category}>
                      <h3 className="text-sm font-medium text-foreground mb-3 capitalize">
                        {category}
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {skills.map((skill) => (
                          <div key={skill.name}>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-foreground">
                                {skill.name}
                              </span>
                              <span className="text-muted-foreground">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div
                                className="bg-primary h-2 rounded-full"
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* 3. Experience */}
            <div className={getSectionClass()}>
              <h2 className="text-lg font-semibold text-foreground border-b border-primary pb-2">
                Professional Experience
              </h2>
              <div className="space-y-6">
                {profile.experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {exp.position}
                        </h3>
                        <p className="text-primary font-medium">
                          {exp.company}
                        </p>
                        {exp.employmentType && (
                          <p className="text-xs text-muted-foreground capitalize">
                            {exp.employmentType.replace("-", " ")}
                          </p>
                        )}
                      </div>
                      {formatDateRange(exp.startDate, exp.endDate) && (
                        <p className="text-sm text-muted-foreground">
                          {formatDateRange(exp.startDate, exp.endDate)}
                        </p>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">
                      {exp.description}
                    </p>
                    {exp.keyAchievements && exp.keyAchievements.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-1">
                          Key Achievements:
                        </h4>
                        <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1">
                          {exp.keyAchievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Key Projects */}
            {profile.projects.length > 0 && (
              <div className={getSectionClass()}>
                <h2 className="text-lg font-semibold text-foreground border-b border-primary pb-2">
                  Key Projects
                </h2>
                <div className="space-y-6">
                  {profile.projects.map((project) => (
                    <div key={project.id}>
                      <h3 className="font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.keyFeatures &&
                        project.keyFeatures.length > 0 && (
                          <div className="mb-3">
                            <h4 className="text-sm font-medium text-foreground mb-1">
                              Key Features:
                            </h4>
                            <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1">
                              {project.keyFeatures.map((feature, index) => (
                                <li key={index}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      {project.keyAchievements &&
                        project.keyAchievements.length > 0 && (
                          <div>
                            <h4 className="text-sm font-medium text-foreground mb-1">
                              Key Achievements:
                            </h4>
                            <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1">
                              {project.keyAchievements.map(
                                (achievement, index) => (
                                  <li key={index}>{achievement}</li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. Education */}
            <div className={getSectionClass()}>
              <h2 className="text-lg font-semibold text-foreground border-b border-primary pb-2">
                Education
              </h2>
              <div className="space-y-4">
                {profile.education.map((edu) => (
                  <div key={edu.id}>
                    <h3 className="font-semibold text-foreground">
                      {edu.degree} in {edu.field}
                    </h3>
                    <p className="text-primary font-medium">
                      {edu.institution}
                    </p>
                    {formatDateRange(edu.startDate, edu.endDate) && (
                      <p className="text-sm text-muted-foreground">
                        {formatDateRange(edu.startDate, edu.endDate)}
                        {edu.gpa && ` • GPA: ${edu.gpa}`}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Certifications & Awards */}
            {profile.certifications.length > 0 && (
              <div className={getSectionClass()}>
                <h2 className="text-lg font-semibold text-foreground border-b border-primary pb-2">
                  Certifications & Awards
                </h2>
                <div className="space-y-4">
                  {profile.certifications.map((certification) => (
                    <div key={certification.id}>
                      <h3 className="font-semibold text-foreground">
                        {certification.title}
                      </h3>
                      <p className="text-primary font-medium">
                        {certification.issuer}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {formatDate(certification.date)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Single column layout for other styles - Standard CV Order
  return (
    <div className="bg-background text-foreground p-8">
      <div className={getLayoutClass()}>
        {/* Header - No Picture */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {profile.personalInfo.name}
          </h1>
          <p className="text-xl text-primary mb-4">
            {profile.personalInfo.title}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span>{profile.personalInfo.email}</span>
            <span>{profile.personalInfo.phone}</span>
            <span>{profile.personalInfo.location}</span>
          </div>
        </div>

        {/* 1. Professional Summary */}
        <div className={getSectionClass()}>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            Professional Summary
          </h2>
          <p className="text-muted-foreground">{profile.personalInfo.bio}</p>
        </div>

        {/* 2. Skills */}
        <div className={getSectionClass()}>
          <h2 className="text-xl font-semibold text-foreground mb-3">Skills</h2>
          {style === "ats-friendly" ? (
            <div className="space-y-4">
              {Object.entries(groupSkillsByCategory(profile.skills)).map(
                ([category, skills]) => (
                  <div key={category}>
                    <h3 className="text-sm font-medium text-foreground mb-2 capitalize">
                      {category}
                    </h3>
                    <div className="text-muted-foreground">
                      {skills.map((skill) => skill.name).join(", ")}
                    </div>
                  </div>
                )
              )}
            </div>
          ) : (
            <div className="space-y-6">
              {Object.entries(groupSkillsByCategory(profile.skills)).map(
                ([category, skills]) => (
                  <div key={category}>
                    <h3 className="text-sm font-medium text-foreground mb-3 capitalize">
                      {category}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {skills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-foreground">
                              {skill.name}
                            </span>
                            <span className="text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>

        {/* 3. Professional Experience */}
        <div className={getSectionClass()}>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            Professional Experience
          </h2>
          <div className="space-y-6">
            {profile.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {exp.position}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    {exp.employmentType && (
                      <p className="text-xs text-muted-foreground capitalize">
                        {exp.employmentType.replace("-", " ")}
                      </p>
                    )}
                  </div>
                  {formatDateRange(exp.startDate, exp.endDate) && (
                    <p className="text-sm text-muted-foreground">
                      {formatDateRange(exp.startDate, exp.endDate)}
                    </p>
                  )}
                </div>
                <p className="text-muted-foreground text-sm mb-3">
                  {exp.description}
                </p>
                {exp.keyAchievements && exp.keyAchievements.length > 0 && (
                  <div className="mb-3">
                    <h4 className="text-sm font-medium text-foreground mb-1">
                      Key Achievements:
                    </h4>
                    <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1">
                      {exp.keyAchievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {style !== "ats-friendly" && (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 4. Key Projects */}
        {profile.projects.length > 0 && (
          <div className={getSectionClass()}>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Key Projects
            </h2>
            <div className="space-y-6">
              {profile.projects.map((project) => (
                <div key={project.id}>
                  <h3 className="font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    {project.description}
                  </p>
                  {style !== "ats-friendly" && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  {project.keyFeatures && project.keyFeatures.length > 0 && (
                    <div className="mb-3">
                      <h4 className="text-sm font-medium text-foreground mb-1">
                        Key Features:
                      </h4>
                      <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1">
                        {project.keyFeatures.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {project.keyAchievements &&
                    project.keyAchievements.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-1">
                          Key Achievements:
                        </h4>
                        <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1">
                          {project.keyAchievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. Education */}
        <div className={getSectionClass()}>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            Education
          </h2>
          <div className="space-y-4">
            {profile.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {edu.degree} in {edu.field}
                    </h3>
                    <p className="text-primary font-medium">
                      {edu.institution}
                    </p>
                  </div>
                  {formatDateRange(edu.startDate, edu.endDate) && (
                    <p className="text-sm text-muted-foreground">
                      {formatDateRange(edu.startDate, edu.endDate)}
                    </p>
                  )}
                </div>
                {edu.gpa && (
                  <p className="text-sm text-muted-foreground">
                    GPA: {edu.gpa}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 6. Certifications & Awards */}
        {profile.certifications.length > 0 && (
          <div className={getSectionClass()}>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Certifications & Awards
            </h2>
            <div className="space-y-4">
              {profile.certifications.map((certification) => (
                <div key={certification.id}>
                  <h3 className="font-semibold text-foreground">
                    {certification.title}
                  </h3>
                  <p className="text-primary font-medium">
                    {certification.issuer}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {formatDate(certification.date)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {certification.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
