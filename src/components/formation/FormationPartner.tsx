
import { Award, Check, FileText } from "lucide-react";

const AboutCertifIAG = () => {
  return (
    <section className="pt-6 pb-0 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto shadow-w">
            <div className="flex items-center justify-center gap-4">
            <img
                src="lovable-uploads/partenaire/certifopac.png"
                alt="CertifOpac Logo"
                className="h-20 object-contain"
            />
            <span className="text-gray-600 text-[1.1rem] italic">
                <strong>Formation CertifOpac en collaboration avec Just IA</strong>
            </span>
            <img
                src="lovable-uploads/partenaire/justAi.png"
                alt="Just IA Logo"
                className="h-20 object-contain"
            />
            </div>
        </div>
    </section>




  );
};

export default AboutCertifIAG;
