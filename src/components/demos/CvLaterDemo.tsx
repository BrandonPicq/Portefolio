import { useState } from "react";
import { Download, CheckCircle, Mail, Phone, Briefcase, GraduationCap } from "lucide-react";
import MockupFrame from "./MockupFrame";

export default function CvLaterDemo() {
  const [firstName, setFirstName] = useState("Brandon");
  const [lastName, setLastName] = useState("Picq");
  const [professionalTitle, setProfessionalTitle] = useState("Développeur Full-Stack");
  const [email, setEmail] = useState("brandon@epitech.eu");
  const [phone, setPhone] = useState("+33 6 12 34 56 78");
  const [summary, setSummary] = useState(
    "Développeur passionné par la conception d'applications web modernes et résilientes. Solide expérience en React, TypeScript, Spring Boot et Docker."
  );

  const [jobTitle, setJobTitle] = useState("Développeur Web");
  const [companyName, setCompanyName] = useState("Web@cadémie by Epitech");
  const [degree, setDegree] = useState("Développeur Intégrateur Web");
  const [school, setSchool] = useState("Epitech Paris");
  const [skills, setSkills] = useState("React 19, TypeScript, Spring Boot, MySQL, Docker, n8n");

  const [isExporting, setIsExporting] = useState(false);
  const [exported, setExported] = useState(false);

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setExported(true);
      setTimeout(() => setExported(false), 3000);
    }, 1200);
  };

  const handleReset = () => {
    setFirstName("Brandon");
    setLastName("Picq");
    setProfessionalTitle("Développeur Full-Stack");
    setEmail("brandon@epitech.eu");
    setPhone("+33 6 12 34 56 78");
    setSummary("Développeur passionné par la conception d'applications web modernes et résilientes.");
    setJobTitle("Développeur Web");
    setCompanyName("Web@cadémie by Epitech");
    setDegree("Développeur Intégrateur Web");
    setSchool("Epitech Paris");
    setSkills("React 19, TypeScript, Spring Boot, MySQL, Docker, n8n");
    setExported(false);
  };

  return (
    <MockupFrame
      title="CV-Later — Générateur de CV & Export Dompdf"
      url="https://cvlater.epitech.local/builder"
      badge="Design Authentique CV-Later (Bootstrap 5)"
      onReset={handleReset}
      themeStyle="editorial"
    >
      <div className="bg-[#f8f9fa] text-[#212529] min-h-[540px] font-sans antialiased flex flex-col justify-between">
        {/* Entête Bootstrap CV-Later */}
        <div className="bg-white border-b border-[#dee2e6] px-4 sm:px-6 py-3 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2">
            <span className="bg-[#0d6efd] text-white px-2.5 py-1 rounded font-bold text-xs">CV</span>
            <h3 className="font-bold text-sm text-[#0d6efd] leading-none">CV-Later</h3>
            <span className="text-[11px] text-[#6c757d]"> — Generate your own CV !</span>
          </div>

          <button
            onClick={handleExport}
            disabled={isExporting}
            className="px-4 py-1.5 bg-[#198754] hover:bg-[#157347] text-white rounded text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            {isExporting ? (
              "Export Dompdf en cours..."
            ) : exported ? (
              <>
                <CheckCircle size={14} /> PDF Généré !
              </>
            ) : (
              <>
                <Download size={14} /> Générer le PDF
              </>
            )}
          </button>
        </div>

        {/* Corps 2 colonnes Bootstrap (Formulaire à gauche, Preview A4 à droite) */}
        <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1">
          {/* Formulaire à gauche avec sections numérotées exactes */}
          <div className="lg:col-span-6 bg-white p-4 rounded-xl border border-[#dee2e6] shadow-sm space-y-4 max-h-[440px] overflow-y-auto">
            {/* 1. Informations personnelles */}
            <div className="space-y-2 border-b border-[#dee2e6] pb-3">
              <h4 className="text-xs font-bold text-[#0d6efd] uppercase tracking-wide">
                1. Your Personal Information
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <label className="text-[11px] text-[#6c757d] font-semibold">First Name :</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full border border-[#ced4da] rounded p-1.5 text-xs text-[#212529] focus:outline-none focus:border-[#0d6efd]"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-[#6c757d] font-semibold">Last Name :</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full border border-[#ced4da] rounded p-1.5 text-xs text-[#212529] focus:outline-none focus:border-[#0d6efd]"
                  />
                </div>
              </div>
              <div className="text-xs">
                <label className="text-[11px] text-[#6c757d] font-semibold">Professional Title :</label>
                <input
                  type="text"
                  value={professionalTitle}
                  onChange={(e) => setProfessionalTitle(e.target.value)}
                  className="w-full border border-[#ced4da] rounded p-1.5 text-xs text-[#212529] focus:outline-none focus:border-[#0d6efd]"
                />
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <label className="text-[11px] text-[#6c757d] font-semibold">Email :</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-[#ced4da] rounded p-1.5 text-xs text-[#212529] focus:outline-none focus:border-[#0d6efd]"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-[#6c757d] font-semibold">Phone :</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border border-[#ced4da] rounded p-1.5 text-xs text-[#212529] focus:outline-none focus:border-[#0d6efd]"
                  />
                </div>
              </div>
              <div className="text-xs">
                <label className="text-[11px] text-[#6c757d] font-semibold">Summary :</label>
                <textarea
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  rows={2}
                  className="w-full border border-[#ced4da] rounded p-1.5 text-xs text-[#212529] focus:outline-none focus:border-[#0d6efd]"
                />
              </div>
            </div>

            {/* 2. Expériences & Formation */}
            <div className="space-y-2 text-xs">
              <h4 className="text-xs font-bold text-[#0d6efd] uppercase tracking-wide">
                2. Work Experience & Education
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] text-[#6c757d] font-semibold">Job Title :</label>
                  <input
                    type="text"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    className="w-full border border-[#ced4da] rounded p-1.5 text-xs text-[#212529]"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-[#6c757d] font-semibold">Company Name :</label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full border border-[#ced4da] rounded p-1.5 text-xs text-[#212529]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] text-[#6c757d] font-semibold">Degree / Formation :</label>
                  <input
                    type="text"
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                    className="w-full border border-[#ced4da] rounded p-1.5 text-xs text-[#212529]"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-[#6c757d] font-semibold">School :</label>
                  <input
                    type="text"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    className="w-full border border-[#ced4da] rounded p-1.5 text-xs text-[#212529]"
                  />
                </div>
              </div>
              <div>
                <label className="text-[11px] text-[#6c757d] font-semibold">Skills (comma separated) :</label>
                <input
                  type="text"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  className="w-full border border-[#ced4da] rounded p-1.5 text-xs text-[#212529]"
                />
              </div>
            </div>
          </div>

          {/* Prévisualisation live du document CV (Feuille blanche A4) */}
          <div className="lg:col-span-6 bg-white p-6 rounded-xl border border-[#dee2e6] shadow-md flex flex-col justify-between">
            <div className="space-y-4">
              {/* Header du CV */}
              <div className="border-b-2 border-[#212529] pb-3">
                <h2 className="text-xl font-bold text-[#212529]">
                  {firstName} {lastName}
                </h2>
                <h4 className="text-sm font-semibold text-[#0d6efd]">{professionalTitle}</h4>
                <div className="flex flex-wrap gap-3 text-[11px] text-[#6c757d] mt-1 font-mono">
                  <span className="flex items-center gap-1">
                    <Mail size={11} /> {email}
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone size={11} /> {phone}
                  </span>
                </div>
              </div>

              {/* Résumé */}
              <div>
                <h5 className="text-xs font-bold uppercase text-[#212529] border-b border-[#dee2e6] pb-1 mb-1">
                  Profil
                </h5>
                <p className="text-xs text-[#495057] leading-relaxed">{summary}</p>
              </div>

              {/* Expérience */}
              <div>
                <h5 className="text-xs font-bold uppercase text-[#212529] border-b border-[#dee2e6] pb-1 mb-1 flex items-center gap-1">
                  <Briefcase size={12} className="text-[#0d6efd]" /> Expérience
                </h5>
                <div className="text-xs text-[#212529] font-semibold">{jobTitle}</div>
                <div className="text-[11px] text-[#6c757d]">{companyName}</div>
              </div>

              {/* Formation */}
              <div>
                <h5 className="text-xs font-bold uppercase text-[#212529] border-b border-[#dee2e6] pb-1 mb-1 flex items-center gap-1">
                  <GraduationCap size={12} className="text-[#0d6efd]" /> Formation
                </h5>
                <div className="text-xs text-[#212529] font-semibold">{degree}</div>
                <div className="text-[11px] text-[#6c757d]">{school}</div>
              </div>

              {/* Compétences */}
              <div>
                <h5 className="text-xs font-bold uppercase text-[#212529] border-b border-[#dee2e6] pb-1 mb-1">
                  Compétences Clés
                </h5>
                <div className="flex flex-wrap gap-1 mt-1">
                  {skills.split(",").map((s, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-[#e9ecef] border border-[#ced4da] rounded text-[10px] text-[#212529] font-mono"
                    >
                      {s.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#dee2e6] text-[10px] font-mono text-[#6c757d] text-right">
              Live Preview — Moteur PHP & Dompdf
            </div>
          </div>
        </div>

        {/* Footer CV-Later */}
        <div className="bg-[#212529] text-white px-4 sm:px-6 py-2 text-[10px] font-mono flex items-center justify-between">
          <span>CV-Later — PHP 8.0 + Dompdf Engine</span>
          <span>Bootstrap 5.3 + Live Form Validation</span>
        </div>
      </div>
    </MockupFrame>
  );
}
