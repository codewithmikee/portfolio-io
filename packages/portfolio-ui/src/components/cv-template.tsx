import type React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import type { DeveloperProfile } from "@workspace/shared/types";

const formatDate = (dateString: string) => {
  if (dateString === "Present") return "Present";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
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
            <div className="text-center">
              <img
                src={profile.personalInfo.avatar || "/placeholder.svg"}
                alt={profile.personalInfo.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
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

            <div className={getSectionClass()}>
              <h2 className="text-lg font-semibold text-foreground border-b border-primary pb-2">
                Skills
              </h2>
              <div className="space-y-3">
                {profile.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5">
                      <div
                        className="bg-primary h-1.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <div className={getSectionClass()}>
              <h2 className="text-lg font-semibold text-foreground border-b border-primary pb-2">
                About
              </h2>
              <p className="text-muted-foreground">
                {profile.personalInfo.bio}
              </p>
            </div>

            <div className={getSectionClass()}>
              <h2 className="text-lg font-semibold text-foreground border-b border-primary pb-2">
                Experience
              </h2>
              <div className="space-y-6">
                {profile.experience.map((exp) => (
                  <div key={exp.id}>
                    <h3 className="font-semibold text-foreground">
                      {exp.position}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

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
                    <p className="text-sm text-muted-foreground">
                      {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                      {edu.gpa && ` • GPA: ${edu.gpa}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>

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

  // Single column layout for other styles
  return (
    <div className="bg-background text-foreground p-8">
      <div className={getLayoutClass()}>
        {/* Header */}
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

        {/* About */}
        <div className={getSectionClass()}>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            Professional Summary
          </h2>
          <p className="text-muted-foreground">{profile.personalInfo.bio}</p>
        </div>

        {/* Experience */}
        <div className={getSectionClass()}>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            Experience
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
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                  </p>
                </div>
                <p className="text-muted-foreground text-sm">
                  {exp.description}
                </p>
                {style !== "ats-friendly" && (
                  <div className="flex flex-wrap gap-2 mt-2">
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

        {/* Education */}
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
                  <p className="text-sm text-muted-foreground">
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  </p>
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

        {/* Skills */}
        <div className={getSectionClass()}>
          <h2 className="text-xl font-semibold text-foreground mb-3">Skills</h2>
          {style === "ats-friendly" ? (
            <div className="text-muted-foreground">
              {profile.skills.map((skill) => skill.name).join(", ")}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {profile.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground">{skill.name}</span>
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
          )}
        </div>

        {/* Certifications & Awards */}
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
