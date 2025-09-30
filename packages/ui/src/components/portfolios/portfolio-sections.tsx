import type React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Eye,
  Github,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";
import type { DeveloperProfile } from "@workspace/shared/types";

const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(" ");
};

const formatDate = (dateString: string) => {
  if (dateString === "Present") return "Present";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
};

export const HeroSection: React.FC<{
  profile: DeveloperProfile;
  style: string;
}> = ({ profile, style }) => {
  const getHeroStyles = () => {
    switch (style) {
      case "minimal":
        return "bg-background text-foreground";
      case "creative":
        return "bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white";
      case "professional":
        return "bg-slate-900 text-white";
      case "technical":
        return "bg-gray-900 text-green-400 font-mono";
      case "colorful":
        return "bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white";
      default:
        return "bg-background text-foreground";
    }
  };

  return (
    <section className={cn("py-20 px-6", getHeroStyles())}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src={profile.personalInfo.avatar || "/placeholder.svg"}
            alt={profile.personalInfo.name}
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white/20"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {profile.personalInfo.name}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-6">
            {profile.personalInfo.title}
          </p>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            {profile.personalInfo.bio}
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          {profile.socialLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.platform}
                href={link.url}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconComponent className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${profile.personalInfo.email}`}
            className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export const AboutSection: React.FC<{ profile: DeveloperProfile }> = ({
  profile,
}) => {
  return (
    <section className="py-16 px-6 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {profile.personalInfo.bio}
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-foreground">
                  {profile.personalInfo.email}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-foreground">
                  {profile.personalInfo.phone}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-foreground">
                  {profile.personalInfo.location}
                </span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={profile.personalInfo.avatar || "/placeholder.svg"}
              alt={profile.personalInfo.name}
              className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const SkillsSection: React.FC<{ profile: DeveloperProfile }> = ({
  profile,
}) => {
  const skillCategories = [
    ...new Set(profile.skills.map((skill) => skill.category)),
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category} className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                {category}
              </h3>
              <div className="space-y-3">
                {profile.skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ProjectsSection: React.FC<{ profile: DeveloperProfile }> = ({
  profile,
}) => {
  return (
    <section className="py-16 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profile.projects.map((project) => (
            <div
              key={project.id}
              className="group bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                {project.keyFeatures && project.keyFeatures.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      Key Features:
                    </h4>
                    <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1">
                      {project.keyFeatures.slice(0, 3).map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                      {project.keyFeatures.length > 3 && (
                        <li className="text-primary">
                          +{project.keyFeatures.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Eye className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ExperienceSection: React.FC<{ profile: DeveloperProfile }> = ({
  profile,
}) => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Experience
        </h2>
        <div className="space-y-8">
          {profile.experience.map((exp, index) => (
            <div key={exp.id} className="relative">
              {index !== profile.experience.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-full bg-border" />
              )}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.position}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <div className="flex items-center gap-4 mb-4">
                      <p className="text-sm text-muted-foreground">
                        {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                      </p>
                      {exp.employmentType && (
                        <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded capitalize">
                          {exp.employmentType.replace("-", " ")}
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>
                    {exp.keyAchievements && exp.keyAchievements.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-foreground mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                          {exp.keyAchievements
                            .slice(0, 3)
                            .map((achievement, index) => (
                              <li key={index}>{achievement}</li>
                            ))}
                          {exp.keyAchievements.length > 3 && (
                            <li className="text-primary">
                              +{exp.keyAchievements.length - 3} more
                              achievements
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
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
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const EducationSection: React.FC<{ profile: DeveloperProfile }> = ({
  profile,
}) => {
  return (
    <section className="py-16 px-6 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Education
        </h2>
        <div className="space-y-6">
          {profile.education.map((edu) => (
            <div
              key={edu.id}
              className="bg-card p-6 rounded-lg shadow-sm border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-medium">{edu.field}</p>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                    {edu.gpa && ` • GPA: ${edu.gpa}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CertificationsSection: React.FC<{ profile: DeveloperProfile }> = ({
  profile,
}) => {
  if (profile.certifications.length === 0) return null;

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Certifications & Awards
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {profile.certifications.map((certification) => (
            <div
              key={certification.id}
              className="bg-card p-6 rounded-lg shadow-sm border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {certification.title}
                  </h3>
                  <p className="text-primary font-medium">
                    {certification.issuer}
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {formatDate(certification.date)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {certification.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
